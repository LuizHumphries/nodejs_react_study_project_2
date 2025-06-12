import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUseretricsUseCaseRequest {
  userId: string
}

interface GetUseretricsUseCaseResponse {
  checkInsCount: number
}

export class GetUseretricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUseretricsUseCaseRequest): Promise<GetUseretricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
