import { BN } from '@polkadot/util';
import { TvlModel } from 'src/v2/models';
import { AccountLedger } from '../models/DappsStaking';

/**
 * Definition of service used to manage dapps staking.
 */
export interface IDappStakingService {
  /**
   * Gets Total Value Locked (TVL) value.
   */
  getTvl(): Promise<TvlModel>;

  /**
   * Stakes given ammount to contract.
   * @param contractAddress Contract address.
   * @param stakerAddress Staked address.
   * @param amount Amount to stake.
   */
  stake(contractAddress: string, stakerAddress: string, amount: BN): Promise<void>;

  /**
   * Gets dapps staking ledger for a given account.
   * @param accountAddress User account.
   */
  getLedger(accountAddress: string): Promise<AccountLedger>;
}
