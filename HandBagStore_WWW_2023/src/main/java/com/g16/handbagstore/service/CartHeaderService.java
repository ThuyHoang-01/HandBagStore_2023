package com.g16.handbagstore.service;

import java.util.List;

import com.g16.handbagstore.entity.CartHeader;
import com.g16.handbagstore.entity.CartDetail;

public interface CartHeaderService {
	List<CartHeader> getAllCartHeader();
	CartHeader getCartHeaderByID(int cartHeaderID);
	void addOrUpdateCartHeader(CartHeader cartHeader);
	void updateCartTotalPriceAndQuantity(int userID, List<CartDetail> cartDetails);
}