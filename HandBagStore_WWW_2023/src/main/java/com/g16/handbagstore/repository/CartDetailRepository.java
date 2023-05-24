package com.g16.handbagstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.g16.handbagstore.entity.CartDetail;

public interface CartDetailRepository extends JpaRepository<CartDetail, Integer> {
	@Query("from CartDetail where cart_header_id = :cartID")
	List<CartDetail> getCartDetailsByCartHeaderID(@Param("cartID") int cartID);
	
	@Query("from CartDetail where bag_id = :bagID")
	List<CartDetail> getCartDetailsByBagID(@Param("bagID") int bagID);
	
	@Query("from CartDetail where cart_header_id = :cartID AND bag_id = :bagID")
	CartDetail getCartDetailByCartHeaderIdAndBagId(@Param("cartID") int cartID, @Param("bagID") int bagID);

	@Modifying
	@Transactional
	@Query("delete from CartDetail where cart_header_id = :cartID")
	void deleteCartDetailByCartHeaderId(@Param("cartID") int cartID);
	
	@Modifying
	@Transactional
	@Query("delete from CartDetail where cart_header_id = :cartID AND bag_id = :bagID")
	void deleteCartDetailByCartHeaderIdAndBagId(@Param("cartID") int cartID, @Param("bagID") int bagID);
}