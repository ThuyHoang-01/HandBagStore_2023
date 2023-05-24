package com.g16.handbagstore.rest;

import java.util.ArrayList;
import java.util.List;

import com.g16.handbagstore.service.BagCategoryService;
import com.g16.handbagstore.service.BagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.g16.handbagstore.entity.Bag;
import com.g16.handbagstore.entity.BagCategory;

@RestController
@RequestMapping("/api")
public class BagRestController {
	@Autowired
	private BagService bagService;

	@Autowired
	private BagCategoryService bagCategoryService;

	@GetMapping("/bags")
	public List<Bag> getBags() {
		return bagService.getAllBags();
	}

	@GetMapping("/bags/{cate_name}")
	public List<BagCategory> getBagsByCateName(@PathVariable String cate_name) {
		return bagCategoryService.getBagCategoriesByName(cate_name);
	}

	@GetMapping("/bags/search/{name}")
	public List<BagCategory> getBagsLikeCateName(@PathVariable String name) {
		return bagCategoryService.getBagCategoriesLikeName(name);
	}

	@GetMapping("/bags/bagCategory={bagCategoryId}")
	public List<Bag> findBagsListByBagCategoryId(@PathVariable int bagCategoryId) {
		return bagService.getBagListOfBagCategory(bagCategoryId);
	}

	@GetMapping("/bags/search/keyword")
	public List<String> search(@RequestParam String keyword) {
		
		List<BagCategory>  bagCategories = bagCategoryService.searchBagCaterogyALikeByKeyword(keyword);
		List<String> res  = new ArrayList<>();
	
		bagCategories.forEach(bagCate -> {
			res.add(String.format("{\"bagCateID\":%d, \"name\":\"%s\", \"brand\":\"%s\"}",
					bagCate.getBagCategoryId(), bagCate.getName(), bagCate.getBrand().getName()));
		});
	    
		return res; 
	}
}