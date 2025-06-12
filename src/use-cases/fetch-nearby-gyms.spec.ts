import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms User Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -24.2092052,
      longitude: -44.640191,
    })
    await gymRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.641091,
    })

    const { gyms } = await sut.execute({
      userLatitude: -24.2092052,
      userLongitude: -44.640191,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
