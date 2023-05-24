package com.g16.handbagstore.repository;

import java.util.List;

import com.g16.handbagstore.entity.BagImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BagImageRepository extends JpaRepository<BagImage, Integer> {
	@Query("from BagImage where bag_id = :bagID")
	List<BagImage> getBagImagesByBagID(@Param("bagID") int bagID);
}
