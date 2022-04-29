import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Produto } from '../models/produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Tdd e Bdd na boa pratica', 29.9),
    new Produto('LIV02', 'Iniciando com nest', 39.9),
    new Produto('LIV03', 'Inteligencia artificial como servico', 19.9),
  ];

  @Get()
  getAll(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  getOne(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  create(@Body() produto: Produto) {
    this.produtos.push(produto);
  }

  @Put()
  updateOne(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  deleteOne(@Param() params) {
    this.produtos.pop();
  }
}
