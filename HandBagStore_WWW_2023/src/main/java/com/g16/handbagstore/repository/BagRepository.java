package com.g16.handbagstore.repository;

import java.math.BigDecimal;
import java.util.LinkedHashSet;
import java.util.List;

import com.g16.handbagstore.entity.Bag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BagRepository extends JpaRepository<Bag, Integer>{
    @Query("from Bag where bagCategory.bagCategoryId = :bagCategoryId")
    List<Bag> findBagsListByBagCategoryId(@Param("bagCategoryId") int bagCategoryId);
  
	@Query(value = "select top 1 price from bags where bag_category_id = :cateID "
			+ "order by price desc", nativeQuery = true)
	BigDecimal getBagPriceByCateID(@Param("cateID") int cateID);
	
	@Query(value = "select bag_category_id from bags order by price asc", nativeQuery = true)
	LinkedHashSet<Integer> getBagCategoryIdOrderByPriceAsc();
	
	@Query(value = "select bag_category_id from bags order by price desc", nativeQuery = true)
	LinkedHashSet<Integer> getBagCategoryIdOrderByPriceDesc();
	
	@Query(value = "Select count(*) from bags where quantity > 0", nativeQuery = true)
	int countBag();
	
	@Query(value = "Select count(*) from bags where quantity < 1", nativeQuery = true)
	int countBagNotInStock();
	
	@Query(value = "select sum(quantity) from bags", nativeQuery = true)
	int sumQuantity();
}