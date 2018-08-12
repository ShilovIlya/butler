package org.butler.controller;

import org.butler.dao.HeroStorage;
import org.butler.model.Hero;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/hero")
@CrossOrigin(origins = {"http://localhost:4200"})
public class HelloRestController {
    private static final Logger LOGGER = LoggerFactory.getLogger(HelloRestController.class);

    private HeroStorage heroStorage;

    public HelloRestController(HeroStorage heroStorage) {
        this.heroStorage = heroStorage;
    }

    @GetMapping("all")
    public List<Hero> getAllHeroes() {
        return heroStorage.getAllHeroes();
    }

    @GetMapping("/{id}")
    public Hero getHero(@PathVariable("id") int id) {
        return heroStorage.getHero(id);
    }

    @GetMapping("/name/{name}")
    public List<Hero> getHeroesByName(@PathVariable("name") String name) {
        return heroStorage.getAllHeroes().stream()
                .filter(hero -> hero.getName().contains(name))
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public Hero updateHero(@PathVariable("id") int id, @RequestBody Hero hero) {
        heroStorage.updateHero(id, hero);
        return hero;
    }

    @PostMapping
    public Hero createHero(@RequestBody String heroName) {
        Optional<Integer> nextId = heroStorage.getAllHeroes().stream()
                .map(hero -> hero.getId() + 1)
                .max(Integer::compareTo);
        Hero hero = new Hero(nextId.orElse(1), heroName);
        heroStorage.createHero(hero);
        return hero;
    }

    @DeleteMapping("/{id}")
    public void deleteHero(@PathVariable("id") int id) {
        heroStorage.deleteHero(id);
    }
}
