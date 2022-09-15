import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/createOrder.input';
import { UpdateOrderInput } from './dto/updateOrder.input';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService, //
  ) {}

  // 주문 생성
  @Mutation(() => Order)
  async createOrder(
    @Args('createOrderInput')
    createOrderInput: CreateOrderInput, //
  ) {
    return this.ordersService.create({ createOrderInput });
  }

  // 주문 번호로 조회
  @Query(() => Order)
  async fetchOrderById(@Args('id') id: string) {
    return this.ordersService.findOrderId({ id });
  }

  // 휴대폰 번호로 조회
  @Query(() => Order)
  async fetchOrderByPhone(@Args('phone') phone: string) {
    return this.ordersService.findOrderPhone({ phone });
  }

  // 주문 상세 업데이트
  @Mutation(() => Order)
  async updateOrder(
    @Args('id') id: string,
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ) {
    return this.ordersService.update({ id, updateOrderInput });
  }

  // 주문 삭제

  @Mutation(() => Boolean)
  async deleteOrder(
    @Args('id') id: string, //
  ) {
    return this.ordersService.delete({ id });
  }
}