package com.hamitmizrak.business.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import java.io.Serializable;
import java.util.Date;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Log4j2
@Builder
// Validation
public class BlogDto implements Serializable {

    // serileştirme
    public static final Long serialVersionUID=1L;

    // HEADER
    @NotEmpty(message = "Başlık alanı boş geçemezsiniz")
    @Size(min=10,message = "Başlık en az 10 karakterden küçük olamaz.")
    private String header;

    // CONTENT
    @NotEmpty(message = "İçerik boş geçilemez")
    @Size(min = 10,message = "İçerik en az 10 karakter olmalı, küçük giremezsiniz")
    private String content;

    // DATE Builder => default olarak ayarlıyor
    @Builder.Default
    private Date systemDate=new Date(System.currentTimeMillis());
} //end class
