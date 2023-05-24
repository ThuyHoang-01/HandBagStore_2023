package com.g16.handbagstore.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.g16.handbagstore.entity.Bag;
import com.g16.handbagstore.entity.CartDetail;
import com.g16.handbagstore.service.impl.BagServiceImpl;
import com.g16.handbagstore.service.impl.CartDetailServiceImpl;
import com.g16.handbagstore.service.impl.CartHeaderServiceImpl;

@RestController
@RequestMapping("/api_cart")
public class CartRestController {

	@Autowired
	private CartDetailServiceImpl cartDetailServiceImpl;

	@Autowired
	private CartHeaderServiceImpl cartHeaderServiceImpl;

	@Autowired
	private BagServiceImpl bagServiceImpl;

	@PutMapping("/update")
	public String changeCartOrderQuantity(
			@RequestParam int bagID, @RequestParam int userID, @RequestParam int quantity
	) {

		Bag bag = bagServiceImpl.getBagByID(bagID);
		int quantityInStock = bag.getQuantity() - quantity;
//		Order quantity cant greater than quantity in stock
		if (quantityInStock < 0) return "failed";

		CartDetail cartDetail = cartDetailServiceImpl.getCartDetailByCartHeaderIdAndBagId(userID, bagID);
		cartDetail.setBagQty(quantity);

		cartDetailServiceImpl.addOrUpdateCartDetail(cartDetail);

		cartHeaderServiceImpl.updateCartTotalPriceAndQuantity(userID,
				cartDetailServiceImpl.getCartDetailsByCartHeaderID(userID));

		return "success";
	}

	@DeleteMapping("/delete")
	public String deleteCartOrderItem(@RequestParam int bagID, @RequestParam int userID) {
		
		cartDetailServiceImpl.deleteCartDetailByCartHeaderIdAndBagId(userID, bagID);
		
		cartHeaderServiceImpl.updateCartTotalPriceAndQuantity(userID,
				cartDetailServiceImpl.getCartDetailsByCartHeaderID(userID));
		
		return "success";
	}
}