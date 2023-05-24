package com.g16.handbagstore.service;

import java.util.List;

import com.g16.handbagstore.entity.BagReview;

public interface BagReviewService {
	List<BagReview> getAllBagReview();
	List<BagReview> getBagReviewsByBagID(int bagID);
	BagReview getBagReviewByID(int bagReviewID);
	void addOrUpdateBagReview(BagReview bagReview);
}
