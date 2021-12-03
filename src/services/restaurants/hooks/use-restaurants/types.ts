export type Dish = {
  id: string
  name: string
  price: string
  description: string
  image: string
  restaurant_id: string
  created_at: string
}

export type RestaurantAddress = {
  id: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  zipcode: string
  created_at: string
}

export type Restaurant = {
  id: string
  name: string
  rate: string
  rate_amount: number
  delivery_time: string
  image_url: string
  address_id: string
  created_at: string
  address?: RestaurantAddress
  dishes?: Dish[]
}
