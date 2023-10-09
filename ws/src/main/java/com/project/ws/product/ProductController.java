package com.project.ws.product;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
 
 @Autowired
ProductRepository productRepository;    
@CrossOrigin
@PostMapping("/api/v1/products")
    void createProduct(@RequestBody Product product){

        productRepository.save(product);

    }

@GetMapping("/api/v1/products")
public List<Product> getProducts(){
    return productRepository.findAll();
}

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct) {
        return productRepository.findById(newProduct.getId())
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setStock(newProduct.getStock());
                    product.setPrice(newProduct.getPrice());
                    product.setImage_url(newProduct.getImage_url());
                    return productRepository.save(product);
                }).orElseThrow();
    }

}
