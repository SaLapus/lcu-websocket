export interface ActiveBoostsLcdsStoreFulfillmentNotification {
  data: boolean | undefined;
  inventoryType: string;
}

export interface ActiveBoostsLcdsSummonerActiveBoostsDTO {
  ipBoostEndDate: bigint;
  ipBoostPerWinCount: bigint;
  ipLoyaltyBoost: bigint;
  summonerId: bigint;
  xpBoostEndDate: bigint;
  xpBoostPerWinCount: bigint;
  xpLoyaltyBoost: bigint;
}

export type AggregationType = "none" | "sum" | "average";

export interface AlertDTO {
  alertTime: bigint;
}

export interface BannedChampion {
  championId: bigint;
  pickTurn: bigint;
  teamId: bigint;
}

export interface BasePlayerDTO {
  code: bigint;
  data: MatchedPlayerDTO;
  message: string;
}

export interface BindingAsyncCancelEvent {
  asyncToken: bigint;
}

export interface BindingAsyncFailureEvent {
  asyncToken: bigint;
  error: string;
}

export type BindingAsyncState =
  | "None"
  | "Running"
  | "Cancelling"
  | "Cancelled"
  | "Succeeded"
  | "Failed";

export interface BindingCallbackEvent {
  id: bigint;
  parameters: Array<boolean | undefined>;
}

export interface BindingFullApiHelp {
  events: Array<BindingFullEventHelp>;
  functions: Array<BindingFullFunctionHelp>;
  types: Array<BindingFullTypeHelp>;
}

export interface BindingFullArgumentHelp {
  description: string;
  name: string;
  optional: boolean;
  type: BindingFullTypeIdentifier;
}

export interface BindingFullEnumValueHelp {
  description: string;
  name: string;
  value: bigint;
}

export interface BindingFullEventHelp {
  description: string;
  name: string;
  nameSpace: string;
  tags: Array<string>;
  type: BindingFullTypeIdentifier;
}

export interface BindingFullFieldHelp {
  description: string;
  name: string;
  offset: bigint;
  optional: boolean;
  type: BindingFullTypeIdentifier;
}

export interface BindingFullFunctionHelp {
  arguments: Array<BindingFullArgumentHelp>;
  async: string;
  description: string;
  help: string;
  name: string;
  nameSpace: string;
  returns: BindingFullTypeIdentifier;
  tags: Array<string>;
  threadSafe: boolean;
}

export interface BindingFullTypeHelp {
  description: string;
  fields: Array<BindingFullFieldHelp>;
  name: string;
  nameSpace: string;
  size: bigint;
  tags: Array<string>;
  values: Array<BindingFullEnumValueHelp>;
}

export interface BindingFullTypeIdentifier {
  elementType: string;
  type: string;
}

export interface BindingGenericAsyncEvent {
  asyncToken: bigint;
  data: boolean | undefined;
}

export interface BindingGenericEvent {
  data: boolean | undefined;
}

export type BindingHelpFormat = "Full" | "Epytext";

export interface BoostTeamSkinRentalDTO {
  availableSkins: Array<bigint>;
  ipReward: bigint;
  ipRewardForPurchaser: bigint;
  price: bigint;
  skinUnlockMode: string;
  summonerName: string;
  unlocked: boolean;
}

export interface Bracket {
  id: bigint;
  matches: Array<BracketMatch>;
  phaseId: bigint;
  rosters: Array<BracketRoster>;
  size: bigint;
  tournamentId: bigint;
  version: bigint;
}

export interface BracketMatch {
  failRosterStatus: bigint;
  forfeitRosterId: bigint;
  gameId: bigint;
  gameStartTime: bigint;
  highestPossiblePosition: bigint;
  id: bigint;
  loserBracket: boolean;
  lowestPossiblePosition: bigint;
  order: bigint;
  resultHistory: string;
  rosterId1: bigint;
  rosterId2: bigint;
  round: bigint;
  roundStartTime: bigint;
  status: ClientBracketMatchStatus;
  winnerId: bigint;
}

export interface BracketRoster {
  logo: bigint;
  logoColor: bigint;
  name: string;
  rosterId: bigint;
  shortName: string;
}

export interface BuildInfo {
  branch: string;
  patchline: string;
  patchlineVisibleName: string;
  version: string;
}

export type CapacityEnum = "LOW" | "MEDIUM" | "HIGH" | "FULL";

export interface ChampSelectLcdsGameDTO {
  bannedChampions: Array<BannedChampion>;
  gameMutators: Array<string>;
  gameState: string;
  id: bigint;
  multiUserChatJwtMap: string | undefined;
  name: string;
  optimisticLock: bigint;
  pickTurn: bigint;
  playerChampionSelections: Array<ChampSelectLcdsPlayerChampionSelectionDTO>;
  queueTypeName: string;
  roomName: string;
  roomPassword: string;
  spectatorDelay: bigint;
  statusOfParticipants: string;
  teamOne: Array<boolean | undefined>;
  teamTwo: Array<boolean | undefined>;
}

export interface ChampSelectLcdsGameTimerDTO {
  currentGameState: string;
  remainingTimeInMillis: number;
}

export interface ChampSelectLcdsObfuscatedParticipant {
  gameUniqueId: bigint;
}

export interface ChampSelectLcdsPlayerChampionSelectionDTO {
  championId: bigint;
  selectedSkinIndex: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  summonerInternalName: string;
}

export interface ChampSelectLcdsPlayerParticipant {
  pickMode: bigint;
  pickTurn: bigint;
  summonerId: bigint;
  summonerInternalName: string;
  summonerName: string;
}

export interface ChampSelectLcdsPointSummary {
  currentPoints: bigint;
  maxRolls: bigint;
  numberOfRolls: bigint;
  pointsCostToRoll: bigint;
  pointsToNextRoll: bigint;
}

export interface ChampSelectLcdsPotentialTradersDTO {
  potentialTraders: Array<string>;
}

export interface ChampSelectLcdsRollResult {
  championId: bigint;
  pointSummary: ChampSelectLcdsPointSummary;
}

export interface ChampSelectLcdsTradeContractDTO {
  requesterChampionId: bigint;
  requesterInternalSummonerName: string;
  responderChampionId: bigint;
  responderInternalSummonerName: string;
  state: string;
}

export interface ChampionMasteryPublicDTO {
  championId: bigint;
  championLevel: bigint;
  championPoints: bigint;
}

export interface ChampionScoutingDTO {
  championId: bigint;
  gameCount: bigint;
  kda: number;
  winCount: bigint;
}

export interface ClashEventData {
  bracket: bigint;
  earnedDate: string;
  playerUUIDs: Array<string>;
  rewardSpec: ClashRewardSpec;
  rewardType: string;
  rosterId: bigint;
  seasonId: bigint;
  teamLogoChromaId: string;
  teamLogoName: string;
  teamName: string;
  teamShortName: string;
  theme: string;
  tier: string;
  tournamentId: bigint;
  tournamentName: string;
}

export interface ClashOfflineNotification {
  metaData: string | undefined;
  reason: string;
  tournamentId: bigint;
}

export interface ClashRewardConfigClient {
  entries: Array<ClashRewardConfigEntry>;
  grantToSub: boolean;
  keyDef: Array<ClashRewardKeyType>;
  name: string;
}

export interface ClashRewardConfigEntry {
  key: string;
  vals: Array<ClashRewardOutput>;
}

export interface ClashRewardDefinition {
  rewardSpec: ClashRewardSpec;
  rewardType: ClashRewardType;
}

export type ClashRewardKeyType =
  | "TIER"
  | "CUP"
  | "TICKET_COUNT"
  | "TICKET_TYPE"
  | "LOWEST_POSITION"
  | "TOURNAMENT_WIN_POS"
  | "WINS"
  | "POINTS"
  | "THEME_VP"
  | "SEASON_VP"
  | "SEASON_FLAG_COUNT"
  | "TOC_STATE";

export interface ClashRewardOutput {
  alternative: ClashRewardDefinition;
  grant: ClashRewardTime;
  primary: ClashRewardDefinition;
  show: ClashRewardTime;
}

export interface ClashRewardSpec {
  bracket: string;
  cup: string;
  gem: string;
  level: string;
  name: string;
  pedestal: string;
  quantity: string;
  seasonId: string;
  theme: string;
  tier: string;
}

export type ClashRewardTime = "NONE" | "EOG" | "EOB" | "EOT";

export type ClashRewardType = "TROPHY" | "FLAG" | "FRAME" | "LOGO" | "LOOT" | "VP" | "TOC";

export interface ClashSeasonRewardResult {
  banned: boolean;
  eligible: boolean;
  honorLevel: bigint;
  playerId: bigint;
  rewards: Array<ClashRewardDefinition>;
  seasonId: bigint;
  seasonVp: bigint;
}

export type ClientBracketMatchStatus = "UPCOMING" | "STARTED" | "COMPLETED";

export interface ClientConfigAuthenticatedConnection {
  authToken: string;
  connectionId: bigint;
  subscribed: boolean;
}

export interface ClientConfigBuildInfo {
  branch: string;
  branchFull: string;
  codeBuildId: bigint;
  contentBuildId: bigint;
  gameBranch: string;
  gameBranchFull: string;
  gameDataBuildId: bigint;
  patchline: string;
  patchlineVisibleName: string;
  version: string;
}

export interface ClientConfigClientConfig {
  data: boolean | undefined | undefined;
  params: ClientConfigConfigParams;
  updateTime: bigint;
}

export interface ClientConfigConfigNamespaceUpdate {
  player: Array<string>;
  public: Array<string>;
}

export interface ClientConfigConfigParams {
  appName: string;
  namespace: string;
  patchline: string;
  region: string;
  type: ClientConfigConfigType;
  version: string;
}

export type ClientConfigConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface ClientConfigConfigStatus {
  readiness: ClientConfigConfigReadinessEnum;
  updateId: bigint;
}

export type ClientConfigConfigType = "public" | "player";

export interface ClientConfigDataPaths {
  configRoot: string;
  dataRoot: string;
  localSettingsPath: string;
  privateSettingsPath: string;
  userDataRoot: string;
}

export interface ClientConfigDepInjectorEntitlements {
  accessToken: string;
  entitlements: Array<string>;
  issuer: string;
  subject: string;
  token: string;
}

export interface ClientConfigDepInjectorEntitlementsUpdate {
  EntitlementsTokenResource: ClientConfigDepInjectorEntitlements;
  EntitlementsUpdateType: ClientConfigDepInjectorEntitlementsUpdateType;
}

export type ClientConfigDepInjectorEntitlementsUpdateType = "Create" | "Update" | "Delete";

export interface ClientConfigEntitlements {
  accessToken: string;
  entitlements: Array<string>;
  issuer: string;
  subject: string;
  token: string;
}

export interface ClientConfigEntitlementsUpdate {
  EntitlementsTokenResource: ClientConfigEntitlements;
  UpdateType: ClientConfigUpdateType;
}

export interface ClientConfigSession {
  connections: Array<ClientConfigAuthenticatedConnection>;
  isInternal: boolean;
  patchlineId: string;
  productId: string;
  version: string;
}

export type ClientConfigUpdateType = "Create" | "Update" | "Delete";

export interface ClientDynamicConfig {
  compressed: boolean;
  configs: string;
  delta: boolean;
}

export type ClientRequestError =
  | "ALREADY_IN_GAME"
  | "ALREADY_MEMBER"
  | "ALREADY_INVITED"
  | "ALREADY_SUGGESTED"
  | "ALREADY_DECLINE_WITHDRAW"
  | "ALREADY_DECLINED"
  | "ALREADY_VOTE_WITHDRAW"
  | "ALREADY_IN_PHASE"
  | "CAPTAIN_NOT_ALLOWED"
  | "CANNOT_SUB"
  | "CLASH_BANNED"
  | "CLASH_BANNED_INVITEE"
  | "ELIGIBILITY_SERVER_ERROR"
  | "FAIL_INVITE"
  | "FAIL_SUGGESTINVITE"
  | "HONOR_INELIGIBILITY"
  | "LOGO_NOT_ALLOWED"
  | "LOGOCOLOR_NOT_ALLOWED"
  | "IN_OTHER_ROSTER"
  | "IN_OTHER_PENDINGROSTER"
  | "IN_OTHER_PENDINGSUB"
  | "IN_OTHER_PHASE_OF_PERIOD"
  | "INACTIVE_REGISTRATION"
  | "INACTIVE_PHASE"
  | "INTERNAL_ERROR"
  | "INVALID_ROSTER"
  | "INVALID_BUY_BACK"
  | "INVALID_SUB"
  | "INVALID_TOURNAMENT"
  | "INVALID_PHASE"
  | "INVALID_INVITEE"
  | "INVALID_ROSTER_MEMBER_SIZE"
  | "INVALID_POSITION"
  | "INVALID_LOGO"
  | "INVALID_LOGOCOLOR"
  | "INVALID_NAME"
  | "INVALID_SHORTNAME"
  | "INVALID_CHECKELIGIBILITY_SIZE"
  | "INVALID_BRACKET"
  | "INVALID_MATCHID"
  | "INVALID_PLAYER"
  | "INVALID_Tier"
  | "INVALID_WITHDRAW"
  | "INVALID_MATCHSTATUS_FORGAMEEND"
  | "INVALID_REWARD_CONFIG_NAME"
  | "INVALID_SEASON"
  | "MAX_INVITED"
  | "MAX_SUBED"
  | "MAX_ROSTER_FETCHSIZE"
  | "MAX_SUB_SIZE"
  | "SUB_IN_OTHER_ROSTER"
  | "NO_SAME_PLAYER"
  | "NO_AVAILABLE_PHASE"
  | "NOT_CAPTAIN"
  | "NOT_MEMBER"
  | "NOT_INVITEE"
  | "NOT_SEED_INTO_LEAGUE"
  | "NOT_ENOUGH_TICKETS"
  | "NOT_ALLOWED_DELETE_TOURNAMENT"
  | "NOT_ALLOWED_DELETE_TOURNAMENT_REWARD_CONFIG"
  | "NO_PERMISSION"
  | "NO_MORE_RECOMMEND"
  | "OVER_SUGGESTION_INVITE"
  | "OVER_INVITE"
  | "PENDING_ROSTER_NOT_READY"
  | "PENDING_ROSTER_FULL"
  | "PENDING_ROSTER_CLOSE"
  | "PHASE_CANCELLED"
  | "PHASE_FULL"
  | "ROSTER_ELIMINATED"
  | "ROSTER_DISBAND_NOT_ALLOWED"
  | "SUGGEST_INVITEE_NOT_EXIST"
  | "SMS_NOT_VERIFIED"
  | "TICKET_ALREADY_SET"
  | "TICKET_OFFER_NOT_EXIST"
  | "TICKET_OFFER_INVALID_COUNT"
  | "TICKET_NOT_SET"
  | "VOICE_NOT_AVAILABLE"
  | "WITHDRAW_NOT_ALLOWED"
  | "WITHDRAW_CANCEL_NOT_ALLOWED"
  | "WITHDRAW_LOCKOUT";

export interface CollectionsLcdsChampionDTO {
  active: boolean;
  botEnabled: boolean;
  championId: bigint;
  championSkins: Array<CollectionsLcdsChampionSkinDTO>;
  endDate: bigint;
  freeToPlay: boolean;
  freeToPlayReward: boolean;
  owned: boolean;
  purchaseDate: bigint;
  purchased: bigint;
  rankedPlayEnabled: boolean;
  sources: Array<string>;
  winCountRemaining: bigint;
}

export interface CollectionsLcdsChampionSkinDTO {
  championId: bigint;
  endDate: bigint;
  freeToPlayReward: boolean;
  lastSelected: boolean;
  owned: boolean;
  purchaseDate: bigint;
  skinId: bigint;
  sources: Array<string>;
  stillObtainable: boolean;
  winCountRemaining: bigint;
}

export interface CollectionsLcdsClientDynamicConfigurationNotification {
  configs: string;
  delta: boolean;
}

export interface CollectionsLcdsRentalUpdateNotification {
  data: boolean | undefined;
  inventoryType: string;
}

export interface CollectionsLcdsStoreFulfillmentNotification {
  data: boolean | undefined;
  inventoryType: string;
}

export interface ContentItemIdentifier {
  inventoryType: string;
  itemId: bigint;
}

export interface CraftLootRefTransactionDTO {
  accountId: bigint;
  clientId: string;
  lootNameRefIds: Array<LootNameRefId>;
  playerId: bigint;
  puuid: string;
  recipeName: string;
  repeat: bigint;
}

export interface CrashReportingEnvironment {
  environment: string;
  userId: string;
  userName: string;
}

export interface DownloadUrlRequestV2 {
  gameId: bigint;
  platformId: string;
}

export interface DownloadUrlResponseV2 {
  url: string;
}

export type ElevationAction = "FixBrokenPermissions";

export interface ElevationRequest {
  action: ElevationAction;
}

export interface EndOfGameLcdsClientReportV1 {
  comments: string;
  gameId: bigint;
  offenderSummonerId: bigint;
  offenses: string;
}

export interface EndOfGameLcdsEndOfGameStats {
  basePoints: bigint;
  battleBoostIpEarned: bigint;
  boostIpEarned: bigint;
  boostXpEarned: bigint;
  causedEarlySurrender: boolean;
  coOpVsAiMinutesLeftToday: bigint;
  coOpVsAiMsecsUntilReset: bigint;
  completionBonusPoints: bigint;
  customMinutesLeftToday: bigint;
  customMsecsUntilReset: bigint;
  difficulty: string;
  earlySurrenderAccomplice: boolean;
  elo: bigint;
  eloChange: bigint;
  experienceEarned: bigint;
  experienceTotal: bigint;
  firstWinBonus: bigint;
  gameEndedInEarlySurrender: boolean;
  gameId: bigint;
  gameLength: bigint;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  ipEarned: bigint;
  ipTotal: bigint;
  leveledUp: boolean;
  loyaltyBoostIpEarned: bigint;
  loyaltyBoostXpEarned: bigint;
  multiUserChatJwt: string;
  myTeamInfo: EndOfGameLcdsTeamInfo;
  myTeamStatus: string;
  newSpells: Array<EndOfGameLcdsSpell>;
  odinBonusIp: bigint;
  otherTeamInfo: EndOfGameLcdsTeamInfo;
  otherTeamPlayerParticipantStats: Array<EndOfGameLcdsPlayerParticipantStatsSummary>;
  partyRewardsBonusIpEarned: bigint;
  pointsPenalties: Array<EndOfGameLcdsPointsPenalty>;
  previousLevel: bigint;
  previousXpTotal: bigint;
  queueBonusEarned: bigint;
  queueType: string;
  ranked: boolean;
  reportGameId: bigint;
  roomName: string;
  roomPassword: string;
  rpEarned: bigint;
  sendStatsToTournamentProvider: boolean;
  skinId: bigint;
  skinIndex: bigint;
  summonerName: string;
  talentPointsGained: bigint;
  teamEarlySurrendered: boolean;
  teamPlayerParticipantStats: Array<EndOfGameLcdsPlayerParticipantStatsSummary>;
  timeUntilNextFirstWinBonus: bigint;
  userId: bigint;
}

export interface EndOfGameLcdsHarassmentReport {
  comment: string;
  gameId: bigint;
  offense: string;
  reportSource: string;
  reportedSummonerId: bigint;
  reportingSummonerId: bigint;
}

export interface EndOfGameLcdsPlayerParticipantStatsSummary {
  botPlayer: boolean;
  championId: bigint;
  detectedTeamPosition: string;
  elo: bigint;
  eloChange: bigint;
  gameId: bigint;
  leaver: boolean;
  leaves: bigint;
  level: bigint;
  losses: bigint;
  profileIconId: bigint;
  selectedPosition: string;
  skinIndex: bigint;
  skinName: string;
  spell1Id: bigint;
  spell2Id: bigint;
  statistics: Array<EndOfGameLcdsRawStatDTO>;
  summonerName: string;
  teamId: bigint;
  userId: bigint;
  wins: bigint;
}

export interface EndOfGameLcdsPointsPenalty {
  penalty: number;
  type: string;
}

export interface EndOfGameLcdsRawStatDTO {
  statTypeName: string;
  value: bigint;
}

export interface EndOfGameLcdsSpell {
  spellId: bigint;
}

export interface EndOfGameLcdsTeamId {
  fullId: string;
}

export interface EndOfGameLcdsTeamInfo {
  memberStatusString: string;
  name: string;
  secondsUntilEligibleForDeletion: bigint;
  tag: string;
  teamId: EndOfGameLcdsTeamId;
}

export interface EntitlementsToken {
  accessToken: string;
  entitlements: Array<string>;
  issuer: string;
  subject: string;
  token: string;
}

export interface EogLcdsGameDTO {
  bannedChampions: Array<BannedChampion>;
  gameState: string;
  id: bigint;
  teamOne: Array<PlayerParticipant>;
  teamTwo: Array<PlayerParticipant>;
}

export type ExternalPluginsAvailability =
  | "NotAvailable"
  | "Preparing"
  | "Connected"
  | "Recovering"
  | "Error";

export interface ExternalPluginsResource {
  errorString: string;
  state: ExternalPluginsAvailability;
}

export interface FailedInvite {
  exception: ClientRequestError;
  playerId: bigint;
}

export type GameQueuesLcdsAllowSpectators = "NONE" | "LOBBYONLY" | "DROPINONLY" | "ALL";

export interface GameQueuesLcdsGameQueueConfig {
  blockedMinutesThreshold: bigint;
  botsCanSpawnOnBlueSide: boolean;
  cacheName: string;
  disallowFreeChampions: boolean;
  gameMode: string;
  gameMutators: Array<string>;
  gameTypeConfigId: bigint;
  id: bigint;
  lastToggledOffTime: bigint;
  lastToggledOnTime: bigint;
  mapSelectionAlgorithm: string;
  matchingThrottleConfig: GameQueuesLcdsMatchingThrottleConfig;
  maxLevel: bigint;
  maxSummonerLevelForFirstWinOfTheDay: bigint;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  minimumQueueDodgeDelayTime: bigint;
  numPlayersPerTeam: bigint;
  pointsConfigKey: string;
  queueBonusKey: string;
  queueState: string;
  queueStateString: string;
  randomizeTeamSizes: boolean;
  ranked: boolean;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: bigint;
  supportedMapIds: Array<bigint>;
  teamOnly: boolean;
  thresholdEnabled: boolean;
  thresholdSize: bigint;
  type: string;
  typeString: string;
}

export interface GameQueuesLcdsMatchingThrottleConfig {
  cacheName: string;
  limit: bigint;
}

export interface GameflowLcdsGameDTO {
  gameMode: string;
  gameQueueConfigId: bigint;
  gameState: string;
  gameType: string;
  gameTypeConfigId: bigint;
  id: bigint;
  mapId: bigint;
  maxNumPlayers: bigint;
  playerChampionSelections: Array<boolean | undefined>;
  queueTypeName: string;
  spectatorDelay: bigint;
  teamOne: Array<boolean | undefined>;
  teamTwo: Array<boolean | undefined>;
}

export interface GameflowLcdsPlayerCredentialsDto {
  encryptionKey: string;
  gameId: bigint;
  observer: boolean;
  observerEncryptionKey: string;
  observerServerIp: string;
  observerServerPort: bigint;
  serverIp: string;
  serverPort: bigint;
  summonerId: bigint;
}

export interface GameflowLcdsReconnectInfoDto {
  game: GameflowLcdsGameDTO;
  playerCredentials: GameflowLcdsPlayerCredentialsDto;
  reconnectDelay: bigint;
}

export interface IdsDTO {
  missionIds: Array<string>;
  seriesIds: Array<string>;
}

export type InviteType = "FREEAGENT" | "FRIEND" | "SUGGEST" | "SELFJOIN" | "NONE";

export interface LCDSBroadcastNotification {
  broadcastMessages: Array<LolServiceStatusBroadcastMessage>;
}

export interface LCDSChampionReward {
  championId: bigint;
  skins: Array<bigint>;
}

export interface LCDSGlobalRewards {
  allChampions: boolean;
}

export interface LCDSLoyaltyRewards {
  champions: Array<LCDSChampionReward>;
  global: LCDSGlobalRewards;
  ipBoost: bigint;
  xpBoost: bigint;
}

export interface LCDSLoyaltyStateChangeNotification {
  accountId: bigint;
  notificationCategory: LCDSLoyaltyStateChangeNotificationCategory;
  rewards: LCDSLoyaltyRewards;
}

export type LCDSLoyaltyStateChangeNotificationCategory =
  | "legacy"
  | "grant"
  | "expiry"
  | "change"
  | "revoke"
  | "disabled";

export interface LCDSPlayerMessagingSimpleMessage {
  accountId: bigint;
  bodyCode: string;
  msgId: string;
  params: Array<string>;
  titleCode: string;
  type: string;
}

export interface LCDSPlayerMessagingSimpleMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface LcdsBotParticipant {
  botSkillLevel: bigint;
  summonerId: bigint;
  summonerInternalName: string;
  summonerName: string;
  teamId: string;
}

export interface LcdsFailedJoinPlayer {
  reasonFailed: string;
  summoner: LcdsSummoner;
}

export interface LcdsGameDTO {
  gameMode: string;
  gameMutators: Array<string>;
  gameState: string;
  gameType: string;
  gameTypeConfigId: bigint;
  id: bigint;
  mapId: bigint;
  maxNumPlayers: bigint;
  multiUserChatJwtMap: string | undefined;
  name: string;
  observers: Array<LcdsPlayerParticipant>;
  optimisticLock: bigint;
  ownerSummary: LcdsPlayerParticipant;
  passbackDataPacket: string;
  passbackUrl: string;
  practiceGameRewardsDisabledReasons: Array<string>;
  roomName: string;
  roomPassword: string;
  spectatorsAllowed: string;
  teamOne: Array<LcdsPlayerParticipant>;
  teamTwo: Array<LcdsPlayerParticipant>;
}

export interface LcdsGameInviteBaseRuntimeException {
  rootCauseClassname: string;
}

export interface LcdsGameMap {
  description: string;
  displayName: string;
  mapId: bigint;
  minCustomPlayers: bigint;
  name: string;
  totalPlayers: bigint;
}

export interface LcdsGameNotification {
  messageArgument: string;
  messageCode: string;
  type: string;
}

export interface LcdsInvitationRequest {
  gameMetaData: string;
  invitationId: string;
  invitationState: LcdsInvitationState;
  invitePayload: string;
  inviteType: string;
  inviter: LcdsInviter;
  owner: LcdsPlayer;
}

export type LcdsInvitationState = "ACTIVE" | "ON_HOLD" | "REVOKED";

export interface LcdsInviteFailed {
  exception: LcdsGameInviteBaseRuntimeException;
  summonerId: bigint;
  summonerName: string;
}

export interface LcdsInvitePrivileges {
  canInvite: boolean;
}

export interface LcdsInvitee {
  inviteeState: LcdsInviteeState;
  summonerId: bigint;
  summonerName: string;
}

export type LcdsInviteeState =
  | "CREATOR"
  | "PENDING"
  | "DECLINED"
  | "ACCEPTED"
  | "ACCEPT_FAILED"
  | "JOINED"
  | "QUIT"
  | "KICKED"
  | "BANNED";

export interface LcdsInviter {
  previousSeasonHighestTier: string;
  summonerId: bigint;
  summonerName: string;
}

export interface LcdsLobbyStatus {
  chatKey: string;
  gameMetaData: string;
  invitationId: string;
  invitees: Array<LcdsInvitee>;
  members: Array<LcdsMember>;
  owner: LcdsPlayer;
}

export interface LcdsMember {
  hasDelegatedInvitePower: boolean;
  summonerId: bigint;
  summonerName: string;
}

export interface LcdsPayloadDto {
  body: string;
  headers: string | undefined;
  method: string;
  path: string;
}

export interface LcdsPlayer {
  summonerId: bigint;
  summonerName: string;
}

export interface LcdsPlayerParticipant {
  botSkillLevel: bigint;
  summonerId: bigint;
  summonerInternalName: string;
  summonerName: string;
}

export interface LcdsPracticeGameConfig {
  allowSpectators: string;
  gameMap: LcdsGameMap;
  gameMode: string;
  gameMutators: Array<string>;
  gameName: string;
  gamePassword: string;
  gameTypeConfig: bigint;
  gameVersion: string;
  maxNumPlayers: bigint;
  passbackDataPacket: string;
  passbackUrl: string;
  region: string;
}

export interface LcdsPracticeGameSearchResult {
  allowSpectators: string;
  gameMap: LcdsGameMap;
  gameMapId: bigint;
  gameMode: string;
  id: bigint;
  maxNumPlayers: bigint;
  name: string;
  owner: LcdsPlayerParticipant;
  pickType: string;
  privateGame: boolean;
  spectatorCount: bigint;
  team1Count: bigint;
  team2Count: bigint;
}

export type LcdsRemovalReason = "KICKED" | "DESTROYED" | "PROGRESSED";

export interface LcdsRemovedFromLobbyNotification {
  removalReason: LcdsRemovalReason;
}

export interface LcdsSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LcdsSimpleMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface LcdsStartChampSelectDto {
  invalidPlayers: Array<LcdsFailedJoinPlayer>;
}

export interface LcdsSummoner {
  name: string;
  sumId: bigint;
}

export interface LeaverBusterLcdsMatchmakingNotification {
  playerJoinFailures: Array<boolean | undefined>;
}

export interface LeaverBusterLcdsSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LeaverBusterSimpleMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface LobbyClientDynamicConfigurationNotification {
  configs: string;
  delta: boolean;
}

export interface LogEvent {
  message: string;
  severity: LogSeverityLevels;
}

export type LogSeverityLevels = "Okay" | "Warning" | "Error" | "Always";

export interface LolAccountVerificationAVSConfig {
  Enabled: boolean;
  PasswordEnabled: boolean;
}

export interface LolAccountVerificationAuthenticateRequest {
  password: string;
  username: string;
}

export interface LolAccountVerificationAuthenticateResponse {
  message: string;
  status: bigint;
  success: boolean;
}

export interface LolAccountVerificationDeviceResponse {
  message: string;
  status: bigint;
  success: boolean;
}

export interface LolAccountVerificationInvalidateResponse {
  message: string;
  smsTokenExpireDurationInSec: bigint;
  status: bigint;
  success: boolean;
}

export interface LolAccountVerificationIsVerifiedResponse {
  message: string;
  status: bigint;
  success: boolean;
}

export interface LolAccountVerificationLoginSession {
  accountId: bigint;
  state: LolAccountVerificationLoginSessionState;
  summonerId: bigint;
  username: string;
}

export type LolAccountVerificationLoginSessionState =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolAccountVerificationSendTokenRequest {
  device: string;
  locale: string;
  mediator: string;
}

export interface LolAccountVerificationSendTokenResponse {
  message: string;
  smsTokenExpireDurationInSec: bigint;
  status: bigint;
  success: boolean;
}

export interface LolAccountVerificationVerifyRequest {
  mediator: string;
  token: string;
}

export interface LolAccountVerificationVerifyResponse {
  message: string;
  status: bigint;
  success: boolean;
}

export interface LolActiveBoostsActiveBoosts {
  firstWinOfTheDayStartTime: string;
  ipBoostEndDate: string;
  ipBoostPerWinCount: bigint;
  ipLoyaltyBoost: bigint;
  summonerId: bigint;
  xpBoostEndDate: string;
  xpBoostPerWinCount: bigint;
  xpLoyaltyBoost: bigint;
}

export interface LolActiveBoostsEndOfGameStats {
  timeUntilNextFirstWinBonus: bigint;
}

export interface LolActiveBoostsLoginDataPacket {
  timeUntilFirstWinOfDay: bigint;
}

export interface LolAntiAddictionAntiAddictionState {
  antiAddictionToken: string;
  localizationKey: string;
  policyType: LolAntiAddictionPolicyType;
}

export interface LolAntiAddictionAntiAddictionToken {
  antiAddictionToken: string;
}

export type LolAntiAddictionPolicyType =
  | "antiAddictionWarning"
  | "antiAddictionShutdown"
  | "antiAddictionHeartbeat";

export interface LolBannersBannerFlag {
  earnedDateIso8601: string;
  itemId: bigint;
  level: bigint;
  seasonId: bigint;
  theme: string;
}

export interface LolBannersBannerFrame {
  level: bigint;
}

export interface LolBannersCapClashFlagEntitlementPayload {
  rewardSpec: LolBannersClashV2FlagRewardSpec;
  rewardType: string;
}

export interface LolBannersCapClashFrameEntitlementPayload {
  rewardSpec: LolBannersClashV2FrameRewardSpec;
  rewardType: string;
}

export interface LolBannersClashV2FlagRewardSpec {
  level: string;
  seasonId: string;
  theme: string;
}

export interface LolBannersClashV2FrameRewardSpec {
  level: string;
  seasonId: string;
}

export interface LolBannersInventoryItemWithPayload {
  inventoryType: string;
  itemId: bigint;
  payload: boolean | undefined;
  purchaseDate: string;
  uuid: string;
}

export interface LolBannersInventoryItemsByType {
  TOURNAMENT_FLAG: Array<LolBannersTournamentFlagInventoryItem>;
  TOURNAMENT_FRAME: Array<LolBannersTournamentFrameInventoryItem>;
}

export interface LolBannersInventoryResponse {
  items: LolBannersInventoryItemsByType;
}

export interface LolBannersLoadout {
  id: string;
  loadout: LolBannersLoadoutsSlot | undefined;
  name: string;
  scope: string;
}

export interface LolBannersLoadoutsSlot {
  inventoryType: string;
  itemId: bigint;
}

export interface LolBannersSummonerProfileUpdate {
  key: string;
  value: boolean | undefined;
}

export interface LolBannersTournamentFlagInventoryItem {
  itemId: bigint;
  payload: LolBannersCapClashFlagEntitlementPayload;
  purchaseDate: string;
}

export interface LolBannersTournamentFrameInventoryItem {
  payload: LolBannersCapClashFrameEntitlementPayload;
  purchaseDate: string;
}

export type LolCareerStatsCareerStatsQueueType =
  | "draft5"
  | "rank5flex"
  | "rank5solo"
  | "blind5"
  | "aram"
  | "blind3"
  | "rank3flex"
  | "other";

export interface LolCareerStatsChampionQueueStatsResponse {
  championId: bigint;
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  stats: boolean | undefined;
}

export interface LolCareerStatsChampionStatistics {
  championId: bigint;
  experts: Array<LolCareerStatsExpertPlayer>;
  queueStats: Array<LolCareerStatsStatisticsByQueue>;
}

export interface LolCareerStatsEntitlementsToken {
  entitlements: Array<string>;
}

export interface LolCareerStatsExpertPlayer {
  championId: bigint;
  expertRank: bigint;
  numOfGames: bigint;
  position: LolCareerStatsSummonersRiftPosition;
  summonerId: bigint;
  summonerName: string;
  winRate: number;
}

export interface LolCareerStatsPositionStatistics {
  experts: Array<LolCareerStatsExpertPlayer>;
  position: LolCareerStatsSummonersRiftPosition;
  queueStats: Array<LolCareerStatsStatisticsByQueue>;
}

export interface LolCareerStatsPositionStatsQueryRequest {
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  season: bigint;
}

export type LolCareerStatsRankedTier =
  | "ALL"
  | "UNRANKED"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export interface LolCareerStatsStatisticsByQueue {
  queueType: LolCareerStatsCareerStatsQueueType;
  stats: boolean | undefined;
}

export interface LolCareerStatsStatisticsPercentilesResponse {
  championId: bigint;
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  season: bigint;
  stats: boolean | undefined;
}

export interface LolCareerStatsStatsQueryRequest {
  championId: bigint;
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  season: bigint;
}

export type LolCareerStatsSummonersRiftPosition =
  | "ALL"
  | "UNKNOWN"
  | "TOP"
  | "JUNGLE"
  | "MID"
  | "BOTTOM"
  | "SUPPORT";

export interface LolCatalogBundled {
  flexible: boolean;
  items: Array<LolCatalogBundledItem>;
  minimumPrices: Array<LolCatalogBundledItemCost>;
}

export interface LolCatalogBundledItem {
  discountPrices: Array<LolCatalogBundledItemCost>;
  inventoryType: string;
  itemId: bigint;
  quantity: bigint;
}

export interface LolCatalogBundledItemCost {
  cost: bigint;
  costType: string;
  currency: string;
  discount: number;
}

export interface LolCatalogCatalogItem {
  active: boolean;
  bundled: LolCatalogBundled;
  iconUrl: string;
  inactiveDate: string;
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
  itemRequirements: Array<LolCatalogItemKey>;
  localizations: LolCatalogItemLocalization | undefined;
  metadata: Array<LolCatalogItemMetadataEntry>;
  offerId: string;
  prices: Array<LolCatalogItemCost>;
  releaseDate: string;
  sale: LolCatalogSale;
  subInventoryType: string;
  tags: Array<string>;
}

export interface LolCatalogCatalogPluginItem {
  active: boolean;
  description: string;
  imagePath: string;
  inactiveDate: bigint;
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
  metadata: Array<LolCatalogItemMetadataEntry>;
  name: string;
  offerId: string;
  owned: boolean;
  ownershipType: LolCatalogInventoryOwnership;
  prices: Array<LolCatalogCatalogPluginPrice>;
  purchaseDate: bigint;
  questSkinInfo: LolCatalogSkinLineInfo;
  releaseDate: bigint;
  sale: LolCatalogSale;
  subInventoryType: string;
  subTitle: string;
  tags: Array<string>;
}

export interface LolCatalogCatalogPluginItemAssets {
  colors: Array<string>;
  emblems: Array<LolCatalogChampionSkinEmblem>;
  iconPath: string;
  splashPath: string;
  tilePath: string;
}

export interface LolCatalogCatalogPluginItemWithDetails {
  assets: LolCatalogCatalogPluginItemAssets;
  bundledDiscountPrices: Array<LolCatalogCatalogPluginPrice>;
  bundledItems: Array<LolCatalogCatalogPluginItemWithDetails>;
  item: LolCatalogCatalogPluginItem;
  minimumBundlePrices: Array<LolCatalogCatalogPluginPrice>;
  quantity: bigint;
  requiredItems: Array<LolCatalogCatalogPluginItemWithDetails>;
}

export interface LolCatalogCatalogPluginPrice {
  cost: bigint;
  costType: string;
  currency: string;
  sale: LolCatalogCatalogPluginRetailDiscount;
}

export interface LolCatalogCatalogPluginRetailDiscount {
  cost: bigint;
  discount: number;
  endDate: string;
  startDate: string;
}

export interface LolCatalogChampionSkinEmblem {
  emblemPath: LolCatalogChampionSkinEmblemPath;
  emblemPosition: LolCatalogChampionSkinEmblemPosition;
  name: string;
}

export interface LolCatalogChampionSkinEmblemPath {
  large: string;
  small: string;
}

export interface LolCatalogChampionSkinEmblemPosition {
  horizontal: string;
  vertical: string;
}

export interface LolCatalogGameDataChampion {
  skins: Array<LolCatalogGameDataChampionSkin>;
}

export interface LolCatalogGameDataChampionChroma {
  chromaPath: string;
  colors: Array<string>;
  id: bigint;
  name: string;
}

export interface LolCatalogGameDataChampionSkin {
  chromaPath: string;
  chromas: Array<LolCatalogGameDataChampionChroma>;
  colors: Array<string>;
  emblems: Array<LolCatalogChampionSkinEmblem>;
  id: bigint;
  name: string;
  questSkinInfo: LolCatalogSkinLineInfo;
  splashPath: string;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolCatalogGameDataChampionSummary {
  id: bigint;
  name: string;
  skins: Array<LolCatalogGameDataChampionSkin>;
  squarePortraitPath: string;
}

export interface LolCatalogGameDataItemReference {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
}

export interface LolCatalogGameDataStatstone {
  category: string;
  contentId: string;
  description: string;
  iconFull: string;
  isDuration: boolean;
  isEpic: boolean;
  isRetired: boolean;
  itemId: bigint;
  name: string;
}

export interface LolCatalogGameDataStatstonePack {
  contentId: string;
  description: string;
  itemId: bigint;
  name: string;
}

export interface LolCatalogGameDataStatstoneSet {
  name: string;
  statstones: Array<LolCatalogGameDataStatstone>;
}

export interface LolCatalogGameDataStatstonesInfo {
  champIdToPackIds: boolean | undefined;
  collectionIdToStatStoneIds: boolean | undefined;
  packData: Array<LolCatalogGameDataStatstonePack>;
  packIdToChampIds: boolean | undefined;
  packIdToStatStonesIds: boolean | undefined;
  packIdToSubPackIds: boolean | undefined;
  seriesIdToStatStoneIds: boolean | undefined;
  statstoneData: Array<LolCatalogGameDataStatstoneSet>;
}

export interface LolCatalogGameDataSummonerEmote {
  description: string;
  id: bigint;
  inventoryIcon: string;
  name: string;
}

export interface LolCatalogGameDataSummonerIcon {
  id: bigint;
  imagePath: string;
  title: string;
}

export interface LolCatalogGameDataWardSkin {
  description: string;
  id: bigint;
  name: string;
  wardImagePath: string;
}

export interface LolCatalogInventoryContent {
  itemId: bigint;
  ownershipType: LolCatalogInventoryOwnership;
  purchaseDate: string;
}

export type LolCatalogInventoryOwnership = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolCatalogItemChoiceDetails {
  backgroundImage: string;
  contents: Array<LolCatalogItemDetails>;
  discount: string;
  displayType: string;
  fullPrice: bigint;
  item: LolCatalogCatalogPluginItem;
  metadata: boolean | undefined;
}

export interface LolCatalogItemCost {
  cost: bigint;
  currency: string;
  discount: number;
}

export interface LolCatalogItemDetails {
  description: string;
  iconUrl: string;
  subTitle: string;
  title: string;
}

export interface LolCatalogItemKey {
  inventoryType: string;
  itemId: bigint;
}

export interface LolCatalogItemLocalization {
  description: string;
  language: string;
  name: string;
}

export interface LolCatalogItemMetadataEntry {
  type: string;
  value: string;
}

export interface LolCatalogSale {
  endDate: string;
  prices: Array<LolCatalogItemCost>;
  startDate: string;
}

export interface LolCatalogSkinLineDescriptionInfo {
  description: string;
  iconPath: string;
  title: string;
}

export interface LolCatalogSkinLineInfo {
  collectionCardPath: string;
  collectionDescription: string;
  descriptionInfo: Array<LolCatalogSkinLineDescriptionInfo>;
  name: string;
  splashPath: string;
  tiers: Array<LolCatalogSkinLineTier>;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolCatalogSkinLineTier {
  collectionSplashVideoPath: string;
  description: string;
  id: bigint;
  loadScreenPath: string;
  name: string;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: bigint;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChallengesChallengeData {
  category: string;
  currentLevel: string;
  currentLevelAchievedTime: bigint;
  currentThreshold: number;
  currentValue: number;
  friendsAtLevels: Array<LolChallengesFriendLevelsData>;
  id: bigint;
  initValue: number;
  legacy: boolean;
  newLevels: Array<string>;
  nextLevel: string;
  nextThreshold: number;
  percentile: number;
  playersInLevel: bigint;
  position: bigint;
  previousLevel: string;
  previousThreshold: number;
  previousValue: number;
  seasonId: bigint;
  seasonal: boolean;
}

export interface LolChallengesChallengeLevelData {
  level: string;
}

export interface LolChallengesChallengePlayerData {
  apexLaderUpdateTime: bigint;
  categoryPoints: LolChallengesChallengePoints | undefined;
  id: string;
  levelPoints: bigint | undefined;
  playerChallenges: Array<LolChallengesChallengeData>;
  preferences: LolChallengesPlayerClientPreferences;
  puuid: string;
  source: LolChallengesSource;
  tags: string | undefined;
  totalPoints: LolChallengesChallengePoints;
}

export interface LolChallengesChallengePoints {
  current: bigint;
  level: string;
  max: bigint;
  percentile: number;
}

export interface LolChallengesChallengeSignedUpdatePayload {
  tokensByType: boolean | undefined | undefined;
}

export interface LolChallengesChallengeThreshold {
  rewardGroupId: string;
  rewards: Array<LolChallengesChallengeThresholdReward>;
  value: number;
}

export interface LolChallengesChallengeThresholdReward {
  category: string;
  id: string;
  quantity: bigint;
}

export interface LolChallengesChallengesPlayerPreferences {
  bannerAccent: string;
  challengeIds: Array<bigint>;
  signedJWTPayload: LolChallengesChallengeSignedUpdatePayload;
  title: string;
}

export interface LolChallengesChallengesRMSNotification {
  ackRequired: boolean;
  payload: string;
}

export interface LolChallengesChallengesRMSPayload {
  id: string;
  playerKey: LolChallengesChallengesRMSPlayerKey;
}

export interface LolChallengesChallengesRMSPlayerKey {
  product: string;
  puuid: string;
}

export interface LolChallengesEndOfGameStats {
  gameId: bigint;
}

export interface LolChallengesFriendLevelsData {
  friends: Array<string>;
  level: string;
}

export interface LolChallengesFriendResource {
  puuid: string;
}

export interface LolChallengesGameDataChallengeConfig {
  description: string;
  descriptionShort: string;
  iconPath: string;
  leaderboard: boolean;
  levelToIconPath: string | undefined;
  name: string;
  queueIds: Array<bigint>;
  reverseDirection: boolean;
  source: string;
  tags: string | undefined;
  thresholds: LolChallengesChallengeThreshold | undefined;
}

export interface LolChallengesGameDataChallengeTitle {
  itemId: bigint;
  name: string;
}

export interface LolChallengesGameDataChallengesData {
  challenges: LolChallengesGameDataChallengeConfig | undefined;
  titles: LolChallengesGameDataChallengeTitle | undefined;
}

export interface LolChallengesInventoryTypeAchievementTitle {
  itemId: bigint;
  uuid: string;
}

export interface LolChallengesPlayerClientPreferences {
  tabard: string;
  title: string;
  tokens: Array<bigint>;
}

export interface LolChallengesQueue {
  gameMode: string;
  id: bigint;
}

export type LolChallengesSource =
  | "CHALLENGES"
  | "EOGD"
  | "CAP_INVENTORY"
  | "HONOR"
  | "CHAMPION_MASTERY"
  | "RANKED_LEAGUES"
  | "CLASH"
  | "LOOT"
  | "ETERNALS";

export interface LolChallengesUICategoryProgress {
  category: string;
  current: bigint;
  level: string;
  max: bigint;
  positionPercentile: number;
}

export interface LolChallengesUIChallenge {
  capstoneGroupId: bigint;
  capstoneGroupName: string;
  capstoneId: bigint;
  category: string;
  currentLevel: string;
  currentLevelAchievedTime: bigint;
  currentThreshold: number;
  currentValue: number;
  description: string;
  descriptionShort: string;
  friendsAtLevels: Array<LolChallengesFriendLevelsData>;
  gameModes: Array<string>;
  hasLeaderboard: boolean;
  iconPath: string;
  id: bigint;
  isApex: boolean;
  isCapstone: boolean;
  isReverseDirection: boolean;
  levelToIconPath: string | undefined;
  name: string;
  nextLevel: string;
  nextLevelIconPath: string;
  nextThreshold: number;
  percentile: number;
  pointsAwarded: bigint;
  position: bigint;
  previousLevel: string;
  previousValue: number;
  source: string;
  thresholds: LolChallengesUIChallengeThreshold | undefined;
  valueMapping: string;
}

export interface LolChallengesUIChallengeReward {
  asset: string;
  category: string;
  name: string;
  quantity: bigint;
}

export interface LolChallengesUIChallengeThreshold {
  rewards: Array<LolChallengesUIChallengeReward>;
  value: number;
}

export interface LolChallengesUIPlayerSummary {
  apexLadderUpdateTime: bigint;
  categoryProgress: Array<LolChallengesUICategoryProgress>;
  overallChallengeLevel: string;
  pointsUntilNextRank: bigint;
  positionPercentile: number;
  title: LolChallengesUITitle;
  topChallenges: Array<LolChallengesUIChallenge>;
  totalChallengeScore: bigint;
}

export interface LolChallengesUITitle {
  contentId: string;
  itemId: bigint;
  name: string;
}

export interface LolChampSelectChampGridChampion {
  disabled: boolean;
  freeToPlay: boolean;
  freeToPlayForQueue: boolean;
  freeToPlayReward: boolean;
  id: bigint;
  masteryChestGranted: boolean;
  masteryLevel: bigint;
  masteryPoints: bigint;
  name: string;
  owned: boolean;
  positionsFavorited: Array<string>;
  rented: boolean;
  roles: Array<string>;
  selectionStatus: LolChampSelectChampionSelection;
  squarePortraitPath: string;
}

export interface LolChampSelectChampSelectAction {
  actorCellId: bigint;
  championId: bigint;
  completed: boolean;
  id: bigint;
  isAllyAction: boolean;
  type: string;
}

export interface LolChampSelectChampSelectBannedChampions {
  myTeamBans: Array<bigint>;
  numBans: bigint;
  theirTeamBans: Array<bigint>;
}

export interface LolChampSelectChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolChampSelectChampSelectMySelection {
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  wardSkinId: bigint;
}

export interface LolChampSelectChampSelectPinDropNotification {
  mapSide: string;
  pinDropSummoners: Array<LolChampSelectChampSelectPinDropSummoner>;
}

export interface LolChampSelectChampSelectPinDropSummoner {
  isLocalSummoner: boolean;
  isPlaceholder: boolean;
  lane: string;
  lanePosition: bigint;
  position: string;
  slotId: bigint;
}

export interface LolChampSelectChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: bigint;
  championId: bigint;
  championPickIntent: bigint;
  entitledFeatureType: string;
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  summonerId: bigint;
  team: bigint;
  wardSkinId: bigint;
}

export interface LolChampSelectChampSelectSession {
  actions: Array<boolean | undefined>;
  allowBattleBoost: boolean;
  allowDuplicatePicks: boolean;
  allowLockedEvents: boolean;
  allowRerolling: boolean;
  allowSkinSelection: boolean;
  bans: LolChampSelectChampSelectBannedChampions;
  benchChampionIds: Array<bigint>;
  benchEnabled: boolean;
  boostableSkinCount: bigint;
  chatDetails: LolChampSelectChampSelectChatRoomDetails;
  counter: bigint;
  entitledFeatureState: LolChampSelectEntitledFeatureState;
  gameId: bigint;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
  isSpectating: boolean;
  localPlayerCellId: bigint;
  lockedEventIndex: bigint;
  myTeam: Array<LolChampSelectChampSelectPlayerSelection>;
  recoveryCounter: bigint;
  rerollsRemaining: bigint;
  skipChampionSelect: boolean;
  theirTeam: Array<LolChampSelectChampSelectPlayerSelection>;
  timer: LolChampSelectChampSelectTimer;
  trades: Array<LolChampSelectChampSelectTradeContract>;
}

export interface LolChampSelectChampSelectSummoner {
  actingBackgroundAnimationState: string;
  activeActionType: string;
  areSummonerActionsComplete: boolean;
  assignedPosition: string;
  banIntentSquarePortratPath: string;
  cellId: bigint;
  championIconStyle: string;
  championName: string;
  currentChampionVotePercentInteger: bigint;
  entitledFeatureType: string;
  isActingNow: boolean;
  isDonePicking: boolean;
  isOnPlayersTeam: boolean;
  isPickIntenting: boolean;
  isPlaceholder: boolean;
  isSelf: boolean;
  pickSnipedClass: string;
  shouldShowActingBar: boolean;
  shouldShowBanIntentIcon: boolean;
  shouldShowExpanded: boolean;
  shouldShowRingAnimations: boolean;
  shouldShowSelectedSkin: boolean;
  shouldShowSpells: boolean;
  showMuted: boolean;
  showTrades: boolean;
  skinId: bigint;
  skinSplashPath: string;
  slotId: bigint;
  spell1IconPath: string;
  spell2IconPath: string;
  statusMessageKey: string;
  summonerId: bigint;
  tradeId: bigint;
}

export interface LolChampSelectChampSelectTimer {
  adjustedTimeLeftInPhase: bigint;
  internalNowInEpochMs: bigint;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: bigint;
}

export interface LolChampSelectChampSelectTradeContract {
  cellId: bigint;
  id: bigint;
  state: LolChampSelectChampSelectTradeState;
}

export interface LolChampSelectChampSelectTradeNotification {
  id: bigint;
  initiatedByLocalPlayer: boolean;
  otherSummonerId: bigint;
  requesterChampionName: string;
  requesterChampionSplashPath: string;
  responderChampionName: string;
  responderIndex: bigint;
  state: LolChampSelectChampSelectTradeState;
}

export type LolChampSelectChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT"
  | "DECLINED"
  | "CANCELLED"
  | "ACCEPTED";

export interface LolChampSelectChampionQuestSkinInfo {
  splashPath: string;
  tiers: Array<LolChampSelectCollectionsChampionQuestSkin>;
  tilePath: string;
}

export interface LolChampSelectChampionSelection {
  banIntented: boolean;
  banIntentedByMe: boolean;
  isBanned: boolean;
  pickIntented: boolean;
  pickIntentedByMe: boolean;
  pickIntentedPosition: string;
  pickedByOtherOrBanned: boolean;
  selectedByMe: boolean;
}

export interface LolChampSelectCollectionsChampionChroma {
  championId: bigint;
  chromaPath: string;
  colors: Array<string>;
  disabled: boolean;
  id: bigint;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  stillObtainable: boolean;
}

export interface LolChampSelectCollectionsChampionMastery {
  championId: bigint;
  championLevel: bigint;
  championPoints: bigint;
  chestGranted: boolean;
}

export interface LolChampSelectCollectionsChampionMinimal {
  banVoPath: string;
  baseSplashPath: string;
  chooseVoPath: string;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: bigint;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  roles: Array<string>;
  squarePortraitPath: string;
  stingerSfxPath: string;
}

export interface LolChampSelectCollectionsChampionQuestSkin {
  championId: bigint;
  chromaPath: string;
  disabled: boolean;
  id: bigint;
  isBase: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: bigint;
  stillObtainable: boolean;
  tilePath: string;
}

export interface LolChampSelectCollectionsChampionSkin {
  championId: bigint;
  chromaPath: string;
  chromas: Array<LolChampSelectCollectionsChampionChroma>;
  disabled: boolean;
  emblems: Array<LolChampSelectCollectionsChampionSkinEmblem>;
  id: bigint;
  isBase: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  questSkinInfo: LolChampSelectChampionQuestSkinInfo;
  rarityGemPath: string;
  splashPath: string;
  splashVideoPath: string;
  stillObtainable: boolean;
  tilePath: string;
}

export interface LolChampSelectCollectionsChampionSkinEmblem {
  emblemPath: LolChampSelectCollectionsChampionSkinEmblemPath;
  name: string;
  positions: LolChampSelectCollectionsChampionSkinEmblemPosition;
}

export interface LolChampSelectCollectionsChampionSkinEmblemPath {
  large: string;
  small: string;
}

export interface LolChampSelectCollectionsChampionSkinEmblemPosition {
  horizontal: string;
  vertical: string;
}

export interface LolChampSelectCollectionsChampionSkinMinimal {
  championId: bigint;
  chromaPath: string;
  disabled: boolean;
  id: bigint;
  isBase: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  splashPath: string;
  stillObtainable: boolean;
  tilePath: string;
}

export interface LolChampSelectCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolChampSelectCollectionsRental;
}

export interface LolChampSelectCollectionsRental {
  rented: boolean;
}

export interface LolChampSelectEntitledFeatureState {
  additionalRerolls: bigint;
  unlockedSkinIds: Array<bigint>;
}

export interface LolChampSelectGameDataSummonerSpell {
  iconPath: string;
  id: bigint;
}

export interface LolChampSelectLegacyChampSelectAction {
  actorCellId: bigint;
  championId: bigint;
  completed: boolean;
  id: bigint;
  isAllyAction: boolean;
  isInProgress: boolean;
  pickTurn: bigint;
  type: string;
}

export interface LolChampSelectLegacyChampSelectBannedChampions {
  myTeamBans: Array<bigint>;
  numBans: bigint;
  theirTeamBans: Array<bigint>;
}

export interface LolChampSelectLegacyChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolChampSelectLegacyChampSelectMySelection {
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  wardSkinId: bigint;
}

export interface LolChampSelectLegacyChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: bigint;
  championId: bigint;
  championPickIntent: bigint;
  playerType: string;
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  summonerId: bigint;
  team: bigint;
  wardSkinId: bigint;
}

export interface LolChampSelectLegacyChampSelectSession {
  actions: Array<boolean | undefined>;
  allowBattleBoost: boolean;
  allowRerolling: boolean;
  allowSkinSelection: boolean;
  bans: LolChampSelectLegacyChampSelectBannedChampions;
  chatDetails: LolChampSelectLegacyChampSelectChatRoomDetails;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
  isSpectating: boolean;
  localPlayerCellId: bigint;
  myTeam: Array<LolChampSelectLegacyChampSelectPlayerSelection>;
  rerollsRemaining: bigint;
  theirTeam: Array<LolChampSelectLegacyChampSelectPlayerSelection>;
  timer: LolChampSelectLegacyChampSelectTimer;
  trades: Array<LolChampSelectLegacyChampSelectTradeContract>;
}

export interface LolChampSelectLegacyChampSelectTimer {
  adjustedTimeLeftInPhase: bigint;
  internalNowInEpochMs: bigint;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: bigint;
}

export interface LolChampSelectLegacyChampSelectTradeContract {
  cellId: bigint;
  id: bigint;
  state: LolChampSelectLegacyChampSelectTradeState;
}

export type LolChampSelectLegacyChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";

export interface LolChampSelectLegacyChampionSelectPreferences {
  skins: bigint | undefined;
  spells: boolean | undefined | undefined;
}

export interface LolChampSelectLegacyCollectionsChampion {
  active: boolean;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: bigint;
  ownership: LolChampSelectLegacyCollectionsOwnership;
}

export interface LolChampSelectLegacyCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolChampSelectLegacyCollectionsRental;
}

export interface LolChampSelectLegacyCollectionsRental {
  rented: boolean;
}

export interface LolChampSelectLegacyGameflowGameClient {
  running: boolean;
  visible: boolean;
}

export interface LolChampSelectLegacyGameflowGameData {
  queue: LolChampSelectLegacyQueue;
}

export interface LolChampSelectLegacyGameflowGameDodge {
  dodgeIds: Array<bigint>;
  state: LolChampSelectLegacyGameflowGameDodgeState;
}

export type LolChampSelectLegacyGameflowGameDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export type LolChampSelectLegacyGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolChampSelectLegacyGameflowSession {
  gameClient: LolChampSelectLegacyGameflowGameClient;
  gameData: LolChampSelectLegacyGameflowGameData;
  phase: LolChampSelectLegacyGameflowPhase;
}

export interface LolChampSelectLegacyInventoryItemWithPayload {
  itemId: bigint;
  payload: boolean | undefined;
}

export interface LolChampSelectLegacyLobbyStatus {
  allowedPlayAgain: boolean;
  isCustom: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  memberSummonerIds: Array<bigint>;
  queueId: bigint;
}

export interface LolChampSelectLegacyLoginSession {
  connected: boolean;
  state: LolChampSelectLegacyLoginSessionStates;
  summonerId: bigint;
}

export type LolChampSelectLegacyLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolChampSelectLegacyPlayerStatus {
  currentLobbyStatus: LolChampSelectLegacyLobbyStatus;
  lastQueuedLobbyStatus: LolChampSelectLegacyLobbyStatus;
}

export interface LolChampSelectLegacyQueue {
  areFreeChampionsAllowed: boolean;
  gameTypeConfig: LolChampSelectLegacyQueueGameTypeConfig;
}

export interface LolChampSelectLegacyQueueGameTypeConfig {
  allowTrades: boolean;
  battleBoost: boolean;
  maxAllowableBans: bigint;
  name: string;
}

export interface LolChampSelectLegacySettingCategoryResource {
  data: LolChampSelectLegacyChampionSelectPreferences;
  schemaVersion: bigint;
}

export interface LolChampSelectLegacySummoner {
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolChampSelectLegacyTeamBoost {
  availableSkins: Array<bigint>;
  ipReward: bigint;
  ipRewardForPurchaser: bigint;
  price: bigint;
  skinUnlockMode: string;
  summonerName: string;
  unlocked: boolean;
}

export interface LolChampSelectLoginSession {
  summonerId: bigint;
}

export interface LolChampSelectMutedPlayerInfo {
  puuid: string;
  summonerId: bigint;
}

export interface LolChampSelectSettingsResource {
  data: boolean | undefined;
  schemaVersion: bigint;
}

export interface LolChampSelectSfxNotification {
  delayMillis: bigint;
  eventType: string;
  path: string;
}

export interface LolChampSelectSkinSelectorChildSkin {
  championId: bigint;
  chromaPreviewPath: string;
  colors: Array<string>;
  disabled: boolean;
  id: bigint;
  isBase: boolean;
  isChampionUnlocked: boolean;
  isUnlockedFromEntitledFeature: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  parentSkinId: bigint;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: bigint;
  stillObtainable: boolean;
  tilePath: string;
  unlocked: boolean;
}

export interface LolChampSelectSkinSelectorInfo {
  championName: string;
  isSkinGrantedFromBoost: boolean;
  selectedChampionId: bigint;
  selectedSkinId: bigint;
  showSkinSelector: boolean;
  skinSelectionDisabled: boolean;
}

export interface LolChampSelectSkinSelectorSkin {
  championId: bigint;
  childSkins: Array<LolChampSelectSkinSelectorChildSkin>;
  chromaPreviewPath: string;
  disabled: boolean;
  emblems: Array<LolChampSelectCollectionsChampionSkinEmblem>;
  groupSplash: string;
  id: bigint;
  isBase: boolean;
  isChampionUnlocked: boolean;
  isUnlockedFromEntitledFeature: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  rarityGemPath: string;
  splashPath: string;
  splashVideoPath: string;
  stillObtainable: boolean;
  tilePath: string;
  unlocked: boolean;
}

export interface LolChampSelectTeamBoost {
  availableSkins: Array<bigint>;
  ipReward: bigint;
  ipRewardForPurchaser: bigint;
  price: bigint;
  skinUnlockMode: string;
  summonerId: bigint;
  unlocked: boolean;
}

export interface LolChampionsChampionQuestSkinInfo {
  collectionCardPath: string;
  collectionDescription: string;
  descriptionInfo: Array<LolChampionsQuestSkinDescriptionInfo>;
  name: string;
  splashPath: string;
  tiers: Array<LolChampionsCollectionsChampionQuestSkin>;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsCollectionsChampion {
  active: boolean;
  alias: string;
  banVoPath: string;
  baseLoadScreenPath: string;
  baseSplashPath: string;
  botEnabled: boolean;
  chooseVoPath: string;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: bigint;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  passive: LolChampionsCollectionsChampionSpell;
  purchased: bigint;
  rankedPlayEnabled: boolean;
  roles: Array<string>;
  skins: Array<LolChampionsCollectionsChampionSkin>;
  spells: Array<LolChampionsCollectionsChampionSpell>;
  squarePortraitPath: string;
  stingerSfxPath: string;
  tacticalInfo: LolChampionsCollectionsChampionTacticalInfo;
  title: string;
}

export interface LolChampionsCollectionsChampionChroma {
  championId: bigint;
  chromaPath: string;
  colors: Array<string>;
  disabled: boolean;
  id: bigint;
  lastSelected: boolean;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  stillObtainable: boolean;
}

export interface LolChampionsCollectionsChampionMinimal {
  active: boolean;
  alias: string;
  banVoPath: string;
  baseLoadScreenPath: string;
  baseSplashPath: string;
  botEnabled: boolean;
  chooseVoPath: string;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: bigint;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  purchased: bigint;
  rankedPlayEnabled: boolean;
  roles: Array<string>;
  squarePortraitPath: string;
  stingerSfxPath: string;
  title: string;
}

export interface LolChampionsCollectionsChampionPlayableCounts {
  championsFreeToPlay: bigint;
  championsFreeToPlayReward: bigint;
  championsOwned: bigint;
  championsRented: bigint;
}

export interface LolChampionsCollectionsChampionQuestSkin {
  championId: bigint;
  chromaPath: string;
  collectionSplashVideoPath: string;
  description: string;
  disabled: boolean;
  id: bigint;
  isBase: boolean;
  lastSelected: boolean;
  loadScreenPath: string;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: bigint;
  stillObtainable: boolean;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsCollectionsChampionSkin {
  championId: bigint;
  chromaPath: string;
  chromas: Array<LolChampionsCollectionsChampionChroma>;
  collectionSplashVideoPath: string;
  disabled: boolean;
  emblems: Array<LolChampionsCollectionsChampionSkinEmblem>;
  featuresText: string;
  id: bigint;
  isBase: boolean;
  lastSelected: boolean;
  loadScreenPath: string;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  questSkinInfo: LolChampionsChampionQuestSkinInfo;
  rarityGemPath: string;
  skinType: string;
  splashPath: string;
  splashVideoPath: string;
  stillObtainable: boolean;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsCollectionsChampionSkinEmblem {
  emblemPath: LolChampionsCollectionsChampionSkinEmblemPath;
  name: string;
  positions: LolChampionsCollectionsChampionSkinEmblemPosition;
}

export interface LolChampionsCollectionsChampionSkinEmblemPath {
  large: string;
  small: string;
}

export interface LolChampionsCollectionsChampionSkinEmblemPosition {
  horizontal: string;
  vertical: string;
}

export interface LolChampionsCollectionsChampionSkinMinimal {
  championId: bigint;
  chromaPath: string;
  disabled: boolean;
  id: bigint;
  isBase: boolean;
  lastSelected: boolean;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  splashPath: string;
  stillObtainable: boolean;
  tilePath: string;
}

export interface LolChampionsCollectionsChampionSpell {
  description: string;
  name: string;
}

export interface LolChampionsCollectionsChampionTacticalInfo {
  damageType: string;
  difficulty: bigint;
  style: bigint;
}

export interface LolChampionsCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolChampionsCollectionsRental;
}

export interface LolChampionsCollectionsRental {
  endDate: bigint;
  purchaseDate: bigint;
  rented: boolean;
  winCountRemaining: bigint;
}

export interface LolChampionsGameDataChampion {
  alias: string;
  banVoPath: string;
  chooseVoPath: string;
  id: bigint;
  name: string;
  passive: LolChampionsGameDataChampionSpell;
  roles: Array<string>;
  skins: Array<LolChampionsGameDataChampionSkin>;
  spells: Array<LolChampionsGameDataChampionSpell>;
  squarePortraitPath: string;
  stingerSfxPath: string;
  tacticalInfo: LolChampionsGameDataChampionTacticalInfo;
  title: string;
}

export interface LolChampionsGameDataChampionChroma {
  chromaPath: string;
  colors: Array<string>;
  id: bigint;
}

export interface LolChampionsGameDataChampionQuestSkin {
  collectionSplashVideoPath: string;
  description: string;
  id: bigint;
  loadScreenPath: string;
  name: string;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: bigint;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsGameDataChampionSkin {
  chromaPath: string;
  chromas: Array<LolChampionsGameDataChampionChroma>;
  collectionSplashVideoPath: string;
  emblems: Array<LolChampionsCollectionsChampionSkinEmblem>;
  featuresText: string;
  id: bigint;
  loadScreenPath: string;
  name: string;
  questSkinInfo: LolChampionsGameDataQuestSkinInfo;
  rarityGemPath: string;
  skinType: string;
  splashPath: string;
  splashVideoPath: string;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsGameDataChampionSpell {
  description: string;
  name: string;
}

export interface LolChampionsGameDataChampionSummary {
  id: bigint;
}

export interface LolChampionsGameDataChampionTacticalInfo {
  damageType: string;
  difficulty: bigint;
  style: bigint;
}

export interface LolChampionsGameDataQuestSkinDescriptionInfo {
  description: string;
  iconPath: string;
  title: string;
}

export interface LolChampionsGameDataQuestSkinInfo {
  collectionCardPath: string;
  collectionDescription: string;
  descriptionInfo: Array<LolChampionsGameDataQuestSkinDescriptionInfo>;
  name: string;
  splashPath: string;
  tiers: Array<LolChampionsGameDataChampionQuestSkin>;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsLcdsDynamicClientConfig {
  DisabledChampions: boolean | undefined;
}

export interface LolChampionsLoginSession {
  connected: boolean;
  state: LolChampionsLoginSessionStates;
  summonerId: bigint;
}

export type LolChampionsLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export type LolChampionsLoyaltyStatus =
  | "LEGACY"
  | "REWARDS_GRANT"
  | "EXPIRY"
  | "CHANGE"
  | "REVOKE"
  | "DISABLED";

export interface LolChampionsLoyaltyStatusNotification {
  status: LolChampionsLoyaltyStatus;
}

export interface LolChampionsPlayerNotification {
  backgroundUrl: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolChampionsQuestSkinDescriptionInfo {
  description: string;
  iconPath: string;
  title: string;
}

export interface LolChampionsSummoner {
  summonerId: bigint;
  summonerLevel: bigint;
}

export type LolChatAccountState = "offline" | "mobile" | "away" | "chat" | "dnd";

export interface LolChatActiveConversationResource {
  id: string;
}

export interface LolChatAuthResourcePlain {
  gasToken: boolean | undefined;
  password: string;
  username: string;
}

export interface LolChatAuthResourceRsoAccessToken {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export type LolChatAuthType = "plain" | "rsoCreate" | "rsoRefresh";

export interface LolChatBlocked {
  game_name: string;
  game_tag: string;
  name: string;
  pid: string;
}

export interface LolChatBlockedList {
  blocked: Array<LolChatBlocked>;
}

export interface LolChatBlockedPlayerResource {
  gameName: string;
  gameTag: string;
  icon: bigint;
  id: string;
  name: string;
  pid: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolChatChampSelection {
  championId: bigint;
  selectedSkinIndex: bigint;
  summonerInternalName: string;
}

export interface LolChatChatDomainConfig {
  ChampSelectDomainName: string;
  ClubDomainName: string;
  CustomGameDomainName: string;
  P2PDomainName: string;
  PostGameDomainName: string;
}

export interface LolChatChatFriendUpdate {
  group: string;
  note: string;
  pid: string;
}

export interface LolChatChatMessage {
  body: string;
  cid: string;
  game_name: string;
  game_tag: string;
  id: string;
  mid: string;
  name: string;
  pid: string;
  read: boolean;
  time: string;
  type: LolChatMessageType;
}

export interface LolChatChatMessageList {
  messages: Array<LolChatChatMessage>;
}

export interface LolChatChatPlatformLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  idToken: string;
  isNewPlayer: boolean;
  puuid: string;
  state: LolChatChatPlatformLoginSessionState;
  summonerId: bigint;
  userAuthToken: string;
  username: string;
}

export type LolChatChatPlatformLoginSessionState =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolChatChatServiceDynamicClientConfig {
  ChatDomain: LolChatChatDomainConfig;
  LcuSocial: LolChatLcuSocialConfig;
}

export type LolChatChatSessionState = "disconnected" | "connecting" | "connected";

export interface LolChatChatSettings {
  bounceDockIconEnabled: boolean;
  "chat-status-message": string;
  chatFilterDisabled: boolean;
  chatGBG: boolean;
  chatGroupMobile: boolean;
  chatGroupOffline: boolean;
  chatWindow: LolChatChatWindowSettings;
  chatWindowDockedHeight: bigint;
  "closed-conversations": bigint | undefined;
  friendRequestToastsDisabled: boolean;
  "hidden-conversations": bigint | undefined;
  linkClickWarningEnabled: boolean;
  messageNotificationsEnabled: boolean;
  moreUnreadsEnabled: boolean;
  "muted-conversations": bigint | undefined;
  recentlyPlayedFirstOpen: boolean;
  recentlyPlayedOpen: boolean;
  "roster-group-collapsed": boolean | undefined;
  showWhenTypingEnabled: boolean;
  sortBy: string;
  usePlayerPreferences: boolean;
}

export interface LolChatChatSummoner {
  displayName: string;
  profileIconId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
  unnamed: boolean;
}

export interface LolChatChatWindowSettings {
  detached: boolean;
  height: bigint;
  left: bigint;
  top: bigint;
  width: bigint;
}

export interface LolChatCidBody {
  cid: string;
}

export type LolChatConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface LolChatConfigStatus {
  readiness: LolChatConfigReadinessEnum;
}

export type LolChatConfigType = "public" | "player";

export interface LolChatContentCookies {
  content_id: string;
  content_path: string;
  cookies: Array<LolChatcookie>;
}

export interface LolChatConversation {
  cid: string;
  mid: string;
  muted: boolean;
  type: string;
  unread_count: bigint;
}

export interface LolChatConversationJoinFederated {
  domain: string;
  hidden: boolean;
  id: string;
  password: string;
  targetRegion: string;
  type: string;
}

export interface LolChatConversationList {
  conversations: Array<LolChatConversation>;
}

export interface LolChatConversationMessageResource {
  body: string;
  fromId: string;
  fromPid: string;
  fromSummonerId: bigint;
  id: string;
  isHistorical: boolean;
  timestamp: string;
  type: string;
}

export interface LolChatConversationResource {
  gameName: string;
  gameTag: string;
  id: string;
  inviterId: string;
  isMuted: boolean;
  lastMessage: LolChatConversationMessageResource;
  name: string;
  password: string;
  pid: string;
  targetRegion: string;
  type: string;
  unreadMessageCount: bigint;
}

export interface LolChatConversationUpdate {
  cid: string;
  hidden: boolean;
  muted: boolean;
}

export interface LolChatDebugResource {
  asyncWaitInterval: bigint;
  enableChatFiltering: boolean;
  failAllChatLogin: boolean;
  failNextChatLogin: boolean;
  failNextChatLogout: boolean;
  failNextKeepAlive: boolean;
  isXMPPLoggingEnabled: boolean;
  keepAliveInterval: bigint;
  maxReconnectInterval: bigint;
  minReconnectInterval: bigint;
  silenceChatWhileInGame: boolean;
  triggerChatDisconnect: boolean;
}

export interface LolChatError {
  cid: string;
  class: string;
  code: string;
  id: string;
  pid: string;
  subtype: string;
  text: string;
  ts: string;
  type: string;
}

export interface LolChatErrorList {
  errors: Array<LolChatError>;
}

export interface LolChatErrorResource {
  code: bigint;
  from: string;
  id: bigint;
  message: string;
  text: string;
}

export interface LolChatFriend {
  displayGroup: string;
  game_name: string;
  game_tag: string;
  group: string;
  name: string;
  note: string;
  pid: string;
  puuid: string;
  region: string;
}

export interface LolChatFriendCountsResource {
  numFriends: bigint;
  numFriendsAvailable: bigint;
  numFriendsAway: bigint;
  numFriendsInChampSelect: bigint;
  numFriendsInGame: bigint;
  numFriendsInQueue: bigint;
  numFriendsMobile: bigint;
  numFriendsOnline: bigint;
}

export interface LolChatFriendGroup {
  collapsed: boolean;
  isMetaGroup: boolean;
  name: string;
}

export interface LolChatFriendGroupCreate {
  collapsed: boolean;
  name: string;
}

export interface LolChatFriendGroupList {
  groups: Array<LolChatFriendGroup>;
}

export interface LolChatFriendGroupOrder {
  groups: Array<string>;
}

export interface LolChatFriendGroupUpdate {
  collapsed: boolean;
  name: string;
  new_name: string;
}

export interface LolChatFriendList {
  friends: Array<LolChatFriend>;
}

export interface LolChatFriendRequest {
  game_name: string;
  game_tag: string;
  name: string;
  note: string;
  pid: string;
  puuid: string;
  region: string;
  subscription: LolChatFriendSubscriptionType;
}

export interface LolChatFriendRequestAdd {
  game_name: string;
  game_tag: string;
  name: string;
  note: string;
  pid: string;
  puuid: string;
  region: string;
}

export type LolChatFriendRequestDirection = "in" | "out" | "both";

export interface LolChatFriendRequestList {
  requests: Array<LolChatFriendRequest>;
}

export interface LolChatFriendRequestResource {
  direction: LolChatFriendRequestDirection;
  gameName: string;
  gameTag: string;
  icon: bigint;
  id: string;
  name: string;
  note: string;
  pid: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolChatFriendResource {
  availability: string;
  displayGroupId: bigint;
  displayGroupName: string;
  gameName: string;
  gameTag: string;
  groupId: bigint;
  groupName: string;
  icon: bigint;
  id: string;
  isP2PConversationMuted: boolean;
  lastSeenOnlineTimestamp: string;
  lol: string | undefined;
  name: string;
  note: string;
  patchline: string;
  pid: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  statusMessage: string;
  summary: string;
  summonerId: bigint;
  time: bigint;
}

export type LolChatFriendSubscriptionType = "pending_out" | "pending_in";

export interface LolChatGameDataChampionSummary {
  alias: string;
  id: bigint;
}

export interface LolChatGameflowGameData {
  gameId: bigint;
  playerChampionSelections: Array<LolChatChampSelection>;
  queue: LolChatQueue;
  teamOne: Array<LolChatTeamPlayerEntry>;
  teamTwo: Array<LolChatTeamPlayerEntry>;
}

export interface LolChatGameflowGameMap {
  id: bigint;
}

export type LolChatGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolChatGameflowSession {
  gameData: LolChatGameflowGameData;
  map: LolChatGameflowGameMap;
  phase: LolChatGameflowPhase;
}

export interface LolChatGroupResource {
  collapsed: boolean;
  id: bigint;
  isLocalized: boolean;
  isMetaGroup: boolean;
  name: string;
  priority: bigint;
}

export interface LolChatIdBody {
  id: string;
}

export interface LolChatLcuSocialConfig {
  AggressiveScanning: boolean;
  ForceChatFilter: boolean;
  QueueJobGraceSeconds: bigint;
  ReplaceRichMessages: boolean;
  SilenceChatWhileInGame: boolean;
  allowGroupByGame: boolean;
  gameNameTaglineEnabled: boolean;
  platformToRegionMap: string | undefined;
}

export type LolChatLeagueDivision = "I" | "II" | "III" | "IV" | "V" | "NA";

export type LolChatLeagueQueueType =
  | "NONE"
  | "RANKED_SOLO_5x5"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_TFT";

export type LolChatLeagueTier =
  | "NONE"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export interface LolChatLobbyMember {
  id: bigint;
  isOwner: boolean;
}

export interface LolChatLobbyPlayerStatus {
  currentLobbyStatus: LolChatLobbyStatus;
  lastQueuedLobbyStatus: LolChatLobbyStatus;
}

export interface LolChatLobbyStatus {
  customSpectatorPolicy: LolChatQueueCustomGameSpectatorPolicy;
  isCustom: boolean;
  isLeader: boolean;
  isPracticeTool: boolean;
  queueId: bigint;
}

export interface LolChatMessage {
  body: string;
  cid: string;
  game_name: string;
  game_tag: string;
  id: string;
  mid: string;
  name: string;
  pid: string;
  read: boolean;
  time: string;
  type: string;
}

export interface LolChatMessageList {
  messages: Array<LolChatMessage>;
}

export interface LolChatMessagePost {
  cid: string;
  message: string;
  type: LolChatMessageType;
}

export interface LolChatMessageSend {
  message: string;
  type: string;
}

export type LolChatMessageType = "chat" | "groupchat" | "dm" | "system";

export interface LolChatMultiGamePresence {
  actor: string;
  details: string;
  game_name: string;
  game_tag: string;
  location: string;
  msg: string;
  name: string;
  patchline: string;
  pid: string;
  platform: string;
  private: string;
  privateJwt: string;
  product: string;
  puuid: string;
  region: string;
  resource: string;
  state: LolChatAccountState;
  summary: string;
  time: bigint;
}

export interface LolChatMultiGamePresenceList {
  presences: Array<LolChatMultiGamePresence>;
}

export interface LolChatMultiGamePresenceSharedPayload {
  actor: string;
  details: string;
  location: string;
  patchline: string;
  platform: string;
  product: string;
  time: bigint;
}

export interface LolChatMultiGamePresenceUpdate {
  msg: string;
  private: string;
  privateJwt: string;
  shared: LolChatMultiGamePresenceSharedPayload;
  sharedJwt: string;
  state: LolChatAccountState;
}

export interface LolChatMutedPlayerInfo {
  puuid: string;
  summonerId: bigint;
}

export interface LolChatNameBody {
  name: string;
}

export interface LolChatParticipant {
  cid: string;
  game_name: string;
  game_tag: string;
  muted: boolean;
  name: string;
  pid: string;
  puuid: string;
  region: string;
}

export interface LolChatParticipantList {
  participants: Array<LolChatParticipant>;
}

export interface LolChatPatchlineMetadata {
  content_cookies: Array<LolChatContentCookies>;
  content_paths: string | undefined;
  id: string;
  product_id: string;
}

export interface LolChatPidBody {
  pid: string;
}

export interface LolChatPlayerPreferences {
  data: string;
  hash: string;
  modified: bigint;
  type: string;
}

export interface LolChatPluginRegionLocaleChangedEvent {
  locale: string;
  region: string;
}

export interface LolChatPresenceProduct {
  product: string;
}

export interface LolChatProductMetadata {
  id: string;
  name: string;
  patchlines: LolChatPatchlineMetadata | undefined;
}

export interface LolChatProductMetadataMap {
  products: LolChatProductMetadata | undefined;
}

export interface LolChatQueue {
  gameMode: string;
  gameTypeConfig: LolChatQueueGameTypeConfig;
  id: bigint;
  type: string;
}

export type LolChatQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export interface LolChatQueueGameTypeConfig {
  id: bigint;
  name: string;
}

export interface LolChatRankedQueueStats {
  division: LolChatLeagueDivision;
  games: bigint;
  isProvisional: boolean;
  queueType: LolChatLeagueQueueType;
  tier: LolChatLeagueTier;
  wins: bigint;
}

export interface LolChatRankedStats {
  highestPreviousSeasonAchievedDivision: LolChatLeagueDivision;
  highestPreviousSeasonAchievedTier: LolChatLeagueTier;
  highestRankedEntry: LolChatRankedQueueStats;
  rankedRegaliaLevel: bigint;
}

export interface LolChatRsoAuthorization {
  currentAccountId: bigint;
  currentPlatformId: string;
  subject: string;
}

export interface LolChatSanitizeRequest {
  aggressiveScan: boolean;
  level: bigint;
  texts: Array<string>;
}

export interface LolChatSanitizeResponse {
  modified: boolean;
  texts: Array<string>;
}

export interface LolChatSanitizerStatus {
  locale: string;
  platformID: string;
  ready: boolean;
}

export interface LolChatSession {
  game_name: string;
  game_tag: string;
  loaded: boolean;
  name: string;
  pid: string;
  resource: string;
  state: LolChatChatSessionState;
}

export interface LolChatSessionResource {
  sessionExpire: bigint;
  sessionState: LolChatSessionState;
}

export type LolChatSessionState =
  | "initializing"
  | "connected"
  | "loaded"
  | "disconnected"
  | "shuttingdown";

export interface LolChatSettingsResource {
  data: boolean | undefined;
}

export interface LolChatSpectateGameInfoResource {
  allowObserveMode: string;
  dropInSpectateGameId: string;
  gameQueueType: string;
  puuid: string;
}

export interface LolChatSummonerStatus {
  ready: boolean;
}

export interface LolChatTeamPlayerEntry {
  summonerId: bigint;
  summonerInternalName: string;
  summonerName: string;
}

export interface LolChatTranslateRequest {
  blocking: boolean;
  keys: Array<string>;
  locale: string;
  patchline: string;
  product_id: string;
}

export interface LolChatTranslateResponse {
  results: Array<LolChatTranslateResult>;
}

export interface LolChatTranslateResult {
  found: boolean;
  key: string;
  product_id: string;
  value: string;
}

export interface LolChatUserResource {
  availability: string;
  gameName: string;
  gameTag: string;
  icon: bigint;
  id: string;
  lastSeenOnlineTimestamp: string;
  lol: string | undefined;
  name: string;
  patchline: string;
  pid: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  statusMessage: string;
  summary: string;
  summonerId: bigint;
  time: bigint;
}

export interface LolChatcookie {
  domain: string;
  expires: bigint;
  httponly: boolean;
  name: string;
  path: string;
  secure: boolean;
  url: string;
  value: string;
}

export interface LolClashBlockedPlayerResource {
  name: string;
  summonerId: bigint;
}

export interface LolClashBracket {
  id: bigint;
  isComplete: boolean;
  matches: Array<BracketMatch>;
  period: bigint;
  rosters: Array<BracketRoster>;
  size: bigint;
  tournamentId: bigint;
  version: bigint;
}

export interface LolClashBracketReadyNotification {
  bracketId: bigint;
  tournamentId: bigint;
}

export interface LolClashBracketUpdateNotification {
  bracketId: bigint;
  currentMatchId: bigint;
  notifyReason: LolClashRosterNotifyReason;
  tournamentId: bigint;
}

export interface LolClashChangeIconRequest {
  iconColorId: bigint;
  iconId: bigint;
}

export interface LolClashChangeNameRequest {
  name: string;
}

export interface LolClashClashConfig {
  CheckPartiesRegistration: boolean;
  DisabledEvents: Array<string>;
  DisabledReason: string;
  EnabledState: LolClashClashState;
  EstimatedEnableTimeMillis: bigint;
  EventSendingEnabled: boolean;
  HonorLevelRequired: bigint;
  HonorRefreshRetrySeconds: bigint;
  IconConfig: string;
  IsPlaymodeRestrictionEnabled: boolean;
  MaxTimeBeforeLockinNotifySeconds: bigint;
  MinClashNotificationsSummonerLevel: bigint;
  MinClashSummonerLevel: bigint;
  RewardGrantRetryIntervalSeconds: bigint;
  Visibility: LolClashClashVisibility;
  VoiceEobQuitDelaySeconds: bigint;
  VoiceNoDelayAutoStartSeconds: bigint;
  VoiceRandomStartMaxSeconds: bigint;
  VoiceRandomStartMinSeconds: bigint;
  VoiceRetryCountLimit: bigint;
  VoiceRetryDelaySeconds: bigint;
}

export interface LolClashClashDisabledConfig {
  disabledReason: string;
  estimatedEnableTimeMillis: bigint;
}

export interface LolClashClashSettingCategory {
  simpleStateFlagIds: Array<string>;
}

export type LolClashClashState = "Disabled" | "Enabled";

export type LolClashClashVisibility = "Hidden" | "Visible";

export interface LolClashClientFailedInvite {
  exception: string;
  playerId: bigint;
}

export interface LolClashClubsSummoner {
  displayName: string;
  profileIconId: bigint;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolClashEogPlayerUpdateDTO {
  bid: bigint;
  bracketSize: bigint;
  earnedRewards: Array<ClashRewardDefinition>;
  gameId: bigint;
  lowestPosition: bigint;
  rewardProgress: Array<ClashRewardDefinition>;
  seasonVp: bigint;
  themeVp: bigint;
  tier: bigint;
  tournamentId: bigint;
  winner: boolean;
}

export interface LolClashFindPlayers {
  count: bigint;
  invitationId: string;
  memberId: bigint;
  page: bigint;
}

export interface LolClashFindTeams {
  count: bigint;
  page: bigint;
  tournamentId: bigint;
}

export type LolClashFoundationError =
  | "CLASH_NOT_INITIALIZED"
  | "CLASH_DISABLED"
  | "DESERIALIZATION_FAILED"
  | "GAMEFLOW_UNAVAILABLE"
  | "LOL_INVENTORY_NOT_READY"
  | "INVALID_SIMPLE_STATE_FLAG";

export interface LolClashGameflowAvailability {
  isAvailable: boolean;
}

export interface LolClashGameflowGameDodge {
  dodgeIds: Array<bigint>;
  state: LolClashMatchmakingDodgeState;
}

export interface LolClashGameflowPartiesRegistrationStatus {
  complete: boolean;
  errorCodes: Array<string>;
}

export type LolClashGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolClashGameflowSession {
  phase: LolClashGameflowPhase;
}

export interface LolClashInviteSubRequest {
  replacedSummonerId: bigint;
  substituteSummonerId: bigint;
}

export type LolClashKdaClassification = "LOW" | "AVERAGE" | "HIGH";

export interface LolClashKickRequest {
  summonerId: bigint;
}

export interface LolClashLftState {
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
}

export interface LolClashLoginSession {
  state: LolClashLoginSessionState;
  summonerId: bigint;
}

export type LolClashLoginSessionState = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolClashMatchmakingDodgeData {
  dodgerId: bigint;
  state: LolClashMatchmakingDodgeState;
}

export type LolClashMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export type LolClashMatchmakingDodgeWarning = "None" | "Warning" | "Penalty";

export interface LolClashMatchmakingReadyCheckResource {
  declinerIds: Array<bigint>;
  dodgeWarning: LolClashMatchmakingDodgeWarning;
  playerResponse: LolClashMatchmakingReadyCheckResponse;
  state: LolClashMatchmakingReadyCheckState;
  timer: number;
}

export type LolClashMatchmakingReadyCheckResponse = "None" | "Accepted" | "Declined";

export type LolClashMatchmakingReadyCheckState =
  | "Invalid"
  | "InProgress"
  | "EveryoneReady"
  | "StrangerNotReady"
  | "PartyNotReady"
  | "Error";

export interface LolClashMatchmakingSearchResource {
  dodgeData: LolClashMatchmakingDodgeData;
  queueId: bigint;
  readyCheck: LolClashMatchmakingReadyCheckResource;
}

export interface LolClashMemberBanUnbanNotification {
  notifyPlayerId: bigint;
  notifyPuuid: string;
  notifyReason: LolClashNotifyReason;
  playerId: bigint;
  reason: string;
  tournaments: Array<MemberBanUnbanTournament>;
}

export interface LolClashNoShowPingDTO {
  dodgeTime: bigint;
  matchId: bigint;
  tournamentId: bigint;
}

export interface LolClashNoShowPingResponse {
  data: string;
  dodgeTime: bigint;
  matchId: bigint;
  tournamentId: bigint;
}

export interface LolClashNoShowPingResponseData {
  dodgeTime: bigint;
  gameflowState: LolClashGameflowPhase;
  isPlaymodeRestricted: boolean;
  loginTime: bigint;
  readyCheckInfo: LolClashReadyCheckInfo;
}

export type LolClashNotifyReason =
  | "SUGGESTION"
  | "DECLINE_SUGGESTION"
  | "ACCEPT_SUGGESTION"
  | "REVOKE_SUGGESTION"
  | "DECLINE_SELFJOIN"
  | "ACCEPT_SELFJOIN"
  | "REVOKE_SELFJOIN"
  | "SELFJOIN"
  | "READY"
  | "UNREADY"
  | "OWNER_CLOSE"
  | "DISMISS"
  | "ROSTER_DELETE"
  | "OWNER_TRANSFER"
  | "CHANGE_LOGO"
  | "CHANGE_NAME"
  | "CHANGE_SHORTNAME"
  | "CHANGE_POSITION"
  | "CHANGE_NAMETAGLOGO"
  | "CHANGE_LFT"
  | "INVITE"
  | "RESENT_INVITE"
  | "DECLINE_INVITE"
  | "ACCEPT_INVITE"
  | "REVOKE_INVITE"
  | "LEAVE"
  | "CAPTAIN_LEAVE"
  | "KICK"
  | "SET_TICKET"
  | "OFFER_TICKET"
  | "REVOKED_TICKET"
  | "DECLINE_TICKET"
  | "ACCEPT_TICKET"
  | "REWARD_GRANT_FAILED"
  | "REWARD_GRANT_RETRY"
  | "REVERTED_REGISTRATION"
  | "BAN"
  | "UNBAN"
  | "MEMBER_BAN"
  | "TEAMMATE_BAN"
  | "TEAMMATE_UNBAN";

export interface LolClashOfferTicketRequest {
  ticketAmount: bigint;
  ticketType: TicketType;
}

export interface LolClashPendingRosterNotification {
  notifyReason: LolClashNotifyReason;
  pendingRoster: PendingRosterDTO;
  sourcePlayerId: bigint;
  targetPlayerId: bigint;
}

export interface LolClashPlayerChatRoster {
  endTimeMs: bigint;
  iconColorId: bigint;
  iconId: bigint;
  invitationId: string;
  isRegistered: boolean;
  key: string;
  logoUrl: string;
  name: string;
  playerState: LolClashPlayerState;
  shortName: string;
  startTimeMs: bigint;
  tournamentId: bigint;
  tournamentState: LolClashTournamentState;
}

export interface LolClashPlayerData {
  isClashBanned: boolean;
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
  tickets: bigint | undefined;
  tier: bigint;
}

export interface LolClashPlayerNotification {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  dismissible: boolean;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolClashPlayerNotificationData {
  keySuffix: string;
  notification: LolClashPlayerNotification;
  notifyReason: LolClashNotifyReason;
  rosterNotifyReason: LolClashRosterNotifyReason;
  sourceSummonerId: bigint;
  targetSummonerId: bigint;
  tournamentNotifyReason: LolClashTournamentNotifyReason;
}

export interface LolClashPlayerRewards {
  seasonVp: bigint;
  themeVp: Array<LolClashThemeVp>;
}

export type LolClashPlayerState =
  | "NO_ROSTER"
  | "PENDING_ROSTER"
  | "REGISTERED_ROSTER"
  | "BRACKET_ROSTER"
  | "ELIMINATED";

export interface LolClashPlayerTournamentData {
  bracketId: bigint;
  isSub: boolean;
  rosterId: string;
  state: LolClashPlayerState;
}

export interface LolClashPlayerUpdateNotification {
  notifyReason: LolClashNotifyReason;
  player: PlayerDTO;
}

export interface LolClashPlaymodeRestrictedInfo {
  isRestricted: boolean;
  phaseId: bigint;
  presenceState: LolClashPresenceState;
  readyForVoice: boolean;
  rosterId: string;
  tournamentId: bigint;
}

export type LolClashPresenceState = "NONE" | "LOCKED_IN" | "SCOUTING";

export interface LolClashProfileInfo {
  honorLevel: bigint;
}

export interface LolClashQueue {
  areFreeChampionsAllowed: boolean;
  category: LolClashQueueGameCategory;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolClashQueueGameTypeConfig;
  id: bigint;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  mapId: bigint;
  maxLevel: bigint;
  maxSummonerLevelForFirstWinOfTheDay: bigint;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  name: string;
  numPlayersPerTeam: bigint;
  queueAvailability: LolClashQueueAvailability;
  queueRewards: LolClashQueueReward;
  shortName: string;
  spectatorEnabled: boolean;
  type: string;
}

export type LolClashQueueAvailability = "Available" | "PlatformDisabled" | "DoesntMeetRequirements";

export type LolClashQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolClashQueueGameTypeConfig {
  advancedLearningQuests: boolean;
  allowTrades: boolean;
  banMode: string;
  banTimerDuration: bigint;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  id: bigint;
  learningQuests: boolean;
  mainPickTimerDuration: bigint;
  maxAllowableBans: bigint;
  name: string;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: bigint;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolClashQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<bigint>;
}

export interface LolClashRankedScoutingMember {
  championScoutingData: Array<LolClashRankedScoutingTopChampion>;
  playerId: bigint;
}

export interface LolClashRankedScoutingTopChampion {
  championId: bigint;
  gameCount: bigint;
  kda: string;
  kdaClassification: LolClashKdaClassification;
  rank: bigint;
  winCount: bigint;
  winRate: bigint;
}

export interface LolClashReadyCheckInfo {
  acceptError: string;
  isAcceptSuccessful: boolean;
  queueId: bigint;
  readyCheckResource: LolClashMatchmakingReadyCheckResource;
  timestampLastClashGameflowDodge: bigint;
  timestampReceived: bigint;
  timestampResponseComplete: bigint;
}

export interface LolClashRegisteredRosterNotification {
  notifyReason: LolClashRosterNotifyReason;
  roster: RosterDTO;
}

export interface LolClashRoster {
  availableLogos: Array<RewardLogo>;
  captainSummonerId: bigint;
  currentBracketWins: bigint;
  highTierVariance: boolean;
  iconColorId: bigint;
  iconId: bigint;
  id: string;
  invitationId: string;
  isActiveInCurrentPhase: boolean;
  isClashBanned: boolean;
  isCurrentBracketComplete: boolean;
  isEliminated: boolean;
  isRegistered: boolean;
  lft: boolean;
  losses: bigint;
  members: Array<LolClashRosterMember>;
  name: string;
  numCompletedPeriods: bigint;
  phaseInfos: Array<LolClashRosterPhaseInfo>;
  points: bigint;
  shortName: string;
  suggestedInvites: Array<LolClashSuggestedInvite>;
  tier: bigint;
  tournamentId: bigint;
  wins: bigint;
  withdraw: RosterWithdraw;
}

export interface LolClashRosterDetails {
  iconColorId: bigint;
  iconId: bigint;
  name: string;
  shortName: string;
}

export interface LolClashRosterDynamicStateNotification {
  notifyReason: LolClashRosterNotifyReason;
  rosterDynamicState: RosterDynamicStateDTO;
  sourcePlayerId: bigint;
}

export interface LolClashRosterMatchAggregatedStats {
  durationMs: bigint;
  gameId: bigint;
  kills: bigint;
  loserBracket: boolean;
  opponentIconColorId: bigint;
  opponentIconId: bigint;
  opponentKills: bigint;
  opponentShortName: string;
  playerChampionIds: bigint | undefined;
  round: bigint;
  win: boolean;
}

export interface LolClashRosterMember {
  buyinType: TicketType;
  currentBuyin: bigint;
  incomingOffers: Array<LolClashTicketOffer>;
  inviteType: InviteType;
  inviterId: bigint;
  isSubForOtherTeam: boolean;
  isSubbedOut: boolean;
  isSubstitute: boolean;
  position: Position;
  previousBuyin: bigint;
  replacedSummonerId: bigint;
  state: LolClashRosterMemberState;
  summonerId: bigint;
  tier: bigint;
}

export type LolClashRosterMemberState =
  | "DECLINED"
  | "PENDING"
  | "NOT_READY"
  | "FORCED_NOT_READY"
  | "READY";

export type LolClashRosterNotifyReason =
  | "ROSTER_SET_TICKET"
  | "ROSTER_OFFER_TICKET"
  | "ROSTER_ACCEPT_TICKET"
  | "ROSTER_DECLINE_TICKET"
  | "ROSTER_REVOKED_TICKET"
  | "BYE_AUTO_WIN"
  | "BRACKET_READY"
  | "CHANGE_POSITION"
  | "EOG_PLAYER_UPDATE"
  | "REGISTERED"
  | "RESTRICTION_AUTO_WIN"
  | "PHASE_UNREADY"
  | "PHASE_READY"
  | "PHASE_CHECKIN"
  | "PHASE_BACKOUT"
  | "PERIOD_CANCEL"
  | "PERIOD_SPLIT"
  | "GAME_COMPLETED"
  | "GAME_SCHEDULED"
  | "GAME_STARTED"
  | "GAME_STARTED_ERROR"
  | "GAME_END_ERROR"
  | "QUEUE_DODGE"
  | "OWNER_TRANSFER"
  | "SUB_INVITE"
  | "SUB_ACCEPT"
  | "SUB_DECLINE"
  | "SUB_REVOKE"
  | "SUB_SUGGEST"
  | "SUB_ACCEPTSUGGEST"
  | "SUB_DECLINESUGGEST"
  | "SUB_RECLAIM"
  | "SUB_LEAVE"
  | "MEMBER_SUBBED"
  | "MEMBER_SUB_REVOKE"
  | "MEMBER_SUB_RECLAIM"
  | "VOTE_WITHDRAW_UPDATE"
  | "VOTE_WITHDRAW_DISMISS"
  | "WITHDRAW"
  | "ROUND_COMPLETE"
  | "NO_SHOW_PING"
  | "TIER_CHANGED"
  | "BRACKET_ROSTER_REMOVED"
  | "BRACKET_ROSTER_REPLACED"
  | "CANNOT_FIND_MATCH"
  | "BANNED_SMURF"
  | "BANNED_SMURF_TEAMMATE"
  | "BANNED_SMURF_OPPONENT"
  | "TICKET_CHARGED"
  | "TICKET_REFUNDED"
  | "TICKET_COULD_NOT_BE_CHARGED"
  | "SUB_INVITE_SELF"
  | "GAME_START_RETRY"
  | "GAME_START_RETRY_SUMMONERS"
  | "GAME_START_RETRY_OPPONENT"
  | "GAME_START_FAILED"
  | "GAME_START_FAILED_SUMMONERS"
  | "GAME_START_FAILED_OPPONENT"
  | "GAME_RESCHEDULED";

export interface LolClashRosterPeriodAggregatedStats {
  bracketSize: bigint;
  matchStats: Array<LolClashRosterMatchAggregatedStats>;
  period: bigint;
  playerBids: bigint | undefined;
  time: bigint;
}

export interface LolClashRosterPhaseInfo {
  checkinTime: bigint;
  isBracketComplete: boolean;
  period: bigint;
  phaseId: bigint;
}

export interface LolClashRosterPlayerAggregatedStats {
  rawStatsMax: bigint | undefined;
  rawStatsSum: bigint | undefined;
  sub: boolean;
}

export interface LolClashRosterPlayerNotification {
  notifyReason: LolClashRosterNotifyReason;
  playerNotificationDTO: PlayerDTO;
  roster: RosterDTO;
  sourcePlayerId: bigint;
}

export interface LolClashRosterStats {
  endTimeMs: bigint;
  periodStats: Array<LolClashRosterPeriodAggregatedStats>;
  playerStats: LolClashRosterPlayerAggregatedStats | undefined;
  rosterIconColorId: bigint;
  rosterIconId: bigint;
  rosterId: bigint;
  rosterName: string;
  rosterShortName: string;
  startTimeMs: bigint;
  tier: bigint;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  tournamentPeriods: bigint;
  tournamentThemeId: bigint;
}

export interface LolClashRosterWithdrawNotification {
  notifyReason: LolClashRosterNotifyReason;
  rosterId: bigint;
  sourcePlayerId: bigint;
  tournamentId: bigint;
  version: bigint;
  withdraw: RosterWithdraw;
}

export interface LolClashScoutingChampionMastery {
  championId: bigint;
  championLevel: bigint;
  championPoints: bigint;
}

export interface LolClashScoutingChampions {
  playerId: bigint;
  topMasteries: Array<LolClashScoutingChampionMastery>;
  topSeasonChampions: Array<LolClashScoutingSeasonChampion>;
  totalMasteryScore: bigint;
}

export interface LolClashScoutingSeasonChampion {
  championId: bigint;
  gameCount: bigint;
  kda: string;
  kdaClassification: LolClashKdaClassification;
  winCount: bigint;
  winRate: bigint;
}

export interface LolClashSetPositionRequest {
  position: Position;
}

export interface LolClashSetTicketRequest {
  ticketAmount: bigint;
  ticketType: TicketType;
}

export interface LolClashSettingCategory {
  data: boolean | undefined;
  schemaVersion: bigint;
}

export interface LolClashSimpleStateFlag {
  id: string;
  status: LolClashSimpleStateStatus;
}

export type LolClashSimpleStateStatus = "UNACKNOWLEDGED" | "ACKNOWLEDGED";

export interface LolClashSuggestedInvite {
  suggesterSummonerId: bigint;
  summonerId: bigint;
}

export interface LolClashSuggestionInvite {
  inviteePlayers: Array<bigint>;
  inviterId: bigint;
}

export interface LolClashSuggestionInvitee {
  captainId: bigint;
  inviteeId: bigint;
}

export interface LolClashTeamOpenState {
  captainId: bigint;
  invitationId: string;
  openTeam: boolean;
}

export interface LolClashThemeVp {
  themeId: bigint;
  vp: bigint;
}

export interface LolClashThirdPartyApiPlayer {
  role: string;
  summonerId: bigint;
}

export interface LolClashThirdPartyApiRoster {
  captain: LolClashThirdPartyApiPlayer;
  members: Array<LolClashThirdPartyApiPlayer>;
}

export interface LolClashTicketOffer {
  amount: bigint;
  isAccepted: boolean;
  summonerId: bigint;
  ticketType: TicketType;
}

export interface LolClashTournament {
  allowRosterCreation: boolean;
  bracketFormationInitDelayMs: bigint;
  bracketFormationIntervalMs: bigint;
  bracketSize: string;
  buyInOptions: Array<bigint>;
  buyInOptionsPremium: Array<bigint>;
  endTimeMs: bigint;
  entryFee: bigint;
  id: bigint;
  isHonorRestrictionEnabled: boolean;
  isRankedRestrictionEnabled: boolean;
  isSmsRestrictionEnabled: boolean;
  lastThemeOfSeason: boolean;
  lft: boolean;
  maxInvites: bigint;
  maxSubstitutes: bigint;
  maxSuggestionsPerPlayer: bigint;
  nameLocKey: string;
  nameLocKeySecondary: string;
  phases: Array<LolClashTournamentPhase>;
  resumeTime: bigint;
  rewardConfig: Array<ClashRewardConfigClient>;
  rosterCreateDeadline: bigint;
  rosterSize: bigint;
  scoutingDurationMs: bigint;
  startTimeMs: bigint;
  status: TournamentStatusEnum;
  themeId: bigint;
  tierConfigs: Array<TierConfig>;
}

export interface LolClashTournamentGameEnd {
  bracketId: bigint;
  oldBracket: LolClashBracket;
  tournamentId: bigint;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
}

export interface LolClashTournamentHistoryAndWinners {
  tournamentHistory: Array<LolClashTournament>;
  tournamentWinners: LolClashTournamentWinnerHistory;
}

export type LolClashTournamentNotifyReason =
  | "NEW_TOURNAMENT"
  | "UPDATE_TOURNAMENT"
  | "CANCEL_TOURNAMENT"
  | "CANCEL_PERIOD"
  | "ADD_PHASE"
  | "UPDATE_PHASE"
  | "REVERT_PHASE"
  | "UPDATE_STATUS";

export interface LolClashTournamentPhase {
  cancelled: boolean;
  capacityStatus: CapacityEnum;
  id: bigint;
  limitTiers: Array<bigint>;
  lockinStartTime: bigint;
  period: bigint;
  scoutingStartTime: bigint;
  tournamentId: bigint;
}

export interface LolClashTournamentPhaseProgressNotificationDTO {
  capacityStatus: CapacityEnum;
  phaseId: bigint;
  tournamentId: bigint;
}

export type LolClashTournamentState =
  | "UPCOMING"
  | "IDLE"
  | "LOCK_IN"
  | "SCOUTING"
  | "IN_GAME"
  | "RESULTS";

export interface LolClashTournamentStateInfo {
  currentPhaseId: bigint;
  nextPhaseId: bigint;
  nextStateChangeTime: bigint;
  numRemainingPeriods: bigint;
  state: LolClashTournamentState;
  tournamentId: bigint;
}

export interface LolClashTournamentSummary {
  bracketId: bigint;
  rosterId: string;
  state: LolClashTournamentState;
  tournamentId: bigint;
}

export interface LolClashTournamentUpdatedNotification {
  currentRetry: bigint;
  maxRetry: bigint;
  missingPlayerIds: Array<bigint>;
  notifyReason: LolClashRosterNotifyReason;
  retrySeconds: bigint;
}

export interface LolClashTournamentUpdatedNotificationDTO {
  reason: LolClashTournamentNotifyReason;
  relevantPhaseId: bigint;
  tournament: TournamentDTO;
  tournamentId: bigint;
}

export interface LolClashTournamentWinnerHistory {
  tournamentId: bigint;
  winners: Array<LolClashTournamentWinnerInfo>;
}

export interface LolClashTournamentWinnerInfo {
  averageWinDuration: bigint;
  createTime: bigint;
  logo: bigint;
  logoColor: bigint;
  name: string;
  playerIds: Array<bigint>;
  rosterId: bigint;
  shortName: string;
  tier: bigint;
}

export interface LolClashUserResource {
  lol: string | undefined;
  summonerId: bigint;
}

export interface LolCollectionsAccountIdAndSummonerId {
  summonerId: bigint;
}

export interface LolCollectionsCollectionsChampionMastery {
  championId: bigint;
  championLevel: bigint;
  championPoints: bigint;
  championPointsSinceLastLevel: bigint;
  championPointsUntilNextLevel: bigint;
  chestGranted: boolean;
  formattedChampionPoints: string;
  formattedMasteryGoal: string;
  highestGrade: string;
  lastPlayTime: bigint;
  playerId: bigint;
  tokensEarned: bigint;
}

export interface LolCollectionsCollectionsChestEligibility {
  earnableChests: bigint;
  maximumChests: bigint;
  nextChestRechargeTime: bigint;
}

export interface LolCollectionsCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolCollectionsCollectionsRental;
}

export interface LolCollectionsCollectionsRental {
  endDate: bigint;
  purchaseDate: bigint;
  rented: boolean;
  winCountRemaining: bigint;
}

export interface LolCollectionsCollectionsSummonerBackdrop {
  accountId: bigint;
  backdropImage: string;
  backdropMaskColor: string;
  backdropType: LolCollectionsCollectionsSummonerBackdropType;
  backdropVideo: string;
  championId: bigint;
  profileIconId: bigint;
  puuid: string;
  summonerId: bigint;
}

export type LolCollectionsCollectionsSummonerBackdropType =
  | "default"
  | "summoner-icon"
  | "highest-mastery"
  | "specified-skin";

export interface LolCollectionsCollectionsSummonerSpells {
  spells: Array<bigint>;
  summonerId: bigint;
}

export interface LolCollectionsCollectionsTopChampionMasteries {
  masteries: Array<LolCollectionsCollectionsChampionMastery>;
  score: bigint;
  summonerId: bigint;
}

export interface LolCollectionsCollectionsWardSkin {
  description: string;
  id: bigint;
  name: string;
  ownership: LolCollectionsCollectionsOwnership;
  wardImagePath: string;
  wardShadowImagePath: string;
}

export interface LolCollectionsCollectionsWardSkinList {
  wardSkinList: Array<bigint>;
}

export interface LolCollectionsGameDataChampionMasteries {
  tree: LolCollectionsGameDataChampionMasteryTree;
}

export interface LolCollectionsGameDataChampionMasteryGroup {
  id: bigint;
  rows: Array<LolCollectionsGameDataChampionMasteryRow>;
}

export interface LolCollectionsGameDataChampionMasteryRow {
  masteries: Array<bigint>;
}

export interface LolCollectionsGameDataChampionMasteryTree {
  groups: Array<LolCollectionsGameDataChampionMasteryGroup>;
}

export interface LolCollectionsGameDataChampionQuestSkin {
  id: bigint;
  name: string;
  splashPath: string;
  splashVideoPath: string;
}

export interface LolCollectionsGameDataChampionSkin {
  id: bigint;
  isBase: boolean;
  name: string;
  questSkinInfo: LolCollectionsGameDataQuestSkinInfo;
  splashPath: string;
  splashVideoPath: string;
}

export interface LolCollectionsGameDataChampionSummary {
  id: bigint;
}

export interface LolCollectionsGameDataQuestSkinInfo {
  tiers: Array<LolCollectionsGameDataChampionQuestSkin>;
}

export interface LolCollectionsGameDataSplashMetadata {
  CalculatedColor: string;
  OverrideColor: string;
}

export interface LolCollectionsInventoryItem {
  inventoryType: string;
  itemId: bigint;
  ownershipType: LolCollectionsItemOwnershipType;
  purchaseDate: string;
  quantity: bigint;
  uuid: string;
}

export interface LolCollectionsInventoryItemDTO {
  entitlementId: string;
  entitlementTypeId: string;
  expirationDate: string;
  f2p: boolean;
  instanceId: string;
  instanceTypeId: string;
  inventoryType: string;
  itemId: bigint;
  loyalty: boolean;
  lsb: boolean;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: bigint;
  rental: boolean;
  usedInGameDate: string;
  wins: bigint;
}

export interface LolCollectionsInventoryItemWithPayload {
  inventoryType: string;
  itemId: bigint;
  ownershipType: LolCollectionsItemOwnershipType;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: bigint;
  uuid: string;
}

export type LolCollectionsItemOwnershipType = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolCollectionsLcdsDynamicClientConfig {
  DisabledChampions: boolean | undefined;
}

export interface LolCollectionsLoginSession {
  connected: boolean;
  state: LolCollectionsLoginSessionStates;
  summonerId: bigint;
}

export type LolCollectionsLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolCollectionsNumberFormattingBehavior {
  digitsForThousandsSeperator: bigint;
  trimTrailingZerosAfterDecimal: boolean;
  westernNumberGrouping: boolean;
}

export interface LolCollectionsNumberFormattingData {
  billionAbbreviation: string;
  decimalSeperator: string;
  hourAbbreviation: string;
  kilometersAbbreviation: string;
  metersAbbreviation: string;
  millionAbbreviation: string;
  minuteAbbreviation: string;
  numberFormattingBehavior: LolCollectionsNumberFormattingBehavior;
  oneHundredMillionAbbreviation: string;
  percentageFormat: string;
  secondAbbreviation: string;
  tenThousandAbbreviation: string;
  thousandAbbreviation: string;
  thousandSeperator: string;
  trillionAbbreviation: string;
}

export interface LolCollectionsPlayerNotification {
  backgroundUrl: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolCollectionsSummoner {
  accountId: bigint;
  profileIconId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolCollectionsSummonerProfile {
  backgroundSkinId: bigint;
}

export interface LolCollectionsSummonerProfileUpdate {
  key: string;
  value: boolean | undefined;
}

export interface LolCollectionsTPVSaveResponseDTO {
  data: string;
}

export interface LolContentTargetingAccountIdAndSummonerId {
  summonerId: bigint;
}

export interface LolContentTargetingCollectionsChampionMastery {
  championId: bigint;
  championLevel: bigint;
  championPoints: bigint;
  lastPlayTime: bigint;
  playerId: bigint;
}

export interface LolContentTargetingContentTargetingFilterResponse {
  filters: Array<string>;
}

export interface LolContentTargetingContentTargetingLocaleResponse {
  locale: string;
}

export interface LolContentTargetingGameflowGameData {
  gameId: bigint;
  queue: LolContentTargetingQueue;
}

export type LolContentTargetingGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolContentTargetingGameflowSession {
  gameData: LolContentTargetingGameflowGameData;
  phase: LolContentTargetingGameflowPhase;
}

export interface LolContentTargetingGeoInfo {
  city: string;
  country: string;
  region: string;
}

export interface LolContentTargetingGeoInfoResponse {
  errorMessage: string;
  geoInfo: LolContentTargetingGeoInfo;
  isInitialized: boolean;
  isLatest: boolean;
  success: boolean;
}

export interface LolContentTargetingLoginSession {
  idToken: string;
  puuid: string;
  state: LolContentTargetingLoginSessionState;
  summonerId: bigint;
}

export type LolContentTargetingLoginSessionState =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolContentTargetingMission {
  completedDate: bigint;
  id: string;
  internalName: string;
  status: string;
}

export interface LolContentTargetingPlatformConfig {
  ABTestFilterEnabled: boolean;
  ABTestFilterGroups: bigint;
  ABTestFilterSalt: bigint;
  AsynchronousEventHandlerSetupDelayInSeconds: bigint;
  Enabled: boolean;
  EntitlementsFilterEnabled: boolean;
  EntitlementsPrefix: string;
  LevelFilterEnabled: boolean;
  LocationFiltersEnabled: boolean;
  MainFilterEnabled: boolean;
  Mapping: string;
  MasteryFilterChampionLimit: bigint;
  MasteryFilterDaysSinceLastPlayed: bigint;
  MasteryFilterEnabled: boolean;
  MasteryFilterLevelThreshold: bigint;
  MissionsFilterEnabled: boolean;
  RankFilterEnabled: boolean;
  RankedFilterEnabled: boolean;
  SummonerIconFilterEnabled: boolean;
  TargetingAttributeStorageBaseUri: string;
  TargetingAttributeStorageEnabled: boolean;
  TasIngestionDelayInSeconds: bigint;
}

export interface LolContentTargetingQueue {
  category: LolContentTargetingQueueGameCategory;
  gameMode: string;
  id: bigint;
  mapId: bigint;
}

export type LolContentTargetingQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export type LolContentTargetingRankedDivision = "NA" | "I" | "II" | "III" | "IV" | "V";

export type LolContentTargetingRankedQueue =
  | "NONE"
  | "RANKED_SOLO_5x5"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_TFT";

export interface LolContentTargetingRankedQueueStats {
  division: LolContentTargetingRankedDivision;
  isProvisional: boolean;
  queueType: LolContentTargetingRankedQueue;
  tier: LolContentTargetingRankedTier;
}

export interface LolContentTargetingRankedStats {
  highestRankedEntry: LolContentTargetingRankedQueueStats;
  queues: Array<LolContentTargetingRankedQueueStats>;
}

export type LolContentTargetingRankedTier =
  | "NONE"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export interface LolContentTargetingRegionLocale {
  locale: string;
}

export interface LolContentTargetingSettingsResource {
  data: boolean | undefined;
}

export interface LolContentTargetingSummoner {
  profileIconId: bigint;
  summonerLevel: bigint;
}

export interface LolContentTargetingTargetingAttributes {
  result: boolean | undefined | undefined;
}

export interface LolContentTargetingToken {
  entitlements: Array<string>;
}

export interface LolCosmeticsAccountSettingsCategoryDataResource {
  typeToLastOpenedDate: bigint | undefined;
}

export interface LolCosmeticsCapOffer {
  active: boolean;
  createdDate: string;
  id: string;
  label: string;
  merchantId: string;
  payload: Array<LolCosmeticsCapOfferPayloadEntry>;
  productId: string;
  startDate: string;
  typeId: string;
}

export interface LolCosmeticsCapOfferPayloadEntry {
  fulfillmentTypeId: string;
  inventoryTypeUUID: string;
  itemInstanceId: string;
  itemPriceMap: bigint | undefined;
}

export interface LolCosmeticsCompanionsGroupViewModel {
  groupId: bigint;
  groupName: string;
  items: Array<LolCosmeticsCosmeticsCompanionViewModel>;
  numAvailable: bigint;
  numOwned: bigint;
}

export interface LolCosmeticsCompanionsGroupedViewModel {
  defaultItemId: bigint;
  groups: Array<LolCosmeticsCompanionsGroupViewModel>;
  selectedLoadoutItem: LolCosmeticsCosmeticsCompanionViewModel;
}

export interface LolCosmeticsCosmeticSettingsResource {
  data: LolCosmeticsAccountSettingsCategoryDataResource;
  schemaVersion: bigint;
}

export interface LolCosmeticsCosmeticsCompanion {
  color: string;
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: bigint;
  itemId: bigint;
  level: bigint;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: bigint;
  selected: boolean;
  species: string;
  upgrades: Array<string>;
}

export interface LolCosmeticsCosmeticsCompanionViewModel {
  color: string;
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: bigint;
  isRecentItem: boolean;
  itemId: bigint;
  level: bigint;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  offerData: LolCosmeticsCapOffer;
  owned: boolean;
  purchaseDate: string;
  rarityValue: bigint;
  selected: boolean;
  species: string;
  starShardsPrice: LolCosmeticsCosmeticsOfferPrice;
  upgrades: Array<LolCosmeticsCosmeticsCompanionViewModel>;
}

export interface LolCosmeticsCosmeticsOfferPrice {
  offerId: string;
  price: bigint;
}

export interface LolCosmeticsCosmeticsTFTDamageSkin {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: bigint;
  groupName: string;
  itemId: bigint;
  level: bigint;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: bigint;
  selected: boolean;
  upgrades: Array<string>;
}

export interface LolCosmeticsCosmeticsTFTDamageSkinViewModel {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: bigint;
  groupName: string;
  isRecentItem: boolean;
  itemId: bigint;
  level: bigint;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: bigint;
  selected: boolean;
  upgrades: Array<LolCosmeticsCosmeticsTFTDamageSkinViewModel>;
}

export interface LolCosmeticsCosmeticsTFTMapSkin {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: bigint;
  groupName: string;
  itemId: bigint;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: bigint;
  selected: boolean;
}

export interface LolCosmeticsCosmeticsTFTMapSkinViewModel {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: bigint;
  groupName: string;
  isRecentItem: boolean;
  itemId: bigint;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: bigint;
  selected: boolean;
}

export interface LolCosmeticsGameDataCompanion {
  TFTOnly: boolean;
  colorName: string;
  contentId: string;
  description: string;
  itemId: bigint;
  level: bigint;
  loadoutsIcon: string;
  name: string;
  rarityValue: bigint;
  speciesId: bigint;
  speciesName: string;
  upgrades: Array<string>;
}

export interface LolCosmeticsGameDataTFTDamageSkin {
  contentId: string;
  description: string;
  groupId: bigint;
  groupName: string;
  itemId: bigint;
  level: bigint;
  loadoutsIcon: string;
  name: string;
  rarityValue: bigint;
}

export interface LolCosmeticsGameDataTFTMapSkin {
  contentId: string;
  description: string;
  groupId: bigint;
  groupName: string;
  itemId: bigint;
  loadoutsIcon: string;
  name: string;
  rarityValue: bigint;
}

export interface LolCosmeticsLoadout {
  id: string;
  itemId: bigint;
  loadout: LolCosmeticsLoadoutItem | undefined;
  name: string;
  scope: string;
}

export interface LolCosmeticsLoadoutItem {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
}

export interface LolCosmeticsLoadoutUpdateDto {
  loadout: LolCosmeticsLoadoutItem | undefined;
}

export interface LolCosmeticsTFTDamageSkinGroupViewModel {
  groupId: bigint;
  groupName: string;
  items: Array<LolCosmeticsCosmeticsTFTDamageSkinViewModel>;
  numAvailable: bigint;
  numOwned: bigint;
}

export interface LolCosmeticsTFTDamageSkinGroupedViewModel {
  defaultItemId: bigint;
  groups: Array<LolCosmeticsTFTDamageSkinGroupViewModel>;
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTDamageSkinViewModel;
}

export interface LolCosmeticsTFTMapSkinGroupViewModel {
  groupId: bigint;
  groupName: string;
  items: Array<LolCosmeticsCosmeticsTFTMapSkinViewModel>;
  numAvailable: bigint;
  numOwned: bigint;
}

export interface LolCosmeticsTFTMapSkinGroupedViewModel {
  defaultItemId: bigint;
  groups: Array<LolCosmeticsTFTMapSkinGroupViewModel>;
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTMapSkinViewModel;
}

export interface LolCosmeticsTFTSettingsDataResource {
  iconOverride: string;
}

export interface LolCosmeticsTFTSettingsResource {
  data: LolCosmeticsTFTSettingsDataResource;
  schemaVersion: bigint;
}

export interface LolCosmeticsUserResource {
  lol: string | undefined;
  summonerId: bigint;
}

export interface LolDiscordRpGameDataChampionSummary {
  alias: string;
  id: bigint;
  name: string;
}

export interface LolDiscordRpPartyPresenceData {
  maxPlayers: bigint;
  partyId: string;
  queueId: bigint;
  summoners: Array<bigint>;
}

export interface LolEmailVerificationAccessToken {
  expiry: bigint;
  token: string;
}

export interface LolEmailVerificationEmailUpdate {
  email: string;
  password: string;
}

export interface LolEmailVerificationEmailVerificationSession {
  email: string;
  emailVerified: boolean;
  fatalError: boolean;
}

export interface LolEmailVerificationRegionLocale {
  locale: string;
  region: string;
  webLanguage: string;
  webRegion: string;
}

export interface LolEmailVerificationRemoteEmailVerificationSession {
  email: string;
  emailVerified: boolean;
}

export interface LolEmailVerificationValidationStatus {
  emailStatus: string;
}

export interface LolEndOfGameChampionMasteryGrade {
  championId: bigint;
  grade: string;
  playerId: bigint;
}

export interface LolEndOfGameChampionMasteryMini {
  championId: bigint;
  championLevel: bigint;
  playerId: bigint;
}

export interface LolEndOfGameChampionMasteryUpdate {
  bonusPointsGained: bigint;
  championId: bigint;
  gameId: bigint;
  grade: string;
  hasLeveledUp: boolean;
  id: string;
  level: bigint;
  levelUpList: Array<LolEndOfGameChampionMasteryMini>;
  memberGrades: Array<LolEndOfGameChampionMasteryGrade>;
  playerId: bigint;
  pointsBeforeGame: bigint;
  pointsGained: bigint;
  pointsGainedIndividualContribution: bigint;
  pointsSinceLastLevelBeforeGame: bigint;
  pointsUntilNextLevelAfterGame: bigint;
  pointsUntilNextLevelBeforeGame: bigint;
  score: bigint;
}

export interface LolEndOfGameEndOfGamePlayer {
  botPlayer: boolean;
  championId: bigint;
  detectedTeamPosition: string;
  elo: bigint;
  eloChange: bigint;
  gameId: bigint;
  isReportingDisabled: boolean;
  items: Array<bigint>;
  leaver: boolean;
  leaves: bigint;
  level: bigint;
  losses: bigint;
  profileIconId: bigint;
  selectedPosition: string;
  skinIndex: bigint;
  skinName: string;
  spell1Id: bigint;
  spell2Id: bigint;
  stats: boolean | undefined;
  summonerId: bigint;
  summonerName: string;
  teamId: bigint;
  userId: bigint;
  wins: bigint;
}

export interface LolEndOfGameEndOfGamePlayerComplaintV2 {
  comment: string;
  gameId: bigint;
  offenses: string;
  reportedSummonerId: bigint;
}

export interface LolEndOfGameEndOfGamePlayerReport {
  comment: string;
  gameId: bigint;
  offense: string;
  reportedPuuid: string;
}

export interface LolEndOfGameEndOfGamePoints {
  pointChangeFromChampionsOwned: bigint;
  pointChangeFromGameplay: bigint;
  pointsUntilNextReroll: bigint;
  pointsUsed: bigint;
  previousPoints: bigint;
  rerollCount: bigint;
  totalPoints: bigint;
}

export interface LolEndOfGameEndOfGameStats {
  accountId: bigint;
  basePoints: bigint;
  battleBoostIpEarned: bigint;
  boostIpEarned: bigint;
  boostXpEarned: bigint;
  causedEarlySurrender: boolean;
  championId: bigint;
  coOpVsAiMinutesLeftToday: bigint;
  coOpVsAiMsecsUntilReset: bigint;
  completionBonusPoints: bigint;
  currentLevel: bigint;
  customMinutesLeftToday: bigint;
  customMsecsUntilReset: bigint;
  difficulty: string;
  earlySurrenderAccomplice: boolean;
  elo: bigint;
  eloChange: bigint;
  experienceEarned: bigint;
  experienceTotal: bigint;
  firstWinBonus: bigint;
  gameEndedInEarlySurrender: boolean;
  gameId: bigint;
  gameLength: bigint;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  globalBoostXpEarned: bigint;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  ipEarned: bigint;
  ipTotal: bigint;
  leveledUp: boolean;
  loyaltyBoostIpEarned: bigint;
  loyaltyBoostXpEarned: bigint;
  missionsXpEarned: bigint;
  myTeamStatus: string;
  newSpells: Array<bigint>;
  nextLevelXp: bigint;
  odinBonusIp: bigint;
  partyRewardsBonusIpEarned: bigint;
  pointsPenalties: boolean | undefined;
  preLevelUpExperienceTotal: bigint;
  preLevelUpNextLevelXp: bigint;
  previousLevel: bigint;
  previousXpTotal: bigint;
  queueBonusEarned: bigint;
  queueType: string;
  ranked: boolean;
  reportGameId: bigint;
  rerollData: LolEndOfGameEndOfGamePoints;
  roomName: string;
  roomPassword: string;
  rpEarned: bigint;
  sendStatsToTournamentProvider: boolean;
  skinId: bigint;
  skinIndex: bigint;
  summonerId: bigint;
  summonerName: string;
  talentPointsGained: bigint;
  teamBoost: LolEndOfGameEndOfGameTeamBoost;
  teamEarlySurrendered: boolean;
  teams: Array<LolEndOfGameEndOfGameTeam>;
  timeUntilNextFirstWinBonus: bigint;
  userId: bigint;
}

export interface LolEndOfGameEndOfGameTeam {
  championBans: Array<bigint>;
  fullId: string;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
  memberStatusString: string;
  name: string;
  players: Array<LolEndOfGameEndOfGamePlayer>;
  stats: boolean | undefined;
  tag: string;
  teamId: bigint;
}

export interface LolEndOfGameEndOfGameTeamBoost {
  availableSkins: Array<bigint>;
  ipReward: bigint;
  ipRewardForPurchaser: bigint;
  price: bigint;
  skinUnlockMode: string;
  summonerName: string;
  unlocked: boolean;
}

export interface LolEndOfGameGameClientEndOfGame {
  gameClientEOG: LolEndOfGameGameClientEndOfGameStats;
}

export interface LolEndOfGameGameClientEndOfGameStats {
  gameId: bigint;
  gameMode: string;
  isRanked: boolean;
  queueId: bigint;
  queueType: string;
  statsBlock: boolean | undefined;
}

export interface LolEndOfGameGameDataChampionSummary {
  alias: string;
  id: bigint;
  name: string;
  squarePortraitPath: string;
}

export interface LolEndOfGameGameDataCompanion {
  colorName: string;
  contentId: string;
  loadoutsIcon: string;
  speciesName: string;
}

export interface LolEndOfGameGameDataTftChampion {
  character_id: string;
  display_name: string;
  path: string;
  rarity: bigint;
  squareIconPath: string;
  traits: Array<LolEndOfGameGameDataTftTrait>;
}

export interface LolEndOfGameGameDataTftItem {
  id: bigint;
  loadoutsIcon: string;
  name: string;
}

export interface LolEndOfGameGameDataTftTrait {
  id: string;
  name: string;
}

export interface LolEndOfGameGameflowAvailability {
  state: string;
}

export interface LolEndOfGameGameflowClient {
  observerServerIp: string;
  observerServerPort: bigint;
  running: boolean;
}

export interface LolEndOfGameGameflowGameData {
  gameId: bigint;
  queue: LolEndOfGameQueue;
}

export type LolEndOfGameGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolEndOfGameGameflowSession {
  gameClient: LolEndOfGameGameflowClient;
  gameData: LolEndOfGameGameflowGameData;
  phase: LolEndOfGameGameflowPhase;
}

export interface LolEndOfGameLobbyInvitation {
  state: string;
}

export interface LolEndOfGameLoginDataPacket {
  platformId: string;
  simpleMessages: Array<LolEndOfGameSimpleMessage>;
}

export interface LolEndOfGameLoginSession {
  accountId: bigint;
  state: LolEndOfGameLoginSessionStates;
  summonerId: bigint;
}

export type LolEndOfGameLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolEndOfGameQueue {
  id: bigint;
  isRanked: boolean;
  type: string;
}

export type LolEndOfGameReportRecipientMode = "Legacy" | "Game-Agnostic" | "Combined";

export interface LolEndOfGameRerollDataBagForClientV1 {
  maximumRerolls: bigint;
  pointCostOfReroll: bigint;
  pointsGainedLastGame: bigint;
  pointsUntilNextReroll: bigint;
  rerollCount: bigint;
  totalPoints: bigint;
}

export interface LolEndOfGameSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolEndOfGameSummoner {
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
  xpSinceLastLevel: bigint;
  xpUntilNextLevel: bigint;
}

export interface LolEndOfGameTFTEndOfGameCompanionViewModel {
  colorName: string;
  icon: string;
  speciesName: string;
}

export interface LolEndOfGameTFTEndOfGameItemViewModel {
  icon: string;
  id: bigint;
  name: string;
}

export interface LolEndOfGameTFTEndOfGamePieceViewModel {
  icon: string;
  items: Array<LolEndOfGameTFTEndOfGameItemViewModel>;
  level: bigint;
  name: string;
  price: bigint;
  traits: Array<LolEndOfGameTFTEndOfGameTraitViewModel>;
}

export interface LolEndOfGameTFTEndOfGamePlayerViewModel {
  boardPieces: Array<LolEndOfGameTFTEndOfGamePieceViewModel>;
  companion: LolEndOfGameTFTEndOfGameCompanionViewModel;
  ffaStanding: bigint;
  health: bigint;
  iconId: bigint;
  isLocalPlayer: boolean;
  partnerGroupId: bigint;
  puuid: string;
  rank: bigint;
  summonerId: bigint;
  summonerName: string;
}

export interface LolEndOfGameTFTEndOfGameTraitViewModel {
  id: string;
  name: string;
}

export interface LolEndOfGameTFTEndOfGameViewModel {
  gameId: bigint;
  gameLength: bigint;
  isRanked: boolean;
  localPlayer: LolEndOfGameTFTEndOfGamePlayerViewModel;
  players: Array<LolEndOfGameTFTEndOfGamePlayerViewModel>;
  queueId: bigint;
  queueType: string;
}

export interface LolEsportStreamNotificationsESportStreamNotificationsConfig {
  beappFailureLongPollMinutes: bigint;
  notificationsAssetMagickURL: string;
  notificationsEnabled: boolean;
  notificationsLongPollMinutes: bigint;
  notificationsServiceEndpoint: string;
  notificationsServiceEndpointV2: string;
  notificationsShortPollMinutes: bigint;
  notificationsStreamGroupSlug: string;
  notificationsStreamURL: string;
  useServiceEndpointV2: boolean;
}

export interface LolEsportStreamNotificationsESportsAPI_streamgroups {
  content: string;
  id: bigint;
  live: boolean;
  slug: string;
  title: string;
}

export interface LolEsportStreamNotificationsESportsAPI_streamgroups_root {
  highlanderTournaments: Array<LolEsportStreamNotificationsEsportsAPI_highlanderTournaments>;
  streamgroups: Array<LolEsportStreamNotificationsESportsAPI_streamgroups>;
  teams: Array<LolEsportStreamNotificationsEsportsAPI_teams>;
}

export interface LolEsportStreamNotificationsESportsLiveStreams {
  liveStreams: Array<LolEsportStreamNotificationsESportsStreams>;
}

export interface LolEsportStreamNotificationsESportsStreams {
  teamAAcronym: string;
  teamAGuid: string;
  teamAId: bigint;
  teamALogoUrl: string;
  teamAName: string;
  teamBAcronym: string;
  teamBGuid: string;
  teamBId: bigint;
  teamBLogoUrl: string;
  teamBName: string;
  title: string;
  tournamentDescription: string;
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments {
  brackets: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets | undefined;
  description: string;
  id: string;
  rosters: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters | undefined;
  title: string;
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets {
  id: string;
  matches: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches | undefined;
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches {
  id: string;
  input: Array<LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster>;
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster {
  roster: string;
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters {
  id: string;
  name: string;
  team: bigint;
}

export interface LolEsportStreamNotificationsEsportsAPI_teams {
  acronym: string;
  guid: string;
  id: bigint;
  logoUrl: string;
  name: string;
  slug: string;
}

export type LolEsportStreamNotificationsGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolEsportStreamNotificationsGameflowSession {
  phase: LolEsportStreamNotificationsGameflowPhase;
}

export interface LolEsportStreamNotificationsLiveMatch {
  id: string;
  streamGroup: string;
  teams: Array<LolEsportStreamNotificationsLiveMatchTeam>;
  title: string;
  tournamentDescription: string;
}

export interface LolEsportStreamNotificationsLiveMatchTeam {
  acronym: string;
  guid: string;
  logoUrl: string;
  name: string;
}

export interface LolEsportStreamNotificationsPlayerNotificationResource {
  backgroundUrl: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolFeaturedModesAccountIdAndSummonerId {
  summonerId: bigint;
}

export interface LolFeaturedModesCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
}

export interface LolFeaturedModesCollectionsSummonerIcon {
  iconId: bigint;
  ownership: LolFeaturedModesCollectionsOwnership;
}

export interface LolFeaturedModesEligibility {
  eligible: boolean;
  queueId: bigint;
  restrictions: Array<LolFeaturedModesEligibilityRestriction>;
}

export interface LolFeaturedModesEligibilityRestriction {
  expiredTimestamp: bigint;
  restrictionArgs: string | undefined;
  restrictionCode: LolFeaturedModesEligibilityRestrictionCode;
  summonerIds: Array<bigint>;
}

export type LolFeaturedModesEligibilityRestrictionCode =
  | "QueueDisabled"
  | "QueueUnsupported"
  | "PlayerLevelRestriction"
  | "PlayerTimedRestriction"
  | "PlayerBannedRestriction"
  | "PlayerAvailableChampionRestriction"
  | "TeamDivisionRestriction"
  | "TeamMaxSizeRestriction"
  | "TeamMinSizeRestriction"
  | "PlayerBingeRestriction"
  | "PlayerDodgeRestriction"
  | "PlayerInGameRestriction"
  | "PlayerLeaverBustedRestriction"
  | "PlayerLeaverQueueLockoutRestriction"
  | "PlayerLeaverTaintedWarningRestriction"
  | "PlayerMaxLevelRestriction"
  | "PlayerMinLevelRestriction"
  | "PlayerMinorRestriction"
  | "PlayerRankedSuspensionRestriction"
  | "TeamHighMMRMaxSizeRestriction"
  | "TeamSizeRestriction"
  | "PrerequisiteQueuesNotPlayedRestriction"
  | "GameVersionMismatch"
  | "GameVersionMissing"
  | "GameVersionNotSupported"
  | "QueueEntryNotEntitledRestriction"
  | "UnknownRestriction";

export interface LolFeaturedModesFeaturedModesConfig {
  MaxNotificationSaveDelayMinutes: bigint;
  NotificationsEnabled: boolean;
  QueueToggleNotificationMinutesThreshold: bigint;
}

export interface LolFeaturedModesGameflowAvailability {
  isAvailable: boolean;
  state: LolFeaturedModesGameflowAvailabilityState;
}

export type LolFeaturedModesGameflowAvailabilityState =
  | "Available"
  | "Initializing"
  | "Patching"
  | "PlayerBanned"
  | "InGameFlow"
  | "Configuration";

export type LolFeaturedModesGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolFeaturedModesGameflowSession {
  phase: LolFeaturedModesGameflowPhase;
}

export interface LolFeaturedModesLoginSession {
  state: LolFeaturedModesLoginSessionStates;
  summonerId: bigint;
}

export type LolFeaturedModesLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolFeaturedModesMaps {
  assets: string | undefined;
  gameModeName: string;
  isRGM: boolean;
}

export interface LolFeaturedModesPlayerNotificationResource {
  backgroundUrl: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolFeaturedModesQueue {
  category: LolFeaturedModesQueueGameCategory;
  gameMode: string;
  id: bigint;
  lastToggledOffTime: bigint;
  lastToggledOnTime: bigint;
  mapId: bigint;
  name: string;
  queueAvailability: LolFeaturedModesQueueAvailability;
}

export type LolFeaturedModesQueueAvailability =
  | "Available"
  | "PlatformDisabled"
  | "DoesntMeetRequirements";

export type LolFeaturedModesQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolGameClientChatGameClientChatMessageResource {
  body: string;
  fromSummonerName: string;
}

export interface LolGameClientChatMutedPlayerInfo {
  puuid: string;
  summonerId: bigint;
}

export interface LolGameQueuesLoginDataPacket {
  gameTypeConfigs: Array<LolGameQueuesQueueGameTypeConfig>;
}

export interface LolGameQueuesLoginSession {
  accountId: bigint;
  connected: boolean;
  state: LolGameQueuesLoginSessionStates;
  summonerId: bigint;
}

export type LolGameQueuesLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolGameQueuesPlatformConfigEnabledMap {
  gameMapId: bigint;
  minPlayers: bigint;
}

export interface LolGameQueuesQueue {
  allowablePremadeSizes: Array<bigint>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolGameQueuesQueueGameCategory;
  championsRequiredToPlay: bigint;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolGameQueuesQueueGameTypeConfig;
  id: bigint;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: bigint;
  lastToggledOnTime: bigint;
  mapId: bigint;
  maxDivisionForPremadeSize2: string;
  maxLevel: bigint;
  maxSummonerLevelForFirstWinOfTheDay: bigint;
  maxTierForPremadeSize2: string;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  name: string;
  numPlayersPerTeam: bigint;
  queueAvailability: LolGameQueuesQueueAvailability;
  queueRewards: LolGameQueuesQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: bigint;
  shortName: string;
  showPositionSelector: boolean;
  spectatorEnabled: boolean;
  type: string;
}

export type LolGameQueuesQueueAvailability =
  | "Available"
  | "PlatformDisabled"
  | "DoesntMeetRequirements";

export interface LolGameQueuesQueueCustomGame {
  gameServerRegions: Array<string>;
  queueAvailability: LolGameQueuesQueueAvailability;
  spectatorPolicies: Array<LolGameQueuesQueueCustomGameSpectatorPolicy>;
  spectatorSlotLimit: bigint;
  subcategories: Array<LolGameQueuesQueueCustomGameSubcategory>;
}

export type LolGameQueuesQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export interface LolGameQueuesQueueCustomGameSubcategory {
  customSpectatorPolicies: Array<LolGameQueuesQueueCustomGameSpectatorPolicy>;
  gameMode: string;
  mapId: bigint;
  maxLevel: bigint;
  maxPlayerCount: bigint;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  mutators: Array<LolGameQueuesQueueGameTypeConfig>;
  numPlayersPerTeam: bigint;
  queueAvailability: LolGameQueuesQueueAvailability;
}

export type LolGameQueuesQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolGameQueuesQueueGameTypeConfig {
  advancedLearningQuests: boolean;
  allowTrades: boolean;
  banMode: string;
  banTimerDuration: bigint;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  gameModeOverride: string;
  id: bigint;
  learningQuests: boolean;
  mainPickTimerDuration: bigint;
  maxAllowableBans: bigint;
  name: string;
  numPlayersPerTeamOverride: bigint;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: bigint;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolGameQueuesQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<bigint>;
}

export interface LolGameQueuesQueueTranslation {
  description: string;
  detailedDescription: string;
  name: string;
  shortName: string;
}

export interface LolGameSettingsLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  state: LolGameSettingsLoginSessionStates;
  summonerId: bigint;
}

export type LolGameSettingsLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolGameSettingsgamesettingsgameclient {
  running: boolean;
}

export interface LolGameSettingsgamesettingsgameflowsession {
  gameClient: LolGameSettingsgamesettingsgameclient;
}

export interface LolGameflowCrashReportingSettings {
  enabled: boolean;
  type: string;
}

export interface LolGameflowGameModeSpellList {
  spells: Array<bigint>;
}

export interface LolGameflowGameflowAvailability {
  isAvailable: boolean;
  state: LolGameflowGameflowAvailabilityState;
}

export type LolGameflowGameflowAvailabilityState =
  | "Available"
  | "Initializing"
  | "Patching"
  | "PlayerBanned"
  | "InGameFlow"
  | "Configuration"
  | "EligibilityInfoMissing";

export interface LolGameflowGameflowGameClient {
  observerServerIp: string;
  observerServerPort: bigint;
  running: boolean;
  serverIp: string;
  serverPort: bigint;
  visible: boolean;
}

export interface LolGameflowGameflowGameData {
  gameId: bigint;
  gameName: string;
  isCustomGame: boolean;
  password: string;
  playerChampionSelections: Array<boolean | undefined>;
  queue: LolGameflowQueue;
  spectatorsAllowed: boolean;
  teamOne: Array<boolean | undefined>;
  teamTwo: Array<boolean | undefined>;
}

export interface LolGameflowGameflowGameDodge {
  dodgeIds: Array<bigint>;
  phase: LolGameflowGameflowPhase;
  state: LolGameflowGameflowGameDodgeState;
}

export type LolGameflowGameflowGameDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export interface LolGameflowGameflowGameMap {
  assets: boolean | undefined;
  categorizedContentBundles: boolean | undefined;
  description: string;
  gameMode: string;
  gameModeName: string;
  gameModeShortName: string;
  gameMutator: string;
  id: bigint;
  isRGM: boolean;
  mapStringId: string;
  name: string;
  perPositionDisallowedSummonerSpells: LolGameflowGameModeSpellList | undefined;
  perPositionRequiredSummonerSpells: LolGameflowGameModeSpellList | undefined;
  platformId: string;
  platformName: string;
  properties: boolean | undefined;
}

export type LolGameflowGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolGameflowGameflowProcessInfo {
  pid: bigint;
  rawArgs: Array<string>;
}

export interface LolGameflowGameflowSession {
  gameClient: LolGameflowGameflowGameClient;
  gameData: LolGameflowGameflowGameData;
  gameDodge: LolGameflowGameflowGameDodge;
  map: LolGameflowGameflowGameMap;
  phase: LolGameflowGameflowPhase;
}

export type LolGameflowGameflowWatchPhase =
  | "None"
  | "WatchStarted"
  | "WatchInProgress"
  | "WatchFailedToLaunch";

export interface LolGameflowInstallPaths {
  gameExecutablePath: string;
  gameInstallRoot: string;
}

export interface LolGameflowLobbyStatus {
  allowedPlayAgain: boolean;
  customSpectatorPolicy: LolGameflowQueueCustomGameSpectatorPolicy;
  invitedSummonerIds: Array<bigint>;
  isCustom: boolean;
  isLeader: boolean;
  isPracticeTool: boolean;
  isSpectator: boolean;
  lobbyId: string;
  memberSummonerIds: Array<bigint>;
  queueId: bigint;
}

export interface LolGameflowLoginSession {
  accountId: bigint;
  connected: boolean;
  state: LolGameflowLoginSessionStates;
  summonerId: bigint;
}

export type LolGameflowLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolGameflowPatcherProductState {
  action: LolGameflowPatcherProductStateAction;
  isCorrupted: boolean;
  isStopped: boolean;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
}

export type LolGameflowPatcherProductStateAction =
  | "Idle"
  | "CheckingForUpdates"
  | "Patching"
  | "Repairing"
  | "Migrating";

export interface LolGameflowPlayerStatus {
  canInviteOthersAtEog: boolean;
  currentLobbyStatus: LolGameflowLobbyStatus;
  lastQueuedLobbyStatus: LolGameflowLobbyStatus;
}

export interface LolGameflowQueue {
  allowablePremadeSizes: Array<bigint>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolGameflowQueueGameCategory;
  championsRequiredToPlay: bigint;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolGameflowQueueGameTypeConfig;
  id: bigint;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: bigint;
  lastToggledOnTime: bigint;
  mapId: bigint;
  maxLevel: bigint;
  maxSummonerLevelForFirstWinOfTheDay: bigint;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  name: string;
  numPlayersPerTeam: bigint;
  queueAvailability: LolGameflowQueueAvailability;
  queueRewards: LolGameflowQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: bigint;
  shortName: string;
  showPositionSelector: boolean;
  spectatorEnabled: boolean;
  type: string;
}

export type LolGameflowQueueAvailability =
  | "Available"
  | "PlatformDisabled"
  | "DoesntMeetRequirements";

export type LolGameflowQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export type LolGameflowQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolGameflowQueueGameTypeConfig {
  advancedLearningQuests: boolean;
  allowTrades: boolean;
  banMode: string;
  banTimerDuration: bigint;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  id: bigint;
  learningQuests: boolean;
  mainPickTimerDuration: bigint;
  maxAllowableBans: bigint;
  name: string;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: bigint;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolGameflowQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<bigint>;
}

export interface LolGameflowRegionLocale {
  locale: string;
  region: string;
}

export interface LolGameflowRegistrationStatus {
  complete: boolean;
  errorCodes: Array<string>;
}

export interface LolGameflowReplaysSettingsData {
  "highlights-folder-path": string;
}

export interface LolGameflowReplaysSettingsResource {
  data: LolGameflowReplaysSettingsData;
}

export interface LolGameflowSpectateGameInfoResource {
  allowObserveMode: string;
  dropInSpectateGameId: string;
  gameQueueType: string;
  puuid: string;
}

export interface LolGeoinfoGeoInfo {
  city: string;
  country: string;
  region: string;
}

export interface LolGeoinfoGeoInfoConfig {
  Enabled: boolean;
}

export interface LolGeoinfoGeoInfoResponse {
  errorMessage: string;
  geoInfo: LolGeoinfoGeoInfo;
  isInitialized: boolean;
  isLatest: boolean;
  success: boolean;
}

export interface LolGeoinfoLoginSession {
  accountId: bigint;
  state: LolGeoinfoLoginSessionState;
  summonerId: bigint;
}

export type LolGeoinfoLoginSessionState = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolGeoinfoWhereAmIRequest {
  ipAddress: string;
}

export interface LolGeoinfoWhereAmIResponse {
  city: string;
  country: string;
  region: string;
}

export interface LolHeartbeatLoginSession {
  accountId: bigint;
  state: LolHeartbeatLoginSessionStates;
  summonerId: bigint;
}

export type LolHeartbeatLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolHighlightsHighlight {
  fileSizeBytes: bigint;
  filepath: string;
  id: bigint;
  mtimeIso8601: string;
  mtimeMsUtc: bigint;
  name: string;
  url: string;
}

export interface LolHighlightsHighlightsConfig {
  invalidHighlightNameCharacters: string;
  isHighlightsEnabled: boolean;
}

export interface LolHighlightsHighlightsDynamicConfig {
  Enabled: boolean;
}

export interface LolHighlightsHighlightsSettingsData {
  "highlights-folder-path": string;
}

export interface LolHighlightsHighlightsSettingsResource {
  data: LolHighlightsHighlightsSettingsData;
}

export interface LolHonorV2AccountIdAndSummonerId {
  accountId: bigint;
  summonerId: bigint;
}

export interface LolHonorV2ApiHonorPlayerServerRequest {
  gameId: bigint;
  honorCategory: string;
  summonerId: bigint;
}

export interface LolHonorV2Ballot {
  eligiblePlayers: Array<LolHonorV2EligiblePlayer>;
  gameId: bigint;
}

export interface LolHonorV2DynamicHonorMessage {
  messageId: string;
  value: bigint;
}

export interface LolHonorV2EligiblePlayer {
  championId: bigint;
  skinIndex: bigint;
  skinName: string;
  summonerId: bigint;
  summonerName: string;
}

export interface LolHonorV2EndOfGamePlayer {
  botPlayer: boolean;
  championId: bigint;
  gameId: bigint;
  isReportingDisabled: boolean;
  leaver: boolean;
  profileIconId: bigint;
  skinIndex: bigint;
  skinName: string;
  stats: boolean | undefined;
  summonerId: bigint;
  summonerName: string;
  teamId: bigint;
  userId: bigint;
  wins: bigint;
}

export interface LolHonorV2EndOfGameStats {
  accountId: bigint;
  championId: bigint;
  difficulty: string;
  gameEndedInEarlySurrender: boolean;
  gameId: bigint;
  gameLength: bigint;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  myTeamStatus: string;
  queueType: string;
  ranked: boolean;
  reportGameId: bigint;
  summonerId: bigint;
  summonerName: string;
  teams: Array<LolHonorV2EndOfGameTeam>;
}

export interface LolHonorV2EndOfGameTeam {
  championBans: Array<bigint>;
  fullId: string;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
  memberStatusString: string;
  name: string;
  players: Array<LolHonorV2EndOfGamePlayer>;
  stats: boolean | undefined;
  tag: string;
  teamId: bigint;
}

export interface LolHonorV2GameflowGameData {
  gameId: bigint;
  queue: LolHonorV2Queue;
}

export type LolHonorV2GameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolHonorV2GameflowSession {
  gameData: LolHonorV2GameflowGameData;
  phase: LolHonorV2GameflowPhase;
}

export interface LolHonorV2Honor {
  honorCategory: string;
  voterRelationship: string;
}

export interface LolHonorV2HonorConfig {
  DayOneModalEnabled: boolean;
  Enabled: boolean;
  Honor2018Enabled: boolean;
  LedgeEndpointsEnabled: boolean;
  SecondsToVote: bigint;
}

export interface LolHonorV2HonorRecipient {
  gameId: bigint;
  honors: Array<LolHonorV2Honor>;
  summonerId: bigint;
}

export interface LolHonorV2MutualHonor {
  gameId: bigint;
  summoners: Array<LolHonorV2MutualHonorPlayer>;
}

export interface LolHonorV2MutualHonorPlayer {
  championId: bigint;
  skinIndex: bigint;
  summonerId: bigint;
}

export interface LolHonorV2ProfileInfo {
  checkpoint: bigint;
  honorLevel: bigint;
  rewardsLocked: boolean;
}

export interface LolHonorV2Queue {
  gameMode: string;
  id: bigint;
  mapId: bigint;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: bigint;
  type: string;
}

export interface LolHonorV2Reward {
  quantity: bigint;
  rewardType: string;
}

export interface LolHonorV2SequenceEvent {
  name: string;
  priority: bigint;
}

export interface LolHonorV2ServiceProxyHonorPlayerServerRequest {
  gameId: bigint;
  honorType: string;
  summonerId: bigint;
}

export interface LolHonorV2ServiceProxyRetrieveProfileResponse {
  checkpoint: bigint;
  honorLevel: bigint;
  rewardsLocked: boolean;
}

export interface LolHonorV2VendedHonorChange {
  actionType: string;
  currentState: LolHonorV2VendedHonorState;
  dynamicHonorMessage: LolHonorV2DynamicHonorMessage;
  previousState: LolHonorV2VendedHonorState;
  reward: LolHonorV2Reward;
}

export interface LolHonorV2VendedHonorState {
  checkpoint: bigint;
  level: bigint;
  rewardsLocked: boolean;
}

export interface LolHonorV2VendedReward {
  dynamicHonorMessage: LolHonorV2DynamicHonorMessage;
  quantity: bigint;
  rewardType: string;
}

export interface LolHonorV2VoteCompletion {
  fullTeamVote: boolean;
  gameId: bigint;
}

export interface LolHovercardChatSession {
  sessionState: string;
}

export interface LolHovercardContentCookies {
  content_id: string;
  content_path: string;
  cookies: Array<LolHovercardcookie>;
}

export interface LolHovercardFriendResult {
  accountId: bigint;
  availability: string;
  gameName: string;
  gameTag: string;
  icon: bigint;
  id: string;
  lol: string | undefined;
  name: string;
  note: string;
  patchline: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  score: bigint;
  statusMessage: string;
  summonerId: bigint;
}

export interface LolHovercardHovercardUserInfo {
  accountId: bigint;
  availability: string;
  gameName: string;
  gameTag: string;
  icon: bigint;
  id: string;
  lol: string | undefined;
  masteryScore: bigint;
  name: string;
  note: string;
  partySummoners: Array<string>;
  patchline: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  remotePlatform: boolean;
  remoteProduct: boolean;
  remoteProductBackdropUrl: string;
  remoteProductIconUrl: string;
  statusMessage: string;
  summonerIcon: bigint;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolHovercardPartyInfo {
  summoners: Array<bigint>;
}

export interface LolHovercardPatchlineMetadata {
  content_cookies: Array<LolHovercardContentCookies>;
  content_paths: string | undefined;
  id: string;
  product_id: string;
}

export interface LolHovercardProductMetadata {
  id: string;
  name: string;
  patchlines: LolHovercardPatchlineMetadata | undefined;
}

export interface LolHovercardProductMetadataMap {
  products: LolHovercardProductMetadata | undefined;
}

export interface LolHovercardSummoner {
  accountId: bigint;
  displayName: string;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolHovercardSummonerIdAndIcon {
  profileIconId: bigint;
}

export interface LolHovercardSummonerIdAndName {
  displayName: string;
  summonerId: bigint;
}

export interface LolHovercardTopChampionMastery {
  score: bigint;
}

export interface LolHovercardcookie {
  name: string;
  value: string;
}

export interface LolInventoryAccessTokenResource {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export interface LolInventoryCatalogItem {
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
}

export interface LolInventoryClientCacheClearMessageDTO {
  clearAll: boolean;
  inventoryTypes: Array<string>;
  regions: Array<string>;
}

export interface LolInventoryCurrencyDTO {
  amount: bigint;
  subCurrencies: bigint | undefined;
}

export interface LolInventoryInventoryCacheEntry {
  expirationMS: bigint;
  issuedAtMS: bigint;
  receivedAtMS: bigint;
  signedInventoryJwt: string;
  valid: boolean;
}

export interface LolInventoryInventoryDTO {
  accountId: bigint;
  expires: string;
  items: boolean | undefined | undefined;
  itemsJwt: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolInventoryInventoryItem {
  inventoryType: string;
  itemId: bigint;
  ownershipType: LolInventoryItemOwnershipType;
  purchaseDate: string;
  quantity: bigint;
  uuid: string;
}

export interface LolInventoryInventoryItemDTO {
  entitlementId: string;
  entitlementTypeId: string;
  expirationDate: string;
  f2p: boolean;
  instanceId: string;
  instanceTypeId: string;
  inventoryType: string;
  itemId: bigint;
  loyalty: boolean;
  lsb: boolean;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: bigint;
  rental: boolean;
  usedInGameDate: string;
  wins: bigint;
}

export interface LolInventoryInventoryItemWithPayload {
  inventoryType: string;
  itemId: bigint;
  ownershipType: LolInventoryItemOwnershipType;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: bigint;
  uuid: string;
}

export interface LolInventoryInventoryNotification {
  acknowledged: boolean;
  id: bigint;
  inventoryType: string;
  itemId: bigint;
  type: string;
}

export interface LolInventoryInventoryResponseDTO {
  data: LolInventoryInventoryDTO;
}

export interface LolInventoryItemKey {
  inventoryType: string;
  itemId: bigint;
}

export type LolInventoryItemOwnershipType = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolInventoryLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  idToken: string;
  puuid: string;
  state: LolInventoryLoginSessionStates;
  summonerId: bigint;
}

export type LolInventoryLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolInventoryLoyaltyRewards {
  championIds: Array<bigint>;
  freeRewardedChampionsCount: bigint;
  freeRewardedSkinsCount: bigint;
  ipBoost: bigint;
  loyaltyTFTCompanionCount: bigint;
  loyaltyTFTMapSkinCount: bigint;
  skinIds: Array<bigint>;
  xpBoost: bigint;
}

export type LolInventoryLoyaltyStatus =
  | "LEGACY"
  | "REWARDS_GRANT"
  | "EXPIRY"
  | "CHANGE"
  | "REVOKE"
  | "DISABLED";

export interface LolInventoryLoyaltyStatusNotification {
  rewards: LolInventoryLoyaltyRewards;
  status: LolInventoryLoyaltyStatus;
}

export interface LolInventoryRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface LolInventoryRmsEntitlementPayload {
  entitlementTypeId: string;
  itemId: string;
  itemTypeId: string;
  resourceOperation: string;
}

export interface LolInventoryRmsStoreEntitlementItem {
  inventoryType: string;
  itemId: string;
}

export interface LolInventoryRmsStoreEntitlementPayload {
  items: Array<LolInventoryRmsStoreEntitlementItem>;
  transactionId: string;
}

export interface LolInventoryRmsWalletPayload {}

export interface LolInventorySimpleInventoryDTO {
  expires: string;
  items: boolean | undefined | undefined;
  itemsJwt: string;
}

export interface LolInventorySimpleInventoryResponseDTO {
  data: LolInventorySimpleInventoryDTO;
}

export interface LolInventorySummonerIcon {
  itemId: bigint;
}

export interface LolInventoryWallet {
  ip: bigint;
  rp: bigint;
}

export interface LolInventoryWalletCacheEntry {
  expirationMS: bigint;
  issuedAtMS: bigint;
  receivedAtMS: bigint;
  signedBalancesJwt: string;
  valid: boolean;
}

export interface LolInventoryWalletDTO {
  accountId: bigint;
  balances: bigint | undefined;
  balancesJwt: string;
  expires: string;
  puuid: string;
}

export interface LolInventoryWalletResponseDTO {
  data: LolInventoryWalletDTO;
}

export interface LolItemSetsGameDataChampion {
  alias: string;
}

export interface LolItemSetsItemSet {
  associatedChampions: Array<bigint>;
  associatedMaps: Array<bigint>;
  blocks: Array<LolItemSetsItemSetBlock>;
  map: string;
  mode: string;
  preferredItemSlots: Array<LolItemSetsPreferredItemSlot>;
  sortrank: bigint;
  startedFrom: string;
  title: string;
  type: string;
  uid: string;
}

export interface LolItemSetsItemSetBlock {
  hideIfSummonerSpell: string;
  items: Array<LolItemSetsItemSetItem>;
  showIfSummonerSpell: string;
  type: string;
}

export interface LolItemSetsItemSetItem {
  count: bigint;
  id: string;
}

export interface LolItemSetsItemSets {
  accountId: bigint;
  itemSets: Array<LolItemSetsItemSet>;
  timestamp: bigint;
}

export interface LolItemSetsLoginSession {
  accountId: bigint;
  state: LolItemSetsLoginSessionStates;
  summonerId: bigint;
}

export type LolItemSetsLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolItemSetsNameCheckPayload {
  name: string;
  shard: string;
}

export interface LolItemSetsNameCheckResponse {
  errors: Array<string>;
}

export interface LolItemSetsPreferredItemSlot {
  id: string;
  preferredItemSlot: bigint;
}

export interface LolItemSetsValidateItemSetNameInput {
  name: string;
}

export interface LolItemSetsValidateItemSetNameResponse {
  nameCheckResponse: LolItemSetsNameCheckResponse;
  success: boolean;
}

export interface LolKickoutKickoutMessage {
  message: string;
}

export interface LolKrPlaytimeReminderPlaytimeReminder {
  hours: bigint;
}

export interface LolKrShutdownLawAllQueueShutdownStatus {
  isAllQueuesDisabled: boolean;
}

export interface LolKrShutdownLawAntiAddictionState {
  policyType: LolKrShutdownLawPolicyType;
}

export type LolKrShutdownLawPolicyType =
  | "shutdown"
  | "playTime"
  | "warningMessage"
  | "disableMatchMaking";

export interface LolKrShutdownLawQueueShutdownStatus {
  isDisabled: boolean;
}

export interface LolKrShutdownLawRatingScreenInfo {
  shown: boolean;
}

export interface LolKrShutdownLawShutdownLawNotification {
  type: LolKrShutdownLawShutdownLawStatus;
}

export type LolKrShutdownLawShutdownLawStatus = "NONE" | "WARNING" | "CUT_OFF";

export interface LolLeagueSessionAntiAddictionTokenEnvelope {
  antiAddictionToken: string;
}

export interface LolLeagueSessionLeagueSessionRMSNotification {
  puuid: string;
  sessionId: string;
  sessionInitiatedAt: bigint;
  state: string;
}

export type LolLeagueSessionLeagueSessionStatus =
  | "UNINITIALIZED"
  | "INITIALIZED"
  | "EXPIRED"
  | "DUPLICATED"
  | "ANTI_ADDICTION_EXPIRED";

export interface LolLeagueSessionLeagueSessionTokenEnvelope {
  logoutOnFailure: boolean;
  token: string;
}

export interface LolLeaverBusterAllSummonerData {
  summoner: LolLeaverBusterSummoner;
}

export interface LolLeaverBusterLeaverBusterNotificationResource {
  accountId: bigint;
  fromRms: boolean;
  id: bigint;
  msgId: string;
  punishedGamesRemaining: bigint;
  queueLockoutTimerExpiryUtcMillisDiff: bigint;
  type: LolLeaverBusterLeaverBusterNotificationType;
}

export type LolLeaverBusterLeaverBusterNotificationType =
  | "Invalid"
  | "TaintedWarning"
  | "PunishmentIncurred"
  | "PunishedGamesRemaining"
  | "Reforming"
  | "PreLockoutWarning"
  | "OnLockoutWarning";

export interface LolLeaverBusterLoginDataPacket {
  allSummonerData: LolLeaverBusterAllSummonerData;
  simpleMessages: Array<LolLeaverBusterSimpleMessage>;
}

export interface LolLeaverBusterMatchmakingSearchErrorResource {
  errorType: string;
  id: bigint;
  message: string;
  penalizedSummonerId: bigint;
  penaltyTimeRemaining: number;
}

export interface LolLeaverBusterMatchmakingSearchResource {
  errors: Array<LolLeaverBusterMatchmakingSearchErrorResource>;
  queueId: bigint;
}

export interface LolLeaverBusterPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolLeaverBusterSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolLeaverBusterSummoner {
  acctId: bigint;
  sumId: bigint;
}

export interface LolLicenseAgreementLicenseAgreement {
  id: string;
  licenseType: LolLicenseAgreementLicenseAgreementType;
  text: string;
}

export type LolLicenseAgreementLicenseAgreementType = "PrivacyNotice" | "TermsOfUse";

export type LolLicenseAgreementLicenseServeLocation = "Preparing" | "Local" | "External";

export interface LolLicenseAgreementPluginRegionLocaleChangedEvent {
  locale: string;
  region: string;
}

export interface LolLoadoutsAccessTokenResource {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export interface LolLoadoutsCreateLoadoutDTO {
  itemId: bigint;
  loadout: LolLoadoutsItemKey | undefined;
  name: string;
  refreshTime: string;
  scope: string;
}

export interface LolLoadoutsCreateLoadoutRequestDTO {
  loadout: LolLoadoutsCreateLoadoutDTO;
  serviceToJwtsMap: boolean | undefined | undefined;
}

export interface LolLoadoutsCreateOrUpdateItemsRequest {
  id: bigint;
  inventoryJWTs: Array<string>;
  items: boolean | undefined | undefined;
}

export interface LolLoadoutsFrontendInventoryResponse {
  entitlements: Array<LolLoadoutsItemKey>;
}

export interface LolLoadoutsGameflowGameData {
  queue: LolLoadoutsQueue;
}

export type LolLoadoutsGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolLoadoutsGameflowSession {
  gameData: LolLoadoutsGameflowGameData;
  phase: LolLoadoutsGameflowPhase;
}

export interface LolLoadoutsGetItemsRequest {
  id: bigint;
  inventoryJWTs: Array<string>;
  inventoryTypes: Array<string>;
}

export interface LolLoadoutsInventoryDTO {
  accountId: bigint;
  expires: string;
  items: boolean | undefined | undefined;
  itemsJwt: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolLoadoutsInventoryItemDTO {
  entitlementId: string;
  entitlementTypeId: string;
  expirationDate: string;
  f2p: boolean;
  instanceId: string;
  instanceTypeId: string;
  inventoryType: string;
  itemId: bigint;
  lsb: boolean;
  purchaseDate: string;
  quantity: bigint;
  rental: boolean;
  usedInGameDate: string;
  wins: bigint;
}

export interface LolLoadoutsInventoryResponseDTO {
  data: LolLoadoutsInventoryDTO;
}

export interface LolLoadoutsItemKey {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
}

export interface LolLoadoutsLoadout {
  id: bigint;
  items: boolean | undefined | undefined;
  name: string;
}

export interface LolLoadoutsLoadoutRequestDTOBase {
  serviceToJwtsMap: boolean | undefined | undefined;
}

export interface LolLoadoutsLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  idToken: string;
  puuid: string;
  state: LolLoadoutsLoginSessionStates;
  summonerId: bigint;
}

export type LolLoadoutsLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLoadoutsQueue {
  isTeamBuilderManaged: boolean;
}

export interface LolLoadoutsScopedLoadout {
  id: string;
  itemId: bigint;
  loadout: LolLoadoutsItemKey | undefined;
  name: string;
  refreshTime: string;
  scope: string;
}

export interface LolLoadoutsSignGCORequestDTO {
  loadout: LolLoadoutsItemKey | undefined;
  serviceToJwtsMap: boolean | undefined | undefined;
}

export interface LolLoadoutsUpdateLoadoutDTO {
  id: string;
  loadout: LolLoadoutsItemKey | undefined;
  name: string;
}

export interface LolLoadoutsUpdateLoadoutRequestDTO {
  loadout: LolLoadoutsUpdateLoadoutDTO;
  serviceToJwtsMap: boolean | undefined | undefined;
}

export interface LolLobbyAccountIdAndSummonerId {
  accountId: bigint;
  summonerId: bigint;
}

export interface LolLobbyAmbassadorMessage {
  errorCode: string;
  httpStatus: bigint;
  implementationDetails: string;
  message: string;
  payload: boolean | undefined;
}

export interface LolLobbyAutoFillQueueDto {
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForStreaking: boolean;
  queueId: bigint;
}

export interface LolLobbyBotParticipantDto {
  botSkillLevel: bigint;
  championId: bigint;
  team: string;
}

export interface LolLobbyChampionSkinSelection {
  championId: bigint;
  skinId: bigint;
}

export interface LolLobbyChatBlockedPlayerResource {
  name: string;
  summonerId: bigint;
}

export interface LolLobbyChatFriend {
  lol: string | undefined;
  summonerId: bigint;
}

export interface LolLobbyChatFriendCounts {
  numFriends: bigint;
  numFriendsAvailable: bigint;
  numFriendsAway: bigint;
  numFriendsInChampSelect: bigint;
  numFriendsInGame: bigint;
  numFriendsInQueue: bigint;
  numFriendsMobile: bigint;
  numFriendsOnline: bigint;
}

export interface LolLobbyCollectionsChampion {
  active: boolean;
  botEnabled: boolean;
  id: bigint;
  name: string;
}

export interface LolLobbyCollectionsChampionMinimal {
  active: boolean;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: bigint;
  ownership: LolLobbyCollectionsOwnership;
}

export interface LolLobbyCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolLobbyCollectionsRental;
}

export interface LolLobbyCollectionsRental {}

export interface LolLobbyCustomEligibilityDto {
  eligible: boolean;
  restrictions: Array<LolLobbyGatekeeperRestrictionDto>;
}

export interface LolLobbyCustomGameDto {
  allowSpectators: string;
  gameType: string;
  lobbyName: string;
  mapId: bigint;
  maxNumPlayers: bigint;
  ownerPuuid: string;
  partyId: string;
  privateGame: boolean;
  spectatorCount: bigint;
  team1Count: bigint;
  team2Count: bigint;
}

export interface LolLobbyCustomGameSettingsDto {
  gameId: bigint;
  lobbyName: string;
  lobbyPassword: string;
}

export interface LolLobbyCustomJoinOptionsDto {
  lobbyPassword: string;
  team: string;
}

export interface LolLobbyEligibility {
  eligible: boolean;
  queueId: bigint;
  restrictions: Array<LolLobbyEligibilityRestriction>;
}

export interface LolLobbyEligibilityRestriction {
  expiredTimestamp: bigint;
  restrictionArgs: string | undefined;
  restrictionCode: LolLobbyEligibilityRestrictionCode;
  summonerIds: Array<bigint>;
  summonerIdsString: string;
}

export type LolLobbyEligibilityRestrictionCode =
  | "QueueDisabled"
  | "QueueUnsupported"
  | "PlayerLevelRestriction"
  | "PlayerTimedRestriction"
  | "PlayerBannedRestriction"
  | "PlayerAvailableChampionRestriction"
  | "TeamDivisionRestriction"
  | "TeamMaxSizeRestriction"
  | "TeamMinSizeRestriction"
  | "PlayerBingeRestriction"
  | "PlayerDodgeRestriction"
  | "PlayerInGameRestriction"
  | "PlayerLeaverBustedRestriction"
  | "PlayerLeaverQueueLockoutRestriction"
  | "PlayerLeaverTaintedWarningRestriction"
  | "PlayerMaxLevelRestriction"
  | "PlayerMinLevelRestriction"
  | "PlayerMinorRestriction"
  | "PlayerTimePlayedRestriction"
  | "PlayerRankSoloOnlyRestriction"
  | "PlayerRankedSuspensionRestriction"
  | "TeamHighMMRMaxSizeRestriction"
  | "TeamSizeRestriction"
  | "PrerequisiteQueuesNotPlayedRestriction"
  | "GameVersionMismatch"
  | "GameVersionMissing"
  | "GameVersionNotSupported"
  | "QueueEntryNotEntitledRestriction"
  | "UnknownRestriction"
  | "BanInfoNotAvailable"
  | "MinorInfoNotAvailable"
  | "SummonerInfoNotAvailable"
  | "LeaguesInfoNotAvailable"
  | "InventoryChampsInfoNotAvailable"
  | "InventoryQueuesInfoNotAvailable"
  | "MmrStandardDeviationTooLarge";

export interface LolLobbyFriendAvailabilityAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: bigint;
  eventType: string;
  numFriends: bigint;
  numFriendsAvailable: bigint;
  numFriendsAway: bigint;
  numFriendsInChampSelect: bigint;
  numFriendsInGame: bigint;
  numFriendsInQueue: bigint;
  numFriendsMobile: bigint;
  numFriendsOnline: bigint;
  partyType: string;
  platformId: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolLobbyGameDataChampionSummary {
  alias: string;
  id: bigint;
}

export interface LolLobbyGameModeDto {
  allowSpectators: string;
  botDifficulty: string;
  customsSettings: LolLobbyCustomGameSettingsDto;
  gameCustomization: string | undefined;
  gameType: string;
  gameTypeConfigId: bigint;
  mapId: bigint;
  maxPartySize: bigint;
  maxTeamSize: bigint;
  queueId: bigint;
}

export interface LolLobbyGameflowGameClient {
  running: boolean;
}

export interface LolLobbyGameflowGameData {
  queue: LolLobbyQueue;
}

export interface LolLobbyGameflowGameDodge {
  dodgeIds: Array<bigint>;
  phase: LolLobbyGameflowPhase;
  state: LolLobbyMatchmakingDodgeState;
}

export type LolLobbyGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolLobbyGameflowSampleDto {
  intervalSecs: number;
  probability: number;
  state: string;
  tags: Array<LolLobbyGameflowSampleTag>;
}

export type LolLobbyGameflowSampleTag =
  | "Unregistered"
  | "GameVersionMissing"
  | "UserInfoTokenMissing"
  | "SummonerTokenMissing"
  | "RankedTokenMissing"
  | "InventoryTokenMissing";

export interface LolLobbyGameflowSession {
  gameClient: LolLobbyGameflowGameClient;
  gameData: LolLobbyGameflowGameData;
  gameDodge: LolLobbyGameflowGameDodge;
  phase: LolLobbyGameflowPhase;
}

export interface LolLobbyGatekeeperRestrictionDto {
  accountId: bigint;
  details: string | undefined;
  payload: string;
  puuid: string;
  queueId: bigint;
  reason: string;
  remainingMillis: bigint;
}

export interface LolLobbyInventoryCacheEntry {
  expirationMS: bigint;
  signedInventoryJwt: string;
  valid: boolean;
}

export interface LolLobbyInventoryItem {
  itemId: bigint;
}

export type LolLobbyInvitationType = "invalid" | "lobby" | "party";

export interface LolLobbyJoinPartyAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: bigint;
  eventType: string;
  gameMode: string;
  numFriendsOnline: bigint;
  numOpenFriends: bigint;
  numOpenParties: bigint;
  numOtherInvites: bigint;
  numPartyInvites: bigint;
  numTotalInvites: bigint;
  partyId: string;
  partySize: bigint;
  platformId: string;
}

export interface LolLobbyLcdsDynamicClientConfig {
  PartyRewards: LolLobbyLcdsPartyRewardsConfig;
}

export interface LolLobbyLcdsGameMetaData {
  gameId: bigint;
  mapId: bigint;
}

export interface LolLobbyLcdsPartyRewardsConfig {
  Enabled: boolean;
}

export interface LolLobbyLobby {
  allowablePremadeSizes: Array<bigint>;
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForStreaking: boolean;
  canStartMatchmaking: boolean;
  chatRoomId: string;
  chatRoomKey: string;
  customGameLobby: LolLobbyLobbyCustomGameLobby;
  gameMode: string;
  invitationId: string;
  invitations: Array<LolLobbyLobbyInvitation>;
  isCustom: boolean;
  isTeamBuilderManaged: boolean;
  localMember: LolLobbyLobbyMember;
  mapId: bigint;
  maximumParticipantListSize: bigint;
  members: Array<LolLobbyLobbyMember>;
  premadeSizeAllowed: boolean;
  queueAvailability: LolLobbyQueueAvailability;
  queueId: bigint;
  removalReason: LolLobbyLobbyRemovedFromGameReason;
  requiredPositionCoverageMet: boolean;
  showPositionExcluder: boolean;
  showPositionSelector: boolean;
  specifiablePositionPreferences: Array<string>;
  wasKicked: boolean;
}

export interface LolLobbyLobbyBotChampion {
  active: boolean;
  botDifficulties: Array<LolLobbyLobbyBotDifficulty>;
  id: bigint;
  name: string;
}

export type LolLobbyLobbyBotDifficulty =
  | "NONE"
  | "EASY"
  | "MEDIUM"
  | "HARD"
  | "UBER"
  | "TUTORIAL"
  | "INTRO";

export interface LolLobbyLobbyBotParams {
  botDifficulty: LolLobbyLobbyBotDifficulty;
  championId: bigint;
  teamId: string;
}

export interface LolLobbyLobbyChangeGameDto {
  customGameLobby: LolLobbyLobbyCustomGameLobby;
  gameCustomization: string | undefined;
  isCustom: boolean;
  queueId: bigint;
}

export interface LolLobbyLobbyChangeQueue {
  customGameLobby: LolLobbyLobbyCustomGameLobby;
  isCustom: boolean;
  queueId: bigint;
}

export interface LolLobbyLobbyCustomChampSelectStartResponse {
  failedPlayers: Array<LolLobbyLobbyCustomFailedPlayer>;
  success: boolean;
}

export interface LolLobbyLobbyCustomFailedPlayer {
  reason: string;
  summonerId: bigint;
  summonerName: string;
}

export interface LolLobbyLobbyCustomGame {
  filledPlayerSlots: bigint;
  filledSpectatorSlots: bigint;
  gameType: string;
  hasPassword: boolean;
  id: bigint;
  lobbyName: string;
  mapId: bigint;
  maxPlayerSlots: bigint;
  maxSpectatorSlots: bigint;
  ownerSummonerName: string;
  partyId: string;
  passbackUrl: string;
  spectatorPolicy: string;
}

export interface LolLobbyLobbyCustomGameConfiguration {
  gameMode: string;
  gameServerRegion: string;
  gameTypeConfig: LolLobbyQueueGameTypeConfig;
  mapId: bigint;
  maxPlayerCount: bigint;
  mutators: LolLobbyQueueGameTypeConfig;
  spectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
  teamSize: bigint;
  tournamentGameMode: string;
  tournamentPassbackDataPacket: string;
  tournamentPassbackUrl: string;
}

export interface LolLobbyLobbyCustomGameLobby {
  configuration: LolLobbyLobbyCustomGameConfiguration;
  gameId: bigint;
  lobbyName: string;
  lobbyPassword: string;
  practiceGameRewardsDisabledReasons: Array<string>;
  spectators: Array<LolLobbyLobbyMember>;
  teamOne: Array<LolLobbyLobbyMember>;
  teamTwo: Array<LolLobbyLobbyMember>;
}

export interface LolLobbyLobbyCustomJoinParameters {
  asSpectator: boolean;
  password: string;
}

export interface LolLobbyLobbyDto {
  canStartActivity: boolean;
  chatRoomId: string;
  chatRoomKey: string;
  gameConfig: LolLobbyLobbyGameConfigDto;
  invitations: Array<LolLobbyLobbyInvitationDto>;
  localMember: LolLobbyLobbyParticipantDto;
  members: Array<LolLobbyLobbyParticipantDto>;
  partyId: string;
  partyType: string;
  restrictions: Array<LolLobbyEligibilityRestriction>;
  warnings: Array<LolLobbyEligibilityRestriction>;
}

export interface LolLobbyLobbyGameConfigDto {
  allowablePremadeSizes: Array<bigint>;
  customLobbyName: string;
  customMutatorName: string;
  customRewardsDisabledReasons: Array<string>;
  customSpectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
  customSpectators: Array<LolLobbyLobbyParticipantDto>;
  customTeam100: Array<LolLobbyLobbyParticipantDto>;
  customTeam200: Array<LolLobbyLobbyParticipantDto>;
  gameMode: string;
  isCustom: boolean;
  isLobbyFull: boolean;
  isTeamBuilderManaged: boolean;
  mapId: bigint;
  maxHumanPlayers: bigint;
  maxLobbySize: bigint;
  maxTeamSize: bigint;
  pickType: string;
  premadeSizeAllowed: boolean;
  queueId: bigint;
  showPositionSelector: boolean;
}

export interface LolLobbyLobbyInvitation {
  eligibility: LolLobbyEligibility;
  errorType: string;
  fromSummonerId: bigint;
  fromSummonerName: string;
  id: string;
  invitationMetaData: boolean | undefined;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
  toSummonerId: bigint;
  toSummonerName: string;
}

export interface LolLobbyLobbyInvitationDto {
  invitationId: string;
  invitationType: LolLobbyInvitationType;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
  toSummonerId: bigint;
  toSummonerName: string;
}

export type LolLobbyLobbyInvitationState =
  | "Requested"
  | "Pending"
  | "Accepted"
  | "Joined"
  | "Declined"
  | "Kicked"
  | "OnHold"
  | "Error";

export interface LolLobbyLobbyLastQueuedLobby {
  canPlayAgain: boolean;
  members: Array<LolLobbyLobbyLastQueuedMember>;
  queueId: bigint;
  wasOwner: boolean;
}

export interface LolLobbyLobbyLastQueuedMember {
  id: bigint;
}

export interface LolLobbyLobbyMatchmakingLowPriorityDataResource {
  bustedLeaverAccessToken: string;
  penalizedSummonerIds: Array<bigint>;
  penaltyTime: number;
  penaltyTimeRemaining: number;
  reason: string;
}

export interface LolLobbyLobbyMatchmakingSearchErrorResource {
  errorType: string;
  id: bigint;
  message: string;
  penalizedSummonerId: bigint;
  penaltyTimeRemaining: number;
}

export interface LolLobbyLobbyMatchmakingSearchResource {
  errors: Array<LolLobbyLobbyMatchmakingSearchErrorResource>;
  lowPriorityData: LolLobbyLobbyMatchmakingLowPriorityDataResource;
  searchState: LolLobbyLobbyMatchmakingSearchState;
}

export type LolLobbyLobbyMatchmakingSearchState =
  | "Invalid"
  | "AbandonedLowPriorityQueue"
  | "Canceled"
  | "Searching"
  | "Found"
  | "Error"
  | "ServiceError"
  | "ServiceShutdown";

export interface LolLobbyLobbyMember {
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
  autoFillProtectedForStreaking: boolean;
  botChampionId: bigint;
  botDifficulty: LolLobbyLobbyBotDifficulty;
  canInviteOthers: boolean;
  excludedPositionPreference: string;
  id: bigint;
  isBot: boolean;
  isOwner: boolean;
  isSpectator: boolean;
  positionPreferences: LolLobbyLobbyPositionPreferences;
  showPositionExcluder: boolean;
  summonerInternalName: string;
}

export interface LolLobbyLobbyNotification {
  notificationId: string;
  notificationReason: string;
  summonerIds: Array<bigint>;
  timestamp: bigint;
}

export interface LolLobbyLobbyParticipantDto {
  allowedChangeActivity: boolean;
  allowedInviteOthers: boolean;
  allowedKickOthers: boolean;
  allowedStartActivity: boolean;
  allowedToggleInvite: boolean;
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
  autoFillProtectedForStreaking: boolean;
  botChampionId: bigint;
  botDifficulty: LolLobbyLobbyBotDifficulty;
  botId: string;
  firstPositionPreference: string;
  isBot: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  puuid: string;
  ready: boolean;
  secondPositionPreference: string;
  showGhostedBanner: boolean;
  summonerIconId: bigint;
  summonerId: bigint;
  summonerInternalName: string;
  summonerLevel: bigint;
  summonerName: string;
  teamId: bigint;
}

export type LolLobbyLobbyPartyRewardType = "Ip" | "Icon" | "None";

export interface LolLobbyLobbyPartyRewards {
  isCustom: boolean;
  isEnabled: boolean;
  partyRewards: Array<LolLobbyPartyReward>;
  queueId: bigint;
}

export interface LolLobbyLobbyPositionPreferences {
  firstPreference: string;
  secondPreference: string;
}

export type LolLobbyLobbyRemovedFromGameReason =
  | "None"
  | "Kicked"
  | "Disbanded"
  | "Left"
  | "ServiceError"
  | "Other"
  | "Timeout"
  | "GameStartError"
  | "ServiceShutdown";

export interface LolLobbyLobbyStatus {
  allowedPlayAgain: boolean;
  customSpectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
  invitedSummonerIds: Array<bigint>;
  isCustom: boolean;
  isLeader: boolean;
  isPracticeTool: boolean;
  isSpectator: boolean;
  lobbyId: string;
  memberSummonerIds: Array<bigint>;
  queueId: bigint;
}

export interface LolLobbyLobbyTimer {
  countdown: bigint;
  enabled: boolean;
}

export interface LolLobbyLoginSession {
  accountId: bigint;
  connected: boolean;
  gasToken: boolean | undefined;
  idToken: string;
  puuid: string;
  state: LolLobbyLoginSessionStates;
  summonerId: bigint;
  userAuthToken: string;
  username: string;
}

export type LolLobbyLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export type LolLobbyMatchmakingDodgeState = "Invalid" | "PartyDodged" | "StrangerDodged";

export interface LolLobbyOpenPartyToggleAnalytics {
  elapsedTime: bigint;
  endTimestamp: bigint;
  endTransition: string;
  eventData: boolean | undefined;
  eventTimestamp: bigint;
  eventType: string;
  finalState: string;
  gameMode: string;
  initialState: string;
  numOfToggles: bigint;
  partyId: string;
  platformId: string;
  playerId: string;
  startTimestamp: bigint;
  startTransition: string;
}

export interface LolLobbyPartiesInvitationAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: bigint;
  eventType: string;
  partyId: string;
  platformId: string;
  players: Array<LolLobbyPartiesInvitationPlayerAnalytics>;
}

export interface LolLobbyPartiesInvitationPlayerAnalytics {
  puuid: string;
  role: string;
  summonerId: bigint;
}

export interface LolLobbyPartyChatDto {
  jid: string;
  multiUserChatJWT: string;
}

export interface LolLobbyPartyDto {
  activeRestrictions: LolLobbyQueueRestrictionDto;
  activityLocked: boolean;
  activityResumeUtcMillis: bigint;
  activityStartedUtcMillis: bigint;
  botParticipants: Array<LolLobbyBotParticipantDto>;
  chat: LolLobbyPartyChatDto;
  eligibilityHash: bigint;
  eligibilityRestrictions: Array<LolLobbyGatekeeperRestrictionDto>;
  eligibilityWarnings: Array<LolLobbyGatekeeperRestrictionDto>;
  gameMode: LolLobbyGameModeDto;
  maxPartySize: bigint;
  partyId: string;
  partyType: string;
  platformId: string;
  players: Array<LolLobbyPartyMemberDto>;
  version: bigint;
}

export type LolLobbyPartyEogStatusCategory = "kLeft" | "kPlayAgain" | "kOnEog";

export interface LolLobbyPartyInviteAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: bigint;
  eventType: string;
  fromSummonerId: bigint;
  gameMode: string;
  partyId: string;
  partyType: string;
  platformId: string;
  toSummonerId: bigint;
}

export interface LolLobbyPartyMemberDto {
  accountId: bigint;
  canInvite: boolean;
  gameMode: LolLobbyGameModeDto;
  inviteTimestamp: bigint;
  invitedBySummonerId: bigint;
  metadata: LolLobbyPartyMemberMetadataDto;
  partyId: string;
  partyVersion: bigint;
  platformId: string;
  puuid: string;
  ready: boolean;
  role: LolLobbyPartyMemberRoleEnum;
  summonerId: bigint;
  team: string;
}

export interface LolLobbyPartyMemberMetadataDto {
  championSelection: bigint;
  positionPref: Array<string>;
  properties: boolean | undefined;
  skinSelection: bigint;
}

export type LolLobbyPartyMemberRoleEnum =
  | "LEADER"
  | "MEMBER"
  | "INVITED"
  | "HOLD"
  | "KICKED"
  | "DECLINED"
  | "NONE";

export interface LolLobbyPartyNotificationEnvelopeDto {
  player: LolLobbyPlayerDto;
  queueRestriction: LolLobbyQueueRestrictionDto;
}

export interface LolLobbyPartyPresenceData {
  maxPlayers: bigint;
  partyId: string;
  queueId: bigint;
  summoners: Array<bigint>;
}

export interface LolLobbyPartyQueueEligibilityDto {
  availableQueueIds: Array<bigint>;
  partyRestrictions: Array<LolLobbyGatekeeperRestrictionDto>;
}

export interface LolLobbyPartyReward {
  premadeSize: bigint;
  type: LolLobbyLobbyPartyRewardType;
  value: string;
}

export interface LolLobbyPartyStatusDto {
  eogPlayers: Array<string>;
  leftPlayers: Array<string>;
  partySize: bigint;
  readyPlayers: Array<string>;
}

export interface LolLobbyPlayerCollectionDto {
  players: Array<LolLobbyPlayerDto>;
}

export interface LolLobbyPlayerDto {
  accountId: bigint;
  createdAt: bigint;
  currentParty: LolLobbyPartyDto;
  eligibilityHash: bigint;
  parties: Array<LolLobbyPartyMemberDto>;
  platformId: string;
  puuid: string;
  registration: LolLobbyRegistrationCredentials;
  serverUtcMillis: bigint;
  summonerId: bigint;
  version: bigint;
}

export interface LolLobbyPlayerStatus {
  canInviteOthersAtEog: boolean;
  currentLobbyStatus: LolLobbyLobbyStatus;
  lastQueuedLobbyStatus: LolLobbyLobbyStatus;
}

export type LolLobbyPlayerUpdateType = "None" | "Direct" | "ServiceProxy" | "RMS";

export interface LolLobbyPremadeMemberDto {
  displayName: string;
  partyId: string;
  puuid: string;
  role: LolLobbyPartyMemberRoleEnum;
  summonerId: bigint;
}

export interface LolLobbyPremadePartyDto {
  commsEnabled: boolean;
  partyId: string;
  players: LolLobbyPremadeMemberDto | undefined;
}

export interface LolLobbyPremadeRelationshipAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: bigint;
  eventType: string;
  friendPlayers: Array<string>;
  platformId: string;
  premadePlayers: Array<string>;
  puuid: string;
  summonerId: bigint;
}

export interface LolLobbyQueue {
  allowablePremadeSizes: Array<bigint>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolLobbyQueueGameCategory;
  championsRequiredToPlay: bigint;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolLobbyQueueGameTypeConfig;
  id: bigint;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: bigint;
  lastToggledOnTime: bigint;
  mapId: bigint;
  maxDivisionForPremadeSize2: string;
  maxLevel: bigint;
  maxSummonerLevelForFirstWinOfTheDay: bigint;
  maxTierForPremadeSize2: string;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  name: string;
  numPlayersPerTeam: bigint;
  queueAvailability: LolLobbyQueueAvailability;
  queueRewards: LolLobbyQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: bigint;
  shortName: string;
  showPositionSelector: boolean;
  spectatorEnabled: boolean;
  type: string;
}

export type LolLobbyQueueAvailability = "Available" | "PlatformDisabled" | "DoesntMeetRequirements";

export interface LolLobbyQueueCustomGame {
  queueAvailability: LolLobbyQueueAvailability;
}

export type LolLobbyQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export type LolLobbyQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolLobbyQueueGameTypeConfig {
  advancedLearningQuests: boolean;
  allowTrades: boolean;
  banMode: string;
  banTimerDuration: bigint;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  gameModeOverride: string;
  id: bigint;
  learningQuests: boolean;
  mainPickTimerDuration: bigint;
  maxAllowableBans: bigint;
  name: string;
  numPlayersPerTeamOverride: bigint;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: bigint;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolLobbyQueueRestrictionDto {
  gatekeeperRestrictions: Array<LolLobbyGatekeeperRestrictionDto>;
}

export interface LolLobbyQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<bigint>;
}

export interface LolLobbyRankedPositionInfoDTO {
  queue: string;
  rank: string;
  tier: string;
}

export interface LolLobbyRankedStatsUnsignedDTO {
  highestPreviousSeasonEndRank: string;
  highestPreviousSeasonEndTier: string;
  jwt: string;
  queues: Array<LolLobbyRankedPositionInfoDTO>;
}

export interface LolLobbyReadyDto {
  ready: boolean;
}

export interface LolLobbyReceivedInvitationDto {
  canAcceptInvitation: boolean;
  fromSummonerId: bigint;
  fromSummonerName: string;
  gameConfig: LolLobbyReceivedInvitationGameConfigDto;
  invitationId: string;
  invitationType: LolLobbyInvitationType;
  restrictions: Array<LolLobbyEligibilityRestriction>;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
}

export interface LolLobbyReceivedInvitationGameConfigDto {
  gameMode: string;
  inviteGameType: string;
  mapId: bigint;
  queueId: bigint;
}

export interface LolLobbyRegistrationCredentials {
  gameClientVersion: string;
  inventoryToken: string;
  inventoryTokens: Array<string>;
  rankedOverviewToken: string;
  simpleInventoryToken: string;
  summonerToken: string;
  userInfoToken: string;
}

export interface LolLobbyRegistrationStatus {
  complete: boolean;
  errorCodes: Array<string>;
}

export interface LolLobbyRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface LolLobbyServiceProxyPayload {
  body: string;
  method: string;
  url: string;
}

export interface LolLobbySummoner {
  accountId: bigint;
  displayName: string;
  internalName: string;
  profileIconId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolLobbyTeamBuilderActionV1 {
  actionId: bigint;
  actorCellId: bigint;
  championId: bigint;
  completed: boolean;
  duration: bigint;
  type: string;
}

export interface LolLobbyTeamBuilderAfkCheckStateV1 {
  additionalInventoryTypes: Array<string>;
  afkReady: boolean;
  compressAfkCheckPayload: boolean;
  inventoryDraft: LolLobbyTeamBuilderTbdInventory;
  maxAfkMillis: bigint;
  multiUserChatJWT: string;
  remainingAfkMillis: bigint;
}

export interface LolLobbyTeamBuilderBackwardsTransitionInfoV1 {
  backwardsTransitionReason: string;
  initiatorSummonerIds: Array<bigint>;
}

export interface LolLobbyTeamBuilderCellV1 {
  assignedPosition: string;
  cellId: bigint;
  championId: bigint;
  championPickIntent: bigint;
  entitledFeatureType: string;
  skinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  summonerId: bigint;
  teamId: bigint;
}

export interface LolLobbyTeamBuilderCellsV1 {
  alliedTeam: Array<LolLobbyTeamBuilderCellV1>;
  enemyTeam: Array<LolLobbyTeamBuilderCellV1>;
}

export interface LolLobbyTeamBuilderCeremonyV1 {
  duration: bigint;
  name: string;
}

export interface LolLobbyTeamBuilderChampSelectAction {
  actorCellId: bigint;
  championId: bigint;
  completed: boolean;
  id: bigint;
  isAllyAction: boolean;
  isInProgress: boolean;
  type: string;
}

export interface LolLobbyTeamBuilderChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolLobbyTeamBuilderChampSelectDevPanelData {
  counter: bigint;
  dtoIndex: bigint;
  queueId: bigint;
  teamIdSuffix: bigint;
}

export interface LolLobbyTeamBuilderChampSelectMySelection {
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  wardSkinId: bigint;
}

export interface LolLobbyTeamBuilderChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: bigint;
  championId: bigint;
  championPickIntent: bigint;
  entitledFeatureType: string;
  playerType: string;
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  summonerId: bigint;
  team: bigint;
  wardSkinId: bigint;
}

export interface LolLobbyTeamBuilderChampSelectReport {
  categories: Array<string>;
  comment: string;
  location: string;
  match_token: string;
  offender_puuid: string;
}

export interface LolLobbyTeamBuilderChampSelectReportV2 {
  categories: Array<string>;
  comment: string;
  location: string;
  offenderId: string;
  token: string;
  tokenType: string;
}

export interface LolLobbyTeamBuilderChampSelectSession {
  actions: Array<boolean | undefined>;
  allowBattleBoost: boolean;
  allowDuplicatePicks: boolean;
  allowLockedEvents: boolean;
  allowRerolling: boolean;
  allowSkinSelection: boolean;
  benchChampionIds: Array<bigint>;
  benchEnabled: boolean;
  boostableSkinCount: bigint;
  chatDetails: LolLobbyTeamBuilderChampSelectChatRoomDetails;
  counter: bigint;
  entitledFeatureState: LolLobbyTeamBuilderEntitledFeatureState;
  gameId: bigint;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isSpectating: boolean;
  localPlayerCellId: bigint;
  lockedEventIndex: bigint;
  myTeam: Array<LolLobbyTeamBuilderChampSelectPlayerSelection>;
  recoveryCounter: bigint;
  rerollsRemaining: bigint;
  skipChampionSelect: boolean;
  theirTeam: Array<LolLobbyTeamBuilderChampSelectPlayerSelection>;
  timer: LolLobbyTeamBuilderChampSelectTimer;
  trades: Array<LolLobbyTeamBuilderChampSelectTradeContract>;
}

export interface LolLobbyTeamBuilderChampSelectTimer {
  adjustedTimeLeftInPhase: bigint;
  internalNowInEpochMs: bigint;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: bigint;
}

export interface LolLobbyTeamBuilderChampSelectTradeContract {
  cellId: bigint;
  id: bigint;
  state: LolLobbyTeamBuilderChampSelectTradeState;
}

export type LolLobbyTeamBuilderChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";

export interface LolLobbyTeamBuilderChampionBenchStateV1 {
  benchEnabled: boolean;
  championIds: Array<bigint>;
}

export interface LolLobbyTeamBuilderChampionSelectPreferences {
  skins: bigint | undefined;
  spells: boolean | undefined | undefined;
}

export interface LolLobbyTeamBuilderChampionSelectStateV1 {
  actionSetList: Array<boolean | undefined>;
  allowDuplicatePicks: boolean;
  allowOptingOutOfBanning: boolean;
  allowSkinSelection: boolean;
  battleBoostState: LolLobbyTeamBuilderTeamBuilderBoostInfo;
  cells: LolLobbyTeamBuilderCellsV1;
  ceremoniesByActionSetIndex: boolean | undefined | undefined;
  championBenchState: LolLobbyTeamBuilderChampionBenchStateV1;
  currentActionSetIndex: bigint;
  currentTimeRemainingMillis: bigint;
  currentTotalTimeMillis: bigint;
  entitledFeatureState: LolLobbyTeamBuilderEntitledFeatureStateV1;
  inventoryDraft: LolLobbyTeamBuilderTbdInventory;
  isSpectating: boolean;
  lcuSkipsSendingLoadoutsGco: boolean;
  localPlayerCellId: bigint;
  lockedEventsState: LolLobbyTeamBuilderLockedEventsStateV1;
  pickIntentClearedReason: string;
  rerollState: LolLobbyTeamBuilderRerollStateV1;
  skipChampionSelect: boolean;
  subphase: string;
  teamChatRoomId: string;
  teamId: string;
  trades: Array<LolLobbyTeamBuilderTradeV1>;
}

export interface LolLobbyTeamBuilderCountdownTimer {
  counter: bigint;
  phaseName: string;
  timer: bigint;
}

export interface LolLobbyTeamBuilderEntitledFeatureState {
  additionalRerolls: bigint;
  unlockedSkinIds: Array<bigint>;
}

export interface LolLobbyTeamBuilderEntitledFeatureStateV1 {
  additionalRerolls: bigint;
  unlockedSkinsState: LolLobbyTeamBuilderUnlockedSkinsStateV1;
}

export interface LolLobbyTeamBuilderGameModeSpellList {
  spells: Array<bigint>;
}

export interface LolLobbyTeamBuilderGameflowGameClient {
  running: boolean;
}

export interface LolLobbyTeamBuilderGameflowGameMap {
  perPositionDisallowedSummonerSpells: LolLobbyTeamBuilderGameModeSpellList | undefined;
  perPositionRequiredSummonerSpells: LolLobbyTeamBuilderGameModeSpellList | undefined;
}

export interface LolLobbyTeamBuilderGameflowSession {
  gameClient: LolLobbyTeamBuilderGameflowGameClient;
  map: LolLobbyTeamBuilderGameflowGameMap;
}

export interface LolLobbyTeamBuilderGatekeeperRestricted {
  gatekeeperRestrictions: Array<LolLobbyTeamBuilderGatekeeperRestriction>;
}

export interface LolLobbyTeamBuilderGatekeeperRestriction {
  payload: string;
  queueId: bigint;
  reason: string;
  remainingMillis: bigint;
  summonerId: bigint;
}

export interface LolLobbyTeamBuilderLeaverBusterAbandoned {
  abandonerName: string;
}

export interface LolLobbyTeamBuilderLobby {
  allowablePremadeSizes: Array<bigint>;
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForStreaking: boolean;
  canStartMatchmaking: boolean;
  chatRoomId: string;
  chatRoomKey: string;
  invitationId: string;
  invitations: Array<LolLobbyTeamBuilderLobbyInvitation>;
  isTeamBuilderManaged: boolean;
  localMember: LolLobbyTeamBuilderLobbyMember;
  members: Array<LolLobbyTeamBuilderLobbyMember>;
  premadeSizeAllowed: boolean;
  queueId: bigint;
  removalReason: LolLobbyTeamBuilderLobbyRemovedFromGameReason;
  requiredPositionCoverageMet: boolean;
  showPositionExcluder: boolean;
  showPositionSelector: boolean;
  specifiablePositionPreferences: Array<string>;
  wasKicked: boolean;
}

export interface LolLobbyTeamBuilderLobbyCountdownTimer {
  counter: bigint;
  phaseName: string;
  timer: bigint;
}

export interface LolLobbyTeamBuilderLobbyInvitation {
  invitationMetaData: boolean | undefined;
}

export interface LolLobbyTeamBuilderLobbyMember {
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
  autoFillProtectedForStreaking: boolean;
  canInviteOthers: boolean;
  excludedPositionPreference: string;
  id: bigint;
  isOwner: boolean;
  positionPreferences: LolLobbyTeamBuilderLobbyPositionPreferences;
  showPositionExcluder: boolean;
}

export interface LolLobbyTeamBuilderLobbyPositionPreferences {
  firstPreference: string;
  secondPreference: string;
}

export interface LolLobbyTeamBuilderLobbyPositionPreferencesV2 {
  excludedPreference: string;
  firstPreference: string;
  secondPreference: string;
}

export type LolLobbyTeamBuilderLobbyRemovedFromGameReason =
  | "None"
  | "Kicked"
  | "Disbanded"
  | "Left"
  | "ServiceError"
  | "Other"
  | "Timeout"
  | "GameStartError"
  | "ServiceShutdown";

export interface LolLobbyTeamBuilderLockedEventsStateV1 {
  allowLockedEvents: boolean;
  lockedEventIndex: bigint;
}

export interface LolLobbyTeamBuilderLoginSession {
  accountId: bigint;
  connected: boolean;
  state: LolLobbyTeamBuilderLoginSessionState;
  summonerId: bigint;
}

export type LolLobbyTeamBuilderLoginSessionState =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolLobbyTeamBuilderMatchmakingDodgeData {
  dodgerId: bigint;
  state: LolLobbyTeamBuilderMatchmakingDodgeState;
}

export type LolLobbyTeamBuilderMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export type LolLobbyTeamBuilderMatchmakingDodgeWarning = "None" | "Warning" | "Penalty";

export interface LolLobbyTeamBuilderMatchmakingLowPriorityData {
  bustedLeaverAccessToken: string;
  penalizedSummonerIds: Array<bigint>;
  penaltyTime: number;
  penaltyTimeRemaining: number;
}

export interface LolLobbyTeamBuilderMatchmakingReadyCheckResource {
  declinerIds: Array<bigint>;
  dodgeWarning: LolLobbyTeamBuilderMatchmakingDodgeWarning;
  playerResponse: LolLobbyTeamBuilderMatchmakingReadyCheckResponse;
  state: LolLobbyTeamBuilderMatchmakingReadyCheckState;
  timer: number;
}

export type LolLobbyTeamBuilderMatchmakingReadyCheckResponse = "None" | "Accepted" | "Declined";

export type LolLobbyTeamBuilderMatchmakingReadyCheckState =
  | "Invalid"
  | "InProgress"
  | "EveryoneReady"
  | "StrangerNotReady"
  | "PartyNotReady"
  | "Error";

export interface LolLobbyTeamBuilderMatchmakingSearch {
  searchState: LolLobbyTeamBuilderMatchmakingSearchState;
}

export interface LolLobbyTeamBuilderMatchmakingSearchErrorResource {
  errorType: string;
  id: bigint;
  message: string;
  penalizedSummonerId: bigint;
  penaltyTimeRemaining: number;
}

export interface LolLobbyTeamBuilderMatchmakingSearchResource {
  dodgeData: LolLobbyTeamBuilderMatchmakingDodgeData;
  errors: Array<LolLobbyTeamBuilderMatchmakingSearchErrorResource>;
  estimatedQueueTime: number;
  isCurrentlyInQueue: boolean;
  lobbyId: string;
  lowPriorityData: LolLobbyTeamBuilderMatchmakingLowPriorityData;
  queueId: bigint;
  readyCheck: LolLobbyTeamBuilderMatchmakingReadyCheckResource;
  searchState: LolLobbyTeamBuilderMatchmakingSearchState;
  timeInQueue: number;
}

export type LolLobbyTeamBuilderMatchmakingSearchState =
  | "Invalid"
  | "AbandonedLowPriorityQueue"
  | "Canceled"
  | "Searching"
  | "Found"
  | "Error"
  | "ServiceError"
  | "ServiceShutdown";

export interface LolLobbyTeamBuilderQueue {
  allowablePremadeSizes: Array<bigint>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolLobbyTeamBuilderQueueGameCategory;
  championsRequiredToPlay: bigint;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolLobbyTeamBuilderQueueGameTypeConfig;
  id: bigint;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: bigint;
  lastToggledOnTime: bigint;
  mapId: bigint;
  maxLevel: bigint;
  maxSummonerLevelForFirstWinOfTheDay: bigint;
  maximumParticipantListSize: bigint;
  minLevel: bigint;
  minimumParticipantListSize: bigint;
  name: string;
  numPlayersPerTeam: bigint;
  queueAvailability: LolLobbyTeamBuilderQueueAvailability;
  queueRewards: LolLobbyTeamBuilderQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: bigint;
  shortName: string;
  showPositionSelector: boolean;
  spectatorEnabled: boolean;
  type: string;
}

export type LolLobbyTeamBuilderQueueAvailability =
  | "Available"
  | "PlatformDisabled"
  | "DoesntMeetRequirements";

export type LolLobbyTeamBuilderQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolLobbyTeamBuilderQueueGameTypeConfig {
  advancedLearningQuests: boolean;
  allowTrades: boolean;
  banMode: string;
  banTimerDuration: bigint;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  id: bigint;
  learningQuests: boolean;
  mainPickTimerDuration: bigint;
  maxAllowableBans: bigint;
  name: string;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: bigint;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolLobbyTeamBuilderQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<bigint>;
}

export interface LolLobbyTeamBuilderRerollStateV1 {
  allowRerolling: boolean;
  rerollsRemaining: bigint;
}

export interface LolLobbyTeamBuilderSettingCategoryResource {
  data: LolLobbyTeamBuilderChampionSelectPreferences;
  schemaVersion: bigint;
}

export interface LolLobbyTeamBuilderTBDMatchmakingState {
  backwardsTransitionReason: string;
  estimatedMatchmakingTimeMillis: bigint;
  timeInMatchmakingMillis: bigint;
}

export interface LolLobbyTeamBuilderTbLobbyStateResource {
  afkCheckState: LolLobbyTeamBuilderAfkCheckStateV1;
  championSelectState: LolLobbyTeamBuilderChampionSelectStateV1;
  counter: bigint;
  gameId: bigint;
  matchmakingState: LolLobbyTeamBuilderTBDMatchmakingState;
  phaseName: string;
  queueId: bigint;
  recoveryCounter: bigint;
}

export interface LolLobbyTeamBuilderTbRemovedFromServiceNotification {
  backwardsTransitionInfo: LolLobbyTeamBuilderBackwardsTransitionInfoV1;
  reason: string;
}

export interface LolLobbyTeamBuilderTbdInventory {
  allChampionIds: Array<bigint>;
  disabledChampionIds: Array<bigint>;
  initialSpellIds: Array<bigint>;
  lastSelectedSkinIdByChampionId: bigint | undefined;
  skinIds: Array<bigint>;
  spellIds: Array<bigint>;
}

export interface LolLobbyTeamBuilderTeamBoost {
  availableSkins: Array<bigint>;
  ipReward: bigint;
  ipRewardForPurchaser: bigint;
  price: bigint;
  skinUnlockMode: string;
  summonerId: bigint;
  unlocked: boolean;
}

export interface LolLobbyTeamBuilderTeamBuilderBoostInfo {
  activatorCellId: bigint;
  allowBattleBoost: boolean;
  battleBoostActivated: boolean;
  boostableSkinCount: bigint;
  cost: bigint;
  unlockedSkinIds: Array<bigint>;
}

export interface LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse {
  payload: LolLobbyTeamBuilderTbLobbyStateResource;
  status: string;
}

export interface LolLobbyTeamBuilderTradeV1 {
  cellId: bigint;
  id: bigint;
  state: string;
}

export interface LolLobbyTeamBuilderUnlockedSkinsStateV1 {
  unlockedSkinIds: Array<bigint>;
}

export interface LolLobbyUserInfoToken {
  userInfo: string;
}

export interface LolLobbyUserResource {
  lol: string | undefined;
  summonerId: bigint;
}

export interface LolLoginAccessToken {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export interface LolLoginAccountStateResource {
  state: LolLoginAccountStateType;
}

export type LolLoginAccountStateType =
  | "CREATING"
  | "ENABLED"
  | "TRANSFERRING_OUT"
  | "TRANSFERRING_IN"
  | "TRANSFERRED_OUT"
  | "GENERATING";

export interface LolLoginAuthorization {
  currentAccountId: bigint;
  currentPlatformId: string;
  subject: string;
}

export type LolLoginConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface LolLoginConfigStatus {
  readiness: LolLoginConfigReadinessEnum;
}

export type LolLoginConfigType = "public" | "player";

export interface LolLoginCrashReportingEnvironment {
  environment: string;
  userId: string;
  userName: string;
}

export interface LolLoginIdToken {
  expiry: bigint;
  token: string;
}

export interface LolLoginLcdsResponse {
  body: boolean | undefined;
  typeName: string;
}

export interface LolLoginLcdsServiceProxyResponse {
  compressedPayload: boolean;
  messageId: string;
  methodName: string;
  payload: string;
  serviceName: string;
  status: string;
}

export type LolLoginLeagueSessionStatus =
  | "UNINITIALIZED"
  | "INITIALIZED"
  | "EXPIRED"
  | "DUPLICATED"
  | "ANTI_ADDICTION_EXPIRED";

export interface LolLoginLeagueSessionTokenEnvelope {
  logoutOnFailure: boolean;
  token: string;
}

export type LolLoginLoginConnectionMode = "Preparing" | "Legacy" | "Partner" | "RiotClient";

export interface LolLoginLoginConnectionState {
  isPartnerRiotClient: boolean;
  isUsingDeveloperAuthToken: boolean;
  mode: LolLoginLoginConnectionMode;
}

export interface LolLoginLoginError {
  description: string;
  id: string;
  messageId: string;
}

export interface LolLoginLoginQueue {
  approximateWaitTimeSeconds: bigint;
  estimatedPositionInQueue: bigint;
  isPositionCapped: boolean;
}

export interface LolLoginLoginSession {
  accountId: bigint;
  connected: boolean;
  error: LolLoginLoginError;
  gasToken: boolean | undefined;
  idToken: string;
  isInLoginQueue: boolean;
  isNewPlayer: boolean;
  puuid: string;
  state: LolLoginLoginSessionStates;
  summonerId: bigint;
  userAuthToken: string;
  username: string;
}

export type LolLoginLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLoginLoginSessionWallet {
  ip: bigint;
  rp: bigint;
}

export interface LolLoginPlatformGeneratedCredentials {
  gasToken: boolean | undefined;
  password: string;
  username: string;
}

export interface LolLoginRSOConfigReadyState {
  ready: boolean;
}

export interface LolLoginRSOPlayerCredentials {
  password: string;
  platformId: string;
  username: string;
}

export interface LolLoginSummonerCreatedResource {
  summonerId: bigint;
}

export interface LolLoginSummonerSessionResource {
  displayName: string;
  isNewPlayer: boolean;
  summonerId: bigint;
}

export interface LolLoginUsernameAndPassword {
  password: string;
  username: string;
}

export interface LolLootAccountIdAndSummonerId {
  summonerId: bigint;
}

export interface LolLootCollectionsChampionMinimal {
  id: bigint;
  ownership: LolLootCollectionsOwnership;
}

export interface LolLootCollectionsChampionSkinMinimal {
  championId: bigint;
  id: bigint;
  name: string;
  ownership: LolLootCollectionsOwnership;
  splashPath: string;
  tilePath: string;
}

export interface LolLootCollectionsEmote {
  itemId: bigint;
  ownershipType: LolLootInventoryOwnership;
}

export interface LolLootCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolLootCollectionsRental;
}

export interface LolLootCollectionsRental {
  rented: boolean;
}

export interface LolLootCollectionsStatstone {
  itemId: bigint;
  ownershipType: LolLootInventoryOwnership;
}

export interface LolLootCollectionsSummonerIcon {
  itemId: bigint;
}

export interface LolLootCollectionsWardSkin {
  id: bigint;
  name: string;
  ownership: LolLootCollectionsOwnership;
  wardImagePath: string;
  wardShadowImagePath: string;
}

export interface LolLootContextMenu {
  actionType: string;
  enabled: boolean;
  essenceQuantity: bigint;
  essenceType: string;
  name: string;
  recipeContextMenuAction: string;
  recipeDescription: string;
  requiredOthers: string;
  requiredOthersCount: bigint;
  requiredOthersName: string;
  requiredTokens: string;
}

export interface LolLootCounter {
  direction: string;
  groupId: string;
  id: string;
  name: string;
  startValue: bigint;
}

export interface LolLootCounterInstance {
  counterId: string;
  counterValue: bigint;
  groupId: string;
  ownerId: string;
  productId: string;
}

export interface LolLootCurrencyConfiguration {
  currenciesUsingCapWallets: Array<string>;
}

export interface LolLootEntityInstance {
  counters: Array<LolLootCounterInstance>;
  groupId: string;
  milestones: Array<LolLootMilestoneInstance>;
}

export interface LolLootGameDataSummonerEmote {
  description: string;
  id: bigint;
  inventoryIcon: string;
  name: string;
}

export interface LolLootGameDataSummonerIcon {
  id: bigint;
  imagePath: string;
}

export type LolLootGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolLootGameflowSession {
  phase: LolLootGameflowPhase;
}

export type LolLootGrantStatus =
  | "PENDING_FULFILLMENT"
  | "PENDING_SELECTION"
  | "FULFILLED"
  | "FAILED";

export interface LolLootGrantorDescription {
  appName: string;
  entityId: string;
}

export interface LolLootGroup {
  counters: Array<LolLootCounter>;
  id: string;
  milestones: Array<LolLootMilestone>;
  name: string;
  productId: string;
  repeat: LolLootRepeat;
}

export type LolLootInventoryOwnership = "OWNED" | "RENTED" | "F2P";

export type LolLootItemOwnershipStatus = "NONE" | "FREE" | "RENTAL" | "OWNED";

export interface LolLootLedgerConfigGdsResource {
  counters: Array<LolLootMilestonesLedgerCounterGdsResource>;
  id: string;
  milestones: Array<LolLootLedgerConfigMilestoneGdsResource>;
  name: string;
  repeat: LolLootMilestonesLedgerConfigRepeatGdsResource;
}

export interface LolLootLedgerConfigMilestoneGdsResource {
  counter: LolLootMilestonesLedgerCounterGdsResource;
  id: string;
  name: string;
  properties: Array<LolLootLedgerConfigMilestonePropertiesGdsResource>;
  triggerValue: bigint;
}

export interface LolLootLedgerConfigMilestonePropertiesGdsResource {
  description: string;
  id: string;
  name: string;
  rewardStrategy: string;
  rewards: Array<LolLootLedgerConfigMilestoneRewardGdsResource>;
}

export interface LolLootLedgerConfigMilestoneRewardGdsResource {
  id: string;
  legacyLootItem: string;
  lootItemToGrant: LolLootMilestoneLootItemRewardGdsResource;
  quantity: bigint;
  rewardType: string;
}

export interface LolLootLoginDataPacket {
  simpleMessages: Array<LolLootLoginSimpleMessage>;
}

export interface LolLootLoginSession {
  accountId: bigint;
  state: LolLootLoginSessionStates;
  summonerId: bigint;
}

export type LolLootLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLootLoginSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolLootLootBundleContentGdsResource {
  localizedDescription: string;
}

export interface LolLootLootBundleGdsResource {
  contents: Array<LolLootLootBundleContentGdsResource>;
  description: string;
  descriptionLong: string;
  id: string;
  image: string;
}

export interface LolLootLootDataGdsResource {
  LootBundles: Array<LolLootLootBundleGdsResource>;
  LootItems: Array<LolLootLootItemGdsResource>;
  LootRecipes: Array<LolLootLootRecipeGdsResource>;
  LootTables: Array<LolLootLootTableGdsResource>;
}

export interface LolLootLootDescription {
  childLootTableNames: Array<string>;
  childrenDescriptions: Array<LolLootLootDescription>;
  imagePath: string;
  localizedDescription: string;
  localizedDescriptionLong: string;
  lootName: string;
}

export interface LolLootLootDropTableEntryGdsResource {
  localizedDescription: string;
  lootId: string;
}

export interface LolLootLootGrantNotification {
  accountId: bigint;
  championId: bigint;
  gameId: bigint;
  id: bigint;
  lootName: string;
  messageKey: string;
  msgId: string;
  playerGrade: string;
  playerId: bigint;
}

export interface LolLootLootItem {
  asset: string;
  displayCategories: string;
  expiryTime: bigint;
  lootName: string;
  rarity: string;
  rentalGames: bigint;
  rentalSeconds: bigint;
  storeItemId: bigint;
  tags: string;
  type: string;
  upgradeLootName: string;
  value: bigint;
}

export interface LolLootLootItemGdsResource {
  autoRedeem: boolean;
  description: string;
  endDate: string;
  id: string;
  image: string;
  lifetimeMax: bigint;
  mappedStoreId: bigint;
  name: string;
  rarity: LolLootLootRarity;
  recipeMenuActive: boolean;
  recipeMenuSubtitle: string;
  recipeMenuTitle: string;
  startDate: string;
  type: LolLootLootType;
}

export interface LolLootLootMilestone {
  id: string;
  rewards: Array<LolLootLootMilestoneReward>;
  threshold: bigint;
}

export type LolLootLootMilestoneClaimStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";

export interface LolLootLootMilestoneRepeat {
  multiplier: number;
  repeatCount: bigint;
  repeatScope: bigint;
}

export interface LolLootLootMilestoneReward {
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
  lootItem: LolLootPlayerLoot;
  quantity: bigint;
  rewardGroupId: string;
  rewardType: string;
}

export interface LolLootLootMilestones {
  active: boolean;
  endDate: string;
  errorCachingMilestoneSet: boolean;
  id: string;
  ledgerConfigId: string;
  lootItems: Array<string>;
  milestones: Array<LolLootLootMilestone>;
  recipes: Array<string>;
  repeat: LolLootLootMilestoneRepeat;
  startDate: string;
  storeGroupTitle: string;
}

export interface LolLootLootMilestonesClaimResponse {
  claimedMilestones: Array<string>;
  lootMilestoneSetId: string;
  status: LolLootLootMilestoneClaimStatus;
}

export interface LolLootLootMilestonesCounter {
  completedLoops: bigint;
  counterValue: bigint;
  lootMilestonesId: string;
  readyToClaimMilestones: Array<string>;
}

export interface LolLootLootMilestonesDataGdsResource {
  endDate: string;
  id: string;
  ledgerConfig: LolLootLedgerConfigGdsResource;
  recipes: Array<LolLootMilestonesRecipeGdsResource>;
  startDate: string;
  storeGroupTitle: string;
}

export interface LolLootLootOddsResponse {
  children: Array<LolLootLootOddsResponse>;
  dropRate: number;
  label: string;
  lootId: string;
  lootOrder: bigint;
  parentId: string;
  quantity: bigint;
}

export interface LolLootLootOutputGdsResource {
  localizedDescription: string;
  lootId: string;
}

export type LolLootLootRarity = "Default" | "Epic" | "Legendary" | "Mythic" | "Ultimate";

export interface LolLootLootRecipeGdsResource {
  contextMenuText: string;
  description: string;
  hasVisibleLootOdds: boolean;
  id: string;
  imagePath: string;
  introVideoPath: string;
  loopVideoPath: string;
  outputs: Array<LolLootLootOutputGdsResource>;
  outroVideoPath: string;
  requirementText: string;
}

export interface LolLootLootTableGdsResource {
  description: string;
  descriptionLong: string;
  dropChance: Array<LolLootLootDropTableEntryGdsResource>;
  id: string;
  image: string;
}

export type LolLootLootType =
  | "Chest"
  | "Currency"
  | "Material"
  | "WardSkin"
  | "Skin"
  | "Skin_Rental"
  | "SummonerIcon"
  | "Companion"
  | "Egg"
  | "Egg_Color"
  | "Statstone"
  | "Statstone_Shard"
  | "Boost"
  | "SkinBorder"
  | "TFT_Map_Skin"
  | "TFT_Damage_Skin";

export interface LolLootMilestone {
  counterId: string;
  groupId: string;
  id: string;
  name: string;
  properties: string | undefined;
  triggerValue: bigint;
}

export interface LolLootMilestoneInstance {
  counterId: string;
  groupId: string;
  milestoneId: string;
  ownerId: string;
  productId: string;
  repeatSequence: bigint;
  triggerValue: bigint;
  triggered: boolean;
}

export interface LolLootMilestoneLootItemRewardGdsResource {
  internalName: string;
}

export interface LolLootMilestonesLedgerConfigRepeatGdsResource {
  name: LolLootMilestonesLedgerGroupRepeatGdsResource;
}

export interface LolLootMilestonesLedgerCounterGdsResource {
  direction: string;
  id: string;
  name: string;
  startValue: bigint;
}

export interface LolLootMilestonesLedgerGroupRepeatGdsResource {
  Count: bigint;
  Multiplier: number;
  Scope: bigint;
}

export interface LolLootMilestonesRecipeGdsResource {
  name: string;
}

export interface LolLootPlayerLoot {
  asset: string;
  count: bigint;
  disenchantLootName: string;
  disenchantValue: bigint;
  displayCategories: string;
  expiryTime: bigint;
  isNew: boolean;
  isRental: boolean;
  itemDesc: string;
  itemStatus: LolLootItemOwnershipStatus;
  localizedDescription: string;
  localizedName: string;
  localizedRecipeSubtitle: string;
  localizedRecipeTitle: string;
  lootId: string;
  lootName: string;
  parentItemStatus: LolLootItemOwnershipStatus;
  parentStoreItemId: bigint;
  rarity: string;
  redeemableStatus: LolLootRedeemableStatus;
  refId: string;
  rentalGames: bigint;
  rentalSeconds: bigint;
  shadowPath: string;
  splashPath: string;
  storeItemId: bigint;
  tags: string;
  tilePath: string;
  type: string;
  upgradeEssenceName: string;
  upgradeEssenceValue: bigint;
  upgradeLootName: string;
  value: bigint;
}

export interface LolLootPlayerLootDelta {
  deltaCount: bigint;
  playerLoot: LolLootPlayerLoot;
}

export interface LolLootPlayerLootMap {
  playerLoot: LolLootPlayerLoot | undefined;
  version: bigint;
}

export interface LolLootPlayerLootNotification {
  acknowledged: boolean;
  count: bigint;
  id: string;
}

export interface LolLootPlayerLootUpdate {
  added: Array<LolLootPlayerLootDelta>;
  redeemed: Array<LolLootPlayerLootDelta>;
  removed: Array<LolLootPlayerLootDelta>;
}

export interface LolLootRMSPayload {
  affinities: Array<string>;
  productId: string;
}

export interface LolLootRecipeMenuConfig {
  alwaysShowLootIds: Array<string>;
  enabled: boolean;
  lootItemsUsingBreakoutRecipeMenu: Array<string>;
}

export interface LolLootRecipeMetadata {
  bonusDescriptions: Array<LolLootLootDescription>;
  guaranteedDescriptions: Array<LolLootLootDescription>;
  tooltipsDisabled: boolean;
}

export interface LolLootRecipeOutput {
  lootName: string;
  quantity: bigint;
}

export interface LolLootRecipeSlot {
  lootIds: Array<string>;
  quantity: bigint;
  slotNumber: bigint;
  tags: string;
}

export interface LolLootRecipeWithMilestones {
  contextMenuText: string;
  crafterName: string;
  description: string;
  displayCategories: string;
  imagePath: string;
  introVideoPath: string;
  loopVideoPath: string;
  lootMilestoneIds: Array<string>;
  metadata: LolLootRecipeMetadata;
  outputs: Array<LolLootRecipeOutput>;
  outroVideoPath: string;
  recipeName: string;
  requirementText: string;
  slots: Array<LolLootRecipeSlot>;
  type: string;
}

export type LolLootRedeemableStatus =
  | "UNKNOWN"
  | "REDEEMABLE"
  | "REDEEMABLE_RENTAL"
  | "NOT_REDEEMABLE"
  | "NOT_REDEEMABLE_RENTAL"
  | "ALREADY_OWNED"
  | "ALREADY_RENTED"
  | "CHAMPION_NOT_OWNED"
  | "SKIN_NOT_OWNED";

export interface LolLootRegionLocale {
  locale: string;
  region: string;
}

export interface LolLootRepeat {
  count: bigint;
  multiplier: number;
  scope: bigint;
}

export interface LolLootRequestDTO_SelectionRequestDTO {
  data: LolLootSelectionRequestDTO;
  metadata: LolLootRequestMetadataDTO;
}

export interface LolLootRequestMetadataDTO {
  transactionId: string;
}

export interface LolLootResponseDTO_SvcRewardGrant {
  data: LolLootSvcRewardGrant;
  metadata: LolLootResponseMetadataDTO;
}

export interface LolLootResponseDTO_vector_SvcRewardGrant {
  data: Array<LolLootSvcRewardGrant>;
  metadata: LolLootResponseMetadataDTO;
}

export interface LolLootResponseDTO_vector_SvcRewardGroup {
  data: Array<LolLootSvcRewardGroup>;
  metadata: LolLootResponseMetadataDTO;
}

export interface LolLootResponseMetadataDTO {}

export interface LolLootReward {
  fulfillmentSource: string;
  id: string;
  itemId: string;
  itemType: string;
  localizations: string | undefined;
  media: string | undefined;
  quantity: bigint;
}

export interface LolLootRewardGrant {
  info: LolLootSvcRewardGrant;
  rewardGroup: LolLootSvcRewardGroup;
}

export type LolLootRewardStatus = "PENDING" | "FULFILLED" | "FAILED";

export type LolLootRewardStrategy = "ALL" | "RANDOM" | "SELECTION";

export interface LolLootRewardsConfig {
  Enabled: boolean;
}

export interface LolLootSelectionRequestDTO {
  rewardGroupId: string;
  selections: Array<string>;
}

export interface LolLootSelectionStrategyConfig {
  maxSelectionsAllowed: bigint;
  minSelectionsAllowed: bigint;
}

export interface LolLootSummoner {
  summonerLevel: bigint;
}

export interface LolLootSvcRewardGrant {
  grantElements: Array<LolLootSvcRewardGrantElement>;
  granteeId: string;
  grantorDescription: LolLootGrantorDescription;
  id: string;
  rewardGroupId: string;
  selectedIds: Array<string>;
  status: LolLootGrantStatus;
  viewed: boolean;
}

export interface LolLootSvcRewardGrantElement {
  elementId: string;
  fulfillmentSource: string;
  itemId: string;
  itemType: string;
  localizations: string | undefined;
  media: string | undefined;
  quantity: bigint;
  status: LolLootRewardStatus;
}

export interface LolLootSvcRewardGroup {
  active: boolean;
  childRewardGroupIds: Array<string>;
  id: string;
  internalName: string;
  localizations: string | undefined;
  media: string | undefined;
  productId: string;
  rewardStrategy: LolLootRewardStrategy;
  rewards: Array<LolLootReward>;
  selectionStrategyConfig: LolLootSelectionStrategyConfig;
  types: Array<string>;
}

export interface LolLootVerboseLootOddsResponse {
  chanceToContain: Array<LolLootLootOddsResponse>;
  checksOwnership: boolean;
  guaranteedToContain: Array<LolLootLootOddsResponse>;
  hasPityRules: boolean;
  lootItem: LolLootPlayerLoot;
  recipeName: string;
}

export interface LolLoyaltyAccessToken {
  token: string;
}

export interface LolLoyaltyGlobalRewards {
  allChampions: boolean;
}

export interface LolLoyaltyInventoryDTO {
  items: boolean | undefined | undefined;
}

export interface LolLoyaltyInventoryItemDTO {
  inventoryType: string;
  loyalty: boolean;
}

export interface LolLoyaltyInventoryResponseDTO {
  data: LolLoyaltyInventoryDTO;
}

export interface LolLoyaltyLoginSession {
  accountId: bigint;
  puuid: string;
  state: LolLoyaltyLoginSessionStates;
  summonerId: bigint;
}

export type LolLoyaltyLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLoyaltyLoyaltyRewards {
  championIds: Array<bigint>;
  freeRewardedChampionsCount: bigint;
  freeRewardedSkinsCount: bigint;
  global: LolLoyaltyGlobalRewards;
  ipBoost: bigint;
  loyaltyTFTCompanionCount: bigint;
  loyaltyTFTMapSkinCount: bigint;
  skinIds: Array<bigint>;
  xpBoost: bigint;
}

export type LolLoyaltyLoyaltyStatus =
  | "LEGACY"
  | "REWARDS_GRANT"
  | "EXPIRY"
  | "CHANGE"
  | "REVOKE"
  | "DISABLED";

export interface LolLoyaltyLoyaltyStatusNotification {
  rewards: LolLoyaltyLoyaltyRewards;
  status: LolLoyaltyLoyaltyStatus;
}

export interface LolLoyaltyRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface LolLoyaltyRmsEntitlementPayload {
  entitlementTypeId: string;
  itemId: string;
  itemTypeId: string;
  resourceOperation: string;
}

export interface LolMapsGameModeSpellList {
  spells: Array<bigint>;
}

export interface LolMapsMaps {
  assets: string | undefined;
  categorizedContentBundles: boolean | undefined;
  description: string;
  gameMode: string;
  gameModeDescription: string;
  gameModeName: string;
  gameModeShortName: string;
  gameMutator: string;
  id: bigint;
  isDefault: boolean;
  isRGM: boolean;
  locStrings: string | undefined;
  mapStringId: string;
  name: string;
  perPositionDisallowedSummonerSpells: LolMapsGameModeSpellList | undefined;
  perPositionRequiredSummonerSpells: LolMapsGameModeSpellList | undefined;
  platformId: string;
  platformName: string;
  properties: boolean | undefined;
  tutorialCards: Array<LolMapsTutorialCard>;
}

export interface LolMapsTutorialCard {
  description: string;
  footer: string;
  header: string;
  imagePath: string;
}

export interface LolMatchHistoryAcsEndPoint {
  url: string;
}

export interface LolMatchHistoryAcsPlayer {
  accountId: bigint;
  platformId: string;
}

export interface LolMatchHistoryGAMHSMatchHistoryData {
  json: boolean | undefined;
  metadata: LolMatchHistoryGAMHSMatchHistoryMetadata;
}

export interface LolMatchHistoryGAMHSMatchHistoryList {
  active_puuid: string;
  games: Array<LolMatchHistoryGAMHSMatchHistoryData>;
}

export interface LolMatchHistoryGAMHSMatchHistoryMetadata {
  data_version: bigint;
  info_type: string;
  match_id: string;
  participants: Array<string>;
  private: boolean;
  product: string;
  tags: Array<string>;
  timestamp: bigint;
}

export interface LolMatchHistoryLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  idToken: string;
  state: LolMatchHistoryLoginSessionStates;
  summonerId: bigint;
}

export type LolMatchHistoryLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolMatchHistoryMHSummoner {
  accountId: bigint;
  displayName: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolMatchHistoryMatchHistoryEvent {
  assistingParticipantIds: Array<bigint>;
  buildingType: string;
  itemId: bigint;
  killerId: bigint;
  laneType: string;
  monsterSubType: string;
  monsterType: string;
  participantId: bigint;
  position: LolMatchHistoryMatchHistoryPosition;
  skillSlot: bigint;
  teamId: bigint;
  timestamp: bigint;
  towerType: string;
  type: string;
  victimId: bigint;
}

export interface LolMatchHistoryMatchHistoryGame {
  gameCreation: bigint;
  gameCreationDate: string;
  gameDuration: bigint;
  gameId: bigint;
  gameMode: string;
  gameType: string;
  gameVersion: string;
  mapId: bigint;
  participantIdentities: Array<LolMatchHistoryMatchHistoryParticipantIdentities>;
  participants: Array<LolMatchHistoryMatchHistoryParticipant>;
  platformId: string;
  queueId: bigint;
  seasonId: bigint;
  teams: Array<LolMatchHistoryMatchHistoryTeam>;
}

export interface LolMatchHistoryMatchHistoryGameList {
  gameBeginDate: string;
  gameCount: bigint;
  gameEndDate: string;
  gameIndexBegin: bigint;
  gameIndexEnd: bigint;
  games: Array<LolMatchHistoryMatchHistoryGame>;
}

export interface LolMatchHistoryMatchHistoryList {
  accountId: bigint;
  games: LolMatchHistoryMatchHistoryGameList;
  platformId: string;
}

export interface LolMatchHistoryMatchHistoryParticipant {
  championId: bigint;
  highestAchievedSeasonTier: string;
  participantId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  stats: LolMatchHistoryMatchHistoryParticipantStatistics;
  teamId: bigint;
  timeline: LolMatchHistoryMatchHistoryTimeline;
}

export interface LolMatchHistoryMatchHistoryParticipantFrame {
  currentGold: bigint;
  dominionScore: bigint;
  jungleMinionsKilled: bigint;
  level: bigint;
  minionsKilled: bigint;
  participantId: bigint;
  position: LolMatchHistoryMatchHistoryPosition;
  teamScore: bigint;
  totalGold: bigint;
  xp: bigint;
}

export interface LolMatchHistoryMatchHistoryParticipantIdentities {
  participantId: bigint;
  player: LolMatchHistoryMatchHistoryParticipantIdentityPlayer;
}

export interface LolMatchHistoryMatchHistoryParticipantIdentityPlayer {
  accountId: bigint;
  currentAccountId: bigint;
  currentPlatformId: string;
  matchHistoryUri: string;
  platformId: string;
  profileIcon: bigint;
  summonerId: bigint;
  summonerName: string;
}

export interface LolMatchHistoryMatchHistoryParticipantStatistics {
  assists: bigint;
  causedEarlySurrender: boolean;
  champLevel: bigint;
  combatPlayerScore: bigint;
  damageDealtToObjectives: bigint;
  damageDealtToTurrets: bigint;
  damageSelfMitigated: bigint;
  deaths: bigint;
  doubleKills: bigint;
  earlySurrenderAccomplice: boolean;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstInhibitorAssist: boolean;
  firstInhibitorKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: bigint;
  goldSpent: bigint;
  inhibitorKills: bigint;
  item0: bigint;
  item1: bigint;
  item2: bigint;
  item3: bigint;
  item4: bigint;
  item5: bigint;
  item6: bigint;
  killingSprees: bigint;
  kills: bigint;
  largestCriticalStrike: bigint;
  largestKillingSpree: bigint;
  largestMultiKill: bigint;
  longestTimeSpentLiving: bigint;
  magicDamageDealt: bigint;
  magicDamageDealtToChampions: bigint;
  magicalDamageTaken: bigint;
  neutralMinionsKilled: bigint;
  neutralMinionsKilledEnemyJungle: bigint;
  neutralMinionsKilledTeamJungle: bigint;
  objectivePlayerScore: bigint;
  participantId: bigint;
  pentaKills: bigint;
  perk0: bigint;
  perk0Var1: bigint;
  perk0Var2: bigint;
  perk0Var3: bigint;
  perk1: bigint;
  perk1Var1: bigint;
  perk1Var2: bigint;
  perk1Var3: bigint;
  perk2: bigint;
  perk2Var1: bigint;
  perk2Var2: bigint;
  perk2Var3: bigint;
  perk3: bigint;
  perk3Var1: bigint;
  perk3Var2: bigint;
  perk3Var3: bigint;
  perk4: bigint;
  perk4Var1: bigint;
  perk4Var2: bigint;
  perk4Var3: bigint;
  perk5: bigint;
  perk5Var1: bigint;
  perk5Var2: bigint;
  perk5Var3: bigint;
  perkPrimaryStyle: bigint;
  perkSubStyle: bigint;
  physicalDamageDealt: bigint;
  physicalDamageDealtToChampions: bigint;
  physicalDamageTaken: bigint;
  playerScore0: bigint;
  playerScore1: bigint;
  playerScore2: bigint;
  playerScore3: bigint;
  playerScore4: bigint;
  playerScore5: bigint;
  playerScore6: bigint;
  playerScore7: bigint;
  playerScore8: bigint;
  playerScore9: bigint;
  quadraKills: bigint;
  sightWardsBoughtInGame: bigint;
  teamEarlySurrendered: boolean;
  timeCCingOthers: bigint;
  totalDamageDealt: bigint;
  totalDamageDealtToChampions: bigint;
  totalDamageTaken: bigint;
  totalHeal: bigint;
  totalMinionsKilled: bigint;
  totalPlayerScore: bigint;
  totalScoreRank: bigint;
  totalTimeCrowdControlDealt: bigint;
  totalUnitsHealed: bigint;
  tripleKills: bigint;
  trueDamageDealt: bigint;
  trueDamageDealtToChampions: bigint;
  trueDamageTaken: bigint;
  turretKills: bigint;
  unrealKills: bigint;
  visionScore: bigint;
  visionWardsBoughtInGame: bigint;
  wardsKilled: bigint;
  wardsPlaced: bigint;
  win: boolean;
}

export interface LolMatchHistoryMatchHistoryPlayerChampMasteryDelta {
  grade: string;
}

export interface LolMatchHistoryMatchHistoryPlayerDelta {
  deltas: Array<LolMatchHistoryMatchHistoryPlayerGameDelta>;
  originalAccountId: bigint;
  originalPlatformId: string;
}

export interface LolMatchHistoryMatchHistoryPlayerGameDelta {
  champMastery: LolMatchHistoryMatchHistoryPlayerChampMasteryDelta;
  gameId: bigint;
  gamePlatformId: string;
  leagueDelta: LolMatchHistoryMatchHistoryPlayerLeagueDelta;
  platformDelta: LolMatchHistoryMatchHistoryPlayerPlatformDelta;
}

export interface LolMatchHistoryMatchHistoryPlayerLeagueDelta {
  leaguePointDelta: bigint;
  miniSeriesProgress: Array<string>;
  reason: string;
  timestamp: bigint;
}

export interface LolMatchHistoryMatchHistoryPlayerPlatformDelta {
  compensationModeEnabled: boolean;
  ipDelta: bigint;
  timestamp: bigint;
  xpDelta: bigint;
}

export interface LolMatchHistoryMatchHistoryPosition {
  x: bigint;
  y: bigint;
}

export interface LolMatchHistoryMatchHistoryTeam {
  bans: Array<LolMatchHistoryMatchHistoryTeamBan>;
  baronKills: bigint;
  dominionVictoryScore: bigint;
  dragonKills: bigint;
  firstBaron: boolean;
  firstBlood: boolean;
  firstDargon: boolean;
  firstInhibitor: boolean;
  firstTower: boolean;
  inhibitorKills: bigint;
  riftHeraldKills: bigint;
  teamId: bigint;
  towerKills: bigint;
  vilemawKills: bigint;
  win: string;
}

export interface LolMatchHistoryMatchHistoryTeamBan {
  championId: bigint;
  pickTurn: bigint;
}

export interface LolMatchHistoryMatchHistoryTimeline {
  creepsPerMinDeltas: number | undefined;
  csDiffPerMinDeltas: number | undefined;
  damageTakenDiffPerMinDeltas: number | undefined;
  damageTakenPerMinDeltas: number | undefined;
  goldPerMinDeltas: number | undefined;
  lane: string;
  participantId: bigint;
  role: string;
  xpDiffPerMinDeltas: number | undefined;
  xpPerMinDeltas: number | undefined;
}

export interface LolMatchHistoryMatchHistoryTimelineFrame {
  events: Array<LolMatchHistoryMatchHistoryEvent>;
  participantFrames: LolMatchHistoryMatchHistoryParticipantFrame | undefined;
  timestamp: bigint;
}

export interface LolMatchHistoryMatchHistoryTimelineFrames {
  frames: Array<LolMatchHistoryMatchHistoryTimelineFrame>;
}

export interface LolMatchHistoryRecentlyPlayedSummoner {
  championId: bigint;
  gameCreationDate: string;
  gameId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerName: string;
  teamId: bigint;
}

export interface LolMatchHistorySummoner {
  displayName: string;
  puuid: string;
}

export interface LolMatchmakingGameflowGameData {
  queue: LolMatchmakingGameflowQueue;
}

export interface LolMatchmakingGameflowGameDodge {
  dodgeIds: Array<bigint>;
  state: LolMatchmakingMatchmakingDodgeState;
}

export interface LolMatchmakingGameflowGameTypeConfig {
  reroll: boolean;
}

export type LolMatchmakingGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolMatchmakingGameflowQueue {
  gameTypeConfig: LolMatchmakingGameflowGameTypeConfig;
}

export interface LolMatchmakingGameflowSession {
  gameData: LolMatchmakingGameflowGameData;
  gameDodge: LolMatchmakingGameflowGameDodge;
  phase: LolMatchmakingGameflowPhase;
}

export interface LolMatchmakingLobbyStatus {
  allowedPlayAgain: boolean;
  customSpectatorPolicy: LolMatchmakingQueueCustomGameSpectatorPolicy;
  isCustom: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  lobbyId: string;
  memberSummonerIds: Array<bigint>;
  queueId: bigint;
}

export interface LolMatchmakingLoginSession {
  accountId: bigint;
  connected: boolean;
  state: LolMatchmakingLoginSessionState;
  summonerId: bigint;
}

export type LolMatchmakingLoginSessionState = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolMatchmakingMatchmakingDodgeData {
  dodgerId: bigint;
  state: LolMatchmakingMatchmakingDodgeState;
}

export type LolMatchmakingMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export type LolMatchmakingMatchmakingDodgeWarning = "None" | "Warning" | "Penalty";

export interface LolMatchmakingMatchmakingLowPriorityData {
  bustedLeaverAccessToken: string;
  penalizedSummonerIds: Array<bigint>;
  penaltyTime: number;
  penaltyTimeRemaining: number;
  reason: string;
}

export interface LolMatchmakingMatchmakingReadyCheckResource {
  declinerIds: Array<bigint>;
  dodgeWarning: LolMatchmakingMatchmakingDodgeWarning;
  playerResponse: LolMatchmakingMatchmakingReadyCheckResponse;
  state: LolMatchmakingMatchmakingReadyCheckState;
  suppressUx: boolean;
  timer: number;
}

export type LolMatchmakingMatchmakingReadyCheckResponse = "None" | "Accepted" | "Declined";

export type LolMatchmakingMatchmakingReadyCheckState =
  | "Invalid"
  | "InProgress"
  | "EveryoneReady"
  | "StrangerNotReady"
  | "PartyNotReady"
  | "Error";

export interface LolMatchmakingMatchmakingSearchErrorResource {
  errorType: string;
  id: bigint;
  message: string;
  penalizedSummonerId: bigint;
  penaltyTimeRemaining: number;
}

export interface LolMatchmakingMatchmakingSearchResource {
  dodgeData: LolMatchmakingMatchmakingDodgeData;
  errors: Array<LolMatchmakingMatchmakingSearchErrorResource>;
  estimatedQueueTime: number;
  isCurrentlyInQueue: boolean;
  lobbyId: string;
  lowPriorityData: LolMatchmakingMatchmakingLowPriorityData;
  queueId: bigint;
  readyCheck: LolMatchmakingMatchmakingReadyCheckResource;
  searchState: LolMatchmakingMatchmakingSearchState;
  timeInQueue: number;
}

export type LolMatchmakingMatchmakingSearchState =
  | "Invalid"
  | "AbandonedLowPriorityQueue"
  | "Canceled"
  | "Searching"
  | "Found"
  | "Error"
  | "ServiceError"
  | "ServiceShutdown";

export interface LolMatchmakingPlayerStatus {
  currentLobbyStatus: LolMatchmakingLobbyStatus;
  lastQueuedLobbyStatus: LolMatchmakingLobbyStatus;
}

export interface LolMatchmakingQueue {
  id: bigint;
  isTeamBuilderManaged: boolean;
}

export type LolMatchmakingQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export interface LolMissionsCollectionsChampion {
  freeToPlay: boolean;
  id: bigint;
  ownership: LolMissionsCollectionsOwnership;
  skins: Array<LolMissionsCollectionsChampionSkin>;
}

export interface LolMissionsCollectionsChampionSkin {
  championId: bigint;
  id: bigint;
  ownership: LolMissionsCollectionsOwnership;
}

export interface LolMissionsCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolMissionsCollectionsRental;
}

export interface LolMissionsCollectionsRental {
  rented: boolean;
}

export interface LolMissionsCollectionsSummoner {
  summonerLevel: bigint;
}

export interface LolMissionsCollectionsSummonerIcons {
  icons: Array<bigint>;
}

export interface LolMissionsCollectionsWardSkin {
  id: bigint;
  ownership: LolMissionsCollectionsOwnership;
}

export type LolMissionsGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolMissionsGameflowSession {
  phase: LolMissionsGameflowPhase;
}

export type LolMissionsGrantStatus = "PENDING_FULFILLMENT" | "PENDING_SELECTION" | "FULFILLED";

export interface LolMissionsInventoryItemWithPayload {
  itemId: bigint;
}

export interface LolMissionsLoginSession {
  accountId: bigint;
  platformId: string;
  puuid: string;
  summonerId: bigint;
}

export type LolMissionsLoyaltyStatus =
  | "LEGACY"
  | "REWARDS_GRANT"
  | "EXPIRY"
  | "CHANGE"
  | "REVOKE"
  | "DISABLED";

export interface LolMissionsLoyaltyStatusNotification {
  status: LolMissionsLoyaltyStatus;
}

export interface LolMissionsMissionAsset {
  iconNeedsFrame: boolean;
  internalName: string;
  path: string;
}

export interface LolMissionsMissionsNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolMissionsMissionsSettingsDataResource {
  selected_series: string;
}

export interface LolMissionsPlayerUpdateResponse {
  playerMissions: Array<PlayerMissionDTO>;
  playerSeries: Array<SeriesDTO>;
}

export interface LolMissionsPluginRegionLocaleChangedEvent {
  locale: string;
}

export interface LolMissionsRewardGrant {
  info: LolMissionsRewardGrantInfo;
  rewardGroup: LolMissionsRewardGroup;
}

export interface LolMissionsRewardGrantElement {
  fulfillmentSource: string;
  id: string;
  itemId: string;
  itemType: string;
  localizations: string | undefined;
  media: string | undefined;
  quantity: bigint;
  rewardStatus: LolMissionsRewardStatus;
}

export interface LolMissionsRewardGrantInfo {
  grantElements: Array<LolMissionsRewardGrantElement>;
  granteeId: string;
  id: string;
  rewardGroupId: string;
  selectedIds: Array<string>;
  status: LolMissionsGrantStatus;
  viewed: boolean;
}

export interface LolMissionsRewardGroup {
  active: boolean;
  childRewardGroupIds: Array<string>;
  id: string;
  internalName: string;
  localizations: string | undefined;
  media: string | undefined;
  productId: string;
  rewardStrategy: LolMissionsRewardStrategy;
  rewards: Array<LolMissionsSvcReward>;
  selectionStrategyConfig: LolMissionsSelectionStrategyConfig;
  types: Array<string>;
}

export interface LolMissionsRewardGroupsSelection {
  rewardGroups: Array<string>;
}

export type LolMissionsRewardStatus = "PENDING" | "FULFILLED";

export type LolMissionsRewardStrategy = "ALL" | "RANDOM" | "SELECTION";

export interface LolMissionsRewardsProductConfig {
  enabled: boolean;
  serviceUrl: string;
}

export interface LolMissionsSelectionStrategyConfig {
  maxSelectionsAllowed: bigint;
  minSelectionsAllowed: bigint;
}

export interface LolMissionsSeriesOpt {
  option: string;
  seriesId: string;
}

export interface LolMissionsSvcReward {
  fulfillmentSource: string;
  id: string;
  itemId: string;
  localizations: string | undefined;
  media: string | undefined;
  quantity: bigint;
}

export interface LolMissionsTftBattlepass {
  milestones: Array<LolMissionsTftBattlepassMilestone>;
  totalPointsEarned: bigint;
}

export interface LolMissionsTftBattlepassMilestone {
  description: string;
  iconImageUrl: string;
  label: string;
  missionId: string;
  percentComplete: bigint;
  pointsForMilestone: bigint;
  rewards: Array<PlayerMissionRewardDTO>;
  state: string;
}

export interface LolMissionsTftOrb {
  missionId: string;
  rewardLevel: bigint;
  rewards: Array<PlayerMissionRewardDTO>;
  status: string;
  unlockTime: bigint;
}

export interface LolMissionsTftPaidBattlepass {
  activeMilestone: LolMissionsTftPaidBattlepassMilestone;
  bonuses: Array<LolMissionsTftPaidBattlepassMilestone>;
  info: LolMissionsTftPaidBattlepassInfo;
  lastViewedMilestone: LolMissionsTftPaidBattlepassMilestone;
  lastViewedProgress: bigint;
  milestones: Array<LolMissionsTftPaidBattlepassMilestone>;
  progressMissionId: string;
  totalPointsEarned: bigint;
}

export interface LolMissionsTftPaidBattlepassInfo {
  backgroundImageUrl: string;
  description: string;
  endDate: bigint;
  internalName: string;
  pcPurchaseRequirement: string;
  premium: boolean;
  startDate: bigint;
  title: string;
}

export interface LolMissionsTftPaidBattlepassMilestone {
  description: string;
  iconImageUrl: string;
  iconNeedsFrame: boolean;
  internalName: string;
  isBonus: boolean;
  isKeystone: boolean;
  isLocked: boolean;
  isPaid: boolean;
  level: bigint;
  missionId: string;
  pointsEarnedForMilestone: bigint;
  pointsNeededForMilestone: bigint;
  rewards: Array<PlayerMissionRewardDTO>;
  state: string;
  status: string;
  title: string;
  totalPointsForMilestone: bigint;
}

export interface LolMissionsTftWeeklyMissions {
  missions: Array<PlayerMissionDTO>;
}

export interface LolMissionsUserInfo {
  userInfo: string;
}

export interface LolModeProgressionInventoryRewardItem {
  itemId: bigint;
  uuid: string;
}

export interface LolModeProgressionLoadout {
  id: string;
  loadout: LolModeProgressionLoadoutsSlot | undefined;
  name: string;
  scope: string;
}

export interface LolModeProgressionLoadoutsSlot {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
}

export interface LolNpeRewardsAccountSettingsData {
  challenges: LolNpeRewardsChallengesSettings;
  login: LolNpeRewardsLoginSeriesSettings;
}

export interface LolNpeRewardsAccountSettingsPayload {
  data: LolNpeRewardsAccountSettingsData;
  schemaVersion: bigint;
}

export interface LolNpeRewardsAllRewards {
  level: LolNpeRewardsRewardSeries;
  login: LolNpeRewardsRewardSeries;
}

export interface LolNpeRewardsChallengesProgress {
  progress: LolNpeRewardsProgress;
}

export interface LolNpeRewardsChallengesSettings {
  allMissionsCompleted: boolean;
  totalCount: bigint;
}

export interface LolNpeRewardsLoginSeriesSettings {
  allRewardsClaimed: boolean;
  lastCompletedMissionDate: bigint;
  lastCompletedMissionInternalName: string;
}

export interface LolNpeRewardsMission {
  completedDate: bigint;
  display: LolNpeRewardsMissionDisplay;
  internalName: string;
  metadata: LolNpeRewardsMissionsRewardPackMetaData;
  objectives: Array<LolNpeRewardsObjective>;
  seriesName: string;
  status: string;
}

export interface LolNpeRewardsMissionDisplay {
  locations: Array<string>;
}

export interface LolNpeRewardsMissionSeries {
  id: string;
  internalName: string;
  status: string;
}

export interface LolNpeRewardsMissionSeriesOptIn {
  option: string;
  seriesId: string;
}

export interface LolNpeRewardsMissionsRewardPackMetaData {
  npeRewardPack: LolNpeRewardsRewardPack;
}

export interface LolNpeRewardsObjective {
  progress: LolNpeRewardsProgress;
}

export interface LolNpeRewardsProgress {
  currentProgress: bigint;
  lastViewedProgress: bigint;
  totalCount: bigint;
}

export interface LolNpeRewardsRequirements {
  day: bigint;
  level: bigint;
  missionInternalName: string;
}

export interface LolNpeRewardsReward {
  data: boolean | undefined;
  renderer: string;
}

export interface LolNpeRewardsRewardPack {
  delay: bigint;
  index: bigint;
  majorReward: LolNpeRewardsReward;
  minorRewards: Array<LolNpeRewardsReward>;
  premiumReward: boolean;
  requirements: LolNpeRewardsRequirements;
  rewardKey: string;
  state: string;
  type: string;
  unlockTime: bigint;
}

export interface LolNpeRewardsRewardSeries {
  rewardPacks: Array<LolNpeRewardsRewardPack>;
}

export interface LolNpeRewardsRewardSeriesState {
  allRewardsClaimed: boolean;
}

export interface LolNpeRewardsSummoner {
  summonerLevel: bigint;
}

export interface LolNpeTutorialPathAccountSettingsCategoryResource {
  data: LolNpeTutorialPathAccountSettingsTutorial;
  schemaVersion: bigint;
}

export interface LolNpeTutorialPathAccountSettingsTutorial {
  hasSeenTutorialPath: boolean;
  hasSkippedTutorialPath: boolean;
  shouldSeeNewPlayerExperience: boolean;
}

export interface LolNpeTutorialPathCollectionsChampion {
  alias: string;
  banVoPath: string;
  chooseVoPath: string;
  id: bigint;
  name: string;
  passive: LolNpeTutorialPathCollectionsChampionSpell;
  roles: Array<string>;
  spells: Array<LolNpeTutorialPathCollectionsChampionSpell>;
  squarePortraitPath: string;
  stingerSfxPath: string;
}

export interface LolNpeTutorialPathCollectionsChampionSpell {
  description: string;
  name: string;
}

export interface LolNpeTutorialPathExpiringWarning {
  alertTime: bigint;
  message: string;
  type: string;
}

export type LolNpeTutorialPathGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolNpeTutorialPathGameflowSession {
  phase: LolNpeTutorialPathGameflowPhase;
}

export interface LolNpeTutorialPathIds {
  missionIds: Array<string>;
  seriesIds: Array<string>;
}

export interface LolNpeTutorialPathLobbyChangeQueue {
  isCustom: boolean;
  queueId: bigint;
}

export interface LolNpeTutorialPathLobbyDto {
  gameConfig: LolNpeTutorialPathLobbyGameConfigDto;
  partyId: string;
}

export interface LolNpeTutorialPathLobbyGameConfigDto {
  queueId: bigint;
}

export interface LolNpeTutorialPathMission {
  backgroundImageUrl: string;
  celebrationType: string;
  clientNotifyLevel: string;
  completedDate: bigint;
  completionExpression: string;
  cooldownTimeMillis: bigint;
  description: string;
  display: LolNpeTutorialPathMissionDisplay;
  displayType: string;
  endTime: bigint;
  expiringWarnings: Array<LolNpeTutorialPathExpiringWarning>;
  helperText: string;
  iconImageUrl: string;
  id: string;
  internalName: string;
  isNew: boolean;
  lastUpdatedTimestamp: bigint;
  locale: string;
  metadata: LolNpeTutorialPathMissionMetadata;
  missionType: string;
  objectives: Array<LolNpeTutorialPathObjective>;
  requirements: Array<string>;
  rewardStrategy: LolNpeTutorialPathRewardStrategy;
  rewards: Array<LolNpeTutorialPathReward>;
  seriesName: string;
  startTime: bigint;
  status: string;
  title: string;
  viewed: boolean;
}

export interface LolNpeTutorialPathMissionDisplay {
  attributes: Array<string>;
}

export interface LolNpeTutorialPathMissionMetadata {
  tutorial: LolNpeTutorialPathTutorialMetadata;
}

export interface LolNpeTutorialPathObjective {
  description: string;
  progress: LolNpeTutorialPathProgress;
  rewardGroups: Array<string>;
  sequence: bigint;
  type: string;
}

export interface LolNpeTutorialPathProgress {
  currentProgress: bigint;
  lastViewedProgress: bigint;
  totalCount: bigint;
}

export interface LolNpeTutorialPathRequirement {
  expression: string;
}

export interface LolNpeTutorialPathReward {
  description: string;
  iconUrl: string;
  itemId: string;
  quantity: bigint;
  rewardFulfilled: boolean;
  rewardGroup: string;
  rewardGroupSelected: boolean;
  rewardType: string;
  sequence: bigint;
  uniqueName: string;
}

export interface LolNpeTutorialPathRewardStrategy {
  groupStrategy: string;
  selectMaxGroupCount: bigint;
  selectMinGroupCount: bigint;
}

export interface LolNpeTutorialPathSeries {
  id: string;
  internalName: string;
  status: string;
}

export interface LolNpeTutorialPathSeriesOpt {
  option: string;
  seriesId: string;
}

export interface LolNpeTutorialPathSummoner {
  accountId: bigint;
  displayName: string;
  nameChangeFlag: boolean;
  percentCompleteForNextLevel: bigint;
  profileIconId: bigint;
  summonerId: bigint;
  summonerLevel: bigint;
  unnamed: boolean;
  xpSinceLastLevel: bigint;
  xpUntilNextLevel: bigint;
}

export interface LolNpeTutorialPathSummonerIcon {
  profileIconId: bigint;
}

export interface LolNpeTutorialPathTutorial {
  backgroundUrl: string;
  description: string;
  id: string;
  isViewed: boolean;
  queueId: string;
  rewards: Array<LolNpeTutorialPathTutorialReward>;
  status: LolNpeTutorialPathTutorialStatus;
  stepNumber: bigint;
  title: string;
  type: LolNpeTutorialPathTutorialType;
  useChosenChampion: boolean;
  useQuickSearchMatchmaking: boolean;
}

export interface LolNpeTutorialPathTutorialMetadata {
  displayRewards: string | undefined;
  queueId: string;
  stepNumber: bigint;
  useChosenChampion: boolean;
  useQuickSearchMatchmaking: boolean;
}

export interface LolNpeTutorialPathTutorialReward {
  description: string;
  iconUrl: string;
  itemId: string;
  rewardFulfilled: boolean;
  rewardType: string;
  sequence: bigint;
  uniqueName: string;
}

export type LolNpeTutorialPathTutorialStatus = "LOCKED" | "UNLOCKED" | "COMPLETED";

export type LolNpeTutorialPathTutorialType = "CARD" | "REWARD";

export interface LolPatchChunkingPatcherEnvironment {
  client_patcher_available: boolean;
  client_patcher_enabled: boolean;
  game_patcher_available: boolean;
  game_patcher_enabled: boolean;
}

export interface LolPatchComponentActionProgress {
  currentItem: string;
  network: LolPatchComponentStateProgress;
  primaryWork: LolPatchComponentStateWorkType;
  total: LolPatchComponentStateProgress;
}

export interface LolPatchComponentState {
  action: LolPatchComponentStateAction;
  id: string;
  isCorrupted: boolean;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  progress: LolPatchComponentActionProgress;
  timeOfLastUpToDateCheckISO8601: string;
}

export type LolPatchComponentStateAction =
  | "Idle"
  | "CheckingForUpdates"
  | "Patching"
  | "Repairing"
  | "Migrating";

export interface LolPatchComponentStateProgress {
  bytesComplete: bigint;
  bytesPerSecond: number;
  bytesRequired: bigint;
}

export type LolPatchComponentStateWorkType = "Scanning" | "Network" | "Disk";

export interface LolPatchEntitlementsTokenResource {
  accessToken: string;
  entitlements: Array<string>;
  token: string;
}

export interface LolPatchInstallPaths {
  gameExecutablePath: string;
  gameInstallRoot: string;
}

export interface LolPatchNotification {
  data: boolean | undefined | undefined;
  id: string;
  notificationId: LolPatchNotificationId;
}

export type LolPatchNotificationId =
  | "UnspecifiedError"
  | "ConnectionError"
  | "MissingFilesError"
  | "FailedToWriteError"
  | "WillRestoreClientBackupOnRestart"
  | "DidRestoreClientBackup"
  | "NotEnoughDiskSpace"
  | "BrokenPermissions";

export interface LolPatchPatchSieveCompatVersion {
  id: string;
}

export interface LolPatchPatchSieveDownload {
  scd_required: boolean;
  url: string;
}

export interface LolPatchPatchSieveLabelValue {
  values: Array<string>;
}

export interface LolPatchPatchSieveQueryResponse {
  releases: Array<LolPatchPatchSieveRelease>;
}

export interface LolPatchPatchSieveRelease {
  compat_version: LolPatchPatchSieveCompatVersion;
  download: LolPatchPatchSieveDownload;
  release: LolPatchPatchSieveReleaseInfo;
}

export interface LolPatchPatchSieveReleaseInfo {
  id: string;
  labels: LolPatchPatchSieveLabelValue | undefined;
  product: string;
}

export interface LolPatchPatcherInstallSettings {
  client_patch_url: string;
  client_patcher: string;
  client_patcher_available: boolean;
  game_patch_url: string;
  game_patcher: string;
  game_patcher_available: boolean;
  locales: Array<string>;
  max_download_speed_mbps: bigint;
}

export interface LolPatchPatcherRegionSettings {
  client_patcher: string;
  game_patcher: string;
  patchline: string;
}

export interface LolPatchPatcherSelfUpdateSettings {
  restart_delay: bigint;
}

export interface LolPatchPatcherSettings {
  channel: string;
  headers: string | undefined;
  patchsieve_url: string;
  product_refresh_period: number;
  self_update: LolPatchPatcherSelfUpdateSettings;
}

export interface LolPatchProductState {
  action: LolPatchComponentStateAction;
  components: Array<LolPatchComponentState>;
  id: string;
  isCorrupted: boolean;
  isStopped: boolean;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  percentPatched: number;
}

export interface LolPatchPublishedReleaseResponse {
  client_patch_url: string;
  game_patch_url: string;
  timestamp: string;
  toggles: number | undefined;
  version: bigint;
}

export interface LolPatchRegionLocale {
  locale: string;
  region: string;
}

export interface LolPatchScdCookie {
  cookie: string;
  domain: string;
  path: string;
}

export interface LolPatchScdCookies {
  cookies: Array<LolPatchScdCookie>;
}

export type LolPatchScdEnabled = "Off" | "On";

export interface LolPatchStatus {
  connectedToPatchServer: boolean;
  hasUpdatesOnRestart: boolean;
  willRestartOnSelfUpdate: boolean;
}

export interface LolPatchSupportedGameRelease {
  artifact_id: string;
  download: LolPatchPatchSieveDownload;
  selected: boolean;
}

export interface LolPatchSupportedGameReleases {
  supported_game_releases: Array<LolPatchSupportedGameRelease>;
}

export interface LolPatchUxResource {
  visible: boolean;
}

export interface LolPerksChampSelectAction {
  actorCellId: bigint;
  championId: bigint;
  completed: boolean;
  id: bigint;
  type: string;
}

export interface LolPerksChampSelectBannedChampions {
  myTeamBans: Array<bigint>;
  numBans: bigint;
  theirTeamBans: Array<bigint>;
}

export interface LolPerksChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolPerksChampSelectMySelection {
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  wardSkinId: bigint;
}

export interface LolPerksChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: bigint;
  championId: bigint;
  championPickIntent: bigint;
  selectedSkinId: bigint;
  spell1Id: bigint;
  spell2Id: bigint;
  summonerId: bigint;
  team: bigint;
  wardSkinId: bigint;
}

export interface LolPerksChampSelectSession {
  actions: Array<boolean | undefined>;
  bans: LolPerksChampSelectBannedChampions;
  chatDetails: LolPerksChampSelectChatRoomDetails;
  isSpectating: boolean;
  localPlayerCellId: bigint;
  myTeam: Array<LolPerksChampSelectPlayerSelection>;
  theirTeam: Array<LolPerksChampSelectPlayerSelection>;
  timer: LolPerksChampSelectTimer;
  trades: Array<LolPerksChampSelectTradeContract>;
}

export interface LolPerksChampSelectTimer {
  adjustedTimeLeftInPhase: bigint;
  internalNowInEpochMs: bigint;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: bigint;
}

export interface LolPerksChampSelectTradeContract {
  cellId: bigint;
  id: bigint;
  state: LolPerksChampSelectTradeState;
}

export type LolPerksChampSelectTradeState = "AVAILABLE" | "BUSY" | "INVALID" | "RECEIVED" | "SENT";

export interface LolPerksChampionPreferredStyle {
  championId: bigint;
  championName: string;
  style: bigint;
}

export type LolPerksCustomizationLimits =
  | "Locked"
  | "CanSelectPages"
  | "CanSelectKeystones"
  | "CanSelectPrimaries"
  | "CanSelectSplash"
  | "CanUseAdvancedStyles";

export interface LolPerksDefaultStatModsPerSubStyle {
  id: bigint;
  perks: Array<bigint>;
}

export interface LolPerksGameCustomizationDTO {
  category: string;
  content: string;
  isTeambuilder: boolean;
  queueType: bigint;
}

export interface LolPerksGameflowGameData {
  gameId: bigint;
  isCustomGame: boolean;
  queue: LolPerksQueue;
}

export type LolPerksGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolPerksGameflowSession {
  gameData: LolPerksGameflowGameData;
  phase: LolPerksGameflowPhase;
}

export interface LolPerksGetGameCustomizationDTO {
  queueType: string;
}

export interface LolPerksGetResultFromServiceDTO {
  error: string;
  result: string;
}

export interface LolPerksInventoryRunePageCount {
  quantity: bigint;
}

export interface LolPerksLoginSession {
  accountId: bigint;
  state: LolPerksLoginSessionState;
  summonerId: bigint;
}

export type LolPerksLoginSessionState = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolPerksNameCheckPayload {
  name: string;
  shard: string;
}

export interface LolPerksNameCheckReponse {
  errors: Array<string>;
}

export interface LolPerksPerkBook {
  currentPageId: bigint;
  pages: Array<LolPerksPerkPageResource>;
}

export interface LolPerksPerkGDSResource {
  iconPath: string;
  id: bigint;
  longDesc: string;
  majorChangePatchVersion: string;
  name: string;
  shortDesc: string;
  tooltip: string;
}

export interface LolPerksPerkIdListResource {
  perkIds: Array<bigint>;
}

export interface LolPerksPerkPageResource {
  autoModifiedSelections: Array<bigint>;
  current: boolean;
  id: bigint;
  isActive: boolean;
  isDeletable: boolean;
  isEditable: boolean;
  isValid: boolean;
  lastModified: bigint;
  name: string;
  order: bigint;
  primaryStyleId: bigint;
  selectedPerkIds: Array<bigint>;
  subStyleId: bigint;
}

export interface LolPerksPerkSettingResource {
  perkIds: Array<bigint>;
  perkStyle: bigint;
  perkSubStyle: bigint;
}

export interface LolPerksPerkSettings {
  pages: Array<LolPerksPerkPageResource>;
  perShardPerkBooks: LolPerksPerkBook | undefined;
  settings: LolPerksUISettings;
}

export interface LolPerksPerkStyleResource {
  allowedSubStyles: Array<bigint>;
  assetMap: string | undefined;
  defaultPageName: string;
  defaultPerks: Array<bigint>;
  defaultPerksWhenSplashed: Array<bigint>;
  defaultStatModsPerSubStyle: Array<LolPerksDefaultStatModsPerSubStyle>;
  defaultSubStyle: bigint;
  iconPath: string;
  id: bigint;
  isAdvanced: boolean;
  name: string;
  slots: Array<LolPerksPerkStyleSlotResource>;
  subStyleBonus: Array<LolPerksPerkSubStyleBonusResource>;
  tooltip: string;
}

export interface LolPerksPerkStyleSlotResource {
  perks: Array<bigint>;
  slotLabel: string;
  type: string;
}

export interface LolPerksPerkSubStyleBonusResource {
  perkId: bigint;
  styleId: bigint;
}

export interface LolPerksPerkUIPerk {
  iconPath: string;
  id: bigint;
  longDesc: string;
  name: string;
  shortDesc: string;
  tooltip: string;
}

export interface LolPerksPerkUISlot {
  perks: Array<bigint>;
  slotLabel: string;
  type: string;
}

export interface LolPerksPerkUIStyle {
  allowedSubStyles: Array<bigint>;
  assetMap: string | undefined;
  defaultPageName: string;
  defaultPerks: Array<bigint>;
  defaultSubStyle: bigint;
  iconPath: string;
  id: bigint;
  name: string;
  slots: Array<LolPerksPerkUISlot>;
  subStyleBonus: Array<LolPerksPerkSubStyleBonusResource>;
  tooltip: string;
}

export interface LolPerksPlatformConfig {
  AutoRepairPagesEnabled: boolean;
  PerksEnabled: boolean;
}

export interface LolPerksPlayerInventory {
  ownedPageCount: bigint;
}

export interface LolPerksQueue {
  id: bigint;
  isTeamBuilderManaged: boolean;
}

export interface LolPerksRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface LolPerksServiceSettings {
  serverSideStorageAvailable: boolean;
}

export interface LolPerksSettingsStorageContainer {
  data: LolPerksPerkSettings;
  schemaVersion: bigint;
}

export interface LolPerksSummoner {
  accountId: bigint;
  displayName: string;
  internalName: string;
  percentCompleteForNextLevel: bigint;
  profileIconId: bigint;
  puuid: string;
  rerollPoints: LolPerksSummonerRerollPoints;
  summonerId: bigint;
  summonerLevel: bigint;
  xpSinceLastLevel: bigint;
  xpUntilNextLevel: bigint;
}

export interface LolPerksSummonerRerollPoints {
  currentPoints: bigint;
  maxRolls: bigint;
  numberOfRolls: bigint;
  pointsCostToRoll: bigint;
  pointsToReroll: bigint;
}

export interface LolPerksUISettings {
  gameplayPatchVersionSeen: string;
  gameplayUpdatedPerksSeen: Array<bigint>;
  gridModeEnabled: boolean;
  showLongDescriptions: boolean;
  showPresetPages: boolean;
}

export interface LolPerksUpdatePageOrderRequest {
  destinationPageId: bigint;
  offset: bigint;
  targetPageId: bigint;
}

export interface LolPerksValidatePageNameData {
  id: bigint;
  name: string;
}

export interface LolPerksValidatePageNameResponse {
  nameCheckResponse: LolPerksNameCheckReponse;
  success: boolean;
}

export interface LolPersonalizedOffersAccessTokenResource {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export interface LolPersonalizedOffersOffer {
  discountPrice: bigint;
  expirationDate: string;
  inventoryType: string;
  itemId: bigint;
  name: string;
  offerId: string;
  originalPrice: bigint;
  owned: boolean;
  revealed: boolean;
  spotIndex: bigint;
}

export interface LolPersonalizedOffersOfferData {
  offers: Array<LolPersonalizedOffersOffer>;
  promotion: LolPersonalizedOffersPromotion;
}

export interface LolPersonalizedOffersOfferId {
  offerId: string;
}

export interface LolPersonalizedOffersOfferIds {
  offers: Array<LolPersonalizedOffersOfferId>;
}

export interface LolPersonalizedOffersOfferRequest {
  inventoryType: string;
  itemId: bigint;
  offerId: string;
  price: bigint;
}

export interface LolPersonalizedOffersOfferRequests {
  offers: Array<LolPersonalizedOffersOfferRequest>;
}

export interface LolPersonalizedOffersPromotion {
  endTime: string;
  name: string;
  startTime: string;
}

export interface LolPersonalizedOffersPurchaseItem {
  inventoryType: string;
  itemId: bigint;
  pricePaid: bigint;
}

export interface LolPersonalizedOffersPurchaseResponse {
  items: Array<LolPersonalizedOffersPurchaseItem>;
  wallet: LolPersonalizedOffersWallet;
}

export interface LolPersonalizedOffersUIOffer {
  championId: bigint;
  discountPrice: bigint;
  expirationDate: string;
  id: string;
  originalPrice: bigint;
  owned: boolean;
  revealed: boolean;
  skinId: bigint;
  skinName: string;
  type: string;
}

export interface LolPersonalizedOffersUIStatus {
  endTime: string;
  hubEnabled: boolean;
  name: string;
  startTime: string;
}

export interface LolPersonalizedOffersWallet {
  rp: bigint;
}

export interface LolPftGameClientEndOfGameStats {
  gameId: bigint;
  gameMode: string;
  isRanked: boolean;
  queueId: bigint;
  statsBlock: boolean | undefined;
}

export interface LolPftGameflowGameDodge {
  dodgeIds: Array<bigint>;
  state: LolPftGameflowGameDodgeState;
}

export type LolPftGameflowGameDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export type LolPftGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolPftGameflowSession {
  gameDodge: LolPftGameflowGameDodge;
  phase: LolPftGameflowPhase;
}

export interface LolPftLoginSession {
  idToken: string;
  state: LolPftLoginSessionStates;
}

export type LolPftLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolPftPFTEndOfGamePlayer {
  botPlayer: boolean;
  championId: bigint;
  elo: bigint;
  eloChange: bigint;
  gameId: bigint;
  isReportingDisabled: boolean;
  items: Array<bigint>;
  leaver: boolean;
  leaves: bigint;
  level: bigint;
  losses: bigint;
  profileIconId: bigint;
  skinName: string;
  spell1Id: bigint;
  spell2Id: bigint;
  stats: boolean | undefined;
  summonerId: bigint;
  summonerName: string;
  teamId: bigint;
  userId: bigint;
  wins: bigint;
}

export interface LolPftPFTEndOfGamePoints {
  pointChangeFromChampionsOwned: bigint;
  pointChangeFromGameplay: bigint;
  pointsUntilNextReroll: bigint;
  pointsUsed: bigint;
  previousPoints: bigint;
  rerollCount: bigint;
  totalPoints: bigint;
}

export interface LolPftPFTEndOfGameStats {
  accountId: bigint;
  basePoints: bigint;
  battleBoostIpEarned: bigint;
  boostIpEarned: bigint;
  boostXpEarned: bigint;
  causedEarlySurrender: boolean;
  championId: bigint;
  coOpVsAiMinutesLeftToday: bigint;
  coOpVsAiMsecsUntilReset: bigint;
  completionBonusPoints: bigint;
  customMinutesLeftToday: bigint;
  customMsecsUntilReset: bigint;
  difficulty: string;
  earlySurrenderAccomplice: boolean;
  elo: bigint;
  eloChange: bigint;
  experienceEarned: bigint;
  experienceTotal: bigint;
  firstWinBonus: bigint;
  gameEndedInEarlySurrender: boolean;
  gameId: bigint;
  gameLength: bigint;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  ipEarned: bigint;
  ipTotal: bigint;
  isAramGame: boolean;
  leveledUp: boolean;
  loyaltyBoostIpEarned: bigint;
  loyaltyBoostXpEarned: bigint;
  myTeamStatus: string;
  newSpells: Array<bigint>;
  odinBonusIp: bigint;
  partyRewardsBonusIpEarned: bigint;
  pointsPenalties: boolean | undefined;
  previousLevel: bigint;
  previousXpTotal: bigint;
  queueBonusEarned: bigint;
  queueType: string;
  ranked: boolean;
  reportGameId: bigint;
  rerollData: LolPftPFTEndOfGamePoints;
  roomName: string;
  roomPassword: string;
  rpEarned: bigint;
  sendStatsToTournamentProvider: boolean;
  skinId: bigint;
  skinIndex: bigint;
  summonerId: bigint;
  summonerName: string;
  talentPointsGained: bigint;
  teamEarlySurrendered: boolean;
  teams: Array<LolPftPFTEndOfGameTeam>;
  timeUntilNextFirstWinBonus: bigint;
  userId: bigint;
}

export interface LolPftPFTEndOfGameTeam {
  championBans: Array<bigint>;
  fullId: string;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
  memberStatusString: string;
  name: string;
  players: Array<LolPftPFTEndOfGamePlayer>;
  stats: boolean | undefined;
  tag: string;
  teamId: bigint;
}

export interface LolPftPFTEvent {
  action: string;
  data: Array<boolean | undefined>;
  playerSurveyId: bigint;
}

export interface LolPftPFTMetadata {
  accountId: bigint;
  appName: string;
  appVersion: string;
  env: string;
  homepageTimer: number;
  locale: string;
  stats: LolPftPFTEndOfGameStats;
  systemOs: string;
  webRegion: string;
}

export interface LolPftPFTQuestionResponse {
  questionId: bigint;
  responseData: boolean | undefined;
}

export interface LolPftPFTSurvey {
  caption: string;
  data: boolean | undefined | undefined;
  display: string;
  id: bigint;
  title: string;
  type: string;
}

export interface LolPftPFTSurveyResults {
  actions: Array<LolPftPFTEvent>;
  questionResponses: Array<LolPftPFTQuestionResponse>;
}

export interface LolPftPFTSurveyV1 {
  caption: string;
  id: bigint;
  title: string;
  type: string;
  url: string;
}

export interface LolPftSummoner {
  accountId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
  unnamed: boolean;
}

export interface LolPlayerBehaviorBanNotification {
  displayReformCard: boolean;
  id: bigint;
  isPermaBan: boolean;
  reason: string;
  source: LolPlayerBehaviorNotificationSource;
  timeUntilBanExpires: bigint;
}

export interface LolPlayerBehaviorCodeOfConductNotification {
  message: string;
}

export type LolPlayerBehaviorGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export type LolPlayerBehaviorNotificationSource =
  | "Invalid"
  | "Login"
  | "ForcedShutdown"
  | "Message";

export interface LolPlayerBehaviorPlayerBehaviorConfig {
  CodeOfConductEnabled: boolean;
  IsLoaded: boolean;
}

export interface LolPlayerBehaviorPlayerBehavior_GameflowSessionResource {
  phase: LolPlayerBehaviorGameflowPhase;
}

export interface LolPlayerBehaviorPlayerBehavior_SimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolPlayerBehaviorPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolPlayerBehaviorReformCard {
  chatLogs: Array<string>;
  gameIds: Array<bigint>;
  id: bigint;
  playerFacingMessage: string;
  punishmentLengthGames: bigint;
  punishmentLengthTime: bigint;
  punishmentType: string;
  reason: string;
  restrictedChatGamesRemaining: bigint;
  timeWhenPunishmentExpires: bigint;
}

export interface LolPlayerBehaviorReformCardChatLogs {
  inGameChatLogs: Array<string>;
  postGameChatLogs: Array<string>;
  preGameChatLogs: Array<string>;
}

export interface LolPlayerBehaviorReformCardV2 {
  id: bigint;
  playerFacingMessage: string;
  punishedForGameIds: Array<bigint>;
  punishedForReformCardChatLogs: Array<LolPlayerBehaviorReformCardChatLogs>;
  punishedUntilDateMillis: bigint;
  punishmentLengthGames: bigint;
  punishmentLengthMillis: bigint;
  punishmentReason: string;
  punishmentType: string;
}

export interface LolPlayerBehaviorReporterFeedback {
  accountId: bigint;
  id: bigint;
  messageId: string;
  type: string;
}

export interface LolPlayerBehaviorRestrictionNotification {
  displayReformCard: boolean;
  expirationMillis: bigint;
  gamesRemaining: bigint;
  id: bigint;
  source: LolPlayerBehaviorNotificationSource;
}

export interface LolPlayerBehaviorSettingsResource {
  data: boolean | undefined;
  schemaVersion: bigint;
}

export interface LolPlayerBehaviorUserInfo {
  userInfo: string;
}

export interface LolPlayerBehaviorUserInfoBanData {
  restrictions: Array<LolPlayerBehaviorUserInfoRestriction>;
}

export interface LolPlayerBehaviorUserInfoRestriction {
  dat: LolPlayerBehaviorUserInfoRestrictionData;
  reason: string;
  scope: string;
  type: string;
}

export interface LolPlayerBehaviorUserInfoRestrictionData {
  expirationMillis: bigint;
  gameData: LolPlayerBehaviorUserInfoRestrictionGameData;
  gameLocation: string;
}

export interface LolPlayerBehaviorUserInfoRestrictionGameData {
  additionalGameIds: Array<string>;
  gameLocation: string;
  productName: string;
  triggerGameId: string;
}

export interface LolPlayerBehaviorUserInfoToken {
  ban: LolPlayerBehaviorUserInfoBanData;
}

export interface LolPlayerLevelUpEndOfGameStats {
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  leveledUp: boolean;
  newSpells: Array<bigint>;
  previousLevel: bigint;
  queueType: string;
  rpEarned: bigint;
}

export interface LolPlayerLevelUpGameDataSummonerSpell {
  id: bigint;
  summonerLevel: bigint;
}

export interface LolPlayerLevelUpLoginSession {
  accountId: bigint;
  state: LolPlayerLevelUpLoginSessionStates;
  summonerId: bigint;
}

export type LolPlayerLevelUpLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolPlayerLevelUpPlayerLevelUpEvent {
  leveledUp: boolean;
  newQueues: Array<bigint>;
  newRuneSlotUnlocked: boolean;
  newSpells: Array<bigint>;
  newSummonerLevel: bigint;
  nowHasAccessToLoot: boolean;
  nowHasAccessToPublicChatRooms: boolean;
  rpEarned: bigint;
  switchedToStandardFreeToPlayChampRotation: boolean;
}

export interface LolPlayerLevelUpPlayerLevelUpEventAck {
  newSummonerLevel: bigint;
  seenThisEvent: boolean;
}

export interface LolPlayerLevelUpQueue {
  id: bigint;
  minLevel: bigint;
}

export interface LolPlayerMessagingDynamicCelebrationMessagingNotificationResource {
  accountId: bigint;
  celebrationBody: string;
  celebrationMessage: string;
  celebrationTitle: string;
  celebrationType: string;
  id: bigint;
  inventoryType: string;
  itemId: string;
  itemQuantity: string;
  msgId: string;
  status: bigint;
}

export interface LolPlayerMessagingLoginDataPacket {
  simpleMessages: Array<LolPlayerMessagingSimpleMessage>;
}

export interface LolPlayerMessagingPlayerMessagingNotificationResource {
  accountId: bigint;
  body: string;
  id: bigint;
  msgId: string;
  status: bigint;
  title: string;
}

export interface LolPlayerMessagingSimpleMessage {
  accountId: bigint;
  bodyCode: string;
  msgId: string;
  params: Array<string>;
  titleCode: string;
  type: string;
}

export interface LolPlayerPreferencesLoginSession {
  accountId: bigint;
  idToken: string;
  state: LolPlayerPreferencesLoginSessionStates;
  summonerId: bigint;
}

export type LolPlayerPreferencesLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolPlayerPreferencesPlayerPreferences {
  data: string;
  hash: string;
  type: string;
  version: string;
}

export interface LolPlayerPreferencesPlayerPreferencesEndpoint {
  Enabled: boolean;
  EnforceHttps: boolean;
  Retries: bigint;
  ServiceEndpoint: string;
  Version: string;
}

export interface LolPlayerReportSenderChampSelectReport {
  categories: Array<string>;
  comment: string;
  location: string;
  match_token: string;
  offender_puuid: string;
}

export interface LolPlayerReportSenderEndOfGamePlayerReport {
  comment: string;
  gameId: bigint;
  offense: string;
  reportedPuuid: string;
}

export interface LolPlayerReportSenderGameAgnosticReportPayload {
  categories: Array<string>;
  comment: string;
  location: string;
  offenderId: string;
  token: string;
  tokenType: string;
}

export type LolPreEndOfGameGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolPreEndOfGameGameflowSessionResource {
  phase: LolPreEndOfGameGameflowPhase;
}

export interface LolPreEndOfGameSequenceEvent {
  name: string;
  priority: bigint;
}

export interface LolPremadeVoiceAccountSettingsCategoryDataResource {
  autoJoin: boolean;
  inputMode: LolPremadeVoiceInputMode;
  muteOnConnect: boolean;
  pushToTalkKey: string;
  showFirstExperienceInGame: boolean;
  showFirstExperienceInLCU: boolean;
}

export interface LolPremadeVoiceAccountSettingsCategoryResource {
  data: LolPremadeVoiceAccountSettingsCategoryDataResource;
  schemaVersion: bigint;
}

export interface LolPremadeVoiceAudioPropertiesResource {
  isLoopbackEnabled: boolean;
  micEnergy: bigint;
}

export type LolPremadeVoiceConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface LolPremadeVoiceConfigStatus {
  readiness: LolPremadeVoiceConfigReadinessEnum;
}

export type LolPremadeVoiceConfigType = "public" | "player";

export interface LolPremadeVoiceDeviceResource {
  handle: string;
  is_current_device: boolean;
  is_default: boolean;
  name: string;
  usable: boolean;
}

export interface LolPremadeVoiceDeviceResourceRiotClient {
  handle: string;
  is_current_device: boolean;
  is_default: boolean;
  is_effective_device: boolean;
  name: string;
}

export interface LolPremadeVoiceEntitlementsToken {
  entitlements: Array<string>;
}

export interface LolPremadeVoiceExternalSession {
  patchlineFullName: string;
  patchlineId: string;
  productId: string;
}

export interface LolPremadeVoiceFirstExperience {
  showFirstExperienceInGame: boolean;
  showFirstExperienceInLCU: boolean;
}

export interface LolPremadeVoiceGameEventHotkeys {
  evtPushToTalk: string;
}

export interface LolPremadeVoiceGameInputSettings {
  GameEvents: LolPremadeVoiceGameEventHotkeys;
}

export interface LolPremadeVoiceGameflowGameClient {
  running: boolean;
}

export type LolPremadeVoiceGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolPremadeVoiceGameflowSession {
  gameClient: LolPremadeVoiceGameflowGameClient;
  phase: LolPremadeVoiceGameflowPhase;
}

export type LolPremadeVoiceInputMode = "voiceActivity" | "pushToTalk";

export interface LolPremadeVoiceKeyCombo {
  keyBindings: Array<LolPremadeVoicePushToTalkKey>;
}

export interface LolPremadeVoiceKeycodePushToTalkResource {
  enabled: boolean;
  keyCombos: Array<LolPremadeVoiceKeyCombo>;
}

export interface LolPremadeVoiceLocalSettingsCategoryDataResource {
  currentCaptureDeviceHandle: string;
  inputVolume: bigint;
  vadSensitivity: bigint;
}

export interface LolPremadeVoiceLocalSettingsCategoryResource {
  data: LolPremadeVoiceLocalSettingsCategoryDataResource;
  schemaVersion: bigint;
}

export interface LolPremadeVoiceLoginSession {
  connected: boolean;
}

export interface LolPremadeVoiceParticipantResource {
  energy: bigint;
  id: string;
  isMuted: boolean;
  isSpeaking: boolean;
  name: string;
  volume: bigint;
}

export interface LolPremadeVoicePartyDto {
  commsEnabled: boolean;
  partyId: string;
  players: LolPremadeVoicePlayerDto | undefined;
}

export type LolPremadeVoicePartyMemberRoleEnum =
  | "LEADER"
  | "MEMBER"
  | "INVITED"
  | "HOLD"
  | "KICKED"
  | "DECLINED";

export interface LolPremadeVoicePlayerDto {
  displayName: string;
  partyId: string;
  puuid: string;
  role: LolPremadeVoicePartyMemberRoleEnum;
  summonerId: bigint;
}

export interface LolPremadeVoicePremadeVoiceParticipantDto {
  displayName: string;
  energy: bigint;
  isMuted: boolean;
  isSpeaking: boolean;
  participantId: string;
  puuid: string;
  summonerId: bigint;
  volume: bigint;
}

export interface LolPremadeVoicePushToTalkKey {
  key: bigint;
}

export interface LolPremadeVoicePushToTalkResource {
  pttEnabled: boolean;
  pttKeyBinding: string;
}

export interface LolPremadeVoiceSessionResource {
  id: string;
  isMuted: boolean;
  isTransmitEnabled: boolean;
  participants: Array<LolPremadeVoiceParticipantResource>;
  status: LolPremadeVoiceSessionStatus;
  volume: bigint;
}

export type LolPremadeVoiceSessionStatus = "active" | "onHold";

export interface LolPremadeVoiceSettingsResource {
  autoJoin: boolean;
  currentCaptureDeviceHandle: string;
  inputMode: LolPremadeVoiceInputMode;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  micLevel: bigint;
  muteOnConnect: boolean;
  pttActive: boolean;
  pttKey: string;
  vadActive: boolean;
  vadHangoverTime: bigint;
  vadSensitivity: bigint;
}

export interface LolPremadeVoiceStateResource {
  connected: boolean;
}

export interface LolPremadeVoiceSummoner {
  accountId: bigint;
  puuid: string;
}

export interface LolPremadeVoiceVoiceAvailability {
  connectedToVoiceServer: boolean;
  disabledAfterLogin: boolean;
  enabled: boolean;
  showDisconnectedState: boolean;
  showUI: boolean;
  voiceChannelAvailable: boolean;
}

export interface LolPublishingContentRegionLocale {
  locale: string;
}

export interface LolPurchaseWidgetBalance {
  amount: bigint;
  currencyType: string;
}

export interface LolPurchaseWidgetBaseSkinLineDto {
  collectionCardPath: string;
  collectionDescription: string;
  items: Array<LolPurchaseWidgetSkinLineItemDto>;
  localizedName: string;
  pricingOptions: Array<LolPurchaseWidgetPriceOptionDto>;
  skinLineDescriptions: Array<LolPurchaseWidgetSkinLineDescriptionDto>;
  splashPath: string;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolPurchaseWidgetBundledItemPricingInfo {
  discountPrices: Array<LolPurchaseWidgetDiscountPricingInfo>;
  inventoryType: string;
  itemId: bigint;
  quantity: bigint;
}

export interface LolPurchaseWidgetCapOffer {
  active: boolean;
  createdDate: string;
  id: string;
  label: string;
  merchantId: string;
  payload: Array<LolPurchaseWidgetCapOfferPayloadEntry>;
  productId: string;
  startDate: string;
  typeId: string;
}

export interface LolPurchaseWidgetCapOfferPayloadEntry {
  fulfillmentTypeId: string;
  inventoryTypeUUID: string;
  itemInstanceId: string;
  itemPriceMap: bigint | undefined;
}

export interface LolPurchaseWidgetCapOrdersDataDto {
  id: string;
  location: string;
  purchaser: LolPurchaseWidgetCapOrdersTypedIdentifierDto;
  source: string;
  subOrders: Array<LolPurchaseWidgetCapOrdersSubOrderDto>;
}

export interface LolPurchaseWidgetCapOrdersMetaDto {
  xid: string;
}

export interface LolPurchaseWidgetCapOrdersOfferContextDto {
  paymentOption: string;
  quantity: bigint;
}

export interface LolPurchaseWidgetCapOrdersOfferDto {
  id: string;
  productId: string;
}

export interface LolPurchaseWidgetCapOrdersOrderDto {
  data: LolPurchaseWidgetCapOrdersDataDto;
  meta: LolPurchaseWidgetCapOrdersMetaDto;
}

export interface LolPurchaseWidgetCapOrdersSubOrderDto {
  offer: LolPurchaseWidgetCapOrdersOfferDto;
  offerContext: LolPurchaseWidgetCapOrdersOfferContextDto;
  recipientId: string;
}

export interface LolPurchaseWidgetCapOrdersTypedIdentifierDto {
  id: string;
  typeId: string;
}

export interface LolPurchaseWidgetCatalogPluginItem {
  active: boolean;
  description: string;
  imagePath: string;
  inactiveDate: bigint;
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
  metadata: Array<LolPurchaseWidgetItemMetadataEntry>;
  name: string;
  owned: boolean;
  prices: Array<LolPurchaseWidgetCatalogPluginPrice>;
  purchaseDate: bigint;
  questSkinInfo: LolPurchaseWidgetSkinLineInfo;
  releaseDate: bigint;
  subInventoryType: string;
  subTitle: string;
  tags: Array<string>;
}

export interface LolPurchaseWidgetCatalogPluginItemAssets {
  colors: Array<string>;
  emblems: Array<LolPurchaseWidgetChampionSkinEmblem>;
  iconPath: string;
  splashPath: string;
  tilePath: string;
}

export interface LolPurchaseWidgetCatalogPluginItemWithDetails {
  assets: LolPurchaseWidgetCatalogPluginItemAssets;
  bundledDiscountPrices: Array<LolPurchaseWidgetCatalogPluginPrice>;
  bundledItems: Array<LolPurchaseWidgetCatalogPluginItemWithDetails>;
  item: LolPurchaseWidgetCatalogPluginItem;
  minimumBundlePrices: Array<LolPurchaseWidgetCatalogPluginPrice>;
  quantity: bigint;
  requiredItems: Array<LolPurchaseWidgetCatalogPluginItemWithDetails>;
}

export interface LolPurchaseWidgetCatalogPluginPrice {
  cost: bigint;
  costType: string;
  currency: string;
  sale: LolPurchaseWidgetCatalogPluginSale;
}

export interface LolPurchaseWidgetCatalogPluginSale {
  cost: bigint;
  discount: number;
  endDate: string;
  startDate: string;
}

export interface LolPurchaseWidgetChampionSkinEmblem {
  emblemPath: LolPurchaseWidgetChampionSkinEmblemPath;
  emblemPosition: LolPurchaseWidgetChampionSkinEmblemPosition;
  name: string;
}

export interface LolPurchaseWidgetChampionSkinEmblemPath {
  large: string;
  small: string;
}

export interface LolPurchaseWidgetChampionSkinEmblemPosition {
  horizontal: string;
  vertical: string;
}

export interface LolPurchaseWidgetDiscountPricingInfo {
  cost: bigint;
  costType: string;
  currency: string;
  discount: number;
}

export interface LolPurchaseWidgetItemChoiceDetails {
  backgroundImage: string;
  contents: Array<LolPurchaseWidgetItemDetails>;
  discount: string;
  displayType: string;
  fullPrice: bigint;
  item: LolPurchaseWidgetCatalogPluginItem;
  purchaseOptions: Array<LolPurchaseWidgetPurchaseOption>;
}

export interface LolPurchaseWidgetItemChoices {
  choices: Array<LolPurchaseWidgetItemChoiceDetails>;
  validationErrors: Array<LolPurchaseWidgetValidationErrorEntry>;
}

export interface LolPurchaseWidgetItemCost {
  cost: bigint;
  currency: string;
  discount: number;
}

export interface LolPurchaseWidgetItemDefinition {
  assets: LolPurchaseWidgetCatalogPluginItemAssets;
  bundledItemPrice: LolPurchaseWidgetBundledItemPricingInfo;
  description: string;
  inventoryType: string;
  itemId: bigint;
  metadata: Array<LolPurchaseWidgetItemMetadataEntry>;
  name: string;
  owned: boolean;
  subInventoryType: string;
  subTitle: string;
  tags: Array<string>;
}

export interface LolPurchaseWidgetItemDetails {
  description: string;
  iconUrl: string;
  subTitle: string;
  title: string;
}

export interface LolPurchaseWidgetItemKey {
  inventoryType: string;
  itemId: bigint;
}

export interface LolPurchaseWidgetItemMetadataEntry {
  type: string;
  value: string;
}

export interface LolPurchaseWidgetItemOwnership {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: bigint;
}

export interface LolPurchaseWidgetItemPrice {
  currencyType: string;
  price: bigint;
  purchasable: boolean;
}

export interface LolPurchaseWidgetItemSale {
  discount: number;
  endDate: string;
  startDate: string;
}

export interface LolPurchaseWidgetLoginSession {
  accountId: bigint;
  idToken: string;
  puuid: string;
  state: LolPurchaseWidgetLoginSessionStates;
  summonerId: bigint;
}

export type LolPurchaseWidgetLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolPurchaseWidgetOrderNotificationResource {
  eventType: string;
  eventTypeId: string;
  status: string;
}

export interface LolPurchaseWidgetPriceDetail {
  itemKey: LolPurchaseWidgetItemKey;
  price: LolPurchaseWidgetItemPrice;
}

export interface LolPurchaseWidgetPriceOptionDto {
  currencyImagePath: string;
  currencyName: string;
  currencyPaymentOption: string;
  currencyType: string;
  price: bigint;
}

export interface LolPurchaseWidgetPurchasableItem {
  bundledItems: Array<LolPurchaseWidgetItemDefinition>;
  dependencies: Array<LolPurchaseWidgetItemDefinition>;
  item: LolPurchaseWidgetItemDefinition;
  purchaseOptions: Array<LolPurchaseWidgetPurchaseOption>;
  sale: LolPurchaseWidgetItemSale;
  validationErrors: Array<LolPurchaseWidgetValidationErrorEntry>;
}

export interface LolPurchaseWidgetPurchaseItem {
  itemKey: LolPurchaseWidgetItemKey;
  purchaseCurrencyInfo: LolPurchaseWidgetItemPrice;
  quantity: bigint;
  source: string;
}

export type LolPurchaseWidgetPurchaseOfferOrderStates =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "FAIL"
  | "SUCCESS";

export interface LolPurchaseWidgetPurchaseOfferOrderStatus {
  message: string;
  orderState: LolPurchaseWidgetPurchaseOfferOrderStates;
}

export interface LolPurchaseWidgetPurchaseOfferOrderStatuses {
  statuses: LolPurchaseWidgetPurchaseOfferOrderStatus | undefined;
}

export interface LolPurchaseWidgetPurchaseOfferRequestV3 {
  currencyType: string;
  offerId: string;
  price: bigint;
  quantity: bigint;
}

export interface LolPurchaseWidgetPurchaseOfferResponseV3 {
  legacy: boolean;
  orderDto: LolPurchaseWidgetCapOrdersOrderDto;
}

export interface LolPurchaseWidgetPurchaseOption {
  priceDetails: Array<LolPurchaseWidgetPriceDetail>;
}

export interface LolPurchaseWidgetPurchaseRequest {
  items: Array<LolPurchaseWidgetPurchaseItem>;
}

export interface LolPurchaseWidgetPurchaseResponse {
  items: Array<LolPurchaseWidgetPurchaseItem>;
  transactions: Array<LolPurchaseWidgetTransaction>;
  useRMSConfirmation: boolean;
}

export interface LolPurchaseWidgetPurchaseWidgetConfig {
  alwaysShowPurchaseDisclaimer: boolean;
  enabled: boolean;
  nonRefundableDisclaimerEnabled: boolean;
}

export interface LolPurchaseWidgetRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface LolPurchaseWidgetSale {
  endDate: string;
  prices: Array<LolPurchaseWidgetItemCost>;
  startDate: string;
}

export interface LolPurchaseWidgetSkinLineDescriptionDto {
  description: string;
  iconImagePath: string;
  title: string;
}

export interface LolPurchaseWidgetSkinLineDescriptionInfo {
  description: string;
  iconPath: string;
  title: string;
}

export interface LolPurchaseWidgetSkinLineInfo {
  collectionCardPath: string;
  collectionDescription: string;
  descriptionInfo: Array<LolPurchaseWidgetSkinLineDescriptionInfo>;
  name: string;
  splashPath: string;
  tiers: Array<LolPurchaseWidgetSkinLineTier>;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolPurchaseWidgetSkinLineItemDto {
  largeImagePath: string;
  largeVideoPath: string;
  localizedLongName: string;
  localizedShortName: string;
  thumbnailImagePath: string;
}

export interface LolPurchaseWidgetSkinLineTier {
  collectionSplashVideoPath: string;
  description: string;
  id: bigint;
  loadScreenPath: string;
  name: string;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: bigint;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolPurchaseWidgetTransaction {
  iconUrl: string;
  itemKey: LolPurchaseWidgetItemKey;
  itemName: string;
  transactionId: string;
}

export interface LolPurchaseWidgetValidateOfferError {
  errorKey: string;
  meta: string;
}

export interface LolPurchaseWidgetValidateOfferRequestV3 {
  offerId: string;
}

export interface LolPurchaseWidgetValidateOfferResponseV3 {
  validationErrors: Array<LolPurchaseWidgetValidateOfferError>;
}

export interface LolPurchaseWidgetValidationError {
  errorCode: string;
  errorDetails: string | undefined;
  message: string;
  responseItems: Array<string>;
}

export interface LolPurchaseWidgetValidationErrorEntry {
  id: string;
}

export interface LolPurchaseWidgetValidationRequest {
  items: Array<LolPurchaseWidgetValidationRequestItem>;
  ownedItems: Array<LolPurchaseWidgetItemOwnership>;
}

export interface LolPurchaseWidgetValidationRequestItem {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: bigint;
}

export interface LolPurchaseWidgetValidationResponse {
  items: Array<LolPurchaseWidgetValidationResponseItem>;
  valid: boolean;
}

export interface LolPurchaseWidgetValidationResponseItem {
  description: string;
  itemKey: LolPurchaseWidgetItemKey;
  name: string;
  quantity: bigint;
  sale: LolPurchaseWidgetSale;
  validationCurrencyInfo: Array<LolPurchaseWidgetItemPrice>;
}

export interface LolPurchaseWidgetWallet {
  accountId: bigint;
  balances: Array<LolPurchaseWidgetBalance>;
  version: bigint;
}

export interface LolRankedAchievedTier {
  division: bigint;
  queueType: LolRankedLeagueQueueType;
  tier: LolRankedLeagueTier;
}

export interface LolRankedEndOfGameStatsBlock {
  gameId: bigint;
}

export interface LolRankedEosNotificationResource {
  division: string;
  notificationName: string;
  notificationType: string;
  queue: string;
  seasonEndTime: bigint;
  tier: string;
}

export type LolRankedEosNotificationType = "FIRST_WARNING" | "SECOND_WARNING" | "SEASON_ENDED";

export interface LolRankedEosNotificationsConfig {
  config: Array<LolRankedEosNotificationsConfigEntry>;
}

export interface LolRankedEosNotificationsConfigEntry {
  name: string;
  offsetTime1: bigint;
  offsetTime2: bigint;
  offsetTime3: bigint;
}

export interface LolRankedEosRewardsConfig {
  config: Array<LolRankedEosRewardsConfigEntry>;
}

export interface LolRankedEosRewardsConfigEntry {
  rewards: string | undefined;
  season: bigint;
}

export interface LolRankedEosSettingsData {
  notificationShown: boolean;
}

export interface LolRankedEosSettingsResource {
  data: LolRankedEosSettingsData;
  schemaVersion: bigint;
}

export interface LolRankedGameflowGameData {
  queue: LolRankedQueue;
}

export type LolRankedGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolRankedGameflowSession {
  gameData: LolRankedGameflowGameData;
  phase: LolRankedGameflowPhase;
}

export interface LolRankedGlobalNotification {
  notifyReason: string;
  participantId: string;
  position: bigint;
  queueType: string;
  tier: string;
}

export interface LolRankedLcuLeagueNotification {
  afkLpPenaltyAmount: bigint;
  afkLpPenaltyLevel: bigint;
  canDemoteFromTier: boolean;
  changeReason: string;
  consolationLpUsed: bigint;
  displayType: LolRankedNotificationDisplayType;
  division: LolRankedLeagueDivision;
  eligibleForPromoHelper: boolean;
  gameId: bigint;
  id: bigint;
  leaguePoints: bigint;
  leaguePointsDelta: bigint;
  miniseriesProgress: string;
  miniseriesWins: bigint;
  msgId: string;
  notifyReason: string;
  numberOfPromotions: bigint;
  promoSeriesForRanksEnabled: boolean;
  provisionalGamesRemaining: bigint;
  queueType: LolRankedLeagueQueueType;
  ratedRating: bigint;
  ratedRatingDelta: bigint;
  ratedTier: LolRankedRatedTier;
  rewardEarnedId: string;
  rewardEarnedType: string;
  splitPointsNotification: LolRankedSplitPointsNotification;
  tier: LolRankedLeagueTier;
  timeUntilInactivityStatusChanges: bigint;
  wasAfkOrLeaver: boolean;
}

export type LolRankedLeagueDivision = "I" | "II" | "III" | "IV" | "V" | "NA";

export interface LolRankedLeagueDivisionInfo {
  apexUnlockTimeMillis: bigint;
  division: LolRankedLeagueDivision;
  maxLeagueSize: bigint;
  minLpForApexTier: bigint;
  standings: Array<LolRankedLeagueStanding>;
  tier: LolRankedLeagueTier;
  topNumberOfPlayers: bigint;
}

export interface LolRankedLeagueLadderDTO {
  apexUnlockTimeMillis: bigint;
  entries: Array<LolRankedLeagueLadderEntryDTO>;
  maxLeagueSize: bigint;
  minLpForTier: bigint;
  nextApexUpdate: bigint;
  provisionalGameThreshold: bigint;
  queueType: string;
  tier: string;
  topNumberOfPlayers: bigint;
}

export interface LolRankedLeagueLadderEntryDTO {
  earnedRegaliaRewardIds: Array<string>;
  leaguePoints: bigint;
  losses: bigint;
  miniSeriesProgress: string;
  previousDayLeaguePosition: bigint;
  previousSeasonAchievedRank: string;
  previousSeasonAchievedTier: string;
  provisionalGamesRemaining: bigint;
  puuid: string;
  rank: string;
  summonerId: bigint;
  summonerName: string;
  tier: string;
  wins: bigint;
}

export interface LolRankedLeagueLadderInfo {
  divisions: Array<LolRankedLeagueDivisionInfo>;
  nextApexUpdateMillis: bigint;
  provisionalGameThreshold: bigint;
  queueType: LolRankedLeagueQueueType;
  requestedRankedEntry: LolRankedLeagueStanding;
  tier: LolRankedLeagueTier;
}

export interface LolRankedLeagueNotification {
  afkLpPenaltyAmount: bigint;
  afkLpPenaltyLevel: bigint;
  canDemoteFromTier: boolean;
  changeReason: string;
  consolationLpUsed: bigint;
  eligibleForPromoHelper: boolean;
  gameId: bigint;
  leaguePoints: bigint;
  leaguePointsDelta: bigint;
  miniseriesProgress: string;
  notifyReason: string;
  promoSeriesForRanksEnabled: boolean;
  provisionalGamesRemaining: bigint;
  queueType: string;
  rank: string;
  ratedRating: bigint;
  ratedRatingDelta: bigint;
  ratedTier: string;
  splitPoints: bigint;
  splitPointsBreakdown: bigint | undefined;
  tier: string;
  wasAfkOrLeaver: boolean;
}

export interface LolRankedLeagueNotifications {
  globalNotifications: Array<LolRankedGlobalNotification>;
  notifications: Array<LolRankedLeagueNotification>;
}

export type LolRankedLeagueQueueType =
  | "NONE"
  | "RANKED_SOLO_5x5"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_TFT"
  | "RANKED_TFT_TURBO"
  | "RANKED_TFT_PAIRS";

export interface LolRankedLeagueStanding {
  division: LolRankedLeagueDivision;
  earnedRegaliaRewardIds: Array<string>;
  isProvisional: boolean;
  leaguePoints: bigint;
  losses: bigint;
  miniseriesResults: Array<LolRankedMiniseries>;
  pendingDemotion: boolean;
  pendingPromotion: boolean;
  position: bigint;
  positionDelta: bigint;
  previousPosition: bigint;
  previousSeasonAchievedDivision: LolRankedLeagueDivision;
  previousSeasonAchievedTier: LolRankedLeagueTier;
  provisionalGamesRemaining: bigint;
  puuid: string;
  rankedRegaliaLevel: bigint;
  summonerId: bigint;
  summonerName: string;
  tier: LolRankedLeagueTier;
  wins: bigint;
}

export type LolRankedLeagueTier =
  | "NONE"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export interface LolRankedLeagueTierAndRankDTO {
  playerOrTeamId: string;
  playerOrTeamName: string;
  queueType: string;
  rank: string;
  tier: string;
}

export interface LolRankedLeaguesSeasonRewardConfig {
  QualificationWarningEnabled: boolean;
}

export interface LolRankedLoginSession {
  accountId: bigint;
  state: LolRankedLoginSessionStates;
  summonerId: bigint;
}

export type LolRankedLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export type LolRankedMiniseries = "W" | "L" | "N";

export type LolRankedNotificationDisplayType = "NONE" | "TOAST" | "MODAL" | "VIGNETTE";

export interface LolRankedParticipantTiers {
  achievedTiers: Array<LolRankedAchievedTier>;
  summonerId: bigint;
}

export interface LolRankedQueue {
  type: boolean | undefined;
}

export interface LolRankedQueuesAndPuuidsPayload {
  queueTypes: Array<LolRankedLeagueQueueType>;
  summonerIds: Array<bigint>;
}

export interface LolRankedRankedQueueStats {
  division: LolRankedLeagueDivision;
  isProvisional: boolean;
  leaguePoints: bigint;
  losses: bigint;
  miniSeriesProgress: string;
  previousSeasonAchievedDivision: LolRankedLeagueDivision;
  previousSeasonAchievedTier: LolRankedLeagueTier;
  previousSeasonEndDivision: LolRankedLeagueDivision;
  previousSeasonEndTier: LolRankedLeagueTier;
  provisionalGameThreshold: bigint;
  provisionalGamesRemaining: bigint;
  queueType: LolRankedLeagueQueueType;
  ratedRating: bigint;
  ratedTier: LolRankedRatedTier;
  tier: LolRankedLeagueTier;
  warnings: LolRankedRankedQueueWarnings;
  wins: bigint;
}

export interface LolRankedRankedQueueStatsDTO {
  leaguePoints: bigint;
  losses: bigint;
  miniSeriesProgress: string;
  previousSeasonAchievedRank: string;
  previousSeasonAchievedTier: string;
  previousSeasonEndRank: string;
  previousSeasonEndTier: string;
  provisionalGameThreshold: bigint;
  provisionalGamesRemaining: bigint;
  queueType: string;
  rank: string;
  ratedRating: bigint;
  ratedTier: string;
  tier: string;
  warnings: LolRankedRankedQueueWarningsDTO;
  wins: bigint;
}

export interface LolRankedRankedQueueWarnings {
  daysUntilDecay: bigint;
  demotionWarning: bigint;
  displayDecayWarning: boolean;
  timeUntilInactivityStatusChanges: bigint;
}

export interface LolRankedRankedQueueWarningsDTO {
  apexDaysUntilDecay: bigint;
  daysUntilDecay: bigint;
  demotionWarning: bigint;
  displayDecayWarning: boolean;
  timeUntilInactivityStatusChanges: bigint;
}

export interface LolRankedRankedStats {
  earnedRegaliaRewardIds: Array<string>;
  highestPreviousSeasonAchievedDivision: LolRankedLeagueDivision;
  highestPreviousSeasonAchievedTier: LolRankedLeagueTier;
  highestPreviousSeasonEndDivision: LolRankedLeagueDivision;
  highestPreviousSeasonEndTier: LolRankedLeagueTier;
  highestRankedEntry: LolRankedRankedQueueStats;
  highestRankedEntrySR: LolRankedRankedQueueStats;
  queueMap: LolRankedRankedQueueStats | undefined;
  queues: Array<LolRankedRankedQueueStats>;
  rankedRegaliaLevel: bigint;
  seasons: LolRankedSeasonDTO | undefined;
  splitsProgress: bigint | undefined;
}

export interface LolRankedRankedStatsDTO {
  earnedRegaliaRewardIds: Array<string>;
  highestPreviousSeasonAchievedRank: string;
  highestPreviousSeasonAchievedTier: string;
  highestPreviousSeasonEndRank: string;
  highestPreviousSeasonEndTier: string;
  queues: Array<LolRankedRankedQueueStatsDTO>;
  seasons: LolRankedSeasonDTO | undefined;
  splitsProgress: bigint | undefined;
}

export interface LolRankedRatedLadderEntryDTO {
  previousUpdateLadderPosition: bigint;
  puuid: string;
  ratedRating: bigint;
  ratedTier: string;
  summonerId: bigint;
  summonerName: string;
  wins: bigint;
}

export interface LolRankedRatedLadderInfo {
  queueType: LolRankedLeagueQueueType;
  standings: Array<LolRankedRatedLadderStanding>;
}

export interface LolRankedRatedLadderStanding {
  leaguePoints: bigint;
  position: bigint;
  positionDelta: bigint;
  previousPosition: bigint;
  puuid: string;
  ratedTier: LolRankedRatedTier;
  summonerId: bigint;
  summonerName: string;
  wins: bigint;
}

export type LolRankedRatedTier = "NONE" | "GRAY" | "GREEN" | "BLUE" | "PURPLE" | "ORANGE";

export interface LolRankedRewardsInfo {
  currentSeasonId: bigint;
  currentSplit: LolRankedSeasonSplit;
  currentSplitId: bigint;
  rewardInfoByRewardId: LolRankedSplitReward | undefined;
  splits: Array<LolRankedSeasonSplit>;
}

export interface LolRankedSeasonDTO {
  currentSeasonEnd: bigint;
  currentSeasonId: bigint;
  nextSeasonStart: bigint;
}

export interface LolRankedSeasonSplit {
  endTimeMillis: bigint;
  rewardTrack: Array<LolRankedSplitRewardGroup>;
  seasonId: bigint;
  splitId: bigint;
  startTimeMillis: bigint;
}

export interface LolRankedSeasonSplitDTO {
  endTime: bigint;
  rewardTrack: Array<LolRankedSplitRewardGroupDTO>;
  seasonId: bigint;
  splitId: bigint;
  startTime: bigint;
}

export interface LolRankedSequenceEvent {
  name: string;
  priority: bigint;
}

export type LolRankedSeverity = "WARNING" | "ALERT";

export interface LolRankedSignedRankedStatsDTO {
  earnedRegaliaRewardIds: Array<string>;
  highestPreviousSeasonAchievedRank: string;
  highestPreviousSeasonAchievedTier: string;
  highestPreviousSeasonEndRank: string;
  highestPreviousSeasonEndTier: string;
  jwt: string;
  queues: Array<LolRankedRankedQueueStatsDTO>;
  seasons: LolRankedSeasonDTO | undefined;
  splitsProgress: bigint | undefined;
}

export interface LolRankedSocialLeaderboardRankedQueueStats {
  division: LolRankedLeagueDivision;
  isProvisional: boolean;
  leaguePoints: bigint;
  losses: bigint;
  miniSeriesProgress: string;
  provisionalGameThreshold: bigint;
  provisionalGamesRemaining: bigint;
  queueType: LolRankedLeagueQueueType;
  ratedRating: bigint;
  ratedTier: LolRankedRatedTier;
  tier: LolRankedLeagueTier;
  wins: bigint;
}

export interface LolRankedSocialLeaderboardRankedQueueStatsDTO {
  leaguePoints: bigint;
  losses: bigint;
  miniSeriesProgress: string;
  provisionalGameThreshold: bigint;
  provisionalGamesRemaining: bigint;
  queueType: string;
  rank: string;
  ratedRating: bigint;
  ratedTier: string;
  tier: string;
  wins: bigint;
}

export interface LolRankedSplitPointsNotification {
  nextRewardId: string;
  nextRewardType: string;
  previousSplitPointsRequired: bigint;
  splitPointsAfterGame: bigint;
  splitPointsBeforeGame: bigint;
  splitPointsBreakdown: bigint | undefined;
  splitPointsDelta: bigint;
  splitPointsRequired: bigint;
}

export interface LolRankedSplitReward {
  description: string;
  id: string;
  pointsRequired: bigint;
  quantity: bigint;
  regaliaLevel: bigint;
  rewardType: string;
  splitId: bigint;
}

export interface LolRankedSplitRewardDTO {
  defaultRewardId: string;
  metadata: LolRankedSplitRewardsMetaData;
  rewardType: string;
  tieredRewardIds: string | undefined;
}

export interface LolRankedSplitRewardGroup {
  rewards: Array<LolRankedSplitReward>;
  splitPoints: bigint;
}

export interface LolRankedSplitRewardGroupDTO {
  rewards: Array<LolRankedSplitRewardDTO>;
  splitPoints: bigint;
}

export interface LolRankedSplitRewardsMetaData {
  description: string;
  quantity: bigint;
}

export interface LolRankedSummoner {
  puuid: string;
  summonerId: bigint;
}

export interface LolRegaliaAccountIdAndSummonerId {
  summonerId: bigint;
}

export interface LolRegaliaChatPresence {
  icon: bigint;
  lol: LolRegaliaChatPresenceLolData;
  summonerId: bigint;
}

export interface LolRegaliaChatPresenceExternal {
  icon: bigint;
  id: string;
  lol: string | undefined;
  summonerId: bigint;
}

export interface LolRegaliaChatPresenceLolData {
  level: bigint;
  rankedLeagueDivision: LolRegaliaLeagueDivision;
  rankedLeagueQueue: LolRegaliaLeagueQueueType;
  rankedLeagueTier: LolRegaliaLeagueTier;
  rankedPrevSeasonDivision: LolRegaliaLeagueDivision;
  rankedPrevSeasonTier: LolRegaliaLeagueTier;
  rankedSplitRewardLevel: bigint;
  regalia: LolRegaliaRegaliaSettings;
}

export interface LolRegaliaItemKey {
  inventoryType: string;
  itemId: bigint;
}

export type LolRegaliaLeagueDivision = "I" | "II" | "III" | "IV" | "V" | "NA";

export type LolRegaliaLeagueQueueType =
  | "NONE"
  | "RANKED_SOLO_5x5"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_TFT"
  | "RANKED_TFT_TURBO"
  | "RANKED_TFT_PAIRS";

export type LolRegaliaLeagueTier =
  | "NONE"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export interface LolRegaliaLoadout {
  id: string;
  loadout: LolRegaliaRegaliaLoadout;
  name: string;
  scope: string;
}

export interface LolRegaliaRankedQueueStats {
  division: LolRegaliaLeagueDivision;
  isProvisional: boolean;
  queueType: LolRegaliaLeagueQueueType;
  tier: LolRegaliaLeagueTier;
}

export interface LolRegaliaRankedStats {
  highestPreviousSeasonAchievedTier: LolRegaliaLeagueTier;
  highestRankedEntry: LolRegaliaRankedQueueStats;
  queues: Array<LolRegaliaRankedQueueStats>;
  rankedRegaliaLevel: bigint;
}

export interface LolRegaliaRegalia {
  bannerType: string;
  crestType: string;
  highestRankedEntry: LolRegaliaRegaliaRankedEntry;
  lastSeasonHighestRank: LolRegaliaLeagueTier;
  profileIconId: bigint;
  summonerLevel: bigint;
}

export interface LolRegaliaRegaliaAsync {
  md5: string;
}

export type LolRegaliaRegaliaBannerType = "blank" | "lastSeasonHighestRank";

export type LolRegaliaRegaliaCrestType = "none" | "prestige" | "ranked";

export interface LolRegaliaRegaliaFrontendConfig {
  hovercardEnabled: boolean;
  selectionsEnabled: boolean;
}

export interface LolRegaliaRegaliaLoadout {
  REGALIA_BANNER_SLOT: LolRegaliaItemKey;
  REGALIA_CREST_SLOT: LolRegaliaItemKey;
}

export interface LolRegaliaRegaliaPlatformConfig {
  HovercardEnabled: boolean;
  SelectionsEnabled: boolean;
}

export interface LolRegaliaRegaliaPreferences {
  preferredBannerType: string;
  preferredCrestType: string;
}

export interface LolRegaliaRegaliaRankedEntry {
  division: LolRegaliaLeagueDivision;
  queueType: LolRegaliaLeagueQueueType;
  splitRewardLevel: bigint;
  tier: LolRegaliaLeagueTier;
}

export interface LolRegaliaRegaliaSettings {
  bannerType: LolRegaliaRegaliaBannerType;
  crestType: LolRegaliaRegaliaCrestType;
}

export interface LolRegaliaRegaliaSettingsExternal {
  bannerType: bigint;
  crestType: bigint;
}

export interface LolRegaliaRegaliaWithPreferences {
  bannerType: string;
  crestType: string;
  highestRankedEntry: LolRegaliaRegaliaRankedEntry;
  lastSeasonHighestRank: LolRegaliaLeagueTier;
  preferredBannerType: string;
  preferredCrestType: string;
  profileIconId: bigint;
  summonerLevel: bigint;
}

export interface LolRegaliaSummoner {
  profileIconId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolRegaliaSummonerProfile {
  regalia: string;
}

export interface LolRegaliaSummonerProfileUpdate {
  key: string;
  value: string;
}

export interface LolReplaysClashPlaymodeRestrictedInfo {
  isRestricted: boolean;
}

export interface LolReplaysGameflowAvailability {
  state: string;
}

export interface LolReplaysGameflowGameClient {
  running: boolean;
}

export type LolReplaysGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolReplaysGameflowSession {
  gameClient: LolReplaysGameflowGameClient;
  phase: LolReplaysGameflowPhase;
}

export type LolReplaysGameflowWatchPhase =
  | "None"
  | "WatchStarted"
  | "WatchInProgress"
  | "WatchFailedToLaunch";

export interface LolReplaysInstallPaths {
  gameExecutablePath: string;
  gameInstallRoot: string;
}

export type LolReplaysMetadataState =
  | "checking"
  | "found"
  | "watch"
  | "download"
  | "downloading"
  | "incompatible"
  | "missingOrExpired"
  | "retryDownload"
  | "lost"
  | "unsupported"
  | "error";

export interface LolReplaysReplayContextData {
  componentType: string;
}

export interface LolReplaysReplayCreateMetadata {
  gameEnd: bigint;
  gameType: string;
  gameVersion: string;
  queueId: bigint;
}

export interface LolReplaysReplayMetadata {
  downloadProgress: bigint;
  gameId: bigint;
  state: LolReplaysMetadataState;
}

export interface LolReplaysReplaysConfiguration {
  gameVersion: string;
  isInTournament: boolean;
  isLoggedIn: boolean;
  isPatching: boolean;
  isPlayingGame: boolean;
  isPlayingReplay: boolean;
  isReplaysEnabled: boolean;
  isReplaysForEndOfGameEnabled: boolean;
  isReplaysForMatchHistoryEnabled: boolean;
  minServerVersion: string;
  minutesUntilReplayConsideredLost: number;
}

export interface LolReplaysReplaysDynamicConfig {
  MinSupportedGameServerVersion: string;
  MinutesUntilReplayConsideredLost: number;
}

export interface LolReplaysReplaysSettingsData {
  "highlights-folder-path": string;
  "replays-folder-path": string;
}

export interface LolReplaysReplaysSettingsResource {
  data: LolReplaysReplaysSettingsData;
}

export interface LolReplaysRoflFileMetadata {
  gameLength: bigint;
  gameVersion: string;
  lastGameChunkId: bigint;
  lastKeyFrameId: bigint;
}

export type LolRewardsGrantStatus =
  | "PENDING_FULFILLMENT"
  | "PENDING_SELECTION"
  | "FULFILLED"
  | "FAILED";

export interface LolRewardsGrantorDescription {
  appName: string;
  entityId: string;
}

export interface LolRewardsRMSPayload {
  affinities: Array<string>;
  productId: string;
}

export interface LolRewardsRegionLocale {
  locale: string;
  region: string;
}

export interface LolRewardsRequestDTO_SelectionRequestDTO {
  data: LolRewardsSelectionRequestDTO;
  metadata: LolRewardsRequestMetadataDTO;
}

export interface LolRewardsRequestMetadataDTO {
  transactionId: string;
}

export interface LolRewardsResponseDTO_SvcRewardGrant {
  data: LolRewardsSvcRewardGrant;
  metadata: LolRewardsResponseMetadataDTO;
}

export interface LolRewardsResponseDTO_vector_SvcRewardGrant {
  data: Array<LolRewardsSvcRewardGrant>;
  metadata: LolRewardsResponseMetadataDTO;
}

export interface LolRewardsResponseDTO_vector_SvcRewardGroup {
  data: Array<LolRewardsSvcRewardGroup>;
  metadata: LolRewardsResponseMetadataDTO;
}

export interface LolRewardsResponseMetadataDTO {}

export interface LolRewardsReward {
  fulfillmentSource: string;
  id: string;
  itemId: string;
  itemType: string;
  localizations: string | undefined;
  media: string | undefined;
  quantity: bigint;
}

export interface LolRewardsRewardGrant {
  info: LolRewardsSvcRewardGrant;
  rewardGroup: LolRewardsSvcRewardGroup;
}

export type LolRewardsRewardStatus = "PENDING" | "FULFILLED" | "FAILED";

export type LolRewardsRewardStrategy = "ALL" | "RANDOM" | "SELECTION";

export interface LolRewardsRewardsConfig {
  Enabled: boolean;
}

export interface LolRewardsSelectionRequestDTO {
  rewardGroupId: string;
  selections: Array<string>;
}

export interface LolRewardsSelectionStrategyConfig {
  maxSelectionsAllowed: bigint;
  minSelectionsAllowed: bigint;
}

export interface LolRewardsSvcRewardGrant {
  grantElements: Array<LolRewardsSvcRewardGrantElement>;
  granteeId: string;
  grantorDescription: LolRewardsGrantorDescription;
  id: string;
  rewardGroupId: string;
  selectedIds: Array<string>;
  status: LolRewardsGrantStatus;
  viewed: boolean;
}

export interface LolRewardsSvcRewardGrantElement {
  elementId: string;
  fulfillmentSource: string;
  itemId: string;
  itemType: string;
  localizations: string | undefined;
  media: string | undefined;
  quantity: bigint;
  status: LolRewardsRewardStatus;
}

export interface LolRewardsSvcRewardGroup {
  active: boolean;
  childRewardGroupIds: Array<string>;
  id: string;
  internalName: string;
  localizations: string | undefined;
  media: string | undefined;
  productId: string;
  rewardStrategy: LolRewardsRewardStrategy;
  rewards: Array<LolRewardsReward>;
  selectionStrategyConfig: LolRewardsSelectionStrategyConfig;
  types: Array<string>;
}

export interface LolRiotMessagingServiceChampionMasteryLevelUp {
  championId: bigint;
  championLevel: bigint;
  hasLeveledUp: boolean;
  id: bigint;
  playerId: bigint;
}

export type LolRiotMessagingServiceGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolRiotMessagingServiceGameflowSession {
  phase: LolRiotMessagingServiceGameflowPhase;
}

export interface LolRiotclientUpgraderGameflowAvailability {
  isAvailable: boolean;
  state: string;
}

export interface LolRsoAuthAccessToken {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export interface LolRsoAuthAuthError {
  error: string;
  errorDescription: string;
}

export interface LolRsoAuthAuthHint {
  context: boolean | undefined;
  required: boolean;
  type: LolRsoAuthAuthHintType;
}

export type LolRsoAuthAuthHintType =
  | "email_verification"
  | "password_reset"
  | "parental_consent"
  | "ambiguous_username";

export interface LolRsoAuthAuthorization {
  currentAccountId: bigint;
  currentPlatformId: string;
  subject: string;
}

export interface LolRsoAuthAuthorizationRequest {
  claims: Array<string>;
  clientId: string;
  scope: Array<string>;
  trustLevels: Array<LolRsoAuthRSOAuthorizationTrustLevel>;
}

export interface LolRsoAuthAuthorizationResponse {
  authorization: LolRsoAuthImplicitAuthorization;
  type: string;
}

export type LolRsoAuthConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface LolRsoAuthConfigStatus {
  readiness: LolRsoAuthConfigReadinessEnum;
}

export type LolRsoAuthConfigType = "public" | "player";

export interface LolRsoAuthDeviceId {
  collectorServerName: string;
  frameUrl: string;
  installId: string;
  merchantId: string;
  sessionId: string;
}

export interface LolRsoAuthEntitlementsToken {
  entitlements: Array<string>;
  expiry: bigint;
  token: string;
}

export interface LolRsoAuthIdToken {
  expiry: bigint;
  token: string;
}

export interface LolRsoAuthImplicitAuthorization {
  accessToken: LolRsoAuthAccessToken;
  idToken: LolRsoAuthIdToken;
}

export interface LolRsoAuthPublicClientConfig {
  clientId: string;
  url: string;
}

export type LolRsoAuthRSOAuthorizationTrustLevel =
  | "always_trusted"
  | "trusted_device"
  | "always_verify";

export interface LolRsoAuthRSOConfigReadyState {
  ready: boolean;
}

export interface LolRsoAuthRSOJWTConfig {
  token: string;
}

export interface LolRsoAuthRSOPlayerCredentials {
  password: string;
  platformId: string;
  username: string;
}

export interface LolRsoAuthRegionStatus {
  enabled: boolean;
  isLQFallbackAllowed: boolean;
  isUserInfoEnabled: boolean;
  platformId: string;
}

export interface LolRsoAuthSessionResponse {
  error: string;
  type: string;
}

export interface LolRsoAuthUserInfo {
  userInfo: string;
}

export interface LolServiceStatusBroadcastMessage {
  content: string;
  messageKey: string;
  severity: string;
}

export interface LolServiceStatusBroadcastNotification {
  broadcastMessages: Array<LolServiceStatusBroadcastMessage>;
}

export interface LolServiceStatusLegacyServiceStatusMessage {
  content: string;
  created_at: string;
  heading: string;
  severity: string;
  translations: Array<LolServiceStatusLegacyServiceStatusTranslation>;
  updated_at: string;
}

export interface LolServiceStatusLegacyServiceStatusResponse {
  messages: Array<LolServiceStatusLegacyServiceStatusMessage>;
  status: string;
}

export interface LolServiceStatusLegacyServiceStatusTranslation {
  content: string;
  heading: string;
  locale: string;
}

export interface LolServiceStatusLoginDataPacket {
  broadcastNotification: LolServiceStatusBroadcastNotification;
}

export interface LolServiceStatusRegionLocaleResource {
  locale: string;
  region: string;
}

export interface LolServiceStatusRiotStatusIncident {
  archive_at: string;
  created_at: string;
  id: bigint;
  incident_severity: string;
  platforms: Array<string>;
  titles: Array<LolServiceStatusRiotStatusTitle>;
  updated_at: string;
  updates: Array<LolServiceStatusRiotStatusUpdate>;
}

export interface LolServiceStatusRiotStatusMaintenance {
  archive_at: string;
  created_at: string;
  id: bigint;
  maintenance_status: string;
  platforms: Array<string>;
  titles: Array<LolServiceStatusRiotStatusTitle>;
  updated_at: string;
  updates: Array<LolServiceStatusRiotStatusUpdate>;
}

export interface LolServiceStatusRiotStatusResource {
  id: string;
  incidents: Array<LolServiceStatusRiotStatusIncident>;
  locales: Array<string>;
  maintenances: Array<LolServiceStatusRiotStatusMaintenance>;
  name: string;
}

export interface LolServiceStatusRiotStatusTitle {
  content: string;
  locale: string;
}

export interface LolServiceStatusRiotStatusTranslation {
  content: string;
  locale: string;
}

export interface LolServiceStatusRiotStatusUpdate {
  author: string;
  created_at: string;
  id: bigint;
  publish: boolean;
  publish_locations: Array<string>;
  translations: Array<LolServiceStatusRiotStatusTranslation>;
  updated_at: string;
}

export interface LolServiceStatusServiceStatusResource {
  humanReadableUrl: string;
  status: string;
}

export interface LolServiceStatusTickerMessage {
  createdAt: string;
  heading: string;
  message: string;
  severity: string;
  updatedAt: string;
}

export interface LolSettingsLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  state: LolSettingsLoginSessionStates;
  summonerId: bigint;
}

export type LolSettingsLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolSettingsSettingCategory {
  data: boolean | undefined;
  schemaVersion: bigint;
}

export interface LolShutdownShutdownNotification {
  additionalInfo: string;
  countdown: number;
  reason: LolShutdownShutdownReason;
}

export type LolShutdownShutdownReason =
  | "Invalid"
  | "PlatformMaintenance"
  | "LcuAlphaDisabled"
  | "PlayerBanned";

export type LolSimpleDialogMessagesGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolSimpleDialogMessagesGameflowSession {
  phase: LolSimpleDialogMessagesGameflowPhase;
}

export interface LolSimpleDialogMessagesLocalMessageRequest {
  msgBody: Array<string>;
  msgType: string;
}

export interface LolSimpleDialogMessagesLoginDataPacket {
  simpleMessages: Array<LolSimpleDialogMessagesSimpleMessage>;
}

export interface LolSimpleDialogMessagesMessage {
  body: boolean | undefined;
  id: bigint;
  type: string;
}

export interface LolSimpleDialogMessagesSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolSocialLeaderboardFriendResource {
  availability: string;
  icon: bigint;
  name: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolSocialLeaderboardGiftingFriend {
  summonerId: bigint;
}

export type LolSocialLeaderboardLeagueDivision = "I" | "II" | "III" | "IV" | "V" | "NA";

export type LolSocialLeaderboardLeagueQueueType =
  | "NONE"
  | "RANKED_SOLO_5x5"
  | "RANKED_FLEX_SR"
  | "RANKED_FLEX_TT"
  | "RANKED_TFT"
  | "RANKED_TFT_TURBO"
  | "RANKED_TFT_PAIRS";

export type LolSocialLeaderboardLeagueTier =
  | "NONE"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER";

export interface LolSocialLeaderboardRankedQueueStats {
  division: LolSocialLeaderboardLeagueDivision;
  isProvisional: boolean;
  leaguePoints: bigint;
  provisionalGamesRemaining: bigint;
  queueType: LolSocialLeaderboardLeagueQueueType;
  tier: LolSocialLeaderboardLeagueTier;
  wins: bigint;
}

export interface LolSocialLeaderboardRankedStats {
  queueMap: LolSocialLeaderboardRankedQueueStats | undefined;
}

export interface LolSocialLeaderboardSocialLeaderboardData {
  nextUpdateTime: bigint;
  rowData: Array<LolSocialLeaderboardSocialLeaderboardRowData>;
}

export interface LolSocialLeaderboardSocialLeaderboardRowData {
  availability: string;
  division: LolSocialLeaderboardLeagueDivision;
  isGiftable: boolean;
  isProvisional: boolean;
  leaderboardPosition: bigint;
  leaguePoints: bigint;
  profileIconId: bigint;
  provisionalGamesRemaining: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
  summonerName: string;
  tier: LolSocialLeaderboardLeagueTier;
  wins: bigint;
}

export interface LolSocialLeaderboardSummoner {
  accountId: bigint;
  displayName: string;
  internalName: string;
  profileIconId: bigint;
  puuid: string;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolSpectatorSpectateGameInfo {
  allowObserveMode: string;
  dropInSpectateGameId: string;
  gameQueueType: string;
  puuid: string;
}

export interface LolSpectatorSummonerOrTeamAvailabilty {
  availableForWatching: Array<string>;
}

export interface LolStatstonesCatalogBundle {
  item: LolStatstonesCatalogItemDetails;
}

export interface LolStatstonesCatalogBundlePrice {
  cost: bigint;
  currency: string;
}

export interface LolStatstonesCatalogItemDetails {
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
  prices: Array<LolStatstonesCatalogBundlePrice>;
  releaseDate: string;
  subInventoryType: string;
}

export interface LolStatstonesChampionStatstoneSetSummary {
  milestonesPassed: bigint;
  name: string;
  stonesAvailable: bigint;
  stonesIlluminated: bigint;
  stonesOwned: bigint;
}

export interface LolStatstonesChampionStatstoneSummary {
  championId: bigint;
  milestonesPassed: bigint;
  sets: Array<LolStatstonesChampionStatstoneSetSummary>;
  stonesAvailable: bigint;
  stonesIlluminated: bigint;
  stonesOwned: bigint;
}

export interface LolStatstonesCollectionsChampion {
  id: bigint;
  name: string;
  squarePortraitPath: string;
}

export interface LolStatstonesEogNotificationEnvelope {
  othersPersonalBests: Array<LolStatstonesPersonalBestNotification>;
  selfMilestoneProgress: Array<LolStatstonesMilestoneProgressNotification>;
  selfPersonalBests: Array<LolStatstonesPersonalBestNotification>;
  selfStatstoneProgress: Array<LolStatstonesStatstoneProgress>;
}

export interface LolStatstonesGameDataItemReference {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
}

export interface LolStatstonesGameDataStatstone {
  boundChampion: LolStatstonesGameDataItemReference;
  category: string;
  contentId: string;
  description: string;
  iconFull: string;
  iconLit: string;
  iconUnlit: string;
  iconUnowned: string;
  isEpic: boolean;
  isRetired: boolean;
  itemId: bigint;
  milestones: Array<bigint>;
  name: string;
  trackingType: bigint;
}

export interface LolStatstonesGameDataStatstonePack {
  contentId: string;
  description: string;
  itemId: bigint;
  name: string;
}

export interface LolStatstonesGameDataStatstoneSet {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
  name: string;
  price: bigint;
  statstones: Array<LolStatstonesGameDataStatstone>;
}

export interface LolStatstonesGameDataStatstonesInfo {
  champIdToPackIds: boolean | undefined;
  collectionIdToStatStoneIds: boolean | undefined;
  packData: Array<LolStatstonesGameDataStatstonePack>;
  packIdToChampIds: boolean | undefined;
  packIdToStatStonesIds: boolean | undefined;
  packIdToSubPackIds: boolean | undefined;
  seriesIdToStatStoneIds: boolean | undefined;
  statstoneData: Array<LolStatstonesGameDataStatstoneSet>;
}

export interface LolStatstonesLoadout {
  id: string;
  itemId: bigint;
  loadout: boolean | undefined | undefined;
  name: string;
  scope: string;
}

export interface LolStatstonesLoadoutItem {
  contentId: string;
  inventoryType: string;
  itemId: bigint;
}

export interface LolStatstonesMilestoneNotificationDto {
  isCompleted: boolean;
  level: bigint;
  statstoneId: string;
  threshold: bigint;
}

export interface LolStatstonesMilestoneProgressNotification {
  imageUrl: string;
  level: string;
  statstoneId: string;
  statstoneName: string;
  threshold: bigint;
}

export interface LolStatstonesNumberFormattingBehavior {
  digitsForThousandsSeperator: bigint;
  trimTrailingZerosAfterDecimal: boolean;
  westernNumberGrouping: boolean;
}

export interface LolStatstonesNumberFormattingData {
  billionAbbreviation: string;
  decimalSeperator: string;
  hourAbbreviation: string;
  kilometersAbbreviation: string;
  metersAbbreviation: string;
  millionAbbreviation: string;
  minuteAbbreviation: string;
  numberFormattingBehavior: LolStatstonesNumberFormattingBehavior;
  oneHundredMillionAbbreviation: string;
  percentageFormat: string;
  secondAbbreviation: string;
  tenThousandAbbreviation: string;
  thousandAbbreviation: string;
  thousandSeperator: string;
  trillionAbbreviation: string;
}

export interface LolStatstonesPersonalBestNotification {
  imageUrl: string;
  personalBest: string;
  statstoneId: string;
  statstoneName: string;
  summoner: LolStatstonesSummoner;
}

export interface LolStatstonesPriceInfo {
  currency: string;
  price: bigint;
}

export interface LolStatstonesProfileStatstoneSummary {
  category: string;
  championId: bigint;
  imageUrl: string;
  name: string;
  value: string;
}

export interface LolStatstonesStatstone {
  boundChampionItemId: bigint;
  category: string;
  completionValue: number;
  description: string;
  formattedMilestoneLevel: string;
  formattedPersonalBest: string;
  formattedValue: string;
  imageUrl: string;
  isComplete: boolean;
  isEpic: boolean;
  isFeatured: boolean;
  isRetired: boolean;
  name: string;
  nextMilestone: string;
  playerRecord: LolStatstonesStatstonePlayerRecord;
  statstoneId: string;
}

export interface LolStatstonesStatstoneCompletion {
  category: string;
  isEpic: boolean;
  statstoneName: string;
}

export interface LolStatstonesStatstoneFeaturedRequest {
  existingFeatured: Array<LolStatstonesStatstone>;
  index: bigint;
}

export interface LolStatstonesStatstoneMasteryVignette {
  completedSetUuids: Array<string>;
  masteryLevel: bigint;
  numSetsCompleted: bigint;
  puuid: string;
}

export interface LolStatstonesStatstoneNotificationDto {
  best: bigint;
  delta: bigint;
  isNewBest: boolean;
  level: bigint;
  puuid: string;
  statstoneId: string;
  value: bigint;
}

export interface LolStatstonesStatstoneNotificationEnvelopeDto {
  gameId: bigint;
  milestones: Array<LolStatstonesMilestoneNotificationDto>;
  updates: Array<LolStatstonesStatstoneNotificationDto>;
}

export interface LolStatstonesStatstonePlayerRecord {
  dateAcquired: string;
  dateArchived: string;
  dateCompleted: string;
  dateModified: string;
  entitled: boolean;
  milestoneLevel: bigint;
  personalBest: bigint;
  puuid: string;
  statstoneId: string;
  value: bigint;
}

export interface LolStatstonesStatstoneProgress {
  best: bigint;
  category: string;
  delta: string;
  description: string;
  existingProgressPercent: string;
  imageUrl: string;
  isNewBest: boolean;
  level: bigint;
  newMilestoneDifference: string;
  newProgressPercent: string;
  nextMilestone: string;
  statstoneId: string;
  statstoneName: string;
  value: string;
}

export interface LolStatstonesStatstoneRekindledVignette {
  portraitPath: string;
  statstone: LolStatstonesStatstoneCompletion;
}

export interface LolStatstonesStatstoneSet {
  inventoryType: string;
  itemId: bigint;
  itemInstanceID: string;
  milestonesPassed: bigint;
  name: string;
  ownedFromPacks: Array<LolStatstonesGameDataStatstonePack>;
  prices: Array<LolStatstonesPriceInfo>;
  statstones: Array<LolStatstonesStatstone>;
  stonesOwned: bigint;
  subInventoryType: string;
}

export interface LolStatstonesStatstoneSetCompleteVignette {
  statstones: Array<LolStatstonesStatstoneCompletion>;
}

export interface LolStatstonesStatstoneVignetteNotificationEnvelopeDto {
  champId: bigint;
  champName: string;
  masteryVignetteNotifications: Array<LolStatstonesStatstoneMasteryVignette>;
  rekindledVignetteNotifications: Array<LolStatstonesStatstoneRekindledVignette>;
  setCompleteVignetteNotifications: Array<LolStatstonesStatstoneSetCompleteVignette>;
}

export interface LolStatstonesSummoner {
  displayName: string;
  puuid: string;
  summonerId: bigint;
}

export interface LolStoreAccessTokenResource {
  expiry: bigint;
  scopes: Array<string>;
  token: string;
}

export interface LolStoreAllSummonerData {
  summoner: LolStoreSummoner;
  summonerLevelAndPoints: LolStoreSummonerLevelAndPoints;
}

export interface LolStoreBundleItemDTO {
  description: string;
  discountedRp: bigint;
  iconUrl: string;
  inventoryType: string;
  ip: bigint;
  itemId: bigint;
  name: string;
  owned: boolean;
  quantity: bigint;
  rp: bigint;
}

export interface LolStoreBundled {
  flexible: boolean;
  items: Array<LolStoreBundledItem>;
  minimumPrices: Array<LolStoreBundledItemCost>;
}

export interface LolStoreBundledItem {
  discountPrices: Array<LolStoreBundledItemCost>;
  inventoryType: string;
  itemId: bigint;
  quantity: bigint;
}

export interface LolStoreBundledItemCost {
  cost: bigint;
  costType: string;
  currency: string;
  discount: number;
}

export interface LolStoreCapOffer {
  active: boolean;
  createdDate: string;
  id: string;
  label: string;
  merchantId: string;
  payload: Array<LolStoreCapOfferPayloadEntry>;
  productId: string;
  startDate: string;
  typeId: string;
}

export interface LolStoreCapOfferPayloadEntry {
  fulfillmentTypeId: string;
  inventoryTypeUUID: string;
  itemInstanceId: string;
  itemPriceMap: bigint | undefined;
}

export interface LolStoreCatalogInstanceToItemKeyMap {
  platformIds: LolStoreItemKey | undefined;
}

export interface LolStoreCatalogItem {
  active: boolean;
  bundled: LolStoreBundled;
  iconUrl: string;
  inactiveDate: string;
  inventoryType: string;
  itemId: bigint;
  itemInstanceId: string;
  itemRequirements: Array<LolStoreItemKey>;
  localizations: LolStoreItemLocalization | undefined;
  maxQuantity: bigint;
  metadata: Array<LolStoreItemMetadataEntry>;
  offerId: string;
  prices: Array<LolStoreItemCost>;
  releaseDate: string;
  sale: LolStoreSale;
  subInventoryType: string;
  tags: Array<string>;
}

export interface LolStoreFeaturedPageDTO {
  Player: LolStorePlayer;
}

export interface LolStoreGetPlatformIdsFromInstanceIdsRequest {
  instanceIds: Array<string>;
}

export interface LolStoreGiftableResult {
  config: LolStoreGiftingConfig;
  friends: Array<LolStoreGiftingFriend>;
}

export interface LolStoreGiftingConfig {
  giftingHextecMaxDailyGiftsReceive: bigint;
  giftingHextechMaxDailyGiftsSend: bigint;
  giftingItemMaxDailyGiftsReceive: bigint;
  giftingItemMaxDailyGiftsSend: bigint;
  giftingItemMinLevelSend: bigint;
  giftingRestrictionFlagRioter: bigint;
  giftingRpMaxDailyGiftsReceive: bigint;
  giftingRpMaxDailyGiftsSend: bigint;
  giftingRpMinLevelSend: bigint;
  recipientLevelLimitItem: bigint;
  recipientLevelLimitRp: bigint;
  requiresIdentityVerification: boolean;
}

export interface LolStoreGiftingFriend {
  friendsSince: string;
  nick: string;
  oldFriends: boolean;
  summonerId: bigint;
}

export interface LolStoreItemCost {
  cost: bigint;
  currency: string;
  discount: number;
}

export interface LolStoreItemKey {
  inventoryType: string;
  itemId: bigint;
}

export interface LolStoreItemLocalization {
  description: string;
  language: string;
  name: string;
}

export interface LolStoreItemMetadataEntry {
  type: string;
  value: string;
}

export interface LolStoreItemSale {
  active: boolean;
  id: bigint;
  item: LolStoreItemKey;
  sale: LolStoreSale;
}

export interface LolStoreLoginDataPacket {
  allSummonerData: LolStoreAllSummonerData;
  simpleMessages: Array<LolStoreSimpleDialogMessage>;
}

export interface LolStoreLoginSession {
  accountId: bigint;
  gasToken: boolean | undefined;
  idToken: string;
  state: LolStoreLoginSessionStates;
  summonerId: bigint;
}

export type LolStoreLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolStoreNotification {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  dismissible: boolean;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolStoreOrderNotificationResource {
  eventType: string;
  eventTypeId: string;
  id: bigint;
  status: string;
}

export interface LolStorePageDTO {
  Player: LolStorePlayer;
  catalog: Array<LolStoreCatalogItem>;
  groupOrder: Array<string>;
  itemGroups: LolStorePageGroupingDTO | undefined;
}

export interface LolStorePageGroupingDTO {
  grouped: boolean;
  hidden: boolean;
  items: Array<LolStoreItemKey>;
}

export interface LolStorePlayer {
  accountId: bigint;
  ip: bigint;
  rp: bigint;
  summonerLevel: bigint;
}

export interface LolStoreRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface LolStoreSale {
  endDate: string;
  prices: Array<LolStoreItemCost>;
  startDate: string;
}

export interface LolStoreServiceBalance {
  amount: bigint;
  currency: string;
}

export interface LolStoreServiceWallet {
  accountId: bigint;
  balances: Array<LolStoreServiceBalance>;
}

export interface LolStoreSimpleDialogMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolStoreStoreStatus {
  storefrontIsRunning: boolean;
}

export interface LolStoreSummoner {
  acctId: bigint;
  sumId: bigint;
}

export interface LolStoreSummonerLevelAndPoints {
  summonerLevel: bigint;
}

export interface LolStoreWallet {
  ip: bigint;
  rp: bigint;
}

export interface LolSuggestedPlayersEndOfGamePlayer {
  summonerId: bigint;
  summonerName: string;
}

export interface LolSuggestedPlayersEndOfGameStats {
  teams: Array<LolSuggestedPlayersEndOfGameTeam>;
}

export interface LolSuggestedPlayersEndOfGameTeam {
  isWinningTeam: boolean;
  players: Array<LolSuggestedPlayersEndOfGamePlayer>;
}

export interface LolSuggestedPlayersSuggestedPlayersConfig {
  Enabled: boolean;
  FriendsOfFriendsEnabled: boolean;
  FriendsOfFriendsLimit: bigint;
  MaxNumReplacements: bigint;
  MaxNumSuggestedPlayers: bigint;
  OnlineFriendsLimit: bigint;
  PreviousPremadesLimit: bigint;
  VicoriousComradesLimit: bigint;
}

export interface LolSuggestedPlayersSuggestedPlayersDynamicClientConfig {
  SuggestedPlayers: LolSuggestedPlayersSuggestedPlayersConfig;
}

export interface LolSuggestedPlayersSuggestedPlayersFriend {
  availability: string;
  name: string;
  summonerId: bigint;
}

export interface LolSuggestedPlayersSuggestedPlayersKudoedPlayer {
  kudoedSummonerId: bigint;
  kudoedSummonerName: string;
}

export interface LolSuggestedPlayersSuggestedPlayersLobbyStatus {
  invitedSummonerIds: Array<bigint>;
  memberSummonerIds: Array<bigint>;
  queueId: bigint;
}

export interface LolSuggestedPlayersSuggestedPlayersPlayerStatus {
  currentLobbyStatus: LolSuggestedPlayersSuggestedPlayersLobbyStatus;
  lastQueuedLobbyStatus: LolSuggestedPlayersSuggestedPlayersLobbyStatus;
}

export interface LolSuggestedPlayersSuggestedPlayersQueue {
  id: bigint;
  minLevel: bigint;
}

export type LolSuggestedPlayersSuggestedPlayersReason =
  | "PreviousPremade"
  | "OnlineFriend"
  | "FriendOfFriend"
  | "VictoriousComrade"
  | "LegacyPlayAgain";

export interface LolSuggestedPlayersSuggestedPlayersReportedPlayer {
  reportedSummonerId: bigint;
}

export interface LolSuggestedPlayersSuggestedPlayersSuggestedPlayer {
  commonFriendId: bigint;
  commonFriendName: string;
  reason: LolSuggestedPlayersSuggestedPlayersReason;
  summonerId: bigint;
  summonerName: string;
}

export interface LolSuggestedPlayersSuggestedPlayersSummoner {
  displayName: string;
  summonerId: bigint;
  summonerLevel: bigint;
}

export interface LolSuggestedPlayersSuggestedPlayersVictoriousComrade {
  summonerId: bigint;
  summonerName: string;
}

export interface LolSummonerAccountIdAndSummonerId {
  accountId: bigint;
  summonerId: bigint;
}

export interface LolSummonerAutoFillQueueDto {
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForStreaking: boolean;
  queueId: bigint;
}

export interface LolSummonerGameloopPlayerInfoV2 {
  autoFillDataBags: Array<LolSummonerAutoFillQueueDto>;
  rerollDataBags: Array<LolSummonerRerollDataBagForClientV1>;
}

export interface LolSummonerLevelField {
  finalLevel: bigint;
  initialLevel: bigint;
  progress: LolSummonerLevelProgression;
}

export interface LolSummonerLevelProgression {
  finalLevelBoundary: bigint;
  finalXp: bigint;
  initialLevelBoundary: bigint;
  initialXp: bigint;
}

export interface LolSummonerLoginSession {
  accountId: bigint;
  connected: boolean;
  puuid: string;
  state: LolSummonerLoginSessionStates;
  summonerId: bigint;
}

export type LolSummonerLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolSummonerProfilePrivacy {
  enabledState: LolSummonerProfilePrivacyEnabledState;
  setting: LolSummonerProfilePrivacySetting;
}

export type LolSummonerProfilePrivacyEnabledState = "UNKNOWN" | "ENABLED" | "DISABLED";

export type LolSummonerProfilePrivacySetting = "PRIVATE" | "PUBLIC";

export interface LolSummonerRerollDataBagForClientV1 {
  maximumRerolls: bigint;
  pointCostOfReroll: bigint;
  pointsUntilNextReroll: bigint;
  queueId: bigint;
  rerollCount: bigint;
  totalPoints: bigint;
}

export interface LolSummonerStatus {
  ready: boolean;
}

export interface LolSummonerSummoner {
  accountId: bigint;
  displayName: string;
  internalName: string;
  nameChangeFlag: boolean;
  percentCompleteForNextLevel: bigint;
  privacy: LolSummonerProfilePrivacySetting;
  profileIconId: bigint;
  puuid: string;
  rerollPoints: LolSummonerSummonerRerollPoints;
  summonerId: bigint;
  summonerLevel: bigint;
  unnamed: boolean;
  xpSinceLastLevel: bigint;
  xpUntilNextLevel: bigint;
}

export interface LolSummonerSummonerCacheData {
  privacy: LolSummonerProfilePrivacySetting;
  summoner: LolSummonerSummoner;
  summonerIcon: bigint;
  summonerName: string;
}

export interface LolSummonerSummonerCreateRequest {
  summonerName: string;
}

export interface LolSummonerSummonerCreatedId {
  summonerId: bigint;
}

export interface LolSummonerSummonerDTO {
  accountId: bigint;
  expPoints: bigint;
  expToNextLevel: bigint;
  id: bigint;
  level: bigint;
  name: string;
  nameChangeFlag: boolean;
  partnerId: string;
  privacy: LolSummonerProfilePrivacySetting;
  profileIconId: bigint;
  puuid: string;
  unnamed: boolean;
}

export interface LolSummonerSummonerIcon {
  inventoryToken: string;
  profileIconId: bigint;
}

export interface LolSummonerSummonerIdAndIcon {
  profileIconId: bigint;
  summonerId: bigint;
}

export interface LolSummonerSummonerIdAndName {
  displayName: string;
  summonerId: bigint;
}

export interface LolSummonerSummonerProfileUpdate {
  inventory: string;
  key: string;
  value: boolean | undefined;
}

export interface LolSummonerSummonerRequestedName {
  name: string;
}

export interface LolSummonerSummonerRerollPoints {
  currentPoints: bigint;
  maxRolls: bigint;
  numberOfRolls: bigint;
  pointsCostToRoll: bigint;
  pointsToReroll: bigint;
}

export interface LolSummonerSummonerSession {
  displayName: string;
  isNewPlayer: boolean;
  summonerId: bigint;
}

export interface LolSummonerXpAndLevelMessage {
  level: LolSummonerLevelField;
  xp: boolean | undefined;
}

export interface LolTastesDataModelResponse {
  modelData: boolean | undefined;
  responseCode: bigint;
}

export interface LolTftLolTftHubFooterColors {
  bottomColor: string;
  lineColor: string;
  topColor: string;
}

export interface LolTftLolTftStorePromos {
  battlePassOfferIds: Array<string>;
  storePromoOfferIds: Array<string>;
  tacticianPromoOfferIds: Array<string>;
}

export interface LolTrophiesCapClashTrophyEntitlementPayload {
  rewardSpec: LolTrophiesClashV2TrophyRewardSpec;
  rewardType: string;
}

export interface LolTrophiesClashV2TrophyRewardSpec {
  bracket: string;
  cup: string;
  gem: string;
  pedestal: string;
  seasonId: string;
  theme: string;
  tier: string;
}

export interface LolTrophiesInventoryItemsByType {
  TOURNAMENT_TROPHY: Array<LolTrophiesTournamentTrophyInventoryItem>;
}

export interface LolTrophiesInventoryResponse {
  items: LolTrophiesInventoryItemsByType;
}

export interface LolTrophiesLoadout {
  id: string;
  loadout: LolTrophiesLoadoutItem | undefined;
  name: string;
  scope: string;
}

export interface LolTrophiesLoadoutItem {
  data: string | undefined;
  inventoryType: string;
  itemId: bigint;
}

export interface LolTrophiesOtherPlayerTrophyInventoryItem {
  inventoryType: string;
  itemId: bigint;
  payload: LolTrophiesCapClashTrophyEntitlementPayload;
  purchaseDate: string;
  uuid: string;
}

export interface LolTrophiesTournamentTrophyInventoryItem {
  payload: LolTrophiesCapClashTrophyEntitlementPayload;
  purchaseDate: string;
}

export interface LolTrophiesTrophyProfileData {
  bracket: bigint;
  cup: string;
  gem: string;
  pedestal: string;
  seasonId: bigint;
  theme: string;
  tier: bigint;
}

export type LolUserExperienceGameflowPhase =
  | "None"
  | "Lobby"
  | "Matchmaking"
  | "CheckedIntoTournament"
  | "ReadyCheck"
  | "ChampSelect"
  | "GameStart"
  | "FailedToLaunch"
  | "InProgress"
  | "Reconnect"
  | "WaitingForStats"
  | "PreEndOfGame"
  | "EndOfGame"
  | "TerminatedInError";

export interface LolUserExperienceGameflowSession {
  phase: LolUserExperienceGameflowPhase;
}

export interface LolWorldsTokenCardAccountIdAndSummonerId {
  summonerId: bigint;
}

export interface LolWorldsTokenCardInventoryItem {
  inventoryType: string;
  itemId: bigint;
  ownershipType: LolWorldsTokenCardItemOwnershipType;
  purchaseDate: string;
  quantity: bigint;
  uuid: string;
}

export type LolWorldsTokenCardItemOwnershipType = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolWorldsTokenCardLootDataGdsResource {
  LootTokenBankCards: Array<LolWorldsTokenCardLootTokenBankCardGdsResource>;
}

export interface LolWorldsTokenCardLootTokenBankCardGdsResource {
  activationDate: string;
  backsplashImagePath: string;
  buttonText: string;
  deactivationDate: string;
  lootItemName: string;
  nonPremiumCapCurrencyId: string;
  premiumCapCurrencyId: string;
  storeLinkItem: string;
  storeLinkType: string;
  titleText: string;
  tokenIconPath: string;
  tooltipDescriptionText: string;
  tooltipSplashPath: string;
  tooltipTitleText: string;
  unlockItemId: string;
  unlockItemType: string;
}

export interface LolWorldsTokenCardTokenUpsell {
  backgroundUrl: string;
  buttonText: string;
  currencyUrl: string;
  currentlyLocked: LolWorldsTokenCardTokenUpsellLockedType;
  dependentInventoryId: bigint;
  dependentInventoryType: string;
  endDate: string;
  id: string;
  internalName: string;
  lockedCount: bigint;
  premiumCurrencyName: string;
  purchaseUrl: string;
  startDate: string;
  title: string;
  tooltipBackgroundUrl: string;
  tooltipDescription: string;
  tooltipTitle: string;
}

export type LolWorldsTokenCardTokenUpsellLockedType = "UNASSIGNED" | "UNLOCKED" | "LOCKED";

export interface LootItemClientDTO {
  asset: string;
  displayCategories: string;
  expiryTime: bigint;
  lootName: string;
  rarity: string;
  rentalGames: bigint;
  rentalSeconds: bigint;
  storeItemId: bigint;
  tags: string;
  type: string;
  upgradeLootName: string;
  value: bigint;
}

export interface LootItemListClientDTO {
  lastUpdate: bigint;
  lootItems: Array<LootItemClientDTO>;
}

export interface LootLcdsClientConfigurationDTO {
  currenciesUsingCapWallets: Array<string>;
  disabledRedemptions: Array<string>;
  lootItemsUsingBreakoutRecipeMenu: Array<string>;
  lootMaterialsToAlwaysRender: Array<string>;
}

export interface LootLcdsLootDescriptionDTO {
  childLootTableNames: Array<string>;
  localizationLongDescriptionMap: string | undefined;
  localizationMap: string | undefined;
  lootName: string;
}

export interface LootLcdsRecipeClientDTO {
  crafterName: string;
  displayCategories: string;
  metadata: LootLcdsRecipeMetadata;
  outputs: Array<LootLcdsRecipeOutputDTO>;
  recipeName: string;
  slots: Array<LootLcdsRecipeSlotClientDTO>;
  type: string;
}

export interface LootLcdsRecipeListClientDTO {
  lastUpdate: bigint;
  recipes: Array<LootLcdsRecipeClientDTO>;
}

export interface LootLcdsRecipeMetadata {
  bonusDescriptions: Array<LootLcdsLootDescriptionDTO>;
  guaranteedDescriptions: Array<LootLcdsLootDescriptionDTO>;
  tooltipsDisabled: boolean;
}

export interface LootLcdsRecipeOutputDTO {
  allowDuplicates: boolean;
  lootName: string;
  probability: number;
  quantityExpression: string;
}

export interface LootLcdsRecipeSlotClientDTO {
  quantityExpression: string;
  query: string;
  slotNumber: bigint;
}

export interface LootLedgerRecipeConfigMap {
  lastUpdate: bigint;
  lootLedgerRecipeDTOMap: LootLedgerRecipeConfiguration | undefined;
}

export interface LootLedgerRecipeConfiguration {
  activationTime: string;
  active: boolean;
  counterUuids: Array<string>;
  deactivationTime: string;
  ledgerUuid: string;
  recipeName: string;
}

export interface LootNameRefId {
  lootName: string;
  refId: string;
}

export interface LootOddsDTO {
  children: Array<LootOddsDTO>;
  dropRate: number;
  label: string;
  lootId: string;
  lootOrder: bigint;
  parentId: string;
  quantity: bigint;
}

export interface LootSimpleDialogMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface MatchedPlayerDTO {
  captain: PlayerInfoDTO;
  players: Array<PlayerInfoDTO>;
  rosterId: string;
}

export interface MatchmakingLcdsBustedLeaver {
  accessToken: string;
  leaverPenaltyMillisRemaining: bigint;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsFailedJoinPlayer {
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsGameDTO {
  gameState: string;
  statusOfParticipants: string;
  teamOne: Array<MatchmakingLcdsPlayerParticipant>;
  teamTwo: Array<MatchmakingLcdsPlayerParticipant>;
  terminatedCondition: string;
}

export interface MatchmakingLcdsGameNotification {
  messageArgument: string;
  messageCode: string;
  type: string;
}

export interface MatchmakingLcdsMatchMakerParams {
  botDifficulty: string;
  invitationId: string;
  languages: string;
  lastMaestroMessage: string;
  queueIds: Array<bigint>;
  team: Array<bigint>;
  teamId: bigint;
}

export interface MatchmakingLcdsMatchMakerPayload {
  LEAVER_BUSTER_ACCESS_TOKEN: string;
}

export interface MatchmakingLcdsPlayerParticipant {
  summonerId: bigint;
}

export interface MatchmakingLcdsQueueDisabled {
  message: string;
  queueId: bigint;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsQueueDodger {
  dodgePenaltyRemainingTime: bigint;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsQueueInfo {
  queueId: bigint;
  waitTime: bigint;
}

export interface MatchmakingLcdsQueueRestricted {
  message: string;
  queueId: bigint;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsQueueThrottled {
  message: string;
  queueId: bigint;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsSearchingForMatchNotification {
  joinedQueues: Array<MatchmakingLcdsQueueInfo>;
  playerJoinFailures: Array<boolean | undefined>;
}

export interface MatchmakingLcdsSummoner {
  name: string;
  sumId: bigint;
}

export interface MemberBanUnbanTournament {
  tournamentId: bigint;
  tournamentPhaseLockInTime: bigint;
  tournamentnameLocKey: string;
  tournamentnameLocKeySecondary: string;
}

export type MetricDataType = "unknown" | "int" | "uint" | "float" | "bool" | "string";

export interface MetricMetadata {
  alerts: Array<MetricMetadataAlert>;
  category: string;
  data_type: MetricDataType;
  description: string;
  destination: string;
  info: string;
  notify: MetricMetadataNotify;
  period: bigint;
  pretty_name: string;
  priority: MetricPriority;
  sample_window_ms: bigint;
  transientAggregation: AggregationType;
  type: MetricType;
  units: string;
}

export interface MetricMetadataAlert {
  description: string;
  info: string;
  level: string;
  max: number;
  min: number;
  notify: MetricMetadataNotify;
  pretty_name: string;
}

export interface MetricMetadataHipchatNotification {
  roomid: string;
  tags: string;
}

export interface MetricMetadataNotify {
  email: Array<string>;
  hipchat: Array<MetricMetadataHipchatNotification>;
  pagerduty: Array<MetricMetadataPagerDutyNotification>;
}

export interface MetricMetadataPagerDutyNotification {
  apikey: string;
}

export type MetricPriority = "low" | "medium" | "high";

export type MetricType = "unknown" | "percentage" | "count" | "duration" | "rate";

export interface MissionAlertDTO {
  alertTime: bigint;
  message: string;
  type: string;
}

export interface MissionDisplay {
  attributes: Array<string>;
  locations: Array<string>;
}

export interface MissionMetadata {
  level: bigint;
  npeRewardPack: NpeRewardPackMetadata;
  tutorial: TutorialMetadata;
}

export interface MissionProgressDTO {
  currentProgress: bigint;
  lastViewedProgress: bigint;
  totalCount: bigint;
}

export interface MissionRequirementDTO {
  expression: string;
}

export interface MissionsCompressedPayloadDTO {
  missionsCompressed: string;
}

export interface MultipleReplayMetadataRequestV2 {
  gameIds: Array<bigint>;
  platformId: string;
}

export interface MultipleReplayMetadataResponseItemV2 {
  gameId: bigint;
  metadata: ReplayMetadataV2;
  status: ReplayResponseStatus;
}

export interface MultipleReplayMetadataResponseV2 {
  metadataResponses: Array<MultipleReplayMetadataResponseItemV2>;
}

export interface NonTimingEventV1 {
  eventName: string;
  unit: string;
  value: string;
  when: bigint;
}

export interface NpeReward {
  data: boolean | undefined;
  renderer: string;
}

export interface NpeRewardPackMetadata {
  index: bigint;
  majorReward: NpeReward;
  minorRewards: Array<NpeReward>;
  premiumReward: boolean;
  rewardKey: string;
}

export interface OpenedTeamDTO {
  captainId: bigint;
  invitationId: string;
  invitees: Array<PendingRosterInviteeDTO>;
  logo: bigint;
  logoColor: bigint;
  members: Array<OpenedTeamMemberDTO>;
  name: string;
  openPositions: Array<Position>;
  shortName: string;
  tier: bigint;
}

export interface OpenedTeamMemberDTO {
  friendship: bigint;
  playerId: bigint;
  position: Position;
  tier: bigint;
}

export interface PartiesVoiceDTO {
  jwt: string;
}

export interface PatcherChunkingPatcherEnvironment {
  client_patcher_available: boolean;
  client_patcher_enabled: boolean;
  game_patcher_available: boolean;
  game_patcher_enabled: boolean;
}

export interface PatcherComponentActionProgress {
  currentItem: string;
  network: PatcherComponentStateProgress;
  primaryWork: PatcherComponentStateWorkType;
  total: PatcherComponentStateProgress;
}

export interface PatcherComponentState {
  action: PatcherComponentStateAction;
  id: string;
  isCorrupted: boolean;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  progress: PatcherComponentActionProgress;
  timeOfLastUpToDateCheckISO8601: string;
}

export type PatcherComponentStateAction =
  | "Idle"
  | "CheckingForUpdates"
  | "Patching"
  | "Repairing"
  | "Migrating";

export interface PatcherComponentStateProgress {
  bytesComplete: bigint;
  bytesPerSecond: number;
  bytesRequired: bigint;
}

export type PatcherComponentStateWorkType = "Scanning" | "Network" | "Disk";

export interface PatcherNotification {
  data: boolean | undefined | undefined;
  id: string;
  notificationId: PatcherNotificationId;
}

export type PatcherNotificationId =
  | "UnspecifiedError"
  | "ConnectionError"
  | "MissingFilesError"
  | "FailedToWriteError"
  | "WillRestoreClientBackupOnRestart"
  | "DidRestoreClientBackup"
  | "NotEnoughDiskSpace"
  | "BrokenPermissions";

export interface PatcherP2PStatus {
  isAllowedByUser: boolean;
  isEnabledForPatchline: boolean;
  requiresRestart: boolean;
}

export interface PatcherP2PStatusUpdate {
  isAllowedByUser: boolean;
}

export interface PatcherProductResource {
  id: string;
}

export interface PatcherProductState {
  action: PatcherComponentStateAction;
  components: Array<PatcherComponentState>;
  id: string;
  isCorrupted: boolean;
  isStopped: boolean;
  isUpToDate: boolean;
  isUpdateAvailable: boolean;
  percentPatched: number;
}

export interface PatcherStatus {
  connectedToPatchServer: boolean;
  hasUpdatesOnRestart: boolean;
  successfullyInstalledVersion: bigint;
  willRestartOnSelfUpdate: boolean;
}

export interface PatcherUxResource {
  visible: boolean;
}

export interface PaymentsFrontEndRequest {
  game: string;
  gifteeAccountId: string;
  gifteeMessage: string;
  isPrepaid: boolean;
  localeId: string;
  rsoToken: string;
  summonerLevel: bigint;
  usePmcSessions: boolean;
}

export interface PaymentsFrontEndResult {
  url: string;
}

export interface PaymentsPMCStartUrlRequest {
  game: string;
  gifteeAccountId: string;
  gifteeMessage: string;
  isPrepaid: boolean;
  localeId: string;
  summonerLevel: bigint;
}

export interface PaymentsPMCStartUrlResult {
  createdAt: string;
  id: string;
  localeId: string;
  playerFacingId: string;
  pmcStartUrl: string;
  summonerLevel: bigint;
  userId: string;
}

export interface PendingOpenedTeamDTO {
  invitationId: string;
  logo: bigint;
  logoColor: bigint;
  name: string;
  shortName: string;
  tier: bigint;
}

export interface PendingRosterDTO {
  captainId: bigint;
  highTierVariance: boolean;
  invitationId: string;
  inviteFaileds: Array<FailedInvite>;
  invitees: Array<PendingRosterInviteeDTO>;
  lft: boolean;
  logo: bigint;
  logoColor: bigint;
  members: Array<PendingRosterMemberDTO>;
  multiUserChatJWT: string;
  name: string;
  rewardLogos: Array<RewardLogo>;
  shortName: string;
  ticketOffers: Array<TicketOfferDTO>;
  tier: bigint;
  tournamentId: bigint;
  version: bigint;
}

export interface PendingRosterInviteeDTO {
  inviteTime: bigint;
  inviteType: InviteType;
  inviteeId: bigint;
  inviteeState: PendingRosterInviteeState;
  inviter: bigint;
}

export type PendingRosterInviteeState =
  | "SUGGESTED"
  | "PENDING"
  | "DECLINED"
  | "REVOKED"
  | "SUGGEST_DECLINED"
  | "SUGGEST_REVOKED"
  | "ACCEPTED"
  | "SELFJOIN"
  | "SELFJOIN_DECLINED"
  | "SELFJOIN_REVOKED";

export interface PendingRosterMemberDTO {
  bet: bigint;
  betType: TicketType;
  joinTime: bigint;
  memberState: PendingRosterMemberState;
  pendingPay: bigint;
  pendingPremiumPay: bigint;
  playerId: bigint;
  position: Position;
  selfBet: bigint;
  tier: bigint;
}

export type PendingRosterMemberState = "NOT_READY" | "FORCED_NOT_READY" | "READY" | "LEFT" | "KICK";

export interface PersonalizedOffersLcdsChampionDTO {
  championId: bigint;
  owned: boolean;
}

export interface PersonalizedOffersLcdsChampionSkinDTO {
  championId: bigint;
  owned: boolean;
  skinId: bigint;
}

export interface PersonalizedOffersLcdsClientDynamicConfigurationNotification {
  configs: string;
  delta: boolean;
}

export interface PersonalizedOffersStoreFulfillmentNotification {
  data: boolean | undefined;
  inventoryType: string;
}

export interface PhaseInMember {
  bet: bigint;
  pendingPay: bigint;
  playerId: bigint;
  selfBet: bigint;
}

export interface PhaseRosterDTO {
  bracketDTO: Bracket;
  bracketId: bigint;
  checkinTime: bigint;
  period: bigint;
  phaseId: bigint;
  phaseRosterSubs: Array<PhaseRosterSubDTO>;
}

export interface PhaseRosterSubDTO {
  bet: bigint;
  betType: TicketType;
  pay: bigint;
  playerId: bigint;
  position: Position;
  premiumPay: bigint;
  replacedPlayerId: bigint;
  subState: SubState;
  tier: bigint;
}

export type PickModes = "NOT_PICKING" | "IN_PROGRESS" | "DONE";

export interface PlayerBehaviorLcdsForcedClientShutdown {
  additionalInfo: string;
  reason: string;
}

export interface PlayerBehaviorLcdsSimpleMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface PlayerBehaviorSimpleMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface PlayerDTO {
  banned: boolean;
  lft: boolean;
  notifications: Array<ClashOfflineNotification>;
  primaryPos: string;
  secondaryPos: string;
  tmntLosses: bigint;
  tmntWins: bigint;
}

export interface PlayerFinderDTO {
  friendId: bigint;
  playerId: bigint;
  primaryPos: Position;
  secondaryPos: Position;
  tier: bigint;
  type: PlayerFinderEnum;
}

export type PlayerFinderEnum = "FREEAGENT" | "FRIEND";

export interface PlayerInfoDTO {
  playerId: bigint;
  position: string;
  role: Role;
  teamId: string;
}

export interface PlayerInventory {
  champions: Array<bigint>;
  icons: Array<bigint>;
  inventoryJwts: Array<string>;
  skins: Array<bigint>;
  wardSkins: Array<bigint>;
}

export interface PlayerLootDTO {
  count: bigint;
  expiryTime: bigint;
  lootName: string;
  refId: string;
}

export interface PlayerLootDefinitionsDTO {
  lootItemList: LootItemListClientDTO;
  playerLoot: Array<PlayerLootDTO>;
  queryResult: QueryResultDTO;
  recipeList: LootLcdsRecipeListClientDTO;
}

export interface PlayerLootResultDTO {
  added: Array<PlayerLootDTO>;
  details: string;
  redeemed: Array<string>;
  removed: Array<PlayerLootDTO>;
  status: string;
}

export interface PlayerMissionDTO {
  backgroundImageUrl: string;
  celebrationType: string;
  clientNotifyLevel: string;
  completedDate: bigint;
  completionExpression: string;
  cooldownTimeMillis: bigint;
  description: string;
  display: MissionDisplay;
  displayType: string;
  earnedDate: bigint;
  endTime: bigint;
  expiringWarnings: Array<MissionAlertDTO>;
  helperText: string;
  iconImageUrl: string;
  id: string;
  internalName: string;
  isNew: boolean;
  lastUpdatedTimestamp: bigint;
  locale: string;
  media: string | undefined;
  metadata: MissionMetadata;
  missionType: string;
  objectives: Array<PlayerMissionObjectiveDTO>;
  requirements: Array<string>;
  rewardStrategy: RewardStrategy;
  rewards: Array<PlayerMissionRewardDTO>;
  sequence: bigint;
  seriesName: string;
  startTime: bigint;
  status: string;
  title: string;
  viewed: boolean;
}

export interface PlayerMissionEligibilityData {
  level: bigint;
  loyaltyEnabled: boolean;
  playerInventory: PlayerInventory;
  userInfoToken: string;
}

export interface PlayerMissionObjectiveDTO {
  description: string;
  hasObjectiveBasedReward: boolean;
  progress: MissionProgressDTO;
  requirements: Array<string>;
  rewardGroups: Array<string>;
  sequence: bigint;
  status: string;
  type: string;
}

export interface PlayerMissionRewardDTO {
  description: string;
  iconNeedsFrame: boolean;
  iconUrl: string;
  isObjectiveBasedReward: boolean;
  itemId: string;
  media: string | undefined;
  quantity: bigint;
  rewardFulfilled: boolean;
  rewardGroup: string;
  rewardGroupSelected: boolean;
  rewardType: string;
  sequence: bigint;
  smallIconUrl: string;
  uniqueName: string;
}

export interface PlayerNotificationsPlayerNotificationConfigResource {
  ExpirationCheckFrequency: bigint;
}

export interface PlayerNotificationsPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  dismissible: boolean;
  expires: string;
  iconUrl: string;
  id: bigint;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface PlayerNotificationsRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export interface PlayerParticipant {
  summonerId: bigint;
}

export interface PlayerRosterHistoryDTO {
  rosters: Array<RosterMemberDTO>;
}

export interface PlayerTierDTO {
  playerId: bigint;
  primaryPos: Position;
  secondPos: Position;
  tier: bigint;
}

export interface PluginDescriptionResource {
  name: string;
  pluginDependencies: string | undefined;
  riotMeta: PluginMetadataResource;
  version: string;
}

export interface PluginLcdsEvent {
  body: boolean | undefined;
  clientId: string;
  subtopic: string;
  typeName: string;
}

export interface PluginLcdsResponse {
  body: boolean | undefined;
  typeName: string;
}

export interface PluginManagerResource {
  state: PluginManagerState;
}

export type PluginManagerState = "NotReady" | "PluginsInitialized";

export interface PluginMetadataResource {
  app: string;
  feature: string;
  globalAssetBundles: Array<string>;
  hasBundledAssets: boolean;
  implements: string | undefined;
  mock: string;
  perLocaleAssetBundles: boolean | undefined | undefined;
  subtype: string;
  threading: PluginThreadingModel;
  type: string;
}

export interface PluginRegionLocaleChangedEvent {
  locale: string;
  region: string;
}

export interface PluginResource {
  app: string;
  assetBundleNames: Array<string>;
  dependencies: Array<PluginResourceContract>;
  feature: string;
  fullName: string;
  implementedContracts: Array<PluginResourceContract>;
  mountedAssetBundles: string | undefined;
  orderWADFileMounted: bigint;
  shortName: string;
  subtype: string;
  supertype: string;
  threadingModel: string;
  version: string;
}

export interface PluginResourceContract {
  fullName: string;
  version: string;
}

export interface PluginResourceEvent {
  data: boolean | undefined;
  eventType: PluginResourceEventType;
  uri: string;
}

export type PluginResourceEventType = "Create" | "Update" | "Delete";

export interface PluginServiceProxyResponse {
  error: string;
  methodName: string;
  payload: string;
  serviceName: string;
  status: string;
  uuid: string;
}

export type PluginThreadingModel = "dedicated" | "sequential" | "concurrent" | "parallel";

export type Position = "TOP" | "MIDDLE" | "BOTTOM" | "JUNGLE" | "UTILITY" | "FILL" | "UNSELECTED";

export interface ProcessControlProcess {
  "restart-countdown-seconds": number;
  status: string;
}

export interface PublicPhaseSubDTO {
  playerId: bigint;
  replacedPlayerId: bigint;
}

export interface PublicPhaseSubsDTO {
  phaseId: bigint;
  phaseSubs: Array<PublicPhaseSubDTO>;
}

export interface PublicRosterDTO {
  id: bigint;
  logo: bigint;
  logoColor: bigint;
  memberIds: Array<bigint>;
  name: string;
  phasesSubs: Array<PublicPhaseSubsDTO>;
  shortName: string;
  tournamentId: bigint;
}

export interface Punishment {
  permaBan: boolean;
  playerFacingMessage: string;
  punishedForChatLogs: Array<string>;
  punishedForGameIds: Array<bigint>;
  punishedUntilDateMillis: bigint;
  punishmentLengthGames: bigint;
  punishmentLengthMillis: bigint;
  punishmentReason: string;
  punishmentType: string;
}

export interface QueryResultDTO {
  lastUpdate: bigint;
  queryToLootNames: boolean | undefined;
}

export interface RankedScoutingDTO {
  playerId: bigint;
  topMasteries: Array<ChampionMasteryPublicDTO>;
  topSeasonChampions: Array<ChampionScoutingDTO>;
  totalMasteryScore: bigint;
}

export interface RankedScoutingMemberDTO {
  championScoutingData: Array<RankedScoutingTopChampionDTO>;
  playerId: bigint;
}

export interface RankedScoutingTopChampionDTO {
  championId: bigint;
  gameCount: bigint;
  kda: number;
  rank: bigint;
  winCount: bigint;
}

export interface RedeemLootTransactionDTO {
  accountId: bigint;
  clientId: string;
  lootName: string;
  playerId: bigint;
  puuid: string;
}

export interface RegionLocale {
  locale: string;
  region: string;
  webLanguage: string;
  webRegion: string;
}

export type RemotingHelpFormat = "Full" | "Epytext" | "Brief" | "Console";

export type RemotingPrivilege = "None" | "User" | "Admin" | "Local";

export type RemotingSerializedFormat = "JSON" | "YAML" | "MsgPack";

export interface ReplayMetadataV2 {
  fileSize: bigint;
  gameVersion: string;
}

export type ReplayResponseStatus =
  | "OK"
  | "NOT_FOUND"
  | "EXPIRED"
  | "BAD_REQUEST"
  | "INTERNAL_SERVER_ERROR";

export interface RewardDetails {
  rosterId: bigint;
  teamMemberIds: Array<bigint>;
  tournamentId: bigint;
}

export interface RewardLogo {
  logo: bigint;
  memberOwnedCount: bigint;
}

export interface RewardStrategy {
  groupStrategy: string;
  selectMaxGroupCount: bigint;
  selectMinGroupCount: bigint;
}

export interface RiotMessagingServiceAcknowledgeBody {
  id: string;
}

export interface RiotMessagingServiceEntitlementsToken {
  accessToken: string;
  entitlements: Array<string>;
  issuer: string;
  subject: string;
  token: string;
}

export interface RiotMessagingServicePluginRegionLocaleChangedEvent {
  locale: string;
  region: string;
}

export interface RiotMessagingServiceSession {
  state: RiotMessagingServiceState;
  token: string;
  tokenType: RiotMessagingServiceTokenType;
}

export type RiotMessagingServiceState =
  | "Disconnecting"
  | "Disconnected"
  | "Connecting"
  | "Connected";

export type RiotMessagingServiceTokenType = "Unavailable" | "Access" | "Identity";

export interface RmsMessage {
  ackRequired: boolean;
  id: string;
  payload: string;
  resource: string;
  service: string;
  timestamp: bigint;
  version: string;
}

export type Role = "CAPTAIN" | "MEMBER" | "NONE";

export interface RosterAggregatedStatsDTO {
  periodStats: Array<RosterPeriodAggregatedStatsDTO>;
  playerStats: RosterPlayerAggregatedStatsDTO | undefined;
}

export interface RosterDTO {
  banned: boolean;
  captainId: bigint;
  dynamicState: RosterDynamicStateDTO;
  eliminated: boolean;
  id: bigint;
  invitationId: string;
  logo: bigint;
  logoColor: bigint;
  losses: bigint;
  members: Array<RosterMemberDTO>;
  multiUserChatJWT: string;
  name: string;
  phases: Array<PhaseRosterDTO>;
  points: bigint;
  shortName: string;
  tier: bigint;
  tournamentId: bigint;
  version: bigint;
  wins: bigint;
}

export interface RosterDynamicStateDTO {
  members: Array<PhaseInMember>;
  phaseCheckinStates: Array<bigint>;
  phaseRosterSubs: Array<PhaseRosterSubDTO>;
  rosterId: bigint;
  subbedMemberIds: Array<bigint>;
  ticketOffers: Array<TicketOfferDTO>;
  tournamentId: bigint;
  version: bigint;
  withdraw: RosterWithdraw;
}

export interface RosterMatchAggregatedStatsDTO {
  duration: bigint;
  gameId: bigint;
  kills: bigint;
  loserBracket: boolean;
  opponentKills: bigint;
  opponentLogo: bigint;
  opponentLogoColor: bigint;
  opponentShortName: string;
  playerChampionIds: bigint | undefined;
  round: bigint;
  win: boolean;
}

export interface RosterMemberDTO {
  bidType: TicketType;
  currentBid: bigint;
  joinTime: bigint;
  pendingPremiumSpend: bigint;
  pendingSpend: bigint;
  playerId: bigint;
  position: Position;
  rosterId: bigint;
  tier: bigint;
  tournamentId: bigint;
}

export interface RosterPeriodAggregatedStatsDTO {
  bracketSize: bigint;
  matchStats: Array<RosterMatchAggregatedStatsDTO>;
  period: bigint;
  playerBids: bigint | undefined;
  time: bigint;
}

export interface RosterPlayerAggregatedStatsDTO {
  rawStatsMax: bigint | undefined;
  rawStatsSum: bigint | undefined;
  sub: boolean;
}

export interface RosterStatsDTO {
  rosterId: bigint;
  rosterLogo: bigint;
  rosterLogoColor: bigint;
  rosterName: string;
  rosterShortName: string;
  scheduleEndTime: bigint;
  scheduleTime: bigint;
  stats: RosterAggregatedStatsDTO;
  tier: bigint;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  tournamentPeriods: bigint;
  tournamentThemeId: bigint;
}

export interface RosterWithdraw {
  declineWithdrawMembers: Array<bigint>;
  gameStartBufferMs: bigint;
  initVoteMember: bigint;
  initVoteTime: bigint;
  lockoutTimeMs: bigint;
  voteTimeoutMs: bigint;
  voteWithdrawMembers: Array<bigint>;
}

export interface SanitizerContainsSanitizedRequest {
  aggressiveScan: boolean;
  level: bigint;
  text: string;
}

export interface SanitizerContainsSanitizedResponse {
  contains: boolean;
}

export interface SanitizerSanitizeRequest {
  aggressiveScan: boolean;
  level: bigint;
  text: string;
  texts: Array<string>;
}

export interface SanitizerSanitizeResponse {
  modified: boolean;
  text: string;
  texts: Array<string>;
}

export interface SanitizerSanitizerStatus {
  breakingCharsCount: bigint;
  filteredWordCountsByLevel: bigint | undefined;
  locale: string;
  projectedCharsCount: bigint;
  ready: boolean;
  region: string;
  whitelistedWordCountsByLevel: bigint | undefined;
}

export interface SeriesDTO {
  createdDate: bigint;
  description: string;
  displayType: string;
  eligibilityType: string;
  endDate: bigint;
  id: string;
  internalName: string;
  lastUpdatedTimestamp: bigint;
  media: SeriesMediaDTO;
  optInButtonText: string;
  optOutButtonText: string;
  parentInternalName: string;
  startDate: bigint;
  status: string;
  tags: Array<string>;
  title: string;
  type: string;
  viewed: boolean;
  warnings: Array<AlertDTO>;
}

export interface SeriesMediaDTO {
  accentColor: string;
  backgroundImageLargeUrl: string;
  backgroundImageSmallUrl: string;
  backgroundUrl: string;
  trackerIconUrl: string;
}

export interface ShutdownLcdsForcedClientShutdown {
  additionalInfo: string;
  reason: string;
}

export interface SimpleDialogMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface SimpleDialogMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface SpectatorLcdsSpectateAvailabilityDto {
  teamOrSummonerIds: Array<string>;
}

export interface SpectatorLcdsSpectateAvailabilityResponseDto {
  availableForWatching: Array<string>;
}

export interface StoreLcdsChampionDTO {
  active: boolean;
  botEnabled: boolean;
  championId: bigint;
  championSkins: Array<StoreLcdsChampionSkinDTO>;
  endDate: bigint;
  freeToPlay: boolean;
  freeToPlayReward: boolean;
  owned: boolean;
  purchaseDate: bigint;
  rankedPlayEnabled: boolean;
  sources: Array<string>;
  winCountRemaining: bigint;
}

export interface StoreLcdsChampionSkinDTO {
  championId: bigint;
  endDate: bigint;
  freeToPlayReward: boolean;
  lastSelected: boolean;
  owned: boolean;
  purchaseDate: bigint;
  skinId: bigint;
  sources: Array<string>;
  stillObtainable: boolean;
  winCountRemaining: bigint;
}

export interface StoreLcdsSimpleDialogMessage {
  accountId: bigint;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface StoreLcdsSimpleDialogMessageResponse {
  accountId: bigint;
  command: string;
  msgId: string;
}

export interface StoreLcdsStoreAccountBalanceNotification {
  ip: bigint;
  rp: bigint;
}

export interface StoreLcdsStoreFulfillmentNotification {
  data: boolean | undefined;
  inventoryType: string;
  ip: bigint;
  rp: bigint;
}

export type SubState =
  | "SUGGESTED"
  | "PENDING"
  | "DECLINED"
  | "REVOKED"
  | "NOT_READY"
  | "FORCED_NOT_READY"
  | "READY";

export interface ThemeVp {
  themeId: bigint;
  themeVp: bigint;
}

export interface TicketOfferDTO {
  count: bigint;
  offerPlayerId: bigint;
  receivePlayerId: bigint;
  ticketOfferState: TicketOfferState;
  type: TicketType;
}

export type TicketOfferState = "ACTIVE" | "ACCEPTED" | "REJECTED" | "REVOKED";

export type TicketType = "BASIC" | "PREMIUM";

export interface TierConfig {
  delayTime: bigint;
  estimateTime: bigint;
  tier: bigint;
}

export interface TimeSeriesEventBeginV1 {
  eventName: string;
  when: bigint;
}

export interface TimeSeriesEventEndV1 {
  eventName: string;
  suffix: string;
  when: bigint;
}

export interface TimeSeriesEventMarkerV1 {
  eventName: string;
  markerName: string;
  when: bigint;
}

export interface TournamentDTO {
  bracketFormationInitDelayMs: bigint;
  bracketFormationIntervalMs: bigint;
  bracketSize: string;
  buyInOptions: Array<bigint>;
  buyInOptionsPremium: Array<bigint>;
  entryFee: bigint;
  honorRestriction: boolean;
  id: bigint;
  lastThemeOfSeason: boolean;
  lft: boolean;
  maxInvites: bigint;
  maxSub: bigint;
  maxSuggestionsPerPlayer: bigint;
  minGames: bigint;
  nameLocKey: string;
  nameLocKeySecondary: string;
  phases: Array<TournamentPhaseDTO>;
  queueId: bigint;
  rankRestriction: boolean;
  resumeTime: bigint;
  rewardConfig: Array<ClashRewardConfigClient>;
  rosterCreateDeadline: bigint;
  rosterSize: bigint;
  scheduleEndTime: bigint;
  scheduleTime: bigint;
  scoutingTimeMs: bigint;
  smsRestriction: boolean;
  status: TournamentStatusEnum;
  themeId: bigint;
  tierConfigs: Array<TierConfig>;
  voiceEnabled: boolean;
}

export interface TournamentHistoryAndWinnersDTO {
  tournamentHistory: Array<TournamentDTO>;
  tournamentWinnersCompressed: string;
}

export interface TournamentInfoDTO {
  inviteePendingRosters: Array<PendingRosterDTO>;
  pendingRoster: PendingRosterDTO;
  roster: RosterDTO;
  subRosters: Array<RosterDTO>;
  themeVp: bigint;
  tournament: TournamentDTO;
}

export interface TournamentInfoMinimalDTO {
  time: bigint;
  tournamentInfo: Array<TournamentInfoDTO>;
}

export interface TournamentPhaseDTO {
  cancelled: boolean;
  capacityStatus: CapacityEnum;
  id: bigint;
  limitTiers: Array<bigint>;
  period: bigint;
  registrationTime: bigint;
  startTime: bigint;
  tournamentId: bigint;
}

export interface TournamentPlayerInfoDTO {
  player: PlayerDTO;
  rosterStats: Array<RosterStatsDTO>;
  seasonVp: bigint;
  themeVps: Array<ThemeVp>;
  tier: bigint;
  time: bigint;
  tournamentInfo: Array<TournamentInfoDTO>;
}

export type TournamentStatusEnum = "DEFAULT" | "CANCELLED" | "PAUSED" | "PRERESUME";

export interface TracingEventV1 {
  dest: string;
  details: string;
  name: string;
  src: string;
  tags: string;
  when: bigint;
}

export type TracingModuleThreadingModelV1 =
  | "kNone"
  | "kMainThread"
  | "kDedicated"
  | "kSequential"
  | "kConcurrent"
  | "kParallel";

export type TracingModuleTypeV1 =
  | "kUnknown"
  | "kRemoteAppModule"
  | "kBackEndPlugin"
  | "kBackendOther"
  | "kFrontEndPlugin"
  | "kRemotingSource";

export interface TracingModuleV1 {
  moduleId: bigint;
  name: string;
  threadingModel: TracingModuleThreadingModelV1;
  type: TracingModuleTypeV1;
}

export interface TracingPhaseBeginV1 {
  importance: TracingPhaseImportanceV1;
  name: string;
  when: bigint;
}

export interface TracingPhaseEndV1 {
  name: string;
  when: bigint;
}

export type TracingPhaseImportanceV1 = "trivial" | "minor" | "major";

export interface TutorialMetadata {
  displayRewards: string | undefined;
  queueId: string;
  stepNumber: bigint;
  useChosenChampion: boolean;
  useQuickSearchMatchmaking: boolean;
}

export interface VerboseLootOddsDTO {
  chanceToContain: Array<LootOddsDTO>;
  checksOwnership: boolean;
  guaranteedToContain: Array<LootOddsDTO>;
  hasPityRules: boolean;
  lastUpdated: string;
  recipeName: string;
}

export interface VoiceChatAudioPropertiesResource {
  fastEnergyMeter: number;
  isLoopbackEnabled: boolean;
  isMicActive: boolean;
  isSpeakerActive: boolean;
  micEnergy: bigint;
  micVolume: bigint;
  noiseFloorMeter: number;
  speakerEnergy: bigint;
  speakerVolume: bigint;
  speechThresholdMeter: number;
}

export interface VoiceChatCallStatsResource {
  callId: string;
  captureDeviceConsecutivelyReadCount: Array<bigint>;
  codecName: string;
  currentBars: bigint;
  currentOpusBandwidth: bigint;
  currentOpusBitRate: bigint;
  currentOpusComplexity: bigint;
  currentOpusMaxPacketSize: bigint;
  currentOpusVbrMode: bigint;
  incomingDiscarded: bigint;
  incomingOutOfTime: bigint;
  incomingPacketloss: bigint;
  incomingReceived: bigint;
  lastLatencyMeasured: number;
  latencyMeasurementCount: bigint;
  latencyPacketsDropped: bigint;
  latencyPacketsLost: bigint;
  latencyPacketsMalformed: bigint;
  latencyPacketsNegativeLatency: bigint;
  latencyPacketsSent: bigint;
  latencySum: number;
  maxLatency: number;
  minLatency: number;
  outgoingSent: bigint;
  plcOn: bigint;
  plcSyntheticFrames: bigint;
  rFactor: number;
  renderDeviceErrors: bigint;
  renderDeviceOverruns: bigint;
  renderDeviceUnderruns: bigint;
  sampleIntervalBegin: number;
  sampleIntervalEnd: number;
}

export type VoiceChatCaptureDevicePermissionStatus =
  | "promptForPermission"
  | "permissionDenied"
  | "permissionGranted";

export interface VoiceChatCodecSettingsResource {
  codecBandwidth: bigint;
  codecBitrate: bigint;
  codecComplexity: bigint;
  codecVbrMode: bigint;
}

export type VoiceChatConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface VoiceChatConfigResource {
  accessTokenUri: string;
  authTokenUri: string;
  jwt2gvtUrl: string;
  logLevel: bigint;
  logLevelName: string;
  logsPath: string;
  provider: string;
  useExternalAuth: boolean;
  voiceDomain: string;
  voiceServerUri: string;
}

export interface VoiceChatConfigStatus {
  readiness: VoiceChatConfigReadinessEnum;
}

export type VoiceChatConfigType = "public" | "player";

export interface VoiceChatDeviceResource {
  handle: string;
  is_current_device: boolean;
  is_default: boolean;
  is_effective_device: boolean;
  name: string;
}

export interface VoiceChatParticipantResource {
  energy: bigint;
  id: string;
  isMuted: boolean;
  isSpeaking: boolean;
  name: string;
  speakingTimestamp: bigint;
  uri: string;
  volume: bigint;
}

export interface VoiceChatPushToTalkResource {
  pttEnabled: boolean;
  pttKeyBinding: string;
}

export interface VoiceChatRsoAuthorizationResource {
  currentAccountId: bigint;
  currentPlatformId: string;
  subject: string;
}

export interface VoiceChatSessionResource {
  id: string;
  isMuted: boolean;
  isTransmitEnabled: boolean;
  participants: Array<VoiceChatParticipantResource>;
  status: VoiceChatSessionStatus;
  volume: bigint;
}

export type VoiceChatSessionStatus = "active" | "onHold";

export interface VoiceChatSettingsResource {
  currentCaptureDeviceHandle: string;
  currentRenderDeviceHandle: string;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  micLevel: bigint;
  speakerLevel: bigint;
  vadHangoverTime: bigint;
  vadSensitivity: bigint;
}

export interface VoiceChatStateResource {
  connected: boolean;
}

export type VoiceChatStateType =
  | "disconnected"
  | "connecting"
  | "connected"
  | "disconnecting"
  | "initialized"
  | "shuttingdown";

export interface VoiceChatUpdateCodecSettingsResource {
  codecBandwidth: bigint;
  codecBitrate: bigint;
  codecComplexity: bigint;
  codecVbrMode: bigint;
}

export interface VoiceChatUpdateParticipantResource {
  isMuted: boolean;
  volume: bigint;
}

export interface VoiceChatUpdateSettingsResource {
  currentCaptureDeviceHandle: string;
  currentRenderDeviceHandle: string;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  micLevel: bigint;
  speakerLevel: bigint;
  vadHangoverTime: bigint;
  vadSensitivity: bigint;
}

export interface VoiceChatVoiceErrorCounterResource {
  count: bigint;
  error: VoiceChatVoiceErrorResource;
  timeOfLastError: bigint;
}

export interface VoiceChatVoiceErrorResource {
  errorString: string;
  responseType: bigint;
  responseTypeString: string;
  returnCode: bigint;
  statusCode: bigint;
  statusString: string;
}

export interface basicOperatingSystemInfo {
  edition: string;
  platform: string;
  versionMajor: string;
  versionMinor: string;
}

export interface basicSystemInfo {
  operatingSystem: basicOperatingSystemInfo;
  physicalMemory: bigint;
  physicalProcessorCores: bigint;
  processorSpeed: bigint;
}

export interface cookie {
  domain: string;
  expires: bigint;
  httponly: boolean;
  name: string;
  path: string;
  secure: boolean;
  url: string;
  value: string;
}
