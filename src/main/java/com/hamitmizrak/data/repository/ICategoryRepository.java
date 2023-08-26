package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.CategoryEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends CrudRepository<CategoryEntity,Long> {
}
