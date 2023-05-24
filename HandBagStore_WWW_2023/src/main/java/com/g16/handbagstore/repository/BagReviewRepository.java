package com.g16.handbagstore.repository;

import java.util.List;

import com.g16.handbagstore.entity.BagReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BagReviewRepository extends JpaRepository<BagReview, Integer> {
	@Query("from BagReview where bag_id = :bagID")
	List<BagReview> getBagReviewsByBagID(@Param("bagID") int bagID);
}
