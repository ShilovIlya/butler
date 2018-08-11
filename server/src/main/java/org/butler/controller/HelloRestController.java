package org.butler.controller;

import org.butler.dao.HeroStorage;
import org.butler.model.Hero;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hero")
@CrossOrigin(origins = {"http://localhost:4200"})
public class HelloRestController {

    private HeroStorage heroStorage;

    public HelloRestController(HeroStorage heroStorage) {
        this.heroStorage = heroStorage;
    }

    @GetMapping("all")
    public List<Hero> getAllHeroes() {
        return heroStorage.getAllHeroes();
    }

    @GetMapping("/{id}")
    public Hero updateHero(@PathVariable("id") int id) {
        return heroStorage.getHero(id);
    }

    @PutMapping("/{id}")
    public Hero updateHero(@PathVariable("id") int id, @RequestBody Hero hero) {
        heroStorage.updateHero(id, hero);
        return hero;
    }

    @PostMapping
    public Hero createHero(@RequestBody String heroName) {
        Optional<Integer> nextId = heroStorage.getAllHeroes().stream()
                .map(Hero::getId)
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
