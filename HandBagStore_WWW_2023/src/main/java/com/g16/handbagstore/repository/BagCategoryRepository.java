package com.g16.handbagstore.repository;

import java.time.LocalDate;
import java.util.List;

import com.g16.handbagstore.entity.BagCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BagCategoryRepository extends JpaRepository<BagCategory, Integer>{
	@Query("from BagCategory where name = :name")
	List<BagCategory> getBagCategoriesByName(@Param("name") String name);
	
	@Query("from BagCategory where name like :name")
	List<BagCategory> getBagCategoriesLikeName(@Param("name") String name);
	
	@Query("from BagCategory where import_date = :importDate")
	List<BagCategory> getBagCategoriesByImportDate(@Param("importDate") LocalDate importDate);
	
	@Query(value = "from BagCategory order by name asc")
	List<BagCategory> getBagCategoriesOrderByNameFromA2Z();
	
	@Query(value = "from BagCategory order by name desc")
	List<BagCategory> getBagCategoriesOrderByNameFromZ2A();
	
	@Query(value = "from BagCategory order by import_date desc")
	List<BagCategory> getBagCategoriesByNewestDate();

	@Query(value = "select top 5 * from bag_categories where "
			+ "name like :keyword or bag_category_id like :keyword", nativeQuery = true)
	List<BagCategory> searchBagCaterogyALikeByKeyword(@Param("keyword") String keyword);
 
//	@Query("select min(Bag.price) from BagCategory join Bag on BagCategory.bagCategoryId = Bag.bagCategory.bagCategoryId")
//	double getMinPriceOfBagCategory(@Param("bagCategoryId") int bagCategoryId);
}