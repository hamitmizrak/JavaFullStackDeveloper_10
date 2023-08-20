package com.hamitmizrak.business.dto;

import com.hamitmizrak.audit.AuditingAwareBaseDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.io.Serializable;

// CategoryDto(1) - BlogDto(N)
public class CategoryDto  extends AuditingAwareBaseDto implements Serializable {

    // serileştirme
    public static final Long serialVersionUID=1L;

    // HEADER
    @NotEmpty(message = "{blog.category.validation.constraints.NotNull.message}")
    @Size(min=10,message = "{blog.category.least.validation.constraints.NotNull.message}")
    private String categoryName;
}
