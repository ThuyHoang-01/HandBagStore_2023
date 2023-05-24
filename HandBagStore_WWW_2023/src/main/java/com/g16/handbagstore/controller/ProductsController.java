package com.g16.handbagstore.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.g16.handbagstore.entity.Bag;
import com.g16.handbagstore.entity.BagCategory;
import com.g16.handbagstore.entity.CartDetail;
import com.g16.handbagstore.entity.CartHeader;
import com.g16.handbagstore.service.BagCategoryService;
import com.g16.handbagstore.service.UserService;
import com.g16.handbagstore.service.impl.BagServiceImpl;
import com.g16.handbagstore.service.impl.CartDetailServiceImpl;
import com.g16.handbagstore.service.impl.CartHeaderServiceImpl;
import com.g16.handbagstore.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/products")
public class ProductsController {
	
    @Autowired
    private UserService userService;

    @Autowired
    private BagServiceImpl bagServiceImpl;
    
    @Autowired
    private BagCategoryService bagCategoryService;
    
    @Autowired
	private CartHeaderServiceImpl cartHeaderServiceImpl;

	@Autowired
	private CartDetailServiceImpl cartDetailServiceImpl;
	
	@Autowired
	private UserServiceImpl userServiceImpl;

    @GetMapping("/all")
    public String showAllProducts(Model model){
        UserSession.getLoggedUserInfo(userService, model);

        List<BagCategory> listBagCategory = bagCategoryService.getAllBagCategories();

        List<String> bagCatePriceList = bagServiceImpl.listPrice(listBagCategory);
        
        model.addAttribute("resultSize", listBagCategory.size());
        model.addAttribute("pageTitle", "Tất cả sản phẩm");
        model.addAttribute("listProducts", listBagCategory);
        model.addAttribute("listProductsPrice", bagCatePriceList); 
        
        return "/view_customer/all_products";
    }
    
    @GetMapping("/all/filter")
    public String showAllProducts(Model model, @RequestParam String sort){
        UserSession.getLoggedUserInfo(userService, model);

        List<BagCategory> listBagCategory = new ArrayList<>();
        
        if(sort.equals("1"))
        	listBagCategory = bagCategoryService.getBagCategoriesOrderByNameFromA2Z();
        else if(sort.equals("2"))
        	listBagCategory = bagCategoryService.getBagCategoriesOrderByNameFromZ2A();
        else if(sort.equals("3"))
        	listBagCategory = bagCategoryService.getBagCategoriesOrderByPriceAsc();
        else if(sort.equals("4"))
        	listBagCategory = bagCategoryService.getBagCategoriesOrderByPriceDesc();

        List<String> bagCatePriceList = bagServiceImpl.listPrice(listBagCategory);
        
        model.addAttribute("resultSize", listBagCategory.size());
        model.addAttribute("pageTitle", "Tất cả sản phẩm");
        model.addAttribute("listProducts", listBagCategory);
        model.addAttribute("listProductsPrice", bagCatePriceList); 
        
        return "/view_customer/all_products";
    }

    @GetMapping("/newest")
    public String showNewestProducts(Model model){
    	UserSession.getLoggedUserInfo(userService, model);

        List<BagCategory> listBagCategory = bagCategoryService.getBagCategoriesByNewestDate();

        List<String> bagCatePriceList = bagServiceImpl.listPrice(listBagCategory);
        
        model.addAttribute("resultSize", listBagCategory.size());
        model.addAttribute("pageTitle", "Tất cả sản phẩm");
        model.addAttribute("listProducts", listBagCategory);
        model.addAttribute("listProductsPrice", bagCatePriceList); 
        return "view_customer/all_products";
    }


    @GetMapping("/product/{categoryId}")
    public String showProductDetail(@PathVariable("categoryId") int categoryId, Model model){
        UserSession.getLoggedUserInfo(userService, model);

        BagCategory bagCategory = bagCategoryService.getBagCategoryByID(categoryId);

        model.addAttribute("bagCategory", bagCategory);
        model.addAttribute("pageTitle", bagCategory.getName());

        return "/view_customer/product_detail";
    }


    @PostMapping("/product/add_to_cart")
	public String addToCart(
			@RequestParam int cusID, @RequestParam int orderQuantity,
			@RequestParam int bagID, @RequestParam int bagCateID
	) {

		CartHeader cartHeader = cartHeaderServiceImpl.getCartHeaderByID(cusID);
		Bag bag = bagServiceImpl.getBagByID(bagID);
		
		if(cartHeader != null) {
			CartDetail cartDetail = cartDetailServiceImpl.getCartDetailByCartHeaderIdAndBagId(cusID, bagID);
			
			if(cartDetail != null)
				cartDetail.setBagQty(cartDetail.getBagQty() + orderQuantity);
			else
				cartDetail = new CartDetail(cartHeader, bag, orderQuantity);
				
			cartDetailServiceImpl.addOrUpdateCartDetail(cartDetail);

			cartHeader
					.setTotalPrice(cartHeader.getTotalPrice()
							.add(bag.getPrice().multiply(new BigDecimal(orderQuantity))));

			cartHeader.setTotalQuantity(cartHeader.getTotalQuantity() + orderQuantity);

			cartHeaderServiceImpl.addOrUpdateCartHeader(cartHeader);
		}
		else {
			cartHeader = new CartHeader(new BigDecimal(0), 0, userServiceImpl.getUserByUserID(cusID));
			CartDetail cartDetail = new CartDetail(cartHeader, bag, orderQuantity);
			
			cartDetailServiceImpl.addOrUpdateCartDetail(cartDetail);

			cartHeader
					.setTotalPrice(cartHeader.getTotalPrice()
							.add(bag.getPrice().multiply(new BigDecimal(orderQuantity))));

			cartHeader.setTotalQuantity(cartHeader.getTotalQuantity() + orderQuantity);

			cartHeaderServiceImpl.addOrUpdateCartHeader(cartHeader);
		}
		
		return "redirect:/products/product/" + bagCateID + "?added";
	}
}
