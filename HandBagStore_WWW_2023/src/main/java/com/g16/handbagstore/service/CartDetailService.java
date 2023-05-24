package com.g16.handbagstore.service;

import java.util.List;

import com.g16.handbagstore.entity.CartDetail;

public interface CartDetailService {
	List<CartDetail> getAllCartDetail();
	List<CartDetail> getCartDetailsByCartHeaderID(int cartID);
	List<CartDetail> getCartDetailsByBagID(int bagID);
	CartDetail getCartDetailByCartHeaderIdAndBagId(int cartID, int bagID);
	void addOrUpdateCartDetail(CartDetail cartDetail);
	void deleteCartDetailByCartHeaderId(int cartID);
	void deleteCartDetailByCartHeaderIdAndBagId(int cartID, int bagID);
}