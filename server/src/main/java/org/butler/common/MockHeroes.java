package org.butler.common;

import org.butler.model.Hero;

import java.util.Arrays;
import java.util.List;

public class MockHeroes {
    public static List<Hero> getHeroesList() {
        return Arrays.asList(
                new Hero(21, "Mr. Nice"),
                new Hero(22, "Narco"),
                new Hero(23, "Bombasto"),
                new Hero(24, "Celeritas"),
                new Hero(25, "Magneta"),
                new Hero(26, "RubberMan"),
                new Hero(27, "Dynama"),
                new Hero(28, "Dr IQ"),
                new Hero(29, "Magma"),
                new Hero(30, "Tornado")
        );
    }
}
