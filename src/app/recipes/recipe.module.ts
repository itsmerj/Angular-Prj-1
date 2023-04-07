import { Ingredients } from "../shared/ingredents.model";

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredients[]
  ) {}
}
