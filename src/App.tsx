import React from 'react';
import { useState } from 'react';
import { menu as items } from './components/data';
import { Categories } from './components/Categories';
import { Menu } from './components/Menu';
import { MenuItems } from './components/types';

const allCategories: string[] = items.map((item) => item.category);
const uniqueCategegories: string[] = [
    'all',
    ...Array.from(new Set(items.map((item) => item.category))),
];
console.log(allCategories);
console.log(uniqueCategegories);

function App() {
    const [menuItems, setMenuItems] = useState<MenuItems[]>(items);
    const [categories, setCategories] = useState<string[]>(uniqueCategegories);

    const filterItems = (category: string): void => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
