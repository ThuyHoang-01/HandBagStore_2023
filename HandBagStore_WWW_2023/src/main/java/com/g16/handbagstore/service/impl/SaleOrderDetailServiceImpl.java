package com.g16.handbagstore.service.impl;

import java.util.List;

import com.g16.handbagstore.entity.SaleOrderDetail;
import com.g16.handbagstore.service.SaleOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g16.handbagstore.repository.SaleOrderDetailRepository;

@Service
public class SaleOrderDetailServiceImpl implements SaleOrderDetailService {
	
	@Autowired
	private SaleOrderDetailRepository saleOrderDetailRepo;

	@Override
	public List<SaleOrderDetail> getAllSaleOrderDetail() {
		return saleOrderDetailRepo.findAll();
	}

	@Override
	public List<SaleOrderDetail> getSaleOrderDetailsBySaleOrderID(int saleOrderID) {
		return saleOrderDetailRepo.getSaleOrderDetailsBySaleOrderID(saleOrderID);
	}

	@Override
	public List<SaleOrderDetail> getSaleOrderDetailsByBagID(int bagID) {
		return saleOrderDetailRepo.getSaleOrderDetailsByBagID(bagID);
	}

	@Override
	public SaleOrderDetail getSaleOrderDetailBySaleOrderIdAndBagId(int saleOrderID, int bagID) {
		return saleOrderDetailRepo.getSaleOrderDetailBySaleOrderIdAndBagId(saleOrderID, bagID);
	}

	@Override
	public void addOrUpdateSaleOrderDetail(SaleOrderDetail saleOrderDetail) {
		saleOrderDetailRepo.save(saleOrderDetail);
	}
	
}
