package com.hamitmizrak.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.Serializable;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Log4j2
@Builder

@Entity
@Table(name = "blog")
// Blog(N)  Category(1)
public class BlogEntity implements Serializable {

    // serileştirme
    public static final Long serialVersionUID = 1L;

    // ID
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="blog_id",unique = true,nullable = false)
    private Long blogId;

    // HEADER
    @Column(
            name = "header",
            nullable = false,
            unique = true,
            length = 500,
            insertable = true,
            updatable = true,
            columnDefinition = "varchar(255) default 'blog için başlık girilmedi'")
    private String header;

    // CONTENT
    @Column(name = "content", columnDefinition = "varchar(255) default 'blog için içerik girilmedi'")
    private String content;

   /*
   Javada olsun Database(Entity) olmasının
   @Transient
    private Object specialData;
    */

    /*
    Büyük nesneler için kullanıyoruz.
    @Lob
    private String bigData;
    */
} //end class
