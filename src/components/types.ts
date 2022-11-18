export type MenuItems = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
};

export type MenuPropData = {
    items: MenuItems[];
};
