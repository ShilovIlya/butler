package org.butler.dao;

import org.butler.model.Hero;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.toMap;
import static org.butler.common.MockHeroes.getHeroesList;

@Component
public class SimpleHeroStorage implements HeroStorage {
    private Map<Integer, Hero> heroes;

    public SimpleHeroStorage() {
        this.heroes = getHeroesList().stream().collect(toMap(Hero::getId, hero -> hero));
    }

    @Override
    public List<Hero> getAllHeroes() {
        return new ArrayList<>(heroes.values());
    }

    @Override
    public Hero getHero(int id) {
        return heroes.get(id);
    }

    @Override
    public void createHero(Hero hero) {
        heroes.put(hero.getId(), hero);
    }

    @Override
    public void deleteHero(int id) {
        heroes.remove(id);
    }

    @Override
    public void updateHero(int id, Hero hero) {
        heroes.put(id, hero);
    }
}
