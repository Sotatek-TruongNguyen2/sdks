import { Pool as V4Pool } from '@baberswap/v4-sdk'
import { Pair } from '@baberswap/v2-sdk'
import { Pool as V3Pool } from '@baberswap/v3-sdk'

export type TPool = Pair | V3Pool | V4Pool
