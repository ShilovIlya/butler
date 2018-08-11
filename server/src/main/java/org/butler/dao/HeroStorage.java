package org.butler.dao;

import org.butler.model.Hero;

import java.util.List;

public interface HeroStorage {
    public List<Hero> getAllHeroes();
    public Hero getHero(int id);
    public void createHero(Hero hero);
    public void deleteHero(int id);
    public void updateHero(int id, Hero hero);
}
