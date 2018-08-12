package org.butler.common;

import org.butler.model.Hero;

import java.util.Arrays;
import java.util.List;

public class MockHeroes {
    public static List<Hero> getHeroesList() {
        return Arrays.asList(
                new Hero(21, "Mr. Nice", "Really Smart", ""),
                new Hero(22, "Narco", "Weather Changer", ""),
                new Hero(23, "Bombasto", "Super Hot", ""),
                new Hero(24, "Celeritas", "Weather Changer", ""),
                new Hero(25, "Magneta", "Really Smart", ""),
                new Hero(26, "RubberMan", "Super Flexible", ""),
                new Hero(27, "Dynama", "Super Flexible", ""),
                new Hero(28, "Dr IQ", "Really Smart", "Chuck Overstreet"),
                new Hero(29, "Magma", "Super Hot", ""),
                new Hero(30, "Tornado", "Weather Changer", "")
        );
    }

    public static List<String> getHeroPowers() {
        return Arrays.asList("Really Smart", "Super Flexible", "Super Hot", "Weather Changer");
    }
}
