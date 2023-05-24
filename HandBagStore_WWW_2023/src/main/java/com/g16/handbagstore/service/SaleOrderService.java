package com.g16.handbagstore.service;

import java.util.List;

import com.g16.handbagstore.entity.SaleOrder;

public interface SaleOrderService {
	List<SaleOrder> getAllSaleOrder();
	List<SaleOrder> getSaleOrdersByCustomerID(int customerID);
	SaleOrder getSaleOrderBySaleOrderID(int saleOrderID);
	void addOrUpdateSaleOrder(SaleOrder saleOrder);
	List<SaleOrder> getSaleOrderToday(int day, int month, int year);
	List<SaleOrder> getSaleOrderThisMonth(int month, int year);
	List<SaleOrder> getSaleOrderThisWeek(String startOfWeek, String EndOfWeek);
	List<SaleOrder> getSaleOrderByStatus(short status);
	List<SaleOrder> getSaleOrderALikeByKeyWord(String keyword);
}