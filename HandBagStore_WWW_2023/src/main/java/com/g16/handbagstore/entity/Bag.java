package com.g16.handbagstore.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "bags")
public class Bag implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bag_id")
	private int bagId;
	@ManyToOne
	@JoinColumn(name = "bag_category_id", nullable = false)
	private BagCategory bagCategory;
	@Column(name = "color", columnDefinition = "nvarchar(80)", nullable = false)
	private String color;
	@Column(name = "price", columnDefinition = "money", nullable = false)
	private BigDecimal price;
	@Column(name = "quantity", columnDefinition = "int", nullable = false)
	private int quantity;

	@OneToMany(mappedBy = "bag")
	private List<SaleOrderDetail> listSaleOrderDetails;

	@OneToMany(mappedBy = "bag")
	private List<BagImage> listBagImages;

	@OneToMany(mappedBy = "bag")
	private List<BagReview> listBagReviews;

	public Bag(int bagId, BagCategory bagCategory, String color, BigDecimal price, int quantity) {
		super();
		this.bagId = bagId;
		this.bagCategory = bagCategory;
		this.color = color;
		this.price = price;
		this.quantity = quantity;
	}

	public Bag(BagCategory bagCategory, String color, BigDecimal price, int quantity) {
		super();
		this.bagCategory = bagCategory;
		this.color = color;
		this.price = price;
		this.quantity = quantity;
	}

	public Bag() {
		super();
	}

	public int getBagId() {
		return bagId;
	}

	public void setBagId(int bagId) {
		this.bagId = bagId;
	}

	public BagCategory getBagCategory() {
		return bagCategory;
	}

	public void setBagCategory(BagCategory bagCategory) {
		this.bagCategory = bagCategory;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Bag [bagId=" + bagId + ", bagCategory=" + bagCategory + ", color=" + color + ", price=" + price
				+ ", quantity=" + quantity + "]";
	}
}
