import { AuthRepositorie } from "../core/repositories/auth.repositorie"
import { DeleteProductRepositorie } from "../core/repositories/product/delete-product.repositorie"
import { GetProductRepositorie } from "../core/repositories/product/get-product.repositorie"
import { RegisterProductRepositorie } from "../core/repositories/product/register-product.repositorie"
import { UpdateProductRepositorie } from "../core/repositories/product/update-product.repositorie"
import { AuthRepository } from "../data/repository/auth.repository"
import { DeleteProductRepository } from "../data/repository/product/delete-product.repository"
import { GetProductRepository } from "../data/repository/product/get-product.repository"
import { RegisterProductRepository } from "../data/repository/product/register-product.repository"
import { UpdateProductRepository } from "../data/repository/product/update-product.repository"

export const dependencyInjection = [
    {
        provide: AuthRepositorie, useClass: AuthRepository
    },
    {
        provide: RegisterProductRepositorie, useClass: RegisterProductRepository
    },
    {
        provide: GetProductRepositorie, useClass: GetProductRepository
    },
    {
        provide: DeleteProductRepositorie, useClass: DeleteProductRepository
    },
    {
        provide: UpdateProductRepositorie, useClass: UpdateProductRepository
    }
]