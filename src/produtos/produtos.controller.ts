import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  getAll(): string {
    return 'todos os produtos';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Produto especifico ${params.id}`;
  }

  @Post()
  create(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put()
  updateOne(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete(':id')
  deleteOne(@Param() params): string {
    return `Produto ${params.id} excluido`;
  }
}
