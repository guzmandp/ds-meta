package com.guzmandp.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guzmandp.dsmeta.entities.Sale;

public interface SaleRepository  extends JpaRepository<Sale, Long>{
	
}
