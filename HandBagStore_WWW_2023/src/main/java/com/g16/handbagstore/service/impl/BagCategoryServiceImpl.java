package com.g16.handbagstore.service.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;

import com.g16.handbagstore.entity.BagCategory;
import com.g16.handbagstore.service.BagCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g16.handbagstore.repository.BagCategoryRepository;

@Service
public class BagCategoryServiceImpl implements BagCategoryService {

	@Autowired
	private BagServiceImpl bagServiceImpl;
	
	@Autowired
	private BagCategoryRepository bagCategoryRepo;

	@Override
	public List<BagCategory> getAllBagCategories() {
		return bagCategoryRepo.findAll();
	}

	@Override
	public BagCategory getBagCategoryByID(int bagCategoryID) {
		return bagCategoryRepo.findById(bagCategoryID).get();
	}

	@Override
	public List<BagCategory> getBagCategoriesByName(String name) {
		return bagCategoryRepo.getBagCategoriesByName(name);
	}

	@Override
	public List<BagCategory> getBagCategoriesByImportDate(LocalDate importDate) {
		return bagCategoryRepo.getBagCategoriesByImportDate(importDate);
	}

//	@Override
//	public double getMinPriceOfBagCategory(int bagCategoryId) {
//		return bagCategoryRepo.getMinPriceOfBagCategory(bagCategoryId);
//	}

	@Override
	public List<BagCategory> getBagCategoriesLikeName(String name) {
		return bagCategoryRepo.getBagCategoriesLikeName("%" + name + "%");
	}

	@Override
	public List<BagCategory> getBagCategoriesOrderByNameFromA2Z() {
		return bagCategoryRepo.getBagCategoriesOrderByNameFromA2Z();
	}

	@Override
	public List<BagCategory> getBagCategoriesOrderByNameFromZ2A() {
		return bagCategoryRepo.getBagCategoriesOrderByNameFromZ2A();
	}

	@Override
	public List<BagCategory> getBagCategoriesOrderByPriceAsc() {
		List<BagCategory> bagCategories = new ArrayList<>();
		
		LinkedHashSet<Integer> cateIdList = bagServiceImpl.getBagCategoryIdOrderByPriceAsc();
		
		cateIdList.forEach(cateId -> {
			bagCategories.add(getBagCategoryByID(cateId));
		});
		
		return bagCategories;
	}

	@Override
	public List<BagCategory> getBagCategoriesOrderByPriceDesc() {
		List<BagCategory> bagCategories = new ArrayList<>();
		
		LinkedHashSet <Integer> cateIdList = bagServiceImpl.getBagCategoryIdOrderByPriceDesc();
		
		cateIdList.forEach(cateId -> {
			bagCategories.add(getBagCategoryByID(cateId));
		});
		
		return bagCategories;
	}

	@Override
	public List<BagCategory> getBagCategoriesByNewestDate() {
		return bagCategoryRepo.getBagCategoriesByNewestDate();
	}

	@Override
	public void addOrUpdateBagCategory(BagCategory bagCategory) {
		bagCategoryRepo.save(bagCategory);
  }
    
  @Override
	public List<BagCategory> searchBagCaterogyALikeByKeyword(String keyword) {
		return bagCategoryRepo.searchBagCaterogyALikeByKeyword("%" + keyword + "%");
	}
}