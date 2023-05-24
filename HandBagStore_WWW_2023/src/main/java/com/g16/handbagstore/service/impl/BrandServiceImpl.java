package com.g16.handbagstore.service.impl;

import java.util.List;
import java.util.Optional;

import com.g16.handbagstore.entity.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g16.handbagstore.repository.BrandRepository;
import com.g16.handbagstore.service.BrandService;

@Service
public class BrandServiceImpl implements BrandService {
	
	@Autowired
	private BrandRepository brandRepo;
	
	@Override
	public List<Brand> getAllBrand() {
		return brandRepo.findAll();
	}

	@Override
	public Brand getBrandByBrandID(int brandID) {
		Optional<Brand> result = brandRepo.findById(brandID);
		Brand brand = null;
		if(result.isPresent()) {
			brand = result.get();
		} else {
			throw new RuntimeException("Did not find brand id - " + brandID);
		}
		return brand;
	}

	@Override
	public void addOrUpdateBrand(Brand brand) {
		brandRepo.save(brand);
	}

}
