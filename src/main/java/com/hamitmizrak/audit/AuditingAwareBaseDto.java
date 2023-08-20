package com.hamitmizrak.audit;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

// LOMBOK
@Getter @Setter

// BaseDto
abstract public class AuditingAwareBaseDto implements Serializable {

    // serileştirme
    public static final Long serialVersionUID = 1L;

    // ID
    private Long id;

    // DATE Builder => default olarak ayarlıyor
    @Builder.Default
    private Date systemDate = new Date(System.currentTimeMillis());
}
