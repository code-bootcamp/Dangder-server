import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Interest } from './entities/interest.entity';
import { InterestsService } from './interests.service';

/**
 * Interest GraqhQL API Resolver
 * @APIs `fetchInterests`, `createInterest`, `deleteInterest`
 */
@Resolver()
export class InterestsResolver {
  constructor(
    private readonly interestsService: InterestsService, //
  ) {}

  /**
   * fetchInterests API
   * [`Query`]
   * @returns 등록된 모든 관심사 정보
   */
  @Query(() => [Interest])
  async fetchInterests() {
    return this.interestsService.findAll();
  }

  /**
   * createInterest API
   * [`Mutation`]
   * @param character 등록할 관심사
   * @returns 등록한 관심사 정보
   */
  @Mutation(() => Interest, { description: '관심사 항목 생성' })
  async createInterest(
    @Args('interest', { description: '관심사 내용' }) interest: string, //
  ) {
    return this.interestsService.create(interest); //
  }

  /**
   * deleteInterest API
   * [`Mutation`]
   * @param id 관심사 uuid
   * @returns 관심사 정보 삭제 여부
   */
  @Mutation(() => Boolean)
  deleteInterest(
    @Args('id', { description: '관심사 uuid' }) id: string, //
  ) {
    return this.interestsService.delete({ id });
  }
}
