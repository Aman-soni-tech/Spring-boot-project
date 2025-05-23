package com.RestApi.RestApi.repository;


import com.RestApi.RestApi.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
