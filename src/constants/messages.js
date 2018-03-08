import { map, head, compose, invertObj } from 'ramda';
import * as reqs from './requestTypes';
import * as actions from './actionTypes';

const msgToAction = compose(invertObj, map(head));

export const MsgActionReq = {
  1:   [actions.HEARTBEAT, reqs.TestReqID],
  BE:  [actions.LOGIN, reqs.UserReqID],
  V:   [actions.MD_FULL_REFRESH, reqs.MDReqID],
  x:   [actions.SECURITY_LIST, reqs.SecurityReqID],
  e:   [actions.SECURITY_STATUS_SUBSCRIBE, reqs.SecurityStatusReqID],
  D:   [actions.ORDER_SEND, reqs.ClOrdID],
  F:   [actions.ORDER_CANCEL, reqs.ClOrdID],
  U0:  [actions.SIGNUP, reqs.UserReqID],
  U2:  [actions.BALANCE, reqs.BalanceReqID],
  U6:  [actions.WITHDRAW_REQUEST, reqs.WithdrawReqID],
  U4:  [actions.ORDER_HISTORY, reqs.OrdersReqID],
  U18: [actions.DEPOSIT_REQUEST, reqs.DepositReqID],
  U20: [actions.DEPOSIT_METHODS, reqs.DepositMethodReqID],
  U24: [actions.WITHDRAW_CONFIRM, reqs.WithdrawReqID],
  U26: [actions.WITHDRAW_LIST, reqs.WithdrawListReqID],
  U28: [actions.BROKER_LIST, reqs.BrokerListReqID],
  U30: [actions.DEPOSIT_LIST, reqs.DepositListReqID],
  U32: [actions.TRADE_HISTORY, reqs.TradeHistoryReqID],
  U34: [actions.LEDGER_LIST, reqs.LedgerListReqID],
  U38: [actions.PROFILE_UPDATE, reqs.UpdateReqID],
  U50: [actions.API_KEY_LIST, reqs.APIKeyListReqID],
  U52: [actions.API_KEY_CREATE, reqs.APIKeyCreateReqID],
  U54: [actions.API_KEY_REVOKE, reqs.APIKeyRevokeReqID],
  U70: [actions.WITHDRAW_CANCEL, reqs.WithdrawCancelReqID],
  U78: [actions.WITHDRAW_COMMENT, reqs.WithdrawReqID],
  B0:  [actions.DEPOSIT_PROCESS, reqs.ProcessDepositReqID],
  B2:  [actions.CUSTOMER_LIST, reqs.CustomerListReqID],
  B4:  [actions.KYC_REQUEST, reqs.CustomerReqID],
  B6:  [actions.WITHDRAW_PROCESS, reqs.ProcessWithdrawReqID],
  B8:  [actions.KYC_VERIFY, reqs.VerifyCustomerReqID],
};

export const MsgActionRes = {
  0:   [actions.HEARTBEAT, reqs.TestReqID],
  BF:  [actions.LOGIN, reqs.UserReqID],
  W:   [actions.MD_FULL_REFRESH, reqs.MDReqID],
  X:   [actions.MD_INCREMENT, reqs.MDReqID],
  8:   [actions.EXECUTION_REPORT, reqs.ClOrdID],
  y:   [actions.SECURITY_LIST, reqs.SecurityReqID],
  f:   [actions.SECURITY_STATUS_SUBSCRIBE, reqs.SecurityStatusReqID],
  U3:  [actions.BALANCE, reqs.BalanceReqID],
  U7:  [actions.WITHDRAW_REQUEST, reqs.WithdrawReqID],
  U5:  [actions.ORDER_HISTORY, reqs.OrdersReqID],
  U9:  [actions.WITHDRAW_REFRESH, reqs.WithdrawReqID],
  U19: [actions.DEPOSIT_REQUEST, reqs.DepositReqID],
  U21: [actions.DEPOSIT_METHODS, reqs.DepositMethodReqID],
  U23: [actions.DEPOSIT_REFRESH, reqs.DepositReqID],
  U25: [actions.WITHDRAW_CONFIRM, reqs.WithdrawReqID],
  U27: [actions.WITHDRAW_LIST, reqs.WithdrawListReqID],
  U29: [actions.BROKER_LIST, reqs.BrokerListReqID],
  U31: [actions.DEPOSIT_LIST, reqs.DepositListReqID],
  U33: [actions.TRADE_HISTORY, reqs.TradeHistoryReqID],
  U35: [actions.LEDGER_LIST, reqs.LedgerListReqID],
  U39: [actions.PROFILE_UPDATE, reqs.UpdateReqID],
  U51: [actions.API_KEY_LIST, reqs.APIKeyListReqID],
  U53: [actions.API_KEY_CREATE, reqs.APIKeyCreateReqID],
  U55: [actions.API_KEY_REVOKE, reqs.APIKeyRevokeReqID],
  U71: [actions.WITHDRAW_CANCEL, reqs.WithdrawCancelReqID],
  U79: [actions.WITHDRAW_COMMENT, reqs.WithdrawCancelReqID],
  B1:  [actions.DEPOSIT_PROCESS, reqs.ProcessDepositReqID],
  B3:  [actions.CUSTOMER_LIST, reqs.CustomerListReqID],
  B5:  [actions.KYC_REQUEST, reqs.CustomerReqID],
  B9:  [actions.KYC_VERIFY, reqs.VerifyCustomerReqID],
  B7:  [actions.WITHDRAW_PROCESS, reqs.ProcessWithdrawReqID],
  B11: [actions.CUSTOMER_REFRESH],
};

export const ActionMsgReq = msgToAction(MsgActionReq);
export const ActionMsgRes = msgToAction(MsgActionRes);
