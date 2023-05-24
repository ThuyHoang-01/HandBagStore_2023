package com.g16.handbagstore.repository;

import java.util.List;

import com.g16.handbagstore.entity.SaleOrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SaleOrderDetailRepository extends JpaRepository<SaleOrderDetail, Integer> {
	@Query("from SaleOrderDetail where sale_order_id = :saleOrderID")
	List<SaleOrderDetail> getSaleOrderDetailsBySaleOrderID(@Param("saleOrderID") int saleOrderID);
	@Query("from SaleOrderDetail where bag_id = :bagID")
	List<SaleOrderDetail> getSaleOrderDetailsByBagID(@Param("bagID") int bagID);
	@Query("from SaleOrderDetail where sale_order_id = :saleOrderID AND bag_id = :bagID")
	SaleOrderDetail getSaleOrderDetailBySaleOrderIdAndBagId(@Param("saleOrderID") int saleOrderID, @Param("bagID") int bagID);
}
