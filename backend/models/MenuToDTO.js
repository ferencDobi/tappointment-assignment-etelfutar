const MenuToDTO = {
  convertMany: menuItems => menuItems.map(menuItem => MenuToDTO.convertOne(menuItem)),

  convertOne: menuItem => ({
    id: menuItem.id,
    name: menuItem.Name,
    description: menuItem.Description,
    category: menuItem.Category,
    price: menuItem.Price,
    spicy: Boolean(menuItem.Spicy),
    vegetarian: Boolean(menuItem.Vegatarian)
  })
};

module.exports = MenuToDTO;
