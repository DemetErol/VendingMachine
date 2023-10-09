package com.project.ws;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.project.ws.product.Product;
import com.project.ws.product.ProductRepository;

@SpringBootApplication
public class WsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WsApplication.class, args);
	}

	@Bean

	CommandLineRunner productCreator(ProductRepository productRepository) {
		return new CommandLineRunner() {

			@Override
			public void run(String... args) throws Exception {
				Product product1 = new Product();
				Product product2 = new Product();
				Product product3 = new Product();

				product1.setName("Water");
				product2.setName("Coke");
				product3.setName("Soda");
				product1.setImage_url("https://w7.pngwing.com/pngs/208/213/png-transparent-water-bottles-plastic-glass-beer-bottle-sticker-thumbnail.png");
				product2.setImage_url("https://w7.pngwing.com/pngs/913/642/png-transparent-world-of-coca-cola-fizzy-drinks-the-coca-cola-company-coca-cola-cola-cola-wars-drink.png");
				product3.setImage_url("https://static.vecteezy.com/system/resources/previews/009/380/496/original/soda-can-clipart-design-illustration-free-png.png");
				product1.setStock(50.0);
				product1.setPrice(25.0);
				product2.setStock(40.0);
				product2.setPrice(35.0);
				product3.setStock(30.0);
				product3.setPrice(45.0);
				productRepository.save(product1);
				productRepository.save(product2);
				productRepository.save(product3);

			}

		};

	}
}
