export interface ActiveBoostsLcdsStoreFulfillmentNotification {
  data: boolean | undefined;
  inventoryType: string;
}

export interface ActiveBoostsLcdsSummonerActiveBoostsDTO {
  ipBoostEndDate: number;
  ipBoostPerWinCount: number;
  ipLoyaltyBoost: number;
  summonerId: number;
  xpBoostEndDate: number;
  xpBoostPerWinCount: number;
  xpLoyaltyBoost: number;
}

export type AggregationType = "none" | "sum" | "average";

export interface AlertDTO {
  alertTime: number;
}

export interface BannedChampion {
  championId: number;
  pickTurn: number;
  teamId: number;
}

export interface BasePlayerDTO {
  code: number;
  data: MatchedPlayerDTO;
  message: string;
}

export interface BindingAsyncCancelEvent {
  asyncToken: number;
}

export interface BindingAsyncFailureEvent {
  asyncToken: number;
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
  id: number;
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
  value: number;
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
  offset: number;
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
  size: number;
  tags: Array<string>;
  values: Array<BindingFullEnumValueHelp>;
}

export interface BindingFullTypeIdentifier {
  elementType: string;
  type: string;
}

export interface BindingGenericAsyncEvent {
  asyncToken: number;
  data: boolean | undefined;
}

export interface BindingGenericEvent {
  data: boolean | undefined;
}

export type BindingHelpFormat = "Full" | "Epytext";

export interface BoostTeamSkinRentalDTO {
  availableSkins: Array<number>;
  ipReward: number;
  ipRewardForPurchaser: number;
  price: number;
  skinUnlockMode: string;
  summonerName: string;
  unlocked: boolean;
}

export interface Bracket {
  id: number;
  matches: Array<BracketMatch>;
  phaseId: number;
  rosters: Array<BracketRoster>;
  size: number;
  tournamentId: number;
  version: number;
}

export interface BracketMatch {
  failRosterStatus: number;
  forfeitRosterId: number;
  gameId: number;
  gameStartTime: number;
  highestPossiblePosition: number;
  id: number;
  loserBracket: boolean;
  lowestPossiblePosition: number;
  order: number;
  resultHistory: string;
  rosterId1: number;
  rosterId2: number;
  round: number;
  roundStartTime: number;
  status: ClientBracketMatchStatus;
  winnerId: number;
}

export interface BracketRoster {
  logo: number;
  logoColor: number;
  name: string;
  rosterId: number;
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
  id: number;
  multiUserChatJwtMap: string | undefined;
  name: string;
  optimisticLock: number;
  pickTurn: number;
  playerChampionSelections: Array<ChampSelectLcdsPlayerChampionSelectionDTO>;
  queueTypeName: string;
  roomName: string;
  roomPassword: string;
  spectatorDelay: number;
  statusOfParticipants: string;
  teamOne: Array<boolean | undefined>;
  teamTwo: Array<boolean | undefined>;
}

export interface ChampSelectLcdsGameTimerDTO {
  currentGameState: string;
  remainingTimeInMillis: number;
}

export interface ChampSelectLcdsObfuscatedParticipant {
  gameUniqueId: number;
}

export interface ChampSelectLcdsPlayerChampionSelectionDTO {
  championId: number;
  selectedSkinIndex: number;
  spell1Id: number;
  spell2Id: number;
  summonerInternalName: string;
}

export interface ChampSelectLcdsPlayerParticipant {
  pickMode: number;
  pickTurn: number;
  summonerId: number;
  summonerInternalName: string;
  summonerName: string;
}

export interface ChampSelectLcdsPointSummary {
  currentPoints: number;
  maxRolls: number;
  numberOfRolls: number;
  pointsCostToRoll: number;
  pointsToNextRoll: number;
}

export interface ChampSelectLcdsPotentialTradersDTO {
  potentialTraders: Array<string>;
}

export interface ChampSelectLcdsRollResult {
  championId: number;
  pointSummary: ChampSelectLcdsPointSummary;
}

export interface ChampSelectLcdsTradeContractDTO {
  requesterChampionId: number;
  requesterInternalSummonerName: string;
  responderChampionId: number;
  responderInternalSummonerName: string;
  state: string;
}

export interface ChampionMasteryPublicDTO {
  championId: number;
  championLevel: number;
  championPoints: number;
}

export interface ChampionScoutingDTO {
  championId: number;
  gameCount: number;
  kda: number;
  winCount: number;
}

export interface ClashEventData {
  bracket: number;
  earnedDate: string;
  playerUUIDs: Array<string>;
  rewardSpec: ClashRewardSpec;
  rewardType: string;
  rosterId: number;
  seasonId: number;
  teamLogoChromaId: string;
  teamLogoName: string;
  teamName: string;
  teamShortName: string;
  theme: string;
  tier: string;
  tournamentId: number;
  tournamentName: string;
}

export interface ClashOfflineNotification {
  metaData: string | undefined;
  reason: string;
  tournamentId: number;
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
  honorLevel: number;
  playerId: number;
  rewards: Array<ClashRewardDefinition>;
  seasonId: number;
  seasonVp: number;
}

export type ClientBracketMatchStatus = "UPCOMING" | "STARTED" | "COMPLETED";

export interface ClientConfigAuthenticatedConnection {
  authToken: string;
  connectionId: number;
  subscribed: boolean;
}

export interface ClientConfigBuildInfo {
  branch: string;
  branchFull: string;
  codeBuildId: number;
  contentBuildId: number;
  gameBranch: string;
  gameBranchFull: string;
  gameDataBuildId: number;
  patchline: string;
  patchlineVisibleName: string;
  version: string;
}

export interface ClientConfigClientConfig {
  data: boolean | undefined | undefined;
  params: ClientConfigConfigParams;
  updateTime: number;
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
  updateId: number;
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
  championId: number;
  championSkins: Array<CollectionsLcdsChampionSkinDTO>;
  endDate: number;
  freeToPlay: boolean;
  freeToPlayReward: boolean;
  owned: boolean;
  purchaseDate: number;
  purchased: number;
  rankedPlayEnabled: boolean;
  sources: Array<string>;
  winCountRemaining: number;
}

export interface CollectionsLcdsChampionSkinDTO {
  championId: number;
  endDate: number;
  freeToPlayReward: boolean;
  lastSelected: boolean;
  owned: boolean;
  purchaseDate: number;
  skinId: number;
  sources: Array<string>;
  stillObtainable: boolean;
  winCountRemaining: number;
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
  itemId: number;
}

export interface CraftLootRefTransactionDTO {
  accountId: number;
  clientId: string;
  lootNameRefIds: Array<LootNameRefId>;
  playerId: number;
  puuid: string;
  recipeName: string;
  repeat: number;
}

export interface CrashReportingEnvironment {
  environment: string;
  userId: string;
  userName: string;
}

export interface DownloadUrlRequestV2 {
  gameId: number;
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
  gameId: number;
  offenderSummonerId: number;
  offenses: string;
}

export interface EndOfGameLcdsEndOfGameStats {
  basePoints: number;
  battleBoostIpEarned: number;
  boostIpEarned: number;
  boostXpEarned: number;
  causedEarlySurrender: boolean;
  coOpVsAiMinutesLeftToday: number;
  coOpVsAiMsecsUntilReset: number;
  completionBonusPoints: number;
  customMinutesLeftToday: number;
  customMsecsUntilReset: number;
  difficulty: string;
  earlySurrenderAccomplice: boolean;
  elo: number;
  eloChange: number;
  experienceEarned: number;
  experienceTotal: number;
  firstWinBonus: number;
  gameEndedInEarlySurrender: boolean;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  ipEarned: number;
  ipTotal: number;
  leveledUp: boolean;
  loyaltyBoostIpEarned: number;
  loyaltyBoostXpEarned: number;
  multiUserChatJwt: string;
  myTeamInfo: EndOfGameLcdsTeamInfo;
  myTeamStatus: string;
  newSpells: Array<EndOfGameLcdsSpell>;
  odinBonusIp: number;
  otherTeamInfo: EndOfGameLcdsTeamInfo;
  otherTeamPlayerParticipantStats: Array<EndOfGameLcdsPlayerParticipantStatsSummary>;
  partyRewardsBonusIpEarned: number;
  pointsPenalties: Array<EndOfGameLcdsPointsPenalty>;
  previousLevel: number;
  previousXpTotal: number;
  queueBonusEarned: number;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  roomName: string;
  roomPassword: string;
  rpEarned: number;
  sendStatsToTournamentProvider: boolean;
  skinId: number;
  skinIndex: number;
  summonerName: string;
  talentPointsGained: number;
  teamEarlySurrendered: boolean;
  teamPlayerParticipantStats: Array<EndOfGameLcdsPlayerParticipantStatsSummary>;
  timeUntilNextFirstWinBonus: number;
  userId: number;
}

export interface EndOfGameLcdsHarassmentReport {
  comment: string;
  gameId: number;
  offense: string;
  reportSource: string;
  reportedSummonerId: number;
  reportingSummonerId: number;
}

export interface EndOfGameLcdsPlayerParticipantStatsSummary {
  botPlayer: boolean;
  championId: number;
  detectedTeamPosition: string;
  elo: number;
  eloChange: number;
  gameId: number;
  leaver: boolean;
  leaves: number;
  level: number;
  losses: number;
  profileIconId: number;
  selectedPosition: string;
  skinIndex: number;
  skinName: string;
  spell1Id: number;
  spell2Id: number;
  statistics: Array<EndOfGameLcdsRawStatDTO>;
  summonerName: string;
  teamId: number;
  userId: number;
  wins: number;
}

export interface EndOfGameLcdsPointsPenalty {
  penalty: number;
  type: string;
}

export interface EndOfGameLcdsRawStatDTO {
  statTypeName: string;
  value: number;
}

export interface EndOfGameLcdsSpell {
  spellId: number;
}

export interface EndOfGameLcdsTeamId {
  fullId: string;
}

export interface EndOfGameLcdsTeamInfo {
  memberStatusString: string;
  name: string;
  secondsUntilEligibleForDeletion: number;
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
  id: number;
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
  playerId: number;
}

export type GameQueuesLcdsAllowSpectators = "NONE" | "LOBBYONLY" | "DROPINONLY" | "ALL";

export interface GameQueuesLcdsGameQueueConfig {
  blockedMinutesThreshold: number;
  botsCanSpawnOnBlueSide: boolean;
  cacheName: string;
  disallowFreeChampions: boolean;
  gameMode: string;
  gameMutators: Array<string>;
  gameTypeConfigId: number;
  id: number;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapSelectionAlgorithm: string;
  matchingThrottleConfig: GameQueuesLcdsMatchingThrottleConfig;
  maxLevel: number;
  maxSummonerLevelForFirstWinOfTheDay: number;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  minimumQueueDodgeDelayTime: number;
  numPlayersPerTeam: number;
  pointsConfigKey: string;
  queueBonusKey: string;
  queueState: string;
  queueStateString: string;
  randomizeTeamSizes: boolean;
  ranked: boolean;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
  supportedMapIds: Array<number>;
  teamOnly: boolean;
  thresholdEnabled: boolean;
  thresholdSize: number;
  type: string;
  typeString: string;
}

export interface GameQueuesLcdsMatchingThrottleConfig {
  cacheName: string;
  limit: number;
}

export interface GameflowLcdsGameDTO {
  gameMode: string;
  gameQueueConfigId: number;
  gameState: string;
  gameType: string;
  gameTypeConfigId: number;
  id: number;
  mapId: number;
  maxNumPlayers: number;
  playerChampionSelections: Array<boolean | undefined>;
  queueTypeName: string;
  spectatorDelay: number;
  teamOne: Array<boolean | undefined>;
  teamTwo: Array<boolean | undefined>;
}

export interface GameflowLcdsPlayerCredentialsDto {
  encryptionKey: string;
  gameId: number;
  observer: boolean;
  observerEncryptionKey: string;
  observerServerIp: string;
  observerServerPort: number;
  serverIp: string;
  serverPort: number;
  summonerId: number;
}

export interface GameflowLcdsReconnectInfoDto {
  game: GameflowLcdsGameDTO;
  playerCredentials: GameflowLcdsPlayerCredentialsDto;
  reconnectDelay: number;
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
  championId: number;
  skins: Array<number>;
}

export interface LCDSGlobalRewards {
  allChampions: boolean;
}

export interface LCDSLoyaltyRewards {
  champions: Array<LCDSChampionReward>;
  global: LCDSGlobalRewards;
  ipBoost: number;
  xpBoost: number;
}

export interface LCDSLoyaltyStateChangeNotification {
  accountId: number;
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
  accountId: number;
  bodyCode: string;
  msgId: string;
  params: Array<string>;
  titleCode: string;
  type: string;
}

export interface LCDSPlayerMessagingSimpleMessageResponse {
  accountId: number;
  command: string;
  msgId: string;
}

export interface LcdsBotParticipant {
  botSkillLevel: number;
  summonerId: number;
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
  gameTypeConfigId: number;
  id: number;
  mapId: number;
  maxNumPlayers: number;
  multiUserChatJwtMap: string | undefined;
  name: string;
  observers: Array<LcdsPlayerParticipant>;
  optimisticLock: number;
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
  mapId: number;
  minCustomPlayers: number;
  name: string;
  totalPlayers: number;
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
  summonerId: number;
  summonerName: string;
}

export interface LcdsInvitePrivileges {
  canInvite: boolean;
}

export interface LcdsInvitee {
  inviteeState: LcdsInviteeState;
  summonerId: number;
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
  summonerId: number;
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
  summonerId: number;
  summonerName: string;
}

export interface LcdsPayloadDto {
  body: string;
  headers: string | undefined;
  method: string;
  path: string;
}

export interface LcdsPlayer {
  summonerId: number;
  summonerName: string;
}

export interface LcdsPlayerParticipant {
  botSkillLevel: number;
  summonerId: number;
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
  gameTypeConfig: number;
  gameVersion: string;
  maxNumPlayers: number;
  passbackDataPacket: string;
  passbackUrl: string;
  region: string;
}

export interface LcdsPracticeGameSearchResult {
  allowSpectators: string;
  gameMap: LcdsGameMap;
  gameMapId: number;
  gameMode: string;
  id: number;
  maxNumPlayers: number;
  name: string;
  owner: LcdsPlayerParticipant;
  pickType: string;
  privateGame: boolean;
  spectatorCount: number;
  team1Count: number;
  team2Count: number;
}

export type LcdsRemovalReason = "KICKED" | "DESTROYED" | "PROGRESSED";

export interface LcdsRemovedFromLobbyNotification {
  removalReason: LcdsRemovalReason;
}

export interface LcdsSimpleMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LcdsSimpleMessageResponse {
  accountId: number;
  command: string;
  msgId: string;
}

export interface LcdsStartChampSelectDto {
  invalidPlayers: Array<LcdsFailedJoinPlayer>;
}

export interface LcdsSummoner {
  name: string;
  sumId: number;
}

export interface LeaverBusterLcdsMatchmakingNotification {
  playerJoinFailures: Array<boolean | undefined>;
}

export interface LeaverBusterLcdsSimpleMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LeaverBusterSimpleMessageResponse {
  accountId: number;
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
  status: number;
  success: boolean;
}

export interface LolAccountVerificationDeviceResponse {
  message: string;
  status: number;
  success: boolean;
}

export interface LolAccountVerificationInvalidateResponse {
  message: string;
  smsTokenExpireDurationInSec: number;
  status: number;
  success: boolean;
}

export interface LolAccountVerificationIsVerifiedResponse {
  message: string;
  status: number;
  success: boolean;
}

export interface LolAccountVerificationLoginSession {
  accountId: number;
  state: LolAccountVerificationLoginSessionState;
  summonerId: number;
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
  smsTokenExpireDurationInSec: number;
  status: number;
  success: boolean;
}

export interface LolAccountVerificationVerifyRequest {
  mediator: string;
  token: string;
}

export interface LolAccountVerificationVerifyResponse {
  message: string;
  status: number;
  success: boolean;
}

export interface LolActiveBoostsActiveBoosts {
  firstWinOfTheDayStartTime: string;
  ipBoostEndDate: string;
  ipBoostPerWinCount: number;
  ipLoyaltyBoost: number;
  summonerId: number;
  xpBoostEndDate: string;
  xpBoostPerWinCount: number;
  xpLoyaltyBoost: number;
}

export interface LolActiveBoostsEndOfGameStats {
  timeUntilNextFirstWinBonus: number;
}

export interface LolActiveBoostsLoginDataPacket {
  timeUntilFirstWinOfDay: number;
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
  itemId: number;
  level: number;
  seasonId: number;
  theme: string;
}

export interface LolBannersBannerFrame {
  level: number;
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
  itemId: number;
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
  itemId: number;
}

export interface LolBannersSummonerProfileUpdate {
  key: string;
  value: boolean | undefined;
}

export interface LolBannersTournamentFlagInventoryItem {
  itemId: number;
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
  championId: number;
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  stats: boolean | undefined;
}

export interface LolCareerStatsChampionStatistics {
  championId: number;
  experts: Array<LolCareerStatsExpertPlayer>;
  queueStats: Array<LolCareerStatsStatisticsByQueue>;
}

export interface LolCareerStatsEntitlementsToken {
  entitlements: Array<string>;
}

export interface LolCareerStatsExpertPlayer {
  championId: number;
  expertRank: number;
  numOfGames: number;
  position: LolCareerStatsSummonersRiftPosition;
  summonerId: number;
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
  season: number;
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
  championId: number;
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  season: number;
  stats: boolean | undefined;
}

export interface LolCareerStatsStatsQueryRequest {
  championId: number;
  position: LolCareerStatsSummonersRiftPosition;
  queueType: LolCareerStatsCareerStatsQueueType;
  rankTier: LolCareerStatsRankedTier;
  season: number;
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
  itemId: number;
  quantity: number;
}

export interface LolCatalogBundledItemCost {
  cost: number;
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
  itemId: number;
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
  inactiveDate: number;
  inventoryType: string;
  itemId: number;
  itemInstanceId: string;
  metadata: Array<LolCatalogItemMetadataEntry>;
  name: string;
  offerId: string;
  owned: boolean;
  ownershipType: LolCatalogInventoryOwnership;
  prices: Array<LolCatalogCatalogPluginPrice>;
  purchaseDate: number;
  questSkinInfo: LolCatalogSkinLineInfo;
  releaseDate: number;
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
  quantity: number;
  requiredItems: Array<LolCatalogCatalogPluginItemWithDetails>;
}

export interface LolCatalogCatalogPluginPrice {
  cost: number;
  costType: string;
  currency: string;
  sale: LolCatalogCatalogPluginRetailDiscount;
}

export interface LolCatalogCatalogPluginRetailDiscount {
  cost: number;
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
  id: number;
  name: string;
}

export interface LolCatalogGameDataChampionSkin {
  chromaPath: string;
  chromas: Array<LolCatalogGameDataChampionChroma>;
  colors: Array<string>;
  emblems: Array<LolCatalogChampionSkinEmblem>;
  id: number;
  name: string;
  questSkinInfo: LolCatalogSkinLineInfo;
  splashPath: string;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolCatalogGameDataChampionSummary {
  id: number;
  name: string;
  skins: Array<LolCatalogGameDataChampionSkin>;
  squarePortraitPath: string;
}

export interface LolCatalogGameDataItemReference {
  contentId: string;
  inventoryType: string;
  itemId: number;
}

export interface LolCatalogGameDataStatstone {
  category: string;
  contentId: string;
  description: string;
  iconFull: string;
  isDuration: boolean;
  isEpic: boolean;
  isRetired: boolean;
  itemId: number;
  name: string;
}

export interface LolCatalogGameDataStatstonePack {
  contentId: string;
  description: string;
  itemId: number;
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
  id: number;
  inventoryIcon: string;
  name: string;
}

export interface LolCatalogGameDataSummonerIcon {
  id: number;
  imagePath: string;
  title: string;
}

export interface LolCatalogGameDataWardSkin {
  description: string;
  id: number;
  name: string;
  wardImagePath: string;
}

export interface LolCatalogInventoryContent {
  itemId: number;
  ownershipType: LolCatalogInventoryOwnership;
  purchaseDate: string;
}

export type LolCatalogInventoryOwnership = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolCatalogItemChoiceDetails {
  backgroundImage: string;
  contents: Array<LolCatalogItemDetails>;
  discount: string;
  displayType: string;
  fullPrice: number;
  item: LolCatalogCatalogPluginItem;
  metadata: boolean | undefined;
}

export interface LolCatalogItemCost {
  cost: number;
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
  itemId: number;
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
  id: number;
  loadScreenPath: string;
  name: string;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: number;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChallengesChallengeData {
  category: string;
  currentLevel: string;
  currentLevelAchievedTime: number;
  currentThreshold: number;
  currentValue: number;
  friendsAtLevels: Array<LolChallengesFriendLevelsData>;
  id: number;
  initValue: number;
  legacy: boolean;
  newLevels: Array<string>;
  nextLevel: string;
  nextThreshold: number;
  percentile: number;
  playersInLevel: number;
  position: number;
  previousLevel: string;
  previousThreshold: number;
  previousValue: number;
  seasonId: number;
  seasonal: boolean;
}

export interface LolChallengesChallengeLevelData {
  level: string;
}

export interface LolChallengesChallengePlayerData {
  apexLaderUpdateTime: number;
  categoryPoints: LolChallengesChallengePoints | undefined;
  id: string;
  levelPoints: number | undefined;
  playerChallenges: Array<LolChallengesChallengeData>;
  preferences: LolChallengesPlayerClientPreferences;
  puuid: string;
  source: LolChallengesSource;
  tags: string | undefined;
  totalPoints: LolChallengesChallengePoints;
}

export interface LolChallengesChallengePoints {
  current: number;
  level: string;
  max: number;
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
  quantity: number;
}

export interface LolChallengesChallengesPlayerPreferences {
  bannerAccent: string;
  challengeIds: Array<number>;
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
  gameId: number;
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
  queueIds: Array<number>;
  reverseDirection: boolean;
  source: string;
  tags: string | undefined;
  thresholds: LolChallengesChallengeThreshold | undefined;
}

export interface LolChallengesGameDataChallengeTitle {
  itemId: number;
  name: string;
}

export interface LolChallengesGameDataChallengesData {
  challenges: LolChallengesGameDataChallengeConfig | undefined;
  titles: LolChallengesGameDataChallengeTitle | undefined;
}

export interface LolChallengesInventoryTypeAchievementTitle {
  itemId: number;
  uuid: string;
}

export interface LolChallengesPlayerClientPreferences {
  tabard: string;
  title: string;
  tokens: Array<number>;
}

export interface LolChallengesQueue {
  gameMode: string;
  id: number;
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
  current: number;
  level: string;
  max: number;
  positionPercentile: number;
}

export interface LolChallengesUIChallenge {
  capstoneGroupId: number;
  capstoneGroupName: string;
  capstoneId: number;
  category: string;
  currentLevel: string;
  currentLevelAchievedTime: number;
  currentThreshold: number;
  currentValue: number;
  description: string;
  descriptionShort: string;
  friendsAtLevels: Array<LolChallengesFriendLevelsData>;
  gameModes: Array<string>;
  hasLeaderboard: boolean;
  iconPath: string;
  id: number;
  isApex: boolean;
  isCapstone: boolean;
  isReverseDirection: boolean;
  levelToIconPath: string | undefined;
  name: string;
  nextLevel: string;
  nextLevelIconPath: string;
  nextThreshold: number;
  percentile: number;
  pointsAwarded: number;
  position: number;
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
  quantity: number;
}

export interface LolChallengesUIChallengeThreshold {
  rewards: Array<LolChallengesUIChallengeReward>;
  value: number;
}

export interface LolChallengesUIPlayerSummary {
  apexLadderUpdateTime: number;
  categoryProgress: Array<LolChallengesUICategoryProgress>;
  overallChallengeLevel: string;
  pointsUntilNextRank: number;
  positionPercentile: number;
  title: LolChallengesUITitle;
  topChallenges: Array<LolChallengesUIChallenge>;
  totalChallengeScore: number;
}

export interface LolChallengesUITitle {
  contentId: string;
  itemId: number;
  name: string;
}

export interface LolChampSelectChampGridChampion {
  disabled: boolean;
  freeToPlay: boolean;
  freeToPlayForQueue: boolean;
  freeToPlayReward: boolean;
  id: number;
  masteryChestGranted: boolean;
  masteryLevel: number;
  masteryPoints: number;
  name: string;
  owned: boolean;
  positionsFavorited: Array<string>;
  rented: boolean;
  roles: Array<string>;
  selectionStatus: LolChampSelectChampionSelection;
  squarePortraitPath: string;
}

export interface LolChampSelectChampSelectAction {
  actorCellId: number;
  championId: number;
  completed: boolean;
  id: number;
  isAllyAction: boolean;
  type: string;
}

export interface LolChampSelectChampSelectBannedChampions {
  myTeamBans: Array<number>;
  numBans: number;
  theirTeamBans: Array<number>;
}

export interface LolChampSelectChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolChampSelectChampSelectMySelection {
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  wardSkinId: number;
}

export interface LolChampSelectChampSelectPinDropNotification {
  mapSide: string;
  pinDropSummoners: Array<LolChampSelectChampSelectPinDropSummoner>;
}

export interface LolChampSelectChampSelectPinDropSummoner {
  isLocalSummoner: boolean;
  isPlaceholder: boolean;
  lane: string;
  lanePosition: number;
  position: string;
  slotId: number;
}

export interface LolChampSelectChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  entitledFeatureType: string;
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  team: number;
  wardSkinId: number;
}

export interface LolChampSelectChampSelectSession {
  actions: Array<boolean | undefined>;
  allowBattleBoost: boolean;
  allowDuplicatePicks: boolean;
  allowLockedEvents: boolean;
  allowRerolling: boolean;
  allowSkinSelection: boolean;
  bans: LolChampSelectChampSelectBannedChampions;
  benchChampionIds: Array<number>;
  benchEnabled: boolean;
  boostableSkinCount: number;
  chatDetails: LolChampSelectChampSelectChatRoomDetails;
  counter: number;
  entitledFeatureState: LolChampSelectEntitledFeatureState;
  gameId: number;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
  isSpectating: boolean;
  localPlayerCellId: number;
  lockedEventIndex: number;
  myTeam: Array<LolChampSelectChampSelectPlayerSelection>;
  recoveryCounter: number;
  rerollsRemaining: number;
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
  cellId: number;
  championIconStyle: string;
  championName: string;
  currentChampionVotePercentInteger: number;
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
  skinId: number;
  skinSplashPath: string;
  slotId: number;
  spell1IconPath: string;
  spell2IconPath: string;
  statusMessageKey: string;
  summonerId: number;
  tradeId: number;
}

export interface LolChampSelectChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  internalNowInEpochMs: number;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: number;
}

export interface LolChampSelectChampSelectTradeContract {
  cellId: number;
  id: number;
  state: LolChampSelectChampSelectTradeState;
}

export interface LolChampSelectChampSelectTradeNotification {
  id: number;
  initiatedByLocalPlayer: boolean;
  otherSummonerId: number;
  requesterChampionName: string;
  requesterChampionSplashPath: string;
  responderChampionName: string;
  responderIndex: number;
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
  championId: number;
  chromaPath: string;
  colors: Array<string>;
  disabled: boolean;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  stillObtainable: boolean;
}

export interface LolChampSelectCollectionsChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  chestGranted: boolean;
}

export interface LolChampSelectCollectionsChampionMinimal {
  banVoPath: string;
  baseSplashPath: string;
  chooseVoPath: string;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: number;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  roles: Array<string>;
  squarePortraitPath: string;
  stingerSfxPath: string;
}

export interface LolChampSelectCollectionsChampionQuestSkin {
  championId: number;
  chromaPath: string;
  disabled: boolean;
  id: number;
  isBase: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: number;
  stillObtainable: boolean;
  tilePath: string;
}

export interface LolChampSelectCollectionsChampionSkin {
  championId: number;
  chromaPath: string;
  chromas: Array<LolChampSelectCollectionsChampionChroma>;
  disabled: boolean;
  emblems: Array<LolChampSelectCollectionsChampionSkinEmblem>;
  id: number;
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
  championId: number;
  chromaPath: string;
  disabled: boolean;
  id: number;
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
  additionalRerolls: number;
  unlockedSkinIds: Array<number>;
}

export interface LolChampSelectGameDataSummonerSpell {
  iconPath: string;
  id: number;
}

export interface LolChampSelectLegacyChampSelectAction {
  actorCellId: number;
  championId: number;
  completed: boolean;
  id: number;
  isAllyAction: boolean;
  isInProgress: boolean;
  pickTurn: number;
  type: string;
}

export interface LolChampSelectLegacyChampSelectBannedChampions {
  myTeamBans: Array<number>;
  numBans: number;
  theirTeamBans: Array<number>;
}

export interface LolChampSelectLegacyChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolChampSelectLegacyChampSelectMySelection {
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  wardSkinId: number;
}

export interface LolChampSelectLegacyChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  playerType: string;
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  team: number;
  wardSkinId: number;
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
  localPlayerCellId: number;
  myTeam: Array<LolChampSelectLegacyChampSelectPlayerSelection>;
  rerollsRemaining: number;
  theirTeam: Array<LolChampSelectLegacyChampSelectPlayerSelection>;
  timer: LolChampSelectLegacyChampSelectTimer;
  trades: Array<LolChampSelectLegacyChampSelectTradeContract>;
}

export interface LolChampSelectLegacyChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  internalNowInEpochMs: number;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: number;
}

export interface LolChampSelectLegacyChampSelectTradeContract {
  cellId: number;
  id: number;
  state: LolChampSelectLegacyChampSelectTradeState;
}

export type LolChampSelectLegacyChampSelectTradeState =
  | "AVAILABLE"
  | "BUSY"
  | "INVALID"
  | "RECEIVED"
  | "SENT";

export interface LolChampSelectLegacyChampionSelectPreferences {
  skins: number | undefined;
  spells: boolean | undefined | undefined;
}

export interface LolChampSelectLegacyCollectionsChampion {
  active: boolean;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: number;
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
  dodgeIds: Array<number>;
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
  itemId: number;
  payload: boolean | undefined;
}

export interface LolChampSelectLegacyLobbyStatus {
  allowedPlayAgain: boolean;
  isCustom: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  memberSummonerIds: Array<number>;
  queueId: number;
}

export interface LolChampSelectLegacyLoginSession {
  connected: boolean;
  state: LolChampSelectLegacyLoginSessionStates;
  summonerId: number;
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
  maxAllowableBans: number;
  name: string;
}

export interface LolChampSelectLegacySettingCategoryResource {
  data: LolChampSelectLegacyChampionSelectPreferences;
  schemaVersion: number;
}

export interface LolChampSelectLegacySummoner {
  summonerId: number;
  summonerLevel: number;
}

export interface LolChampSelectLegacyTeamBoost {
  availableSkins: Array<number>;
  ipReward: number;
  ipRewardForPurchaser: number;
  price: number;
  skinUnlockMode: string;
  summonerName: string;
  unlocked: boolean;
}

export interface LolChampSelectLoginSession {
  summonerId: number;
}

export interface LolChampSelectMutedPlayerInfo {
  puuid: string;
  summonerId: number;
}

export interface LolChampSelectSettingsResource {
  data: boolean | undefined;
  schemaVersion: number;
}

export interface LolChampSelectSfxNotification {
  delayMillis: number;
  eventType: string;
  path: string;
}

export interface LolChampSelectSkinSelectorChildSkin {
  championId: number;
  chromaPreviewPath: string;
  colors: Array<string>;
  disabled: boolean;
  id: number;
  isBase: boolean;
  isChampionUnlocked: boolean;
  isUnlockedFromEntitledFeature: boolean;
  name: string;
  ownership: LolChampSelectCollectionsOwnership;
  parentSkinId: number;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: number;
  stillObtainable: boolean;
  tilePath: string;
  unlocked: boolean;
}

export interface LolChampSelectSkinSelectorInfo {
  championName: string;
  isSkinGrantedFromBoost: boolean;
  selectedChampionId: number;
  selectedSkinId: number;
  showSkinSelector: boolean;
  skinSelectionDisabled: boolean;
}

export interface LolChampSelectSkinSelectorSkin {
  championId: number;
  childSkins: Array<LolChampSelectSkinSelectorChildSkin>;
  chromaPreviewPath: string;
  disabled: boolean;
  emblems: Array<LolChampSelectCollectionsChampionSkinEmblem>;
  groupSplash: string;
  id: number;
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
  availableSkins: Array<number>;
  ipReward: number;
  ipRewardForPurchaser: number;
  price: number;
  skinUnlockMode: string;
  summonerId: number;
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
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  passive: LolChampionsCollectionsChampionSpell;
  purchased: number;
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
  championId: number;
  chromaPath: string;
  colors: Array<string>;
  disabled: boolean;
  id: number;
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
  id: number;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  purchased: number;
  rankedPlayEnabled: boolean;
  roles: Array<string>;
  squarePortraitPath: string;
  stingerSfxPath: string;
  title: string;
}

export interface LolChampionsCollectionsChampionPlayableCounts {
  championsFreeToPlay: number;
  championsFreeToPlayReward: number;
  championsOwned: number;
  championsRented: number;
}

export interface LolChampionsCollectionsChampionQuestSkin {
  championId: number;
  chromaPath: string;
  collectionSplashVideoPath: string;
  description: string;
  disabled: boolean;
  id: number;
  isBase: boolean;
  lastSelected: boolean;
  loadScreenPath: string;
  name: string;
  ownership: LolChampionsCollectionsOwnership;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: number;
  stillObtainable: boolean;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsCollectionsChampionSkin {
  championId: number;
  chromaPath: string;
  chromas: Array<LolChampionsCollectionsChampionChroma>;
  collectionSplashVideoPath: string;
  disabled: boolean;
  emblems: Array<LolChampionsCollectionsChampionSkinEmblem>;
  featuresText: string;
  id: number;
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
  championId: number;
  chromaPath: string;
  disabled: boolean;
  id: number;
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
  difficulty: number;
  style: number;
}

export interface LolChampionsCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolChampionsCollectionsRental;
}

export interface LolChampionsCollectionsRental {
  endDate: number;
  purchaseDate: number;
  rented: boolean;
  winCountRemaining: number;
}

export interface LolChampionsGameDataChampion {
  alias: string;
  banVoPath: string;
  chooseVoPath: string;
  id: number;
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
  id: number;
}

export interface LolChampionsGameDataChampionQuestSkin {
  collectionSplashVideoPath: string;
  description: string;
  id: number;
  loadScreenPath: string;
  name: string;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: number;
  tilePath: string;
  uncenteredSplashPath: string;
}

export interface LolChampionsGameDataChampionSkin {
  chromaPath: string;
  chromas: Array<LolChampionsGameDataChampionChroma>;
  collectionSplashVideoPath: string;
  emblems: Array<LolChampionsCollectionsChampionSkinEmblem>;
  featuresText: string;
  id: number;
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
  id: number;
}

export interface LolChampionsGameDataChampionTacticalInfo {
  damageType: string;
  difficulty: number;
  style: number;
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
  summonerId: number;
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
  id: number;
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
  summonerId: number;
  summonerLevel: number;
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
  expiry: number;
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
  icon: number;
  id: string;
  name: string;
  pid: string;
  puuid: string;
  summonerId: number;
}

export interface LolChatChampSelection {
  championId: number;
  selectedSkinIndex: number;
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
  accountId: number;
  gasToken: boolean | undefined;
  idToken: string;
  isNewPlayer: boolean;
  puuid: string;
  state: LolChatChatPlatformLoginSessionState;
  summonerId: number;
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
  chatWindowDockedHeight: number;
  "closed-conversations": number | undefined;
  friendRequestToastsDisabled: boolean;
  "hidden-conversations": number | undefined;
  linkClickWarningEnabled: boolean;
  messageNotificationsEnabled: boolean;
  moreUnreadsEnabled: boolean;
  "muted-conversations": number | undefined;
  recentlyPlayedFirstOpen: boolean;
  recentlyPlayedOpen: boolean;
  "roster-group-collapsed": boolean | undefined;
  showWhenTypingEnabled: boolean;
  sortBy: string;
  usePlayerPreferences: boolean;
}

export interface LolChatChatSummoner {
  displayName: string;
  profileIconId: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
  unnamed: boolean;
}

export interface LolChatChatWindowSettings {
  detached: boolean;
  height: number;
  left: number;
  top: number;
  width: number;
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
  unread_count: number;
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
  fromSummonerId: number;
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
  unreadMessageCount: number;
}

export interface LolChatConversationUpdate {
  cid: string;
  hidden: boolean;
  muted: boolean;
}

export interface LolChatDebugResource {
  asyncWaitInterval: number;
  enableChatFiltering: boolean;
  failAllChatLogin: boolean;
  failNextChatLogin: boolean;
  failNextChatLogout: boolean;
  failNextKeepAlive: boolean;
  isXMPPLoggingEnabled: boolean;
  keepAliveInterval: number;
  maxReconnectInterval: number;
  minReconnectInterval: number;
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
  code: number;
  from: string;
  id: number;
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
  numFriends: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInChampSelect: number;
  numFriendsInGame: number;
  numFriendsInQueue: number;
  numFriendsMobile: number;
  numFriendsOnline: number;
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
  icon: number;
  id: string;
  name: string;
  note: string;
  pid: string;
  puuid: string;
  summonerId: number;
}

export interface LolChatFriendResource {
  availability: string;
  displayGroupId: number;
  displayGroupName: string;
  gameName: string;
  gameTag: string;
  groupId: number;
  groupName: string;
  icon: number;
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
  summonerId: number;
  time: number;
}

export type LolChatFriendSubscriptionType = "pending_out" | "pending_in";

export interface LolChatGameDataChampionSummary {
  alias: string;
  id: number;
}

export interface LolChatGameflowGameData {
  gameId: number;
  playerChampionSelections: Array<LolChatChampSelection>;
  queue: LolChatQueue;
  teamOne: Array<LolChatTeamPlayerEntry>;
  teamTwo: Array<LolChatTeamPlayerEntry>;
}

export interface LolChatGameflowGameMap {
  id: number;
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
  id: number;
  isLocalized: boolean;
  isMetaGroup: boolean;
  name: string;
  priority: number;
}

export interface LolChatIdBody {
  id: string;
}

export interface LolChatLcuSocialConfig {
  AggressiveScanning: boolean;
  ForceChatFilter: boolean;
  QueueJobGraceSeconds: number;
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
  id: number;
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
  queueId: number;
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
  time: number;
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
  time: number;
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
  summonerId: number;
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
  modified: number;
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
  id: number;
  type: string;
}

export type LolChatQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export interface LolChatQueueGameTypeConfig {
  id: number;
  name: string;
}

export interface LolChatRankedQueueStats {
  division: LolChatLeagueDivision;
  games: number;
  isProvisional: boolean;
  queueType: LolChatLeagueQueueType;
  tier: LolChatLeagueTier;
  wins: number;
}

export interface LolChatRankedStats {
  highestPreviousSeasonAchievedDivision: LolChatLeagueDivision;
  highestPreviousSeasonAchievedTier: LolChatLeagueTier;
  highestRankedEntry: LolChatRankedQueueStats;
  rankedRegaliaLevel: number;
}

export interface LolChatRsoAuthorization {
  currentAccountId: number;
  currentPlatformId: string;
  subject: string;
}

export interface LolChatSanitizeRequest {
  aggressiveScan: boolean;
  level: number;
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
  sessionExpire: number;
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
  summonerId: number;
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
  icon: number;
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
  summonerId: number;
  time: number;
}

export interface LolChatcookie {
  domain: string;
  expires: number;
  httponly: boolean;
  name: string;
  path: string;
  secure: boolean;
  url: string;
  value: string;
}

export interface LolClashBlockedPlayerResource {
  name: string;
  summonerId: number;
}

export interface LolClashBracket {
  id: number;
  isComplete: boolean;
  matches: Array<BracketMatch>;
  period: number;
  rosters: Array<BracketRoster>;
  size: number;
  tournamentId: number;
  version: number;
}

export interface LolClashBracketReadyNotification {
  bracketId: number;
  tournamentId: number;
}

export interface LolClashBracketUpdateNotification {
  bracketId: number;
  currentMatchId: number;
  notifyReason: LolClashRosterNotifyReason;
  tournamentId: number;
}

export interface LolClashChangeIconRequest {
  iconColorId: number;
  iconId: number;
}

export interface LolClashChangeNameRequest {
  name: string;
}

export interface LolClashClashConfig {
  CheckPartiesRegistration: boolean;
  DisabledEvents: Array<string>;
  DisabledReason: string;
  EnabledState: LolClashClashState;
  EstimatedEnableTimeMillis: number;
  EventSendingEnabled: boolean;
  HonorLevelRequired: number;
  HonorRefreshRetrySeconds: number;
  IconConfig: string;
  IsPlaymodeRestrictionEnabled: boolean;
  MaxTimeBeforeLockinNotifySeconds: number;
  MinClashNotificationsSummonerLevel: number;
  MinClashSummonerLevel: number;
  RewardGrantRetryIntervalSeconds: number;
  Visibility: LolClashClashVisibility;
  VoiceEobQuitDelaySeconds: number;
  VoiceNoDelayAutoStartSeconds: number;
  VoiceRandomStartMaxSeconds: number;
  VoiceRandomStartMinSeconds: number;
  VoiceRetryCountLimit: number;
  VoiceRetryDelaySeconds: number;
}

export interface LolClashClashDisabledConfig {
  disabledReason: string;
  estimatedEnableTimeMillis: number;
}

export interface LolClashClashSettingCategory {
  simpleStateFlagIds: Array<string>;
}

export type LolClashClashState = "Disabled" | "Enabled";

export type LolClashClashVisibility = "Hidden" | "Visible";

export interface LolClashClientFailedInvite {
  exception: string;
  playerId: number;
}

export interface LolClashClubsSummoner {
  displayName: string;
  profileIconId: number;
  summonerId: number;
  summonerLevel: number;
}

export interface LolClashEogPlayerUpdateDTO {
  bid: number;
  bracketSize: number;
  earnedRewards: Array<ClashRewardDefinition>;
  gameId: number;
  lowestPosition: number;
  rewardProgress: Array<ClashRewardDefinition>;
  seasonVp: number;
  themeVp: number;
  tier: number;
  tournamentId: number;
  winner: boolean;
}

export interface LolClashFindPlayers {
  count: number;
  invitationId: string;
  memberId: number;
  page: number;
}

export interface LolClashFindTeams {
  count: number;
  page: number;
  tournamentId: number;
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
  dodgeIds: Array<number>;
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
  replacedSummonerId: number;
  substituteSummonerId: number;
}

export type LolClashKdaClassification = "LOW" | "AVERAGE" | "HIGH";

export interface LolClashKickRequest {
  summonerId: number;
}

export interface LolClashLftState {
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
}

export interface LolClashLoginSession {
  state: LolClashLoginSessionState;
  summonerId: number;
}

export type LolClashLoginSessionState = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolClashMatchmakingDodgeData {
  dodgerId: number;
  state: LolClashMatchmakingDodgeState;
}

export type LolClashMatchmakingDodgeState =
  | "Invalid"
  | "PartyDodged"
  | "StrangerDodged"
  | "TournamentDodged";

export type LolClashMatchmakingDodgeWarning = "None" | "Warning" | "Penalty";

export interface LolClashMatchmakingReadyCheckResource {
  declinerIds: Array<number>;
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
  queueId: number;
  readyCheck: LolClashMatchmakingReadyCheckResource;
}

export interface LolClashMemberBanUnbanNotification {
  notifyPlayerId: number;
  notifyPuuid: string;
  notifyReason: LolClashNotifyReason;
  playerId: number;
  reason: string;
  tournaments: Array<MemberBanUnbanTournament>;
}

export interface LolClashNoShowPingDTO {
  dodgeTime: number;
  matchId: number;
  tournamentId: number;
}

export interface LolClashNoShowPingResponse {
  data: string;
  dodgeTime: number;
  matchId: number;
  tournamentId: number;
}

export interface LolClashNoShowPingResponseData {
  dodgeTime: number;
  gameflowState: LolClashGameflowPhase;
  isPlaymodeRestricted: boolean;
  loginTime: number;
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
  ticketAmount: number;
  ticketType: TicketType;
}

export interface LolClashPendingRosterNotification {
  notifyReason: LolClashNotifyReason;
  pendingRoster: PendingRosterDTO;
  sourcePlayerId: number;
  targetPlayerId: number;
}

export interface LolClashPlayerChatRoster {
  endTimeMs: number;
  iconColorId: number;
  iconId: number;
  invitationId: string;
  isRegistered: boolean;
  key: string;
  logoUrl: string;
  name: string;
  playerState: LolClashPlayerState;
  shortName: string;
  startTimeMs: number;
  tournamentId: number;
  tournamentState: LolClashTournamentState;
}

export interface LolClashPlayerData {
  isClashBanned: boolean;
  lft: boolean;
  primaryPos: string;
  secondaryPos: string;
  tickets: number | undefined;
  tier: number;
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
  id: number;
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
  sourceSummonerId: number;
  targetSummonerId: number;
  tournamentNotifyReason: LolClashTournamentNotifyReason;
}

export interface LolClashPlayerRewards {
  seasonVp: number;
  themeVp: Array<LolClashThemeVp>;
}

export type LolClashPlayerState =
  | "NO_ROSTER"
  | "PENDING_ROSTER"
  | "REGISTERED_ROSTER"
  | "BRACKET_ROSTER"
  | "ELIMINATED";

export interface LolClashPlayerTournamentData {
  bracketId: number;
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
  phaseId: number;
  presenceState: LolClashPresenceState;
  readyForVoice: boolean;
  rosterId: string;
  tournamentId: number;
}

export type LolClashPresenceState = "NONE" | "LOCKED_IN" | "SCOUTING";

export interface LolClashProfileInfo {
  honorLevel: number;
}

export interface LolClashQueue {
  areFreeChampionsAllowed: boolean;
  category: LolClashQueueGameCategory;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolClashQueueGameTypeConfig;
  id: number;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  mapId: number;
  maxLevel: number;
  maxSummonerLevelForFirstWinOfTheDay: number;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  name: string;
  numPlayersPerTeam: number;
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
  banTimerDuration: number;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  id: number;
  learningQuests: boolean;
  mainPickTimerDuration: number;
  maxAllowableBans: number;
  name: string;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: number;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolClashQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<number>;
}

export interface LolClashRankedScoutingMember {
  championScoutingData: Array<LolClashRankedScoutingTopChampion>;
  playerId: number;
}

export interface LolClashRankedScoutingTopChampion {
  championId: number;
  gameCount: number;
  kda: string;
  kdaClassification: LolClashKdaClassification;
  rank: number;
  winCount: number;
  winRate: number;
}

export interface LolClashReadyCheckInfo {
  acceptError: string;
  isAcceptSuccessful: boolean;
  queueId: number;
  readyCheckResource: LolClashMatchmakingReadyCheckResource;
  timestampLastClashGameflowDodge: number;
  timestampReceived: number;
  timestampResponseComplete: number;
}

export interface LolClashRegisteredRosterNotification {
  notifyReason: LolClashRosterNotifyReason;
  roster: RosterDTO;
}

export interface LolClashRoster {
  availableLogos: Array<RewardLogo>;
  captainSummonerId: number;
  currentBracketWins: number;
  highTierVariance: boolean;
  iconColorId: number;
  iconId: number;
  id: string;
  invitationId: string;
  isActiveInCurrentPhase: boolean;
  isClashBanned: boolean;
  isCurrentBracketComplete: boolean;
  isEliminated: boolean;
  isRegistered: boolean;
  lft: boolean;
  losses: number;
  members: Array<LolClashRosterMember>;
  name: string;
  numCompletedPeriods: number;
  phaseInfos: Array<LolClashRosterPhaseInfo>;
  points: number;
  shortName: string;
  suggestedInvites: Array<LolClashSuggestedInvite>;
  tier: number;
  tournamentId: number;
  wins: number;
  withdraw: RosterWithdraw;
}

export interface LolClashRosterDetails {
  iconColorId: number;
  iconId: number;
  name: string;
  shortName: string;
}

export interface LolClashRosterDynamicStateNotification {
  notifyReason: LolClashRosterNotifyReason;
  rosterDynamicState: RosterDynamicStateDTO;
  sourcePlayerId: number;
}

export interface LolClashRosterMatchAggregatedStats {
  durationMs: number;
  gameId: number;
  kills: number;
  loserBracket: boolean;
  opponentIconColorId: number;
  opponentIconId: number;
  opponentKills: number;
  opponentShortName: string;
  playerChampionIds: number | undefined;
  round: number;
  win: boolean;
}

export interface LolClashRosterMember {
  buyinType: TicketType;
  currentBuyin: number;
  incomingOffers: Array<LolClashTicketOffer>;
  inviteType: InviteType;
  inviterId: number;
  isSubForOtherTeam: boolean;
  isSubbedOut: boolean;
  isSubstitute: boolean;
  position: Position;
  previousBuyin: number;
  replacedSummonerId: number;
  state: LolClashRosterMemberState;
  summonerId: number;
  tier: number;
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
  bracketSize: number;
  matchStats: Array<LolClashRosterMatchAggregatedStats>;
  period: number;
  playerBids: number | undefined;
  time: number;
}

export interface LolClashRosterPhaseInfo {
  checkinTime: number;
  isBracketComplete: boolean;
  period: number;
  phaseId: number;
}

export interface LolClashRosterPlayerAggregatedStats {
  rawStatsMax: number | undefined;
  rawStatsSum: number | undefined;
  sub: boolean;
}

export interface LolClashRosterPlayerNotification {
  notifyReason: LolClashRosterNotifyReason;
  playerNotificationDTO: PlayerDTO;
  roster: RosterDTO;
  sourcePlayerId: number;
}

export interface LolClashRosterStats {
  endTimeMs: number;
  periodStats: Array<LolClashRosterPeriodAggregatedStats>;
  playerStats: LolClashRosterPlayerAggregatedStats | undefined;
  rosterIconColorId: number;
  rosterIconId: number;
  rosterId: number;
  rosterName: string;
  rosterShortName: string;
  startTimeMs: number;
  tier: number;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  tournamentPeriods: number;
  tournamentThemeId: number;
}

export interface LolClashRosterWithdrawNotification {
  notifyReason: LolClashRosterNotifyReason;
  rosterId: number;
  sourcePlayerId: number;
  tournamentId: number;
  version: number;
  withdraw: RosterWithdraw;
}

export interface LolClashScoutingChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
}

export interface LolClashScoutingChampions {
  playerId: number;
  topMasteries: Array<LolClashScoutingChampionMastery>;
  topSeasonChampions: Array<LolClashScoutingSeasonChampion>;
  totalMasteryScore: number;
}

export interface LolClashScoutingSeasonChampion {
  championId: number;
  gameCount: number;
  kda: string;
  kdaClassification: LolClashKdaClassification;
  winCount: number;
  winRate: number;
}

export interface LolClashSetPositionRequest {
  position: Position;
}

export interface LolClashSetTicketRequest {
  ticketAmount: number;
  ticketType: TicketType;
}

export interface LolClashSettingCategory {
  data: boolean | undefined;
  schemaVersion: number;
}

export interface LolClashSimpleStateFlag {
  id: string;
  status: LolClashSimpleStateStatus;
}

export type LolClashSimpleStateStatus = "UNACKNOWLEDGED" | "ACKNOWLEDGED";

export interface LolClashSuggestedInvite {
  suggesterSummonerId: number;
  summonerId: number;
}

export interface LolClashSuggestionInvite {
  inviteePlayers: Array<number>;
  inviterId: number;
}

export interface LolClashSuggestionInvitee {
  captainId: number;
  inviteeId: number;
}

export interface LolClashTeamOpenState {
  captainId: number;
  invitationId: string;
  openTeam: boolean;
}

export interface LolClashThemeVp {
  themeId: number;
  vp: number;
}

export interface LolClashThirdPartyApiPlayer {
  role: string;
  summonerId: number;
}

export interface LolClashThirdPartyApiRoster {
  captain: LolClashThirdPartyApiPlayer;
  members: Array<LolClashThirdPartyApiPlayer>;
}

export interface LolClashTicketOffer {
  amount: number;
  isAccepted: boolean;
  summonerId: number;
  ticketType: TicketType;
}

export interface LolClashTournament {
  allowRosterCreation: boolean;
  bracketFormationInitDelayMs: number;
  bracketFormationIntervalMs: number;
  bracketSize: string;
  buyInOptions: Array<number>;
  buyInOptionsPremium: Array<number>;
  endTimeMs: number;
  entryFee: number;
  id: number;
  isHonorRestrictionEnabled: boolean;
  isRankedRestrictionEnabled: boolean;
  isSmsRestrictionEnabled: boolean;
  lastThemeOfSeason: boolean;
  lft: boolean;
  maxInvites: number;
  maxSubstitutes: number;
  maxSuggestionsPerPlayer: number;
  nameLocKey: string;
  nameLocKeySecondary: string;
  phases: Array<LolClashTournamentPhase>;
  resumeTime: number;
  rewardConfig: Array<ClashRewardConfigClient>;
  rosterCreateDeadline: number;
  rosterSize: number;
  scoutingDurationMs: number;
  startTimeMs: number;
  status: TournamentStatusEnum;
  themeId: number;
  tierConfigs: Array<TierConfig>;
}

export interface LolClashTournamentGameEnd {
  bracketId: number;
  oldBracket: LolClashBracket;
  tournamentId: number;
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
  id: number;
  limitTiers: Array<number>;
  lockinStartTime: number;
  period: number;
  scoutingStartTime: number;
  tournamentId: number;
}

export interface LolClashTournamentPhaseProgressNotificationDTO {
  capacityStatus: CapacityEnum;
  phaseId: number;
  tournamentId: number;
}

export type LolClashTournamentState =
  | "UPCOMING"
  | "IDLE"
  | "LOCK_IN"
  | "SCOUTING"
  | "IN_GAME"
  | "RESULTS";

export interface LolClashTournamentStateInfo {
  currentPhaseId: number;
  nextPhaseId: number;
  nextStateChangeTime: number;
  numRemainingPeriods: number;
  state: LolClashTournamentState;
  tournamentId: number;
}

export interface LolClashTournamentSummary {
  bracketId: number;
  rosterId: string;
  state: LolClashTournamentState;
  tournamentId: number;
}

export interface LolClashTournamentUpdatedNotification {
  currentRetry: number;
  maxRetry: number;
  missingPlayerIds: Array<number>;
  notifyReason: LolClashRosterNotifyReason;
  retrySeconds: number;
}

export interface LolClashTournamentUpdatedNotificationDTO {
  reason: LolClashTournamentNotifyReason;
  relevantPhaseId: number;
  tournament: TournamentDTO;
  tournamentId: number;
}

export interface LolClashTournamentWinnerHistory {
  tournamentId: number;
  winners: Array<LolClashTournamentWinnerInfo>;
}

export interface LolClashTournamentWinnerInfo {
  averageWinDuration: number;
  createTime: number;
  logo: number;
  logoColor: number;
  name: string;
  playerIds: Array<number>;
  rosterId: number;
  shortName: string;
  tier: number;
}

export interface LolClashUserResource {
  lol: string | undefined;
  summonerId: number;
}

export interface LolCollectionsAccountIdAndSummonerId {
  summonerId: number;
}

export interface LolCollectionsCollectionsChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  formattedChampionPoints: string;
  formattedMasteryGoal: string;
  highestGrade: string;
  lastPlayTime: number;
  playerId: number;
  tokensEarned: number;
}

export interface LolCollectionsCollectionsChestEligibility {
  earnableChests: number;
  maximumChests: number;
  nextChestRechargeTime: number;
}

export interface LolCollectionsCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
  rental: LolCollectionsCollectionsRental;
}

export interface LolCollectionsCollectionsRental {
  endDate: number;
  purchaseDate: number;
  rented: boolean;
  winCountRemaining: number;
}

export interface LolCollectionsCollectionsSummonerBackdrop {
  accountId: number;
  backdropImage: string;
  backdropMaskColor: string;
  backdropType: LolCollectionsCollectionsSummonerBackdropType;
  backdropVideo: string;
  championId: number;
  profileIconId: number;
  puuid: string;
  summonerId: number;
}

export type LolCollectionsCollectionsSummonerBackdropType =
  | "default"
  | "summoner-icon"
  | "highest-mastery"
  | "specified-skin";

export interface LolCollectionsCollectionsSummonerSpells {
  spells: Array<number>;
  summonerId: number;
}

export interface LolCollectionsCollectionsTopChampionMasteries {
  masteries: Array<LolCollectionsCollectionsChampionMastery>;
  score: number;
  summonerId: number;
}

export interface LolCollectionsCollectionsWardSkin {
  description: string;
  id: number;
  name: string;
  ownership: LolCollectionsCollectionsOwnership;
  wardImagePath: string;
  wardShadowImagePath: string;
}

export interface LolCollectionsCollectionsWardSkinList {
  wardSkinList: Array<number>;
}

export interface LolCollectionsGameDataChampionMasteries {
  tree: LolCollectionsGameDataChampionMasteryTree;
}

export interface LolCollectionsGameDataChampionMasteryGroup {
  id: number;
  rows: Array<LolCollectionsGameDataChampionMasteryRow>;
}

export interface LolCollectionsGameDataChampionMasteryRow {
  masteries: Array<number>;
}

export interface LolCollectionsGameDataChampionMasteryTree {
  groups: Array<LolCollectionsGameDataChampionMasteryGroup>;
}

export interface LolCollectionsGameDataChampionQuestSkin {
  id: number;
  name: string;
  splashPath: string;
  splashVideoPath: string;
}

export interface LolCollectionsGameDataChampionSkin {
  id: number;
  isBase: boolean;
  name: string;
  questSkinInfo: LolCollectionsGameDataQuestSkinInfo;
  splashPath: string;
  splashVideoPath: string;
}

export interface LolCollectionsGameDataChampionSummary {
  id: number;
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
  itemId: number;
  ownershipType: LolCollectionsItemOwnershipType;
  purchaseDate: string;
  quantity: number;
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
  itemId: number;
  loyalty: boolean;
  lsb: boolean;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: number;
  rental: boolean;
  usedInGameDate: string;
  wins: number;
}

export interface LolCollectionsInventoryItemWithPayload {
  inventoryType: string;
  itemId: number;
  ownershipType: LolCollectionsItemOwnershipType;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: number;
  uuid: string;
}

export type LolCollectionsItemOwnershipType = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolCollectionsLcdsDynamicClientConfig {
  DisabledChampions: boolean | undefined;
}

export interface LolCollectionsLoginSession {
  connected: boolean;
  state: LolCollectionsLoginSessionStates;
  summonerId: number;
}

export type LolCollectionsLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolCollectionsNumberFormattingBehavior {
  digitsForThousandsSeperator: number;
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
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolCollectionsSummoner {
  accountId: number;
  profileIconId: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
}

export interface LolCollectionsSummonerProfile {
  backgroundSkinId: number;
}

export interface LolCollectionsSummonerProfileUpdate {
  key: string;
  value: boolean | undefined;
}

export interface LolCollectionsTPVSaveResponseDTO {
  data: string;
}

export interface LolContentTargetingAccountIdAndSummonerId {
  summonerId: number;
}

export interface LolContentTargetingCollectionsChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  playerId: number;
}

export interface LolContentTargetingContentTargetingFilterResponse {
  filters: Array<string>;
}

export interface LolContentTargetingContentTargetingLocaleResponse {
  locale: string;
}

export interface LolContentTargetingGameflowGameData {
  gameId: number;
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
  summonerId: number;
}

export type LolContentTargetingLoginSessionState =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolContentTargetingMission {
  completedDate: number;
  id: string;
  internalName: string;
  status: string;
}

export interface LolContentTargetingPlatformConfig {
  ABTestFilterEnabled: boolean;
  ABTestFilterGroups: number;
  ABTestFilterSalt: number;
  AsynchronousEventHandlerSetupDelayInSeconds: number;
  Enabled: boolean;
  EntitlementsFilterEnabled: boolean;
  EntitlementsPrefix: string;
  LevelFilterEnabled: boolean;
  LocationFiltersEnabled: boolean;
  MainFilterEnabled: boolean;
  Mapping: string;
  MasteryFilterChampionLimit: number;
  MasteryFilterDaysSinceLastPlayed: number;
  MasteryFilterEnabled: boolean;
  MasteryFilterLevelThreshold: number;
  MissionsFilterEnabled: boolean;
  RankFilterEnabled: boolean;
  RankedFilterEnabled: boolean;
  SummonerIconFilterEnabled: boolean;
  TargetingAttributeStorageBaseUri: string;
  TargetingAttributeStorageEnabled: boolean;
  TasIngestionDelayInSeconds: number;
}

export interface LolContentTargetingQueue {
  category: LolContentTargetingQueueGameCategory;
  gameMode: string;
  id: number;
  mapId: number;
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
  profileIconId: number;
  summonerLevel: number;
}

export interface LolContentTargetingTargetingAttributes {
  result: boolean | undefined | undefined;
}

export interface LolContentTargetingToken {
  entitlements: Array<string>;
}

export interface LolCosmeticsAccountSettingsCategoryDataResource {
  typeToLastOpenedDate: number | undefined;
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
  itemPriceMap: number | undefined;
}

export interface LolCosmeticsCompanionsGroupViewModel {
  groupId: number;
  groupName: string;
  items: Array<LolCosmeticsCosmeticsCompanionViewModel>;
  numAvailable: number;
  numOwned: number;
}

export interface LolCosmeticsCompanionsGroupedViewModel {
  defaultItemId: number;
  groups: Array<LolCosmeticsCompanionsGroupViewModel>;
  selectedLoadoutItem: LolCosmeticsCosmeticsCompanionViewModel;
}

export interface LolCosmeticsCosmeticSettingsResource {
  data: LolCosmeticsAccountSettingsCategoryDataResource;
  schemaVersion: number;
}

export interface LolCosmeticsCosmeticsCompanion {
  color: string;
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: number;
  itemId: number;
  level: number;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: number;
  selected: boolean;
  species: string;
  upgrades: Array<string>;
}

export interface LolCosmeticsCosmeticsCompanionViewModel {
  color: string;
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: number;
  isRecentItem: boolean;
  itemId: number;
  level: number;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  offerData: LolCosmeticsCapOffer;
  owned: boolean;
  purchaseDate: string;
  rarityValue: number;
  selected: boolean;
  species: string;
  starShardsPrice: LolCosmeticsCosmeticsOfferPrice;
  upgrades: Array<LolCosmeticsCosmeticsCompanionViewModel>;
}

export interface LolCosmeticsCosmeticsOfferPrice {
  offerId: string;
  price: number;
}

export interface LolCosmeticsCosmeticsTFTDamageSkin {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: number;
  groupName: string;
  itemId: number;
  level: number;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: number;
  selected: boolean;
  upgrades: Array<string>;
}

export interface LolCosmeticsCosmeticsTFTDamageSkinViewModel {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: number;
  groupName: string;
  isRecentItem: boolean;
  itemId: number;
  level: number;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: number;
  selected: boolean;
  upgrades: Array<LolCosmeticsCosmeticsTFTDamageSkinViewModel>;
}

export interface LolCosmeticsCosmeticsTFTMapSkin {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: number;
  groupName: string;
  itemId: number;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: number;
  selected: boolean;
}

export interface LolCosmeticsCosmeticsTFTMapSkinViewModel {
  contentId: string;
  description: string;
  f2p: boolean;
  groupId: number;
  groupName: string;
  isRecentItem: boolean;
  itemId: number;
  loadoutsIcon: string;
  loyalty: boolean;
  name: string;
  owned: boolean;
  purchaseDate: string;
  rarityValue: number;
  selected: boolean;
}

export interface LolCosmeticsGameDataCompanion {
  TFTOnly: boolean;
  colorName: string;
  contentId: string;
  description: string;
  itemId: number;
  level: number;
  loadoutsIcon: string;
  name: string;
  rarityValue: number;
  speciesId: number;
  speciesName: string;
  upgrades: Array<string>;
}

export interface LolCosmeticsGameDataTFTDamageSkin {
  contentId: string;
  description: string;
  groupId: number;
  groupName: string;
  itemId: number;
  level: number;
  loadoutsIcon: string;
  name: string;
  rarityValue: number;
}

export interface LolCosmeticsGameDataTFTMapSkin {
  contentId: string;
  description: string;
  groupId: number;
  groupName: string;
  itemId: number;
  loadoutsIcon: string;
  name: string;
  rarityValue: number;
}

export interface LolCosmeticsLoadout {
  id: string;
  itemId: number;
  loadout: LolCosmeticsLoadoutItem | undefined;
  name: string;
  scope: string;
}

export interface LolCosmeticsLoadoutItem {
  contentId: string;
  inventoryType: string;
  itemId: number;
}

export interface LolCosmeticsLoadoutUpdateDto {
  loadout: LolCosmeticsLoadoutItem | undefined;
}

export interface LolCosmeticsTFTDamageSkinGroupViewModel {
  groupId: number;
  groupName: string;
  items: Array<LolCosmeticsCosmeticsTFTDamageSkinViewModel>;
  numAvailable: number;
  numOwned: number;
}

export interface LolCosmeticsTFTDamageSkinGroupedViewModel {
  defaultItemId: number;
  groups: Array<LolCosmeticsTFTDamageSkinGroupViewModel>;
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTDamageSkinViewModel;
}

export interface LolCosmeticsTFTMapSkinGroupViewModel {
  groupId: number;
  groupName: string;
  items: Array<LolCosmeticsCosmeticsTFTMapSkinViewModel>;
  numAvailable: number;
  numOwned: number;
}

export interface LolCosmeticsTFTMapSkinGroupedViewModel {
  defaultItemId: number;
  groups: Array<LolCosmeticsTFTMapSkinGroupViewModel>;
  selectedLoadoutItem: LolCosmeticsCosmeticsTFTMapSkinViewModel;
}

export interface LolCosmeticsTFTSettingsDataResource {
  iconOverride: string;
}

export interface LolCosmeticsTFTSettingsResource {
  data: LolCosmeticsTFTSettingsDataResource;
  schemaVersion: number;
}

export interface LolCosmeticsUserResource {
  lol: string | undefined;
  summonerId: number;
}

export interface LolDiscordRpGameDataChampionSummary {
  alias: string;
  id: number;
  name: string;
}

export interface LolDiscordRpPartyPresenceData {
  maxPlayers: number;
  partyId: string;
  queueId: number;
  summoners: Array<number>;
}

export interface LolEmailVerificationAccessToken {
  expiry: number;
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
  championId: number;
  grade: string;
  playerId: number;
}

export interface LolEndOfGameChampionMasteryMini {
  championId: number;
  championLevel: number;
  playerId: number;
}

export interface LolEndOfGameChampionMasteryUpdate {
  bonusPointsGained: number;
  championId: number;
  gameId: number;
  grade: string;
  hasLeveledUp: boolean;
  id: string;
  level: number;
  levelUpList: Array<LolEndOfGameChampionMasteryMini>;
  memberGrades: Array<LolEndOfGameChampionMasteryGrade>;
  playerId: number;
  pointsBeforeGame: number;
  pointsGained: number;
  pointsGainedIndividualContribution: number;
  pointsSinceLastLevelBeforeGame: number;
  pointsUntilNextLevelAfterGame: number;
  pointsUntilNextLevelBeforeGame: number;
  score: number;
}

export interface LolEndOfGameEndOfGamePlayer {
  botPlayer: boolean;
  championId: number;
  detectedTeamPosition: string;
  elo: number;
  eloChange: number;
  gameId: number;
  isReportingDisabled: boolean;
  items: Array<number>;
  leaver: boolean;
  leaves: number;
  level: number;
  losses: number;
  profileIconId: number;
  selectedPosition: string;
  skinIndex: number;
  skinName: string;
  spell1Id: number;
  spell2Id: number;
  stats: boolean | undefined;
  summonerId: number;
  summonerName: string;
  teamId: number;
  userId: number;
  wins: number;
}

export interface LolEndOfGameEndOfGamePlayerComplaintV2 {
  comment: string;
  gameId: number;
  offenses: string;
  reportedSummonerId: number;
}

export interface LolEndOfGameEndOfGamePlayerReport {
  comment: string;
  gameId: number;
  offense: string;
  reportedPuuid: string;
}

export interface LolEndOfGameEndOfGamePoints {
  pointChangeFromChampionsOwned: number;
  pointChangeFromGameplay: number;
  pointsUntilNextReroll: number;
  pointsUsed: number;
  previousPoints: number;
  rerollCount: number;
  totalPoints: number;
}

export interface LolEndOfGameEndOfGameStats {
  accountId: number;
  basePoints: number;
  battleBoostIpEarned: number;
  boostIpEarned: number;
  boostXpEarned: number;
  causedEarlySurrender: boolean;
  championId: number;
  coOpVsAiMinutesLeftToday: number;
  coOpVsAiMsecsUntilReset: number;
  completionBonusPoints: number;
  currentLevel: number;
  customMinutesLeftToday: number;
  customMsecsUntilReset: number;
  difficulty: string;
  earlySurrenderAccomplice: boolean;
  elo: number;
  eloChange: number;
  experienceEarned: number;
  experienceTotal: number;
  firstWinBonus: number;
  gameEndedInEarlySurrender: boolean;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  globalBoostXpEarned: number;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  ipEarned: number;
  ipTotal: number;
  leveledUp: boolean;
  loyaltyBoostIpEarned: number;
  loyaltyBoostXpEarned: number;
  missionsXpEarned: number;
  myTeamStatus: string;
  newSpells: Array<number>;
  nextLevelXp: number;
  odinBonusIp: number;
  partyRewardsBonusIpEarned: number;
  pointsPenalties: boolean | undefined;
  preLevelUpExperienceTotal: number;
  preLevelUpNextLevelXp: number;
  previousLevel: number;
  previousXpTotal: number;
  queueBonusEarned: number;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  rerollData: LolEndOfGameEndOfGamePoints;
  roomName: string;
  roomPassword: string;
  rpEarned: number;
  sendStatsToTournamentProvider: boolean;
  skinId: number;
  skinIndex: number;
  summonerId: number;
  summonerName: string;
  talentPointsGained: number;
  teamBoost: LolEndOfGameEndOfGameTeamBoost;
  teamEarlySurrendered: boolean;
  teams: Array<LolEndOfGameEndOfGameTeam>;
  timeUntilNextFirstWinBonus: number;
  userId: number;
}

export interface LolEndOfGameEndOfGameTeam {
  championBans: Array<number>;
  fullId: string;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
  memberStatusString: string;
  name: string;
  players: Array<LolEndOfGameEndOfGamePlayer>;
  stats: boolean | undefined;
  tag: string;
  teamId: number;
}

export interface LolEndOfGameEndOfGameTeamBoost {
  availableSkins: Array<number>;
  ipReward: number;
  ipRewardForPurchaser: number;
  price: number;
  skinUnlockMode: string;
  summonerName: string;
  unlocked: boolean;
}

export interface LolEndOfGameGameClientEndOfGame {
  gameClientEOG: LolEndOfGameGameClientEndOfGameStats;
}

export interface LolEndOfGameGameClientEndOfGameStats {
  gameId: number;
  gameMode: string;
  isRanked: boolean;
  queueId: number;
  queueType: string;
  statsBlock: boolean | undefined;
}

export interface LolEndOfGameGameDataChampionSummary {
  alias: string;
  id: number;
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
  rarity: number;
  squareIconPath: string;
  traits: Array<LolEndOfGameGameDataTftTrait>;
}

export interface LolEndOfGameGameDataTftItem {
  id: number;
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
  observerServerPort: number;
  running: boolean;
}

export interface LolEndOfGameGameflowGameData {
  gameId: number;
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
  accountId: number;
  state: LolEndOfGameLoginSessionStates;
  summonerId: number;
}

export type LolEndOfGameLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolEndOfGameQueue {
  id: number;
  isRanked: boolean;
  type: string;
}

export type LolEndOfGameReportRecipientMode = "Legacy" | "Game-Agnostic" | "Combined";

export interface LolEndOfGameRerollDataBagForClientV1 {
  maximumRerolls: number;
  pointCostOfReroll: number;
  pointsGainedLastGame: number;
  pointsUntilNextReroll: number;
  rerollCount: number;
  totalPoints: number;
}

export interface LolEndOfGameSimpleMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolEndOfGameSummoner {
  puuid: string;
  summonerId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
}

export interface LolEndOfGameTFTEndOfGameCompanionViewModel {
  colorName: string;
  icon: string;
  speciesName: string;
}

export interface LolEndOfGameTFTEndOfGameItemViewModel {
  icon: string;
  id: number;
  name: string;
}

export interface LolEndOfGameTFTEndOfGamePieceViewModel {
  icon: string;
  items: Array<LolEndOfGameTFTEndOfGameItemViewModel>;
  level: number;
  name: string;
  price: number;
  traits: Array<LolEndOfGameTFTEndOfGameTraitViewModel>;
}

export interface LolEndOfGameTFTEndOfGamePlayerViewModel {
  boardPieces: Array<LolEndOfGameTFTEndOfGamePieceViewModel>;
  companion: LolEndOfGameTFTEndOfGameCompanionViewModel;
  ffaStanding: number;
  health: number;
  iconId: number;
  isLocalPlayer: boolean;
  partnerGroupId: number;
  puuid: string;
  rank: number;
  summonerId: number;
  summonerName: string;
}

export interface LolEndOfGameTFTEndOfGameTraitViewModel {
  id: string;
  name: string;
}

export interface LolEndOfGameTFTEndOfGameViewModel {
  gameId: number;
  gameLength: number;
  isRanked: boolean;
  localPlayer: LolEndOfGameTFTEndOfGamePlayerViewModel;
  players: Array<LolEndOfGameTFTEndOfGamePlayerViewModel>;
  queueId: number;
  queueType: string;
}

export interface LolEsportStreamNotificationsESportStreamNotificationsConfig {
  beappFailureLongPollMinutes: number;
  notificationsAssetMagickURL: string;
  notificationsEnabled: boolean;
  notificationsLongPollMinutes: number;
  notificationsServiceEndpoint: string;
  notificationsServiceEndpointV2: string;
  notificationsShortPollMinutes: number;
  notificationsStreamGroupSlug: string;
  notificationsStreamURL: string;
  useServiceEndpointV2: boolean;
}

export interface LolEsportStreamNotificationsESportsAPI_streamgroups {
  content: string;
  id: number;
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
  teamAId: number;
  teamALogoUrl: string;
  teamAName: string;
  teamBAcronym: string;
  teamBGuid: string;
  teamBId: number;
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
  team: number;
}

export interface LolEsportStreamNotificationsEsportsAPI_teams {
  acronym: string;
  guid: string;
  id: number;
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
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolFeaturedModesAccountIdAndSummonerId {
  summonerId: number;
}

export interface LolFeaturedModesCollectionsOwnership {
  freeToPlayReward: boolean;
  owned: boolean;
}

export interface LolFeaturedModesCollectionsSummonerIcon {
  iconId: number;
  ownership: LolFeaturedModesCollectionsOwnership;
}

export interface LolFeaturedModesEligibility {
  eligible: boolean;
  queueId: number;
  restrictions: Array<LolFeaturedModesEligibilityRestriction>;
}

export interface LolFeaturedModesEligibilityRestriction {
  expiredTimestamp: number;
  restrictionArgs: string | undefined;
  restrictionCode: LolFeaturedModesEligibilityRestrictionCode;
  summonerIds: Array<number>;
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
  MaxNotificationSaveDelayMinutes: number;
  NotificationsEnabled: boolean;
  QueueToggleNotificationMinutesThreshold: number;
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
  summonerId: number;
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
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolFeaturedModesQueue {
  category: LolFeaturedModesQueueGameCategory;
  gameMode: string;
  id: number;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapId: number;
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
  summonerId: number;
}

export interface LolGameQueuesLoginDataPacket {
  gameTypeConfigs: Array<LolGameQueuesQueueGameTypeConfig>;
}

export interface LolGameQueuesLoginSession {
  accountId: number;
  connected: boolean;
  state: LolGameQueuesLoginSessionStates;
  summonerId: number;
}

export type LolGameQueuesLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolGameQueuesPlatformConfigEnabledMap {
  gameMapId: number;
  minPlayers: number;
}

export interface LolGameQueuesQueue {
  allowablePremadeSizes: Array<number>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolGameQueuesQueueGameCategory;
  championsRequiredToPlay: number;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolGameQueuesQueueGameTypeConfig;
  id: number;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapId: number;
  maxDivisionForPremadeSize2: string;
  maxLevel: number;
  maxSummonerLevelForFirstWinOfTheDay: number;
  maxTierForPremadeSize2: string;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  name: string;
  numPlayersPerTeam: number;
  queueAvailability: LolGameQueuesQueueAvailability;
  queueRewards: LolGameQueuesQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
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
  spectatorSlotLimit: number;
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
  mapId: number;
  maxLevel: number;
  maxPlayerCount: number;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  mutators: Array<LolGameQueuesQueueGameTypeConfig>;
  numPlayersPerTeam: number;
  queueAvailability: LolGameQueuesQueueAvailability;
}

export type LolGameQueuesQueueGameCategory = "None" | "Custom" | "PvP" | "VersusAi" | "Alpha";

export interface LolGameQueuesQueueGameTypeConfig {
  advancedLearningQuests: boolean;
  allowTrades: boolean;
  banMode: string;
  banTimerDuration: number;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  gameModeOverride: string;
  id: number;
  learningQuests: boolean;
  mainPickTimerDuration: number;
  maxAllowableBans: number;
  name: string;
  numPlayersPerTeamOverride: number;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: number;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolGameQueuesQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<number>;
}

export interface LolGameQueuesQueueTranslation {
  description: string;
  detailedDescription: string;
  name: string;
  shortName: string;
}

export interface LolGameSettingsLoginSession {
  accountId: number;
  gasToken: boolean | undefined;
  state: LolGameSettingsLoginSessionStates;
  summonerId: number;
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
  spells: Array<number>;
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
  observerServerPort: number;
  running: boolean;
  serverIp: string;
  serverPort: number;
  visible: boolean;
}

export interface LolGameflowGameflowGameData {
  gameId: number;
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
  dodgeIds: Array<number>;
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
  id: number;
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
  pid: number;
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
  invitedSummonerIds: Array<number>;
  isCustom: boolean;
  isLeader: boolean;
  isPracticeTool: boolean;
  isSpectator: boolean;
  lobbyId: string;
  memberSummonerIds: Array<number>;
  queueId: number;
}

export interface LolGameflowLoginSession {
  accountId: number;
  connected: boolean;
  state: LolGameflowLoginSessionStates;
  summonerId: number;
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
  allowablePremadeSizes: Array<number>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolGameflowQueueGameCategory;
  championsRequiredToPlay: number;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolGameflowQueueGameTypeConfig;
  id: number;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapId: number;
  maxLevel: number;
  maxSummonerLevelForFirstWinOfTheDay: number;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  name: string;
  numPlayersPerTeam: number;
  queueAvailability: LolGameflowQueueAvailability;
  queueRewards: LolGameflowQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
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
  banTimerDuration: number;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  id: number;
  learningQuests: boolean;
  mainPickTimerDuration: number;
  maxAllowableBans: number;
  name: string;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: number;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolGameflowQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<number>;
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
  accountId: number;
  state: LolGeoinfoLoginSessionState;
  summonerId: number;
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
  accountId: number;
  state: LolHeartbeatLoginSessionStates;
  summonerId: number;
}

export type LolHeartbeatLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolHighlightsHighlight {
  fileSizeBytes: number;
  filepath: string;
  id: number;
  mtimeIso8601: string;
  mtimeMsUtc: number;
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
  accountId: number;
  summonerId: number;
}

export interface LolHonorV2ApiHonorPlayerServerRequest {
  gameId: number;
  honorCategory: string;
  summonerId: number;
}

export interface LolHonorV2Ballot {
  eligiblePlayers: Array<LolHonorV2EligiblePlayer>;
  gameId: number;
}

export interface LolHonorV2DynamicHonorMessage {
  messageId: string;
  value: number;
}

export interface LolHonorV2EligiblePlayer {
  championId: number;
  skinIndex: number;
  skinName: string;
  summonerId: number;
  summonerName: string;
}

export interface LolHonorV2EndOfGamePlayer {
  botPlayer: boolean;
  championId: number;
  gameId: number;
  isReportingDisabled: boolean;
  leaver: boolean;
  profileIconId: number;
  skinIndex: number;
  skinName: string;
  stats: boolean | undefined;
  summonerId: number;
  summonerName: string;
  teamId: number;
  userId: number;
  wins: number;
}

export interface LolHonorV2EndOfGameStats {
  accountId: number;
  championId: number;
  difficulty: string;
  gameEndedInEarlySurrender: boolean;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  myTeamStatus: string;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  summonerId: number;
  summonerName: string;
  teams: Array<LolHonorV2EndOfGameTeam>;
}

export interface LolHonorV2EndOfGameTeam {
  championBans: Array<number>;
  fullId: string;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
  memberStatusString: string;
  name: string;
  players: Array<LolHonorV2EndOfGamePlayer>;
  stats: boolean | undefined;
  tag: string;
  teamId: number;
}

export interface LolHonorV2GameflowGameData {
  gameId: number;
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
  SecondsToVote: number;
}

export interface LolHonorV2HonorRecipient {
  gameId: number;
  honors: Array<LolHonorV2Honor>;
  summonerId: number;
}

export interface LolHonorV2MutualHonor {
  gameId: number;
  summoners: Array<LolHonorV2MutualHonorPlayer>;
}

export interface LolHonorV2MutualHonorPlayer {
  championId: number;
  skinIndex: number;
  summonerId: number;
}

export interface LolHonorV2ProfileInfo {
  checkpoint: number;
  honorLevel: number;
  rewardsLocked: boolean;
}

export interface LolHonorV2Queue {
  gameMode: string;
  id: number;
  mapId: number;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
  type: string;
}

export interface LolHonorV2Reward {
  quantity: number;
  rewardType: string;
}

export interface LolHonorV2SequenceEvent {
  name: string;
  priority: number;
}

export interface LolHonorV2ServiceProxyHonorPlayerServerRequest {
  gameId: number;
  honorType: string;
  summonerId: number;
}

export interface LolHonorV2ServiceProxyRetrieveProfileResponse {
  checkpoint: number;
  honorLevel: number;
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
  checkpoint: number;
  level: number;
  rewardsLocked: boolean;
}

export interface LolHonorV2VendedReward {
  dynamicHonorMessage: LolHonorV2DynamicHonorMessage;
  quantity: number;
  rewardType: string;
}

export interface LolHonorV2VoteCompletion {
  fullTeamVote: boolean;
  gameId: number;
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
  accountId: number;
  availability: string;
  gameName: string;
  gameTag: string;
  icon: number;
  id: string;
  lol: string | undefined;
  name: string;
  note: string;
  patchline: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  score: number;
  statusMessage: string;
  summonerId: number;
}

export interface LolHovercardHovercardUserInfo {
  accountId: number;
  availability: string;
  gameName: string;
  gameTag: string;
  icon: number;
  id: string;
  lol: string | undefined;
  masteryScore: number;
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
  summonerIcon: number;
  summonerId: number;
  summonerLevel: number;
}

export interface LolHovercardPartyInfo {
  summoners: Array<number>;
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
  accountId: number;
  displayName: string;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
}

export interface LolHovercardSummonerIdAndIcon {
  profileIconId: number;
}

export interface LolHovercardSummonerIdAndName {
  displayName: string;
  summonerId: number;
}

export interface LolHovercardTopChampionMastery {
  score: number;
}

export interface LolHovercardcookie {
  name: string;
  value: string;
}

export interface LolInventoryAccessTokenResource {
  expiry: number;
  scopes: Array<string>;
  token: string;
}

export interface LolInventoryCatalogItem {
  inventoryType: string;
  itemId: number;
  itemInstanceId: string;
}

export interface LolInventoryClientCacheClearMessageDTO {
  clearAll: boolean;
  inventoryTypes: Array<string>;
  regions: Array<string>;
}

export interface LolInventoryCurrencyDTO {
  amount: number;
  subCurrencies: number | undefined;
}

export interface LolInventoryInventoryCacheEntry {
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  signedInventoryJwt: string;
  valid: boolean;
}

export interface LolInventoryInventoryDTO {
  accountId: number;
  expires: string;
  items: boolean | undefined | undefined;
  itemsJwt: string;
  puuid: string;
  summonerId: number;
}

export interface LolInventoryInventoryItem {
  inventoryType: string;
  itemId: number;
  ownershipType: LolInventoryItemOwnershipType;
  purchaseDate: string;
  quantity: number;
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
  itemId: number;
  loyalty: boolean;
  lsb: boolean;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: number;
  rental: boolean;
  usedInGameDate: string;
  wins: number;
}

export interface LolInventoryInventoryItemWithPayload {
  inventoryType: string;
  itemId: number;
  ownershipType: LolInventoryItemOwnershipType;
  payload: boolean | undefined;
  purchaseDate: string;
  quantity: number;
  uuid: string;
}

export interface LolInventoryInventoryNotification {
  acknowledged: boolean;
  id: number;
  inventoryType: string;
  itemId: number;
  type: string;
}

export interface LolInventoryInventoryResponseDTO {
  data: LolInventoryInventoryDTO;
}

export interface LolInventoryItemKey {
  inventoryType: string;
  itemId: number;
}

export type LolInventoryItemOwnershipType = "OWNED" | "RENTED" | "LOYALTY" | "F2P";

export interface LolInventoryLoginSession {
  accountId: number;
  gasToken: boolean | undefined;
  idToken: string;
  puuid: string;
  state: LolInventoryLoginSessionStates;
  summonerId: number;
}

export type LolInventoryLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolInventoryLoyaltyRewards {
  championIds: Array<number>;
  freeRewardedChampionsCount: number;
  freeRewardedSkinsCount: number;
  ipBoost: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTMapSkinCount: number;
  skinIds: Array<number>;
  xpBoost: number;
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
  timestamp: number;
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
  itemId: number;
}

export interface LolInventoryWallet {
  ip: number;
  rp: number;
}

export interface LolInventoryWalletCacheEntry {
  expirationMS: number;
  issuedAtMS: number;
  receivedAtMS: number;
  signedBalancesJwt: string;
  valid: boolean;
}

export interface LolInventoryWalletDTO {
  accountId: number;
  balances: number | undefined;
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
  associatedChampions: Array<number>;
  associatedMaps: Array<number>;
  blocks: Array<LolItemSetsItemSetBlock>;
  map: string;
  mode: string;
  preferredItemSlots: Array<LolItemSetsPreferredItemSlot>;
  sortrank: number;
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
  count: number;
  id: string;
}

export interface LolItemSetsItemSets {
  accountId: number;
  itemSets: Array<LolItemSetsItemSet>;
  timestamp: number;
}

export interface LolItemSetsLoginSession {
  accountId: number;
  state: LolItemSetsLoginSessionStates;
  summonerId: number;
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
  preferredItemSlot: number;
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
  hours: number;
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
  sessionInitiatedAt: number;
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
  accountId: number;
  fromRms: boolean;
  id: number;
  msgId: string;
  punishedGamesRemaining: number;
  queueLockoutTimerExpiryUtcMillisDiff: number;
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
  id: number;
  message: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
}

export interface LolLeaverBusterMatchmakingSearchResource {
  errors: Array<LolLeaverBusterMatchmakingSearchErrorResource>;
  queueId: number;
}

export interface LolLeaverBusterPlayerNotificationResource {
  backgroundUrl: string;
  created: string;
  critical: boolean;
  data: string | undefined;
  detailKey: string;
  expires: string;
  iconUrl: string;
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolLeaverBusterSimpleMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolLeaverBusterSummoner {
  acctId: number;
  sumId: number;
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
  expiry: number;
  scopes: Array<string>;
  token: string;
}

export interface LolLoadoutsCreateLoadoutDTO {
  itemId: number;
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
  id: number;
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
  id: number;
  inventoryJWTs: Array<string>;
  inventoryTypes: Array<string>;
}

export interface LolLoadoutsInventoryDTO {
  accountId: number;
  expires: string;
  items: boolean | undefined | undefined;
  itemsJwt: string;
  puuid: string;
  summonerId: number;
}

export interface LolLoadoutsInventoryItemDTO {
  entitlementId: string;
  entitlementTypeId: string;
  expirationDate: string;
  f2p: boolean;
  instanceId: string;
  instanceTypeId: string;
  inventoryType: string;
  itemId: number;
  lsb: boolean;
  purchaseDate: string;
  quantity: number;
  rental: boolean;
  usedInGameDate: string;
  wins: number;
}

export interface LolLoadoutsInventoryResponseDTO {
  data: LolLoadoutsInventoryDTO;
}

export interface LolLoadoutsItemKey {
  contentId: string;
  inventoryType: string;
  itemId: number;
}

export interface LolLoadoutsLoadout {
  id: number;
  items: boolean | undefined | undefined;
  name: string;
}

export interface LolLoadoutsLoadoutRequestDTOBase {
  serviceToJwtsMap: boolean | undefined | undefined;
}

export interface LolLoadoutsLoginSession {
  accountId: number;
  gasToken: boolean | undefined;
  idToken: string;
  puuid: string;
  state: LolLoadoutsLoginSessionStates;
  summonerId: number;
}

export type LolLoadoutsLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLoadoutsQueue {
  isTeamBuilderManaged: boolean;
}

export interface LolLoadoutsScopedLoadout {
  id: string;
  itemId: number;
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
  accountId: number;
  summonerId: number;
}

export interface LolLobbyAmbassadorMessage {
  errorCode: string;
  httpStatus: number;
  implementationDetails: string;
  message: string;
  payload: boolean | undefined;
}

export interface LolLobbyAutoFillQueueDto {
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForStreaking: boolean;
  queueId: number;
}

export interface LolLobbyBotParticipantDto {
  botSkillLevel: number;
  championId: number;
  team: string;
}

export interface LolLobbyChampionSkinSelection {
  championId: number;
  skinId: number;
}

export interface LolLobbyChatBlockedPlayerResource {
  name: string;
  summonerId: number;
}

export interface LolLobbyChatFriend {
  lol: string | undefined;
  summonerId: number;
}

export interface LolLobbyChatFriendCounts {
  numFriends: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInChampSelect: number;
  numFriendsInGame: number;
  numFriendsInQueue: number;
  numFriendsMobile: number;
  numFriendsOnline: number;
}

export interface LolLobbyCollectionsChampion {
  active: boolean;
  botEnabled: boolean;
  id: number;
  name: string;
}

export interface LolLobbyCollectionsChampionMinimal {
  active: boolean;
  disabledQueues: Array<string>;
  freeToPlay: boolean;
  id: number;
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
  mapId: number;
  maxNumPlayers: number;
  ownerPuuid: string;
  partyId: string;
  privateGame: boolean;
  spectatorCount: number;
  team1Count: number;
  team2Count: number;
}

export interface LolLobbyCustomGameSettingsDto {
  gameId: number;
  lobbyName: string;
  lobbyPassword: string;
}

export interface LolLobbyCustomJoinOptionsDto {
  lobbyPassword: string;
  team: string;
}

export interface LolLobbyEligibility {
  eligible: boolean;
  queueId: number;
  restrictions: Array<LolLobbyEligibilityRestriction>;
}

export interface LolLobbyEligibilityRestriction {
  expiredTimestamp: number;
  restrictionArgs: string | undefined;
  restrictionCode: LolLobbyEligibilityRestrictionCode;
  summonerIds: Array<number>;
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
  eventTimestamp: number;
  eventType: string;
  numFriends: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInChampSelect: number;
  numFriendsInGame: number;
  numFriendsInQueue: number;
  numFriendsMobile: number;
  numFriendsOnline: number;
  partyType: string;
  platformId: string;
  puuid: string;
  summonerId: number;
}

export interface LolLobbyGameDataChampionSummary {
  alias: string;
  id: number;
}

export interface LolLobbyGameModeDto {
  allowSpectators: string;
  botDifficulty: string;
  customsSettings: LolLobbyCustomGameSettingsDto;
  gameCustomization: string | undefined;
  gameType: string;
  gameTypeConfigId: number;
  mapId: number;
  maxPartySize: number;
  maxTeamSize: number;
  queueId: number;
}

export interface LolLobbyGameflowGameClient {
  running: boolean;
}

export interface LolLobbyGameflowGameData {
  queue: LolLobbyQueue;
}

export interface LolLobbyGameflowGameDodge {
  dodgeIds: Array<number>;
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
  accountId: number;
  details: string | undefined;
  payload: string;
  puuid: string;
  queueId: number;
  reason: string;
  remainingMillis: number;
}

export interface LolLobbyInventoryCacheEntry {
  expirationMS: number;
  signedInventoryJwt: string;
  valid: boolean;
}

export interface LolLobbyInventoryItem {
  itemId: number;
}

export type LolLobbyInvitationType = "invalid" | "lobby" | "party";

export interface LolLobbyJoinPartyAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: number;
  eventType: string;
  gameMode: string;
  numFriendsOnline: number;
  numOpenFriends: number;
  numOpenParties: number;
  numOtherInvites: number;
  numPartyInvites: number;
  numTotalInvites: number;
  partyId: string;
  partySize: number;
  platformId: string;
}

export interface LolLobbyLcdsDynamicClientConfig {
  PartyRewards: LolLobbyLcdsPartyRewardsConfig;
}

export interface LolLobbyLcdsGameMetaData {
  gameId: number;
  mapId: number;
}

export interface LolLobbyLcdsPartyRewardsConfig {
  Enabled: boolean;
}

export interface LolLobbyLobby {
  allowablePremadeSizes: Array<number>;
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
  mapId: number;
  maximumParticipantListSize: number;
  members: Array<LolLobbyLobbyMember>;
  premadeSizeAllowed: boolean;
  queueAvailability: LolLobbyQueueAvailability;
  queueId: number;
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
  id: number;
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
  championId: number;
  teamId: string;
}

export interface LolLobbyLobbyChangeGameDto {
  customGameLobby: LolLobbyLobbyCustomGameLobby;
  gameCustomization: string | undefined;
  isCustom: boolean;
  queueId: number;
}

export interface LolLobbyLobbyChangeQueue {
  customGameLobby: LolLobbyLobbyCustomGameLobby;
  isCustom: boolean;
  queueId: number;
}

export interface LolLobbyLobbyCustomChampSelectStartResponse {
  failedPlayers: Array<LolLobbyLobbyCustomFailedPlayer>;
  success: boolean;
}

export interface LolLobbyLobbyCustomFailedPlayer {
  reason: string;
  summonerId: number;
  summonerName: string;
}

export interface LolLobbyLobbyCustomGame {
  filledPlayerSlots: number;
  filledSpectatorSlots: number;
  gameType: string;
  hasPassword: boolean;
  id: number;
  lobbyName: string;
  mapId: number;
  maxPlayerSlots: number;
  maxSpectatorSlots: number;
  ownerSummonerName: string;
  partyId: string;
  passbackUrl: string;
  spectatorPolicy: string;
}

export interface LolLobbyLobbyCustomGameConfiguration {
  gameMode: string;
  gameServerRegion: string;
  gameTypeConfig: LolLobbyQueueGameTypeConfig;
  mapId: number;
  maxPlayerCount: number;
  mutators: LolLobbyQueueGameTypeConfig;
  spectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy;
  teamSize: number;
  tournamentGameMode: string;
  tournamentPassbackDataPacket: string;
  tournamentPassbackUrl: string;
}

export interface LolLobbyLobbyCustomGameLobby {
  configuration: LolLobbyLobbyCustomGameConfiguration;
  gameId: number;
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
  allowablePremadeSizes: Array<number>;
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
  mapId: number;
  maxHumanPlayers: number;
  maxLobbySize: number;
  maxTeamSize: number;
  pickType: string;
  premadeSizeAllowed: boolean;
  queueId: number;
  showPositionSelector: boolean;
}

export interface LolLobbyLobbyInvitation {
  eligibility: LolLobbyEligibility;
  errorType: string;
  fromSummonerId: number;
  fromSummonerName: string;
  id: string;
  invitationMetaData: boolean | undefined;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
  toSummonerId: number;
  toSummonerName: string;
}

export interface LolLobbyLobbyInvitationDto {
  invitationId: string;
  invitationType: LolLobbyInvitationType;
  state: LolLobbyLobbyInvitationState;
  timestamp: string;
  toSummonerId: number;
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
  queueId: number;
  wasOwner: boolean;
}

export interface LolLobbyLobbyLastQueuedMember {
  id: number;
}

export interface LolLobbyLobbyMatchmakingLowPriorityDataResource {
  bustedLeaverAccessToken: string;
  penalizedSummonerIds: Array<number>;
  penaltyTime: number;
  penaltyTimeRemaining: number;
  reason: string;
}

export interface LolLobbyLobbyMatchmakingSearchErrorResource {
  errorType: string;
  id: number;
  message: string;
  penalizedSummonerId: number;
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
  botChampionId: number;
  botDifficulty: LolLobbyLobbyBotDifficulty;
  canInviteOthers: boolean;
  excludedPositionPreference: string;
  id: number;
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
  summonerIds: Array<number>;
  timestamp: number;
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
  botChampionId: number;
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
  summonerIconId: number;
  summonerId: number;
  summonerInternalName: string;
  summonerLevel: number;
  summonerName: string;
  teamId: number;
}

export type LolLobbyLobbyPartyRewardType = "Ip" | "Icon" | "None";

export interface LolLobbyLobbyPartyRewards {
  isCustom: boolean;
  isEnabled: boolean;
  partyRewards: Array<LolLobbyPartyReward>;
  queueId: number;
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
  invitedSummonerIds: Array<number>;
  isCustom: boolean;
  isLeader: boolean;
  isPracticeTool: boolean;
  isSpectator: boolean;
  lobbyId: string;
  memberSummonerIds: Array<number>;
  queueId: number;
}

export interface LolLobbyLobbyTimer {
  countdown: number;
  enabled: boolean;
}

export interface LolLobbyLoginSession {
  accountId: number;
  connected: boolean;
  gasToken: boolean | undefined;
  idToken: string;
  puuid: string;
  state: LolLobbyLoginSessionStates;
  summonerId: number;
  userAuthToken: string;
  username: string;
}

export type LolLobbyLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export type LolLobbyMatchmakingDodgeState = "Invalid" | "PartyDodged" | "StrangerDodged";

export interface LolLobbyOpenPartyToggleAnalytics {
  elapsedTime: number;
  endTimestamp: number;
  endTransition: string;
  eventData: boolean | undefined;
  eventTimestamp: number;
  eventType: string;
  finalState: string;
  gameMode: string;
  initialState: string;
  numOfToggles: number;
  partyId: string;
  platformId: string;
  playerId: string;
  startTimestamp: number;
  startTransition: string;
}

export interface LolLobbyPartiesInvitationAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: number;
  eventType: string;
  partyId: string;
  platformId: string;
  players: Array<LolLobbyPartiesInvitationPlayerAnalytics>;
}

export interface LolLobbyPartiesInvitationPlayerAnalytics {
  puuid: string;
  role: string;
  summonerId: number;
}

export interface LolLobbyPartyChatDto {
  jid: string;
  multiUserChatJWT: string;
}

export interface LolLobbyPartyDto {
  activeRestrictions: LolLobbyQueueRestrictionDto;
  activityLocked: boolean;
  activityResumeUtcMillis: number;
  activityStartedUtcMillis: number;
  botParticipants: Array<LolLobbyBotParticipantDto>;
  chat: LolLobbyPartyChatDto;
  eligibilityHash: number;
  eligibilityRestrictions: Array<LolLobbyGatekeeperRestrictionDto>;
  eligibilityWarnings: Array<LolLobbyGatekeeperRestrictionDto>;
  gameMode: LolLobbyGameModeDto;
  maxPartySize: number;
  partyId: string;
  partyType: string;
  platformId: string;
  players: Array<LolLobbyPartyMemberDto>;
  version: number;
}

export type LolLobbyPartyEogStatusCategory = "kLeft" | "kPlayAgain" | "kOnEog";

export interface LolLobbyPartyInviteAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: number;
  eventType: string;
  fromSummonerId: number;
  gameMode: string;
  partyId: string;
  partyType: string;
  platformId: string;
  toSummonerId: number;
}

export interface LolLobbyPartyMemberDto {
  accountId: number;
  canInvite: boolean;
  gameMode: LolLobbyGameModeDto;
  inviteTimestamp: number;
  invitedBySummonerId: number;
  metadata: LolLobbyPartyMemberMetadataDto;
  partyId: string;
  partyVersion: number;
  platformId: string;
  puuid: string;
  ready: boolean;
  role: LolLobbyPartyMemberRoleEnum;
  summonerId: number;
  team: string;
}

export interface LolLobbyPartyMemberMetadataDto {
  championSelection: number;
  positionPref: Array<string>;
  properties: boolean | undefined;
  skinSelection: number;
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
  maxPlayers: number;
  partyId: string;
  queueId: number;
  summoners: Array<number>;
}

export interface LolLobbyPartyQueueEligibilityDto {
  availableQueueIds: Array<number>;
  partyRestrictions: Array<LolLobbyGatekeeperRestrictionDto>;
}

export interface LolLobbyPartyReward {
  premadeSize: number;
  type: LolLobbyLobbyPartyRewardType;
  value: string;
}

export interface LolLobbyPartyStatusDto {
  eogPlayers: Array<string>;
  leftPlayers: Array<string>;
  partySize: number;
  readyPlayers: Array<string>;
}

export interface LolLobbyPlayerCollectionDto {
  players: Array<LolLobbyPlayerDto>;
}

export interface LolLobbyPlayerDto {
  accountId: number;
  createdAt: number;
  currentParty: LolLobbyPartyDto;
  eligibilityHash: number;
  parties: Array<LolLobbyPartyMemberDto>;
  platformId: string;
  puuid: string;
  registration: LolLobbyRegistrationCredentials;
  serverUtcMillis: number;
  summonerId: number;
  version: number;
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
  summonerId: number;
}

export interface LolLobbyPremadePartyDto {
  commsEnabled: boolean;
  partyId: string;
  players: LolLobbyPremadeMemberDto | undefined;
}

export interface LolLobbyPremadeRelationshipAnalytics {
  eventData: boolean | undefined;
  eventTimestamp: number;
  eventType: string;
  friendPlayers: Array<string>;
  platformId: string;
  premadePlayers: Array<string>;
  puuid: string;
  summonerId: number;
}

export interface LolLobbyQueue {
  allowablePremadeSizes: Array<number>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolLobbyQueueGameCategory;
  championsRequiredToPlay: number;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolLobbyQueueGameTypeConfig;
  id: number;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapId: number;
  maxDivisionForPremadeSize2: string;
  maxLevel: number;
  maxSummonerLevelForFirstWinOfTheDay: number;
  maxTierForPremadeSize2: string;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  name: string;
  numPlayersPerTeam: number;
  queueAvailability: LolLobbyQueueAvailability;
  queueRewards: LolLobbyQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
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
  banTimerDuration: number;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  gameModeOverride: string;
  id: number;
  learningQuests: boolean;
  mainPickTimerDuration: number;
  maxAllowableBans: number;
  name: string;
  numPlayersPerTeamOverride: number;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: number;
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
  partySizeIpRewards: Array<number>;
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
  fromSummonerId: number;
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
  mapId: number;
  queueId: number;
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
  timestamp: number;
  version: string;
}

export interface LolLobbyServiceProxyPayload {
  body: string;
  method: string;
  url: string;
}

export interface LolLobbySummoner {
  accountId: number;
  displayName: string;
  internalName: string;
  profileIconId: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
}

export interface LolLobbyTeamBuilderActionV1 {
  actionId: number;
  actorCellId: number;
  championId: number;
  completed: boolean;
  duration: number;
  type: string;
}

export interface LolLobbyTeamBuilderAfkCheckStateV1 {
  additionalInventoryTypes: Array<string>;
  afkReady: boolean;
  compressAfkCheckPayload: boolean;
  inventoryDraft: LolLobbyTeamBuilderTbdInventory;
  maxAfkMillis: number;
  multiUserChatJWT: string;
  remainingAfkMillis: number;
}

export interface LolLobbyTeamBuilderBackwardsTransitionInfoV1 {
  backwardsTransitionReason: string;
  initiatorSummonerIds: Array<number>;
}

export interface LolLobbyTeamBuilderCellV1 {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  entitledFeatureType: string;
  skinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  teamId: number;
}

export interface LolLobbyTeamBuilderCellsV1 {
  alliedTeam: Array<LolLobbyTeamBuilderCellV1>;
  enemyTeam: Array<LolLobbyTeamBuilderCellV1>;
}

export interface LolLobbyTeamBuilderCeremonyV1 {
  duration: number;
  name: string;
}

export interface LolLobbyTeamBuilderChampSelectAction {
  actorCellId: number;
  championId: number;
  completed: boolean;
  id: number;
  isAllyAction: boolean;
  isInProgress: boolean;
  type: string;
}

export interface LolLobbyTeamBuilderChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolLobbyTeamBuilderChampSelectDevPanelData {
  counter: number;
  dtoIndex: number;
  queueId: number;
  teamIdSuffix: number;
}

export interface LolLobbyTeamBuilderChampSelectMySelection {
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  wardSkinId: number;
}

export interface LolLobbyTeamBuilderChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  entitledFeatureType: string;
  playerType: string;
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  team: number;
  wardSkinId: number;
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
  benchChampionIds: Array<number>;
  benchEnabled: boolean;
  boostableSkinCount: number;
  chatDetails: LolLobbyTeamBuilderChampSelectChatRoomDetails;
  counter: number;
  entitledFeatureState: LolLobbyTeamBuilderEntitledFeatureState;
  gameId: number;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isSpectating: boolean;
  localPlayerCellId: number;
  lockedEventIndex: number;
  myTeam: Array<LolLobbyTeamBuilderChampSelectPlayerSelection>;
  recoveryCounter: number;
  rerollsRemaining: number;
  skipChampionSelect: boolean;
  theirTeam: Array<LolLobbyTeamBuilderChampSelectPlayerSelection>;
  timer: LolLobbyTeamBuilderChampSelectTimer;
  trades: Array<LolLobbyTeamBuilderChampSelectTradeContract>;
}

export interface LolLobbyTeamBuilderChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  internalNowInEpochMs: number;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: number;
}

export interface LolLobbyTeamBuilderChampSelectTradeContract {
  cellId: number;
  id: number;
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
  championIds: Array<number>;
}

export interface LolLobbyTeamBuilderChampionSelectPreferences {
  skins: number | undefined;
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
  currentActionSetIndex: number;
  currentTimeRemainingMillis: number;
  currentTotalTimeMillis: number;
  entitledFeatureState: LolLobbyTeamBuilderEntitledFeatureStateV1;
  inventoryDraft: LolLobbyTeamBuilderTbdInventory;
  isSpectating: boolean;
  lcuSkipsSendingLoadoutsGco: boolean;
  localPlayerCellId: number;
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
  counter: number;
  phaseName: string;
  timer: number;
}

export interface LolLobbyTeamBuilderEntitledFeatureState {
  additionalRerolls: number;
  unlockedSkinIds: Array<number>;
}

export interface LolLobbyTeamBuilderEntitledFeatureStateV1 {
  additionalRerolls: number;
  unlockedSkinsState: LolLobbyTeamBuilderUnlockedSkinsStateV1;
}

export interface LolLobbyTeamBuilderGameModeSpellList {
  spells: Array<number>;
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
  queueId: number;
  reason: string;
  remainingMillis: number;
  summonerId: number;
}

export interface LolLobbyTeamBuilderLeaverBusterAbandoned {
  abandonerName: string;
}

export interface LolLobbyTeamBuilderLobby {
  allowablePremadeSizes: Array<number>;
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
  queueId: number;
  removalReason: LolLobbyTeamBuilderLobbyRemovedFromGameReason;
  requiredPositionCoverageMet: boolean;
  showPositionExcluder: boolean;
  showPositionSelector: boolean;
  specifiablePositionPreferences: Array<string>;
  wasKicked: boolean;
}

export interface LolLobbyTeamBuilderLobbyCountdownTimer {
  counter: number;
  phaseName: string;
  timer: number;
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
  id: number;
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
  lockedEventIndex: number;
}

export interface LolLobbyTeamBuilderLoginSession {
  accountId: number;
  connected: boolean;
  state: LolLobbyTeamBuilderLoginSessionState;
  summonerId: number;
}

export type LolLobbyTeamBuilderLoginSessionState =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolLobbyTeamBuilderMatchmakingDodgeData {
  dodgerId: number;
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
  penalizedSummonerIds: Array<number>;
  penaltyTime: number;
  penaltyTimeRemaining: number;
}

export interface LolLobbyTeamBuilderMatchmakingReadyCheckResource {
  declinerIds: Array<number>;
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
  id: number;
  message: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
}

export interface LolLobbyTeamBuilderMatchmakingSearchResource {
  dodgeData: LolLobbyTeamBuilderMatchmakingDodgeData;
  errors: Array<LolLobbyTeamBuilderMatchmakingSearchErrorResource>;
  estimatedQueueTime: number;
  isCurrentlyInQueue: boolean;
  lobbyId: string;
  lowPriorityData: LolLobbyTeamBuilderMatchmakingLowPriorityData;
  queueId: number;
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
  allowablePremadeSizes: Array<number>;
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: LolLobbyTeamBuilderQueueGameCategory;
  championsRequiredToPlay: number;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: LolLobbyTeamBuilderQueueGameTypeConfig;
  id: number;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  isTeamOnly: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapId: number;
  maxLevel: number;
  maxSummonerLevelForFirstWinOfTheDay: number;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  name: string;
  numPlayersPerTeam: number;
  queueAvailability: LolLobbyTeamBuilderQueueAvailability;
  queueRewards: LolLobbyTeamBuilderQueueReward;
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
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
  banTimerDuration: number;
  battleBoost: boolean;
  crossTeamChampionPool: boolean;
  deathMatch: boolean;
  doNotRemove: boolean;
  duplicatePick: boolean;
  exclusivePick: boolean;
  id: number;
  learningQuests: boolean;
  mainPickTimerDuration: number;
  maxAllowableBans: number;
  name: string;
  onboardCoopBeginner: boolean;
  pickMode: string;
  postPickTimerDuration: number;
  reroll: boolean;
  teamChampionPool: boolean;
}

export interface LolLobbyTeamBuilderQueueReward {
  isChampionPointsEnabled: boolean;
  isIpEnabled: boolean;
  isXpEnabled: boolean;
  partySizeIpRewards: Array<number>;
}

export interface LolLobbyTeamBuilderRerollStateV1 {
  allowRerolling: boolean;
  rerollsRemaining: number;
}

export interface LolLobbyTeamBuilderSettingCategoryResource {
  data: LolLobbyTeamBuilderChampionSelectPreferences;
  schemaVersion: number;
}

export interface LolLobbyTeamBuilderTBDMatchmakingState {
  backwardsTransitionReason: string;
  estimatedMatchmakingTimeMillis: number;
  timeInMatchmakingMillis: number;
}

export interface LolLobbyTeamBuilderTbLobbyStateResource {
  afkCheckState: LolLobbyTeamBuilderAfkCheckStateV1;
  championSelectState: LolLobbyTeamBuilderChampionSelectStateV1;
  counter: number;
  gameId: number;
  matchmakingState: LolLobbyTeamBuilderTBDMatchmakingState;
  phaseName: string;
  queueId: number;
  recoveryCounter: number;
}

export interface LolLobbyTeamBuilderTbRemovedFromServiceNotification {
  backwardsTransitionInfo: LolLobbyTeamBuilderBackwardsTransitionInfoV1;
  reason: string;
}

export interface LolLobbyTeamBuilderTbdInventory {
  allChampionIds: Array<number>;
  disabledChampionIds: Array<number>;
  initialSpellIds: Array<number>;
  lastSelectedSkinIdByChampionId: number | undefined;
  skinIds: Array<number>;
  spellIds: Array<number>;
}

export interface LolLobbyTeamBuilderTeamBoost {
  availableSkins: Array<number>;
  ipReward: number;
  ipRewardForPurchaser: number;
  price: number;
  skinUnlockMode: string;
  summonerId: number;
  unlocked: boolean;
}

export interface LolLobbyTeamBuilderTeamBuilderBoostInfo {
  activatorCellId: number;
  allowBattleBoost: boolean;
  battleBoostActivated: boolean;
  boostableSkinCount: number;
  cost: number;
  unlockedSkinIds: Array<number>;
}

export interface LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse {
  payload: LolLobbyTeamBuilderTbLobbyStateResource;
  status: string;
}

export interface LolLobbyTeamBuilderTradeV1 {
  cellId: number;
  id: number;
  state: string;
}

export interface LolLobbyTeamBuilderUnlockedSkinsStateV1 {
  unlockedSkinIds: Array<number>;
}

export interface LolLobbyUserInfoToken {
  userInfo: string;
}

export interface LolLobbyUserResource {
  lol: string | undefined;
  summonerId: number;
}

export interface LolLoginAccessToken {
  expiry: number;
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
  currentAccountId: number;
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
  expiry: number;
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
  approximateWaitTimeSeconds: number;
  estimatedPositionInQueue: number;
  isPositionCapped: boolean;
}

export interface LolLoginLoginSession {
  accountId: number;
  connected: boolean;
  error: LolLoginLoginError;
  gasToken: boolean | undefined;
  idToken: string;
  isInLoginQueue: boolean;
  isNewPlayer: boolean;
  puuid: string;
  state: LolLoginLoginSessionStates;
  summonerId: number;
  userAuthToken: string;
  username: string;
}

export type LolLoginLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLoginLoginSessionWallet {
  ip: number;
  rp: number;
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
  summonerId: number;
}

export interface LolLoginSummonerSessionResource {
  displayName: string;
  isNewPlayer: boolean;
  summonerId: number;
}

export interface LolLoginUsernameAndPassword {
  password: string;
  username: string;
}

export interface LolLootAccountIdAndSummonerId {
  summonerId: number;
}

export interface LolLootCollectionsChampionMinimal {
  id: number;
  ownership: LolLootCollectionsOwnership;
}

export interface LolLootCollectionsChampionSkinMinimal {
  championId: number;
  id: number;
  name: string;
  ownership: LolLootCollectionsOwnership;
  splashPath: string;
  tilePath: string;
}

export interface LolLootCollectionsEmote {
  itemId: number;
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
  itemId: number;
  ownershipType: LolLootInventoryOwnership;
}

export interface LolLootCollectionsSummonerIcon {
  itemId: number;
}

export interface LolLootCollectionsWardSkin {
  id: number;
  name: string;
  ownership: LolLootCollectionsOwnership;
  wardImagePath: string;
  wardShadowImagePath: string;
}

export interface LolLootContextMenu {
  actionType: string;
  enabled: boolean;
  essenceQuantity: number;
  essenceType: string;
  name: string;
  recipeContextMenuAction: string;
  recipeDescription: string;
  requiredOthers: string;
  requiredOthersCount: number;
  requiredOthersName: string;
  requiredTokens: string;
}

export interface LolLootCounter {
  direction: string;
  groupId: string;
  id: string;
  name: string;
  startValue: number;
}

export interface LolLootCounterInstance {
  counterId: string;
  counterValue: number;
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
  id: number;
  inventoryIcon: string;
  name: string;
}

export interface LolLootGameDataSummonerIcon {
  id: number;
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
  triggerValue: number;
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
  quantity: number;
  rewardType: string;
}

export interface LolLootLoginDataPacket {
  simpleMessages: Array<LolLootLoginSimpleMessage>;
}

export interface LolLootLoginSession {
  accountId: number;
  state: LolLootLoginSessionStates;
  summonerId: number;
}

export type LolLootLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLootLoginSimpleMessage {
  accountId: number;
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
  accountId: number;
  championId: number;
  gameId: number;
  id: number;
  lootName: string;
  messageKey: string;
  msgId: string;
  playerGrade: string;
  playerId: number;
}

export interface LolLootLootItem {
  asset: string;
  displayCategories: string;
  expiryTime: number;
  lootName: string;
  rarity: string;
  rentalGames: number;
  rentalSeconds: number;
  storeItemId: number;
  tags: string;
  type: string;
  upgradeLootName: string;
  value: number;
}

export interface LolLootLootItemGdsResource {
  autoRedeem: boolean;
  description: string;
  endDate: string;
  id: string;
  image: string;
  lifetimeMax: number;
  mappedStoreId: number;
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
  threshold: number;
}

export type LolLootLootMilestoneClaimStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";

export interface LolLootLootMilestoneRepeat {
  multiplier: number;
  repeatCount: number;
  repeatScope: number;
}

export interface LolLootLootMilestoneReward {
  inventoryType: string;
  itemId: number;
  itemInstanceId: string;
  lootItem: LolLootPlayerLoot;
  quantity: number;
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
  completedLoops: number;
  counterValue: number;
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
  lootOrder: number;
  parentId: string;
  quantity: number;
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
  triggerValue: number;
}

export interface LolLootMilestoneInstance {
  counterId: string;
  groupId: string;
  milestoneId: string;
  ownerId: string;
  productId: string;
  repeatSequence: number;
  triggerValue: number;
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
  startValue: number;
}

export interface LolLootMilestonesLedgerGroupRepeatGdsResource {
  Count: number;
  Multiplier: number;
  Scope: number;
}

export interface LolLootMilestonesRecipeGdsResource {
  name: string;
}

export interface LolLootPlayerLoot {
  asset: string;
  count: number;
  disenchantLootName: string;
  disenchantValue: number;
  displayCategories: string;
  expiryTime: number;
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
  parentStoreItemId: number;
  rarity: string;
  redeemableStatus: LolLootRedeemableStatus;
  refId: string;
  rentalGames: number;
  rentalSeconds: number;
  shadowPath: string;
  splashPath: string;
  storeItemId: number;
  tags: string;
  tilePath: string;
  type: string;
  upgradeEssenceName: string;
  upgradeEssenceValue: number;
  upgradeLootName: string;
  value: number;
}

export interface LolLootPlayerLootDelta {
  deltaCount: number;
  playerLoot: LolLootPlayerLoot;
}

export interface LolLootPlayerLootMap {
  playerLoot: LolLootPlayerLoot | undefined;
  version: number;
}

export interface LolLootPlayerLootNotification {
  acknowledged: boolean;
  count: number;
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
  quantity: number;
}

export interface LolLootRecipeSlot {
  lootIds: Array<string>;
  quantity: number;
  slotNumber: number;
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
  count: number;
  multiplier: number;
  scope: number;
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
  quantity: number;
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
  maxSelectionsAllowed: number;
  minSelectionsAllowed: number;
}

export interface LolLootSummoner {
  summonerLevel: number;
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
  quantity: number;
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
  accountId: number;
  puuid: string;
  state: LolLoyaltyLoginSessionStates;
  summonerId: number;
}

export type LolLoyaltyLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolLoyaltyLoyaltyRewards {
  championIds: Array<number>;
  freeRewardedChampionsCount: number;
  freeRewardedSkinsCount: number;
  global: LolLoyaltyGlobalRewards;
  ipBoost: number;
  loyaltyTFTCompanionCount: number;
  loyaltyTFTMapSkinCount: number;
  skinIds: Array<number>;
  xpBoost: number;
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
  timestamp: number;
  version: string;
}

export interface LolLoyaltyRmsEntitlementPayload {
  entitlementTypeId: string;
  itemId: string;
  itemTypeId: string;
  resourceOperation: string;
}

export interface LolMapsGameModeSpellList {
  spells: Array<number>;
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
  id: number;
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
  accountId: number;
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
  data_version: number;
  info_type: string;
  match_id: string;
  participants: Array<string>;
  private: boolean;
  product: string;
  tags: Array<string>;
  timestamp: number;
}

export interface LolMatchHistoryLoginSession {
  accountId: number;
  gasToken: boolean | undefined;
  idToken: string;
  state: LolMatchHistoryLoginSessionStates;
  summonerId: number;
}

export type LolMatchHistoryLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolMatchHistoryMHSummoner {
  accountId: number;
  displayName: string;
  puuid: string;
  summonerId: number;
}

export interface LolMatchHistoryMatchHistoryEvent {
  assistingParticipantIds: Array<number>;
  buildingType: string;
  itemId: number;
  killerId: number;
  laneType: string;
  monsterSubType: string;
  monsterType: string;
  participantId: number;
  position: LolMatchHistoryMatchHistoryPosition;
  skillSlot: number;
  teamId: number;
  timestamp: number;
  towerType: string;
  type: string;
  victimId: number;
}

export interface LolMatchHistoryMatchHistoryGame {
  gameCreation: number;
  gameCreationDate: string;
  gameDuration: number;
  gameId: number;
  gameMode: string;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participantIdentities: Array<LolMatchHistoryMatchHistoryParticipantIdentities>;
  participants: Array<LolMatchHistoryMatchHistoryParticipant>;
  platformId: string;
  queueId: number;
  seasonId: number;
  teams: Array<LolMatchHistoryMatchHistoryTeam>;
}

export interface LolMatchHistoryMatchHistoryGameList {
  gameBeginDate: string;
  gameCount: number;
  gameEndDate: string;
  gameIndexBegin: number;
  gameIndexEnd: number;
  games: Array<LolMatchHistoryMatchHistoryGame>;
}

export interface LolMatchHistoryMatchHistoryList {
  accountId: number;
  games: LolMatchHistoryMatchHistoryGameList;
  platformId: string;
}

export interface LolMatchHistoryMatchHistoryParticipant {
  championId: number;
  highestAchievedSeasonTier: string;
  participantId: number;
  spell1Id: number;
  spell2Id: number;
  stats: LolMatchHistoryMatchHistoryParticipantStatistics;
  teamId: number;
  timeline: LolMatchHistoryMatchHistoryTimeline;
}

export interface LolMatchHistoryMatchHistoryParticipantFrame {
  currentGold: number;
  dominionScore: number;
  jungleMinionsKilled: number;
  level: number;
  minionsKilled: number;
  participantId: number;
  position: LolMatchHistoryMatchHistoryPosition;
  teamScore: number;
  totalGold: number;
  xp: number;
}

export interface LolMatchHistoryMatchHistoryParticipantIdentities {
  participantId: number;
  player: LolMatchHistoryMatchHistoryParticipantIdentityPlayer;
}

export interface LolMatchHistoryMatchHistoryParticipantIdentityPlayer {
  accountId: number;
  currentAccountId: number;
  currentPlatformId: string;
  matchHistoryUri: string;
  platformId: string;
  profileIcon: number;
  summonerId: number;
  summonerName: string;
}

export interface LolMatchHistoryMatchHistoryParticipantStatistics {
  assists: number;
  causedEarlySurrender: boolean;
  champLevel: number;
  combatPlayerScore: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  doubleKills: number;
  earlySurrenderAccomplice: boolean;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstInhibitorAssist: boolean;
  firstInhibitorKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  inhibitorKills: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  killingSprees: number;
  kills: number;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicalDamageTaken: number;
  neutralMinionsKilled: number;
  neutralMinionsKilledEnemyJungle: number;
  neutralMinionsKilledTeamJungle: number;
  objectivePlayerScore: number;
  participantId: number;
  pentaKills: number;
  perk0: number;
  perk0Var1: number;
  perk0Var2: number;
  perk0Var3: number;
  perk1: number;
  perk1Var1: number;
  perk1Var2: number;
  perk1Var3: number;
  perk2: number;
  perk2Var1: number;
  perk2Var2: number;
  perk2Var3: number;
  perk3: number;
  perk3Var1: number;
  perk3Var2: number;
  perk3Var3: number;
  perk4: number;
  perk4Var1: number;
  perk4Var2: number;
  perk4Var3: number;
  perk5: number;
  perk5Var1: number;
  perk5Var2: number;
  perk5Var3: number;
  perkPrimaryStyle: number;
  perkSubStyle: number;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  quadraKills: number;
  sightWardsBoughtInGame: number;
  teamEarlySurrendered: boolean;
  timeCCingOthers: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalMinionsKilled: number;
  totalPlayerScore: number;
  totalScoreRank: number;
  totalTimeCrowdControlDealt: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  unrealKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

export interface LolMatchHistoryMatchHistoryPlayerChampMasteryDelta {
  grade: string;
}

export interface LolMatchHistoryMatchHistoryPlayerDelta {
  deltas: Array<LolMatchHistoryMatchHistoryPlayerGameDelta>;
  originalAccountId: number;
  originalPlatformId: string;
}

export interface LolMatchHistoryMatchHistoryPlayerGameDelta {
  champMastery: LolMatchHistoryMatchHistoryPlayerChampMasteryDelta;
  gameId: number;
  gamePlatformId: string;
  leagueDelta: LolMatchHistoryMatchHistoryPlayerLeagueDelta;
  platformDelta: LolMatchHistoryMatchHistoryPlayerPlatformDelta;
}

export interface LolMatchHistoryMatchHistoryPlayerLeagueDelta {
  leaguePointDelta: number;
  miniSeriesProgress: Array<string>;
  reason: string;
  timestamp: number;
}

export interface LolMatchHistoryMatchHistoryPlayerPlatformDelta {
  compensationModeEnabled: boolean;
  ipDelta: number;
  timestamp: number;
  xpDelta: number;
}

export interface LolMatchHistoryMatchHistoryPosition {
  x: number;
  y: number;
}

export interface LolMatchHistoryMatchHistoryTeam {
  bans: Array<LolMatchHistoryMatchHistoryTeamBan>;
  baronKills: number;
  dominionVictoryScore: number;
  dragonKills: number;
  firstBaron: boolean;
  firstBlood: boolean;
  firstDargon: boolean;
  firstInhibitor: boolean;
  firstTower: boolean;
  inhibitorKills: number;
  riftHeraldKills: number;
  teamId: number;
  towerKills: number;
  vilemawKills: number;
  win: string;
}

export interface LolMatchHistoryMatchHistoryTeamBan {
  championId: number;
  pickTurn: number;
}

export interface LolMatchHistoryMatchHistoryTimeline {
  creepsPerMinDeltas: number | undefined;
  csDiffPerMinDeltas: number | undefined;
  damageTakenDiffPerMinDeltas: number | undefined;
  damageTakenPerMinDeltas: number | undefined;
  goldPerMinDeltas: number | undefined;
  lane: string;
  participantId: number;
  role: string;
  xpDiffPerMinDeltas: number | undefined;
  xpPerMinDeltas: number | undefined;
}

export interface LolMatchHistoryMatchHistoryTimelineFrame {
  events: Array<LolMatchHistoryMatchHistoryEvent>;
  participantFrames: LolMatchHistoryMatchHistoryParticipantFrame | undefined;
  timestamp: number;
}

export interface LolMatchHistoryMatchHistoryTimelineFrames {
  frames: Array<LolMatchHistoryMatchHistoryTimelineFrame>;
}

export interface LolMatchHistoryRecentlyPlayedSummoner {
  championId: number;
  gameCreationDate: string;
  gameId: number;
  puuid: string;
  summonerId: number;
  summonerName: string;
  teamId: number;
}

export interface LolMatchHistorySummoner {
  displayName: string;
  puuid: string;
}

export interface LolMatchmakingGameflowGameData {
  queue: LolMatchmakingGameflowQueue;
}

export interface LolMatchmakingGameflowGameDodge {
  dodgeIds: Array<number>;
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
  memberSummonerIds: Array<number>;
  queueId: number;
}

export interface LolMatchmakingLoginSession {
  accountId: number;
  connected: boolean;
  state: LolMatchmakingLoginSessionState;
  summonerId: number;
}

export type LolMatchmakingLoginSessionState = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolMatchmakingMatchmakingDodgeData {
  dodgerId: number;
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
  penalizedSummonerIds: Array<number>;
  penaltyTime: number;
  penaltyTimeRemaining: number;
  reason: string;
}

export interface LolMatchmakingMatchmakingReadyCheckResource {
  declinerIds: Array<number>;
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
  id: number;
  message: string;
  penalizedSummonerId: number;
  penaltyTimeRemaining: number;
}

export interface LolMatchmakingMatchmakingSearchResource {
  dodgeData: LolMatchmakingMatchmakingDodgeData;
  errors: Array<LolMatchmakingMatchmakingSearchErrorResource>;
  estimatedQueueTime: number;
  isCurrentlyInQueue: boolean;
  lobbyId: string;
  lowPriorityData: LolMatchmakingMatchmakingLowPriorityData;
  queueId: number;
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
  id: number;
  isTeamBuilderManaged: boolean;
}

export type LolMatchmakingQueueCustomGameSpectatorPolicy =
  | "NotAllowed"
  | "LobbyAllowed"
  | "FriendsAllowed"
  | "AllAllowed";

export interface LolMissionsCollectionsChampion {
  freeToPlay: boolean;
  id: number;
  ownership: LolMissionsCollectionsOwnership;
  skins: Array<LolMissionsCollectionsChampionSkin>;
}

export interface LolMissionsCollectionsChampionSkin {
  championId: number;
  id: number;
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
  summonerLevel: number;
}

export interface LolMissionsCollectionsSummonerIcons {
  icons: Array<number>;
}

export interface LolMissionsCollectionsWardSkin {
  id: number;
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
  itemId: number;
}

export interface LolMissionsLoginSession {
  accountId: number;
  platformId: string;
  puuid: string;
  summonerId: number;
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
  id: number;
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
  quantity: number;
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
  maxSelectionsAllowed: number;
  minSelectionsAllowed: number;
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
  quantity: number;
}

export interface LolMissionsTftBattlepass {
  milestones: Array<LolMissionsTftBattlepassMilestone>;
  totalPointsEarned: number;
}

export interface LolMissionsTftBattlepassMilestone {
  description: string;
  iconImageUrl: string;
  label: string;
  missionId: string;
  percentComplete: number;
  pointsForMilestone: number;
  rewards: Array<PlayerMissionRewardDTO>;
  state: string;
}

export interface LolMissionsTftOrb {
  missionId: string;
  rewardLevel: number;
  rewards: Array<PlayerMissionRewardDTO>;
  status: string;
  unlockTime: number;
}

export interface LolMissionsTftPaidBattlepass {
  activeMilestone: LolMissionsTftPaidBattlepassMilestone;
  bonuses: Array<LolMissionsTftPaidBattlepassMilestone>;
  info: LolMissionsTftPaidBattlepassInfo;
  lastViewedMilestone: LolMissionsTftPaidBattlepassMilestone;
  lastViewedProgress: number;
  milestones: Array<LolMissionsTftPaidBattlepassMilestone>;
  progressMissionId: string;
  totalPointsEarned: number;
}

export interface LolMissionsTftPaidBattlepassInfo {
  backgroundImageUrl: string;
  description: string;
  endDate: number;
  internalName: string;
  pcPurchaseRequirement: string;
  premium: boolean;
  startDate: number;
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
  level: number;
  missionId: string;
  pointsEarnedForMilestone: number;
  pointsNeededForMilestone: number;
  rewards: Array<PlayerMissionRewardDTO>;
  state: string;
  status: string;
  title: string;
  totalPointsForMilestone: number;
}

export interface LolMissionsTftWeeklyMissions {
  missions: Array<PlayerMissionDTO>;
}

export interface LolMissionsUserInfo {
  userInfo: string;
}

export interface LolModeProgressionInventoryRewardItem {
  itemId: number;
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
  itemId: number;
}

export interface LolNpeRewardsAccountSettingsData {
  challenges: LolNpeRewardsChallengesSettings;
  login: LolNpeRewardsLoginSeriesSettings;
}

export interface LolNpeRewardsAccountSettingsPayload {
  data: LolNpeRewardsAccountSettingsData;
  schemaVersion: number;
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
  totalCount: number;
}

export interface LolNpeRewardsLoginSeriesSettings {
  allRewardsClaimed: boolean;
  lastCompletedMissionDate: number;
  lastCompletedMissionInternalName: string;
}

export interface LolNpeRewardsMission {
  completedDate: number;
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
  currentProgress: number;
  lastViewedProgress: number;
  totalCount: number;
}

export interface LolNpeRewardsRequirements {
  day: number;
  level: number;
  missionInternalName: string;
}

export interface LolNpeRewardsReward {
  data: boolean | undefined;
  renderer: string;
}

export interface LolNpeRewardsRewardPack {
  delay: number;
  index: number;
  majorReward: LolNpeRewardsReward;
  minorRewards: Array<LolNpeRewardsReward>;
  premiumReward: boolean;
  requirements: LolNpeRewardsRequirements;
  rewardKey: string;
  state: string;
  type: string;
  unlockTime: number;
}

export interface LolNpeRewardsRewardSeries {
  rewardPacks: Array<LolNpeRewardsRewardPack>;
}

export interface LolNpeRewardsRewardSeriesState {
  allRewardsClaimed: boolean;
}

export interface LolNpeRewardsSummoner {
  summonerLevel: number;
}

export interface LolNpeTutorialPathAccountSettingsCategoryResource {
  data: LolNpeTutorialPathAccountSettingsTutorial;
  schemaVersion: number;
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
  id: number;
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
  alertTime: number;
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
  queueId: number;
}

export interface LolNpeTutorialPathLobbyDto {
  gameConfig: LolNpeTutorialPathLobbyGameConfigDto;
  partyId: string;
}

export interface LolNpeTutorialPathLobbyGameConfigDto {
  queueId: number;
}

export interface LolNpeTutorialPathMission {
  backgroundImageUrl: string;
  celebrationType: string;
  clientNotifyLevel: string;
  completedDate: number;
  completionExpression: string;
  cooldownTimeMillis: number;
  description: string;
  display: LolNpeTutorialPathMissionDisplay;
  displayType: string;
  endTime: number;
  expiringWarnings: Array<LolNpeTutorialPathExpiringWarning>;
  helperText: string;
  iconImageUrl: string;
  id: string;
  internalName: string;
  isNew: boolean;
  lastUpdatedTimestamp: number;
  locale: string;
  metadata: LolNpeTutorialPathMissionMetadata;
  missionType: string;
  objectives: Array<LolNpeTutorialPathObjective>;
  requirements: Array<string>;
  rewardStrategy: LolNpeTutorialPathRewardStrategy;
  rewards: Array<LolNpeTutorialPathReward>;
  seriesName: string;
  startTime: number;
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
  sequence: number;
  type: string;
}

export interface LolNpeTutorialPathProgress {
  currentProgress: number;
  lastViewedProgress: number;
  totalCount: number;
}

export interface LolNpeTutorialPathRequirement {
  expression: string;
}

export interface LolNpeTutorialPathReward {
  description: string;
  iconUrl: string;
  itemId: string;
  quantity: number;
  rewardFulfilled: boolean;
  rewardGroup: string;
  rewardGroupSelected: boolean;
  rewardType: string;
  sequence: number;
  uniqueName: string;
}

export interface LolNpeTutorialPathRewardStrategy {
  groupStrategy: string;
  selectMaxGroupCount: number;
  selectMinGroupCount: number;
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
  accountId: number;
  displayName: string;
  nameChangeFlag: boolean;
  percentCompleteForNextLevel: number;
  profileIconId: number;
  summonerId: number;
  summonerLevel: number;
  unnamed: boolean;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
}

export interface LolNpeTutorialPathSummonerIcon {
  profileIconId: number;
}

export interface LolNpeTutorialPathTutorial {
  backgroundUrl: string;
  description: string;
  id: string;
  isViewed: boolean;
  queueId: string;
  rewards: Array<LolNpeTutorialPathTutorialReward>;
  status: LolNpeTutorialPathTutorialStatus;
  stepNumber: number;
  title: string;
  type: LolNpeTutorialPathTutorialType;
  useChosenChampion: boolean;
  useQuickSearchMatchmaking: boolean;
}

export interface LolNpeTutorialPathTutorialMetadata {
  displayRewards: string | undefined;
  queueId: string;
  stepNumber: number;
  useChosenChampion: boolean;
  useQuickSearchMatchmaking: boolean;
}

export interface LolNpeTutorialPathTutorialReward {
  description: string;
  iconUrl: string;
  itemId: string;
  rewardFulfilled: boolean;
  rewardType: string;
  sequence: number;
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
  bytesComplete: number;
  bytesPerSecond: number;
  bytesRequired: number;
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
  max_download_speed_mbps: number;
}

export interface LolPatchPatcherRegionSettings {
  client_patcher: string;
  game_patcher: string;
  patchline: string;
}

export interface LolPatchPatcherSelfUpdateSettings {
  restart_delay: number;
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
  version: number;
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
  actorCellId: number;
  championId: number;
  completed: boolean;
  id: number;
  type: string;
}

export interface LolPerksChampSelectBannedChampions {
  myTeamBans: Array<number>;
  numBans: number;
  theirTeamBans: Array<number>;
}

export interface LolPerksChampSelectChatRoomDetails {
  chatRoomName: string;
  chatRoomPassword: string;
}

export interface LolPerksChampSelectMySelection {
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  wardSkinId: number;
}

export interface LolPerksChampSelectPlayerSelection {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  team: number;
  wardSkinId: number;
}

export interface LolPerksChampSelectSession {
  actions: Array<boolean | undefined>;
  bans: LolPerksChampSelectBannedChampions;
  chatDetails: LolPerksChampSelectChatRoomDetails;
  isSpectating: boolean;
  localPlayerCellId: number;
  myTeam: Array<LolPerksChampSelectPlayerSelection>;
  theirTeam: Array<LolPerksChampSelectPlayerSelection>;
  timer: LolPerksChampSelectTimer;
  trades: Array<LolPerksChampSelectTradeContract>;
}

export interface LolPerksChampSelectTimer {
  adjustedTimeLeftInPhase: number;
  internalNowInEpochMs: number;
  isInfinite: boolean;
  phase: string;
  totalTimeInPhase: number;
}

export interface LolPerksChampSelectTradeContract {
  cellId: number;
  id: number;
  state: LolPerksChampSelectTradeState;
}

export type LolPerksChampSelectTradeState = "AVAILABLE" | "BUSY" | "INVALID" | "RECEIVED" | "SENT";

export interface LolPerksChampionPreferredStyle {
  championId: number;
  championName: string;
  style: number;
}

export type LolPerksCustomizationLimits =
  | "Locked"
  | "CanSelectPages"
  | "CanSelectKeystones"
  | "CanSelectPrimaries"
  | "CanSelectSplash"
  | "CanUseAdvancedStyles";

export interface LolPerksDefaultStatModsPerSubStyle {
  id: number;
  perks: Array<number>;
}

export interface LolPerksGameCustomizationDTO {
  category: string;
  content: string;
  isTeambuilder: boolean;
  queueType: number;
}

export interface LolPerksGameflowGameData {
  gameId: number;
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
  quantity: number;
}

export interface LolPerksLoginSession {
  accountId: number;
  state: LolPerksLoginSessionState;
  summonerId: number;
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
  currentPageId: number;
  pages: Array<LolPerksPerkPageResource>;
}

export interface LolPerksPerkGDSResource {
  iconPath: string;
  id: number;
  longDesc: string;
  majorChangePatchVersion: string;
  name: string;
  shortDesc: string;
  tooltip: string;
}

export interface LolPerksPerkIdListResource {
  perkIds: Array<number>;
}

export interface LolPerksPerkPageResource {
  autoModifiedSelections: Array<number>;
  current: boolean;
  id: number;
  isActive: boolean;
  isDeletable: boolean;
  isEditable: boolean;
  isValid: boolean;
  lastModified: number;
  name: string;
  order: number;
  primaryStyleId: number;
  selectedPerkIds: Array<number>;
  subStyleId: number;
}

export interface LolPerksPerkSettingResource {
  perkIds: Array<number>;
  perkStyle: number;
  perkSubStyle: number;
}

export interface LolPerksPerkSettings {
  pages: Array<LolPerksPerkPageResource>;
  perShardPerkBooks: LolPerksPerkBook | undefined;
  settings: LolPerksUISettings;
}

export interface LolPerksPerkStyleResource {
  allowedSubStyles: Array<number>;
  assetMap: string | undefined;
  defaultPageName: string;
  defaultPerks: Array<number>;
  defaultPerksWhenSplashed: Array<number>;
  defaultStatModsPerSubStyle: Array<LolPerksDefaultStatModsPerSubStyle>;
  defaultSubStyle: number;
  iconPath: string;
  id: number;
  isAdvanced: boolean;
  name: string;
  slots: Array<LolPerksPerkStyleSlotResource>;
  subStyleBonus: Array<LolPerksPerkSubStyleBonusResource>;
  tooltip: string;
}

export interface LolPerksPerkStyleSlotResource {
  perks: Array<number>;
  slotLabel: string;
  type: string;
}

export interface LolPerksPerkSubStyleBonusResource {
  perkId: number;
  styleId: number;
}

export interface LolPerksPerkUIPerk {
  iconPath: string;
  id: number;
  longDesc: string;
  name: string;
  shortDesc: string;
  tooltip: string;
}

export interface LolPerksPerkUISlot {
  perks: Array<number>;
  slotLabel: string;
  type: string;
}

export interface LolPerksPerkUIStyle {
  allowedSubStyles: Array<number>;
  assetMap: string | undefined;
  defaultPageName: string;
  defaultPerks: Array<number>;
  defaultSubStyle: number;
  iconPath: string;
  id: number;
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
  ownedPageCount: number;
}

export interface LolPerksQueue {
  id: number;
  isTeamBuilderManaged: boolean;
}

export interface LolPerksRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: number;
  version: string;
}

export interface LolPerksServiceSettings {
  serverSideStorageAvailable: boolean;
}

export interface LolPerksSettingsStorageContainer {
  data: LolPerksPerkSettings;
  schemaVersion: number;
}

export interface LolPerksSummoner {
  accountId: number;
  displayName: string;
  internalName: string;
  percentCompleteForNextLevel: number;
  profileIconId: number;
  puuid: string;
  rerollPoints: LolPerksSummonerRerollPoints;
  summonerId: number;
  summonerLevel: number;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
}

export interface LolPerksSummonerRerollPoints {
  currentPoints: number;
  maxRolls: number;
  numberOfRolls: number;
  pointsCostToRoll: number;
  pointsToReroll: number;
}

export interface LolPerksUISettings {
  gameplayPatchVersionSeen: string;
  gameplayUpdatedPerksSeen: Array<number>;
  gridModeEnabled: boolean;
  showLongDescriptions: boolean;
  showPresetPages: boolean;
}

export interface LolPerksUpdatePageOrderRequest {
  destinationPageId: number;
  offset: number;
  targetPageId: number;
}

export interface LolPerksValidatePageNameData {
  id: number;
  name: string;
}

export interface LolPerksValidatePageNameResponse {
  nameCheckResponse: LolPerksNameCheckReponse;
  success: boolean;
}

export interface LolPersonalizedOffersAccessTokenResource {
  expiry: number;
  scopes: Array<string>;
  token: string;
}

export interface LolPersonalizedOffersOffer {
  discountPrice: number;
  expirationDate: string;
  inventoryType: string;
  itemId: number;
  name: string;
  offerId: string;
  originalPrice: number;
  owned: boolean;
  revealed: boolean;
  spotIndex: number;
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
  itemId: number;
  offerId: string;
  price: number;
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
  itemId: number;
  pricePaid: number;
}

export interface LolPersonalizedOffersPurchaseResponse {
  items: Array<LolPersonalizedOffersPurchaseItem>;
  wallet: LolPersonalizedOffersWallet;
}

export interface LolPersonalizedOffersUIOffer {
  championId: number;
  discountPrice: number;
  expirationDate: string;
  id: string;
  originalPrice: number;
  owned: boolean;
  revealed: boolean;
  skinId: number;
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
  rp: number;
}

export interface LolPftGameClientEndOfGameStats {
  gameId: number;
  gameMode: string;
  isRanked: boolean;
  queueId: number;
  statsBlock: boolean | undefined;
}

export interface LolPftGameflowGameDodge {
  dodgeIds: Array<number>;
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
  championId: number;
  elo: number;
  eloChange: number;
  gameId: number;
  isReportingDisabled: boolean;
  items: Array<number>;
  leaver: boolean;
  leaves: number;
  level: number;
  losses: number;
  profileIconId: number;
  skinName: string;
  spell1Id: number;
  spell2Id: number;
  stats: boolean | undefined;
  summonerId: number;
  summonerName: string;
  teamId: number;
  userId: number;
  wins: number;
}

export interface LolPftPFTEndOfGamePoints {
  pointChangeFromChampionsOwned: number;
  pointChangeFromGameplay: number;
  pointsUntilNextReroll: number;
  pointsUsed: number;
  previousPoints: number;
  rerollCount: number;
  totalPoints: number;
}

export interface LolPftPFTEndOfGameStats {
  accountId: number;
  basePoints: number;
  battleBoostIpEarned: number;
  boostIpEarned: number;
  boostXpEarned: number;
  causedEarlySurrender: boolean;
  championId: number;
  coOpVsAiMinutesLeftToday: number;
  coOpVsAiMsecsUntilReset: number;
  completionBonusPoints: number;
  customMinutesLeftToday: number;
  customMsecsUntilReset: number;
  difficulty: string;
  earlySurrenderAccomplice: boolean;
  elo: number;
  eloChange: number;
  experienceEarned: number;
  experienceTotal: number;
  firstWinBonus: number;
  gameEndedInEarlySurrender: boolean;
  gameId: number;
  gameLength: number;
  gameMode: string;
  gameMutators: Array<string>;
  gameType: string;
  imbalancedTeamsNoPoints: boolean;
  invalid: boolean;
  ipEarned: number;
  ipTotal: number;
  isAramGame: boolean;
  leveledUp: boolean;
  loyaltyBoostIpEarned: number;
  loyaltyBoostXpEarned: number;
  myTeamStatus: string;
  newSpells: Array<number>;
  odinBonusIp: number;
  partyRewardsBonusIpEarned: number;
  pointsPenalties: boolean | undefined;
  previousLevel: number;
  previousXpTotal: number;
  queueBonusEarned: number;
  queueType: string;
  ranked: boolean;
  reportGameId: number;
  rerollData: LolPftPFTEndOfGamePoints;
  roomName: string;
  roomPassword: string;
  rpEarned: number;
  sendStatsToTournamentProvider: boolean;
  skinId: number;
  skinIndex: number;
  summonerId: number;
  summonerName: string;
  talentPointsGained: number;
  teamEarlySurrendered: boolean;
  teams: Array<LolPftPFTEndOfGameTeam>;
  timeUntilNextFirstWinBonus: number;
  userId: number;
}

export interface LolPftPFTEndOfGameTeam {
  championBans: Array<number>;
  fullId: string;
  isBottomTeam: boolean;
  isPlayerTeam: boolean;
  isWinningTeam: boolean;
  memberStatusString: string;
  name: string;
  players: Array<LolPftPFTEndOfGamePlayer>;
  stats: boolean | undefined;
  tag: string;
  teamId: number;
}

export interface LolPftPFTEvent {
  action: string;
  data: Array<boolean | undefined>;
  playerSurveyId: number;
}

export interface LolPftPFTMetadata {
  accountId: number;
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
  questionId: number;
  responseData: boolean | undefined;
}

export interface LolPftPFTSurvey {
  caption: string;
  data: boolean | undefined | undefined;
  display: string;
  id: number;
  title: string;
  type: string;
}

export interface LolPftPFTSurveyResults {
  actions: Array<LolPftPFTEvent>;
  questionResponses: Array<LolPftPFTQuestionResponse>;
}

export interface LolPftPFTSurveyV1 {
  caption: string;
  id: number;
  title: string;
  type: string;
  url: string;
}

export interface LolPftSummoner {
  accountId: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
  unnamed: boolean;
}

export interface LolPlayerBehaviorBanNotification {
  displayReformCard: boolean;
  id: number;
  isPermaBan: boolean;
  reason: string;
  source: LolPlayerBehaviorNotificationSource;
  timeUntilBanExpires: number;
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
  accountId: number;
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
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolPlayerBehaviorReformCard {
  chatLogs: Array<string>;
  gameIds: Array<number>;
  id: number;
  playerFacingMessage: string;
  punishmentLengthGames: number;
  punishmentLengthTime: number;
  punishmentType: string;
  reason: string;
  restrictedChatGamesRemaining: number;
  timeWhenPunishmentExpires: number;
}

export interface LolPlayerBehaviorReformCardChatLogs {
  inGameChatLogs: Array<string>;
  postGameChatLogs: Array<string>;
  preGameChatLogs: Array<string>;
}

export interface LolPlayerBehaviorReformCardV2 {
  id: number;
  playerFacingMessage: string;
  punishedForGameIds: Array<number>;
  punishedForReformCardChatLogs: Array<LolPlayerBehaviorReformCardChatLogs>;
  punishedUntilDateMillis: number;
  punishmentLengthGames: number;
  punishmentLengthMillis: number;
  punishmentReason: string;
  punishmentType: string;
}

export interface LolPlayerBehaviorReporterFeedback {
  accountId: number;
  id: number;
  messageId: string;
  type: string;
}

export interface LolPlayerBehaviorRestrictionNotification {
  displayReformCard: boolean;
  expirationMillis: number;
  gamesRemaining: number;
  id: number;
  source: LolPlayerBehaviorNotificationSource;
}

export interface LolPlayerBehaviorSettingsResource {
  data: boolean | undefined;
  schemaVersion: number;
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
  expirationMillis: number;
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
  newSpells: Array<number>;
  previousLevel: number;
  queueType: string;
  rpEarned: number;
}

export interface LolPlayerLevelUpGameDataSummonerSpell {
  id: number;
  summonerLevel: number;
}

export interface LolPlayerLevelUpLoginSession {
  accountId: number;
  state: LolPlayerLevelUpLoginSessionStates;
  summonerId: number;
}

export type LolPlayerLevelUpLoginSessionStates =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "LOGGING_OUT"
  | "ERROR";

export interface LolPlayerLevelUpPlayerLevelUpEvent {
  leveledUp: boolean;
  newQueues: Array<number>;
  newRuneSlotUnlocked: boolean;
  newSpells: Array<number>;
  newSummonerLevel: number;
  nowHasAccessToLoot: boolean;
  nowHasAccessToPublicChatRooms: boolean;
  rpEarned: number;
  switchedToStandardFreeToPlayChampRotation: boolean;
}

export interface LolPlayerLevelUpPlayerLevelUpEventAck {
  newSummonerLevel: number;
  seenThisEvent: boolean;
}

export interface LolPlayerLevelUpQueue {
  id: number;
  minLevel: number;
}

export interface LolPlayerMessagingDynamicCelebrationMessagingNotificationResource {
  accountId: number;
  celebrationBody: string;
  celebrationMessage: string;
  celebrationTitle: string;
  celebrationType: string;
  id: number;
  inventoryType: string;
  itemId: string;
  itemQuantity: string;
  msgId: string;
  status: number;
}

export interface LolPlayerMessagingLoginDataPacket {
  simpleMessages: Array<LolPlayerMessagingSimpleMessage>;
}

export interface LolPlayerMessagingPlayerMessagingNotificationResource {
  accountId: number;
  body: string;
  id: number;
  msgId: string;
  status: number;
  title: string;
}

export interface LolPlayerMessagingSimpleMessage {
  accountId: number;
  bodyCode: string;
  msgId: string;
  params: Array<string>;
  titleCode: string;
  type: string;
}

export interface LolPlayerPreferencesLoginSession {
  accountId: number;
  idToken: string;
  state: LolPlayerPreferencesLoginSessionStates;
  summonerId: number;
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
  Retries: number;
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
  gameId: number;
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
  priority: number;
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
  schemaVersion: number;
}

export interface LolPremadeVoiceAudioPropertiesResource {
  isLoopbackEnabled: boolean;
  micEnergy: number;
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
  inputVolume: number;
  vadSensitivity: number;
}

export interface LolPremadeVoiceLocalSettingsCategoryResource {
  data: LolPremadeVoiceLocalSettingsCategoryDataResource;
  schemaVersion: number;
}

export interface LolPremadeVoiceLoginSession {
  connected: boolean;
}

export interface LolPremadeVoiceParticipantResource {
  energy: number;
  id: string;
  isMuted: boolean;
  isSpeaking: boolean;
  name: string;
  volume: number;
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
  summonerId: number;
}

export interface LolPremadeVoicePremadeVoiceParticipantDto {
  displayName: string;
  energy: number;
  isMuted: boolean;
  isSpeaking: boolean;
  participantId: string;
  puuid: string;
  summonerId: number;
  volume: number;
}

export interface LolPremadeVoicePushToTalkKey {
  key: number;
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
  volume: number;
}

export type LolPremadeVoiceSessionStatus = "active" | "onHold";

export interface LolPremadeVoiceSettingsResource {
  autoJoin: boolean;
  currentCaptureDeviceHandle: string;
  inputMode: LolPremadeVoiceInputMode;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  micLevel: number;
  muteOnConnect: boolean;
  pttActive: boolean;
  pttKey: string;
  vadActive: boolean;
  vadHangoverTime: number;
  vadSensitivity: number;
}

export interface LolPremadeVoiceStateResource {
  connected: boolean;
}

export interface LolPremadeVoiceSummoner {
  accountId: number;
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
  amount: number;
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
  itemId: number;
  quantity: number;
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
  itemPriceMap: number | undefined;
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
  quantity: number;
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
  inactiveDate: number;
  inventoryType: string;
  itemId: number;
  itemInstanceId: string;
  metadata: Array<LolPurchaseWidgetItemMetadataEntry>;
  name: string;
  owned: boolean;
  prices: Array<LolPurchaseWidgetCatalogPluginPrice>;
  purchaseDate: number;
  questSkinInfo: LolPurchaseWidgetSkinLineInfo;
  releaseDate: number;
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
  quantity: number;
  requiredItems: Array<LolPurchaseWidgetCatalogPluginItemWithDetails>;
}

export interface LolPurchaseWidgetCatalogPluginPrice {
  cost: number;
  costType: string;
  currency: string;
  sale: LolPurchaseWidgetCatalogPluginSale;
}

export interface LolPurchaseWidgetCatalogPluginSale {
  cost: number;
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
  cost: number;
  costType: string;
  currency: string;
  discount: number;
}

export interface LolPurchaseWidgetItemChoiceDetails {
  backgroundImage: string;
  contents: Array<LolPurchaseWidgetItemDetails>;
  discount: string;
  displayType: string;
  fullPrice: number;
  item: LolPurchaseWidgetCatalogPluginItem;
  purchaseOptions: Array<LolPurchaseWidgetPurchaseOption>;
}

export interface LolPurchaseWidgetItemChoices {
  choices: Array<LolPurchaseWidgetItemChoiceDetails>;
  validationErrors: Array<LolPurchaseWidgetValidationErrorEntry>;
}

export interface LolPurchaseWidgetItemCost {
  cost: number;
  currency: string;
  discount: number;
}

export interface LolPurchaseWidgetItemDefinition {
  assets: LolPurchaseWidgetCatalogPluginItemAssets;
  bundledItemPrice: LolPurchaseWidgetBundledItemPricingInfo;
  description: string;
  inventoryType: string;
  itemId: number;
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
  itemId: number;
}

export interface LolPurchaseWidgetItemMetadataEntry {
  type: string;
  value: string;
}

export interface LolPurchaseWidgetItemOwnership {
  itemKey: LolPurchaseWidgetItemKey;
  quantity: number;
}

export interface LolPurchaseWidgetItemPrice {
  currencyType: string;
  price: number;
  purchasable: boolean;
}

export interface LolPurchaseWidgetItemSale {
  discount: number;
  endDate: string;
  startDate: string;
}

export interface LolPurchaseWidgetLoginSession {
  accountId: number;
  idToken: string;
  puuid: string;
  state: LolPurchaseWidgetLoginSessionStates;
  summonerId: number;
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
  price: number;
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
  quantity: number;
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
  price: number;
  quantity: number;
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
  timestamp: number;
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
  id: number;
  loadScreenPath: string;
  name: string;
  shortName: string;
  splashPath: string;
  splashVideoPath: string;
  stage: number;
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
  quantity: number;
}

export interface LolPurchaseWidgetValidationResponse {
  items: Array<LolPurchaseWidgetValidationResponseItem>;
  valid: boolean;
}

export interface LolPurchaseWidgetValidationResponseItem {
  description: string;
  itemKey: LolPurchaseWidgetItemKey;
  name: string;
  quantity: number;
  sale: LolPurchaseWidgetSale;
  validationCurrencyInfo: Array<LolPurchaseWidgetItemPrice>;
}

export interface LolPurchaseWidgetWallet {
  accountId: number;
  balances: Array<LolPurchaseWidgetBalance>;
  version: number;
}

export interface LolRankedAchievedTier {
  division: number;
  queueType: LolRankedLeagueQueueType;
  tier: LolRankedLeagueTier;
}

export interface LolRankedEndOfGameStatsBlock {
  gameId: number;
}

export interface LolRankedEosNotificationResource {
  division: string;
  notificationName: string;
  notificationType: string;
  queue: string;
  seasonEndTime: number;
  tier: string;
}

export type LolRankedEosNotificationType = "FIRST_WARNING" | "SECOND_WARNING" | "SEASON_ENDED";

export interface LolRankedEosNotificationsConfig {
  config: Array<LolRankedEosNotificationsConfigEntry>;
}

export interface LolRankedEosNotificationsConfigEntry {
  name: string;
  offsetTime1: number;
  offsetTime2: number;
  offsetTime3: number;
}

export interface LolRankedEosRewardsConfig {
  config: Array<LolRankedEosRewardsConfigEntry>;
}

export interface LolRankedEosRewardsConfigEntry {
  rewards: string | undefined;
  season: number;
}

export interface LolRankedEosSettingsData {
  notificationShown: boolean;
}

export interface LolRankedEosSettingsResource {
  data: LolRankedEosSettingsData;
  schemaVersion: number;
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
  position: number;
  queueType: string;
  tier: string;
}

export interface LolRankedLcuLeagueNotification {
  afkLpPenaltyAmount: number;
  afkLpPenaltyLevel: number;
  canDemoteFromTier: boolean;
  changeReason: string;
  consolationLpUsed: number;
  displayType: LolRankedNotificationDisplayType;
  division: LolRankedLeagueDivision;
  eligibleForPromoHelper: boolean;
  gameId: number;
  id: number;
  leaguePoints: number;
  leaguePointsDelta: number;
  miniseriesProgress: string;
  miniseriesWins: number;
  msgId: string;
  notifyReason: string;
  numberOfPromotions: number;
  promoSeriesForRanksEnabled: boolean;
  provisionalGamesRemaining: number;
  queueType: LolRankedLeagueQueueType;
  ratedRating: number;
  ratedRatingDelta: number;
  ratedTier: LolRankedRatedTier;
  rewardEarnedId: string;
  rewardEarnedType: string;
  splitPointsNotification: LolRankedSplitPointsNotification;
  tier: LolRankedLeagueTier;
  timeUntilInactivityStatusChanges: number;
  wasAfkOrLeaver: boolean;
}

export type LolRankedLeagueDivision = "I" | "II" | "III" | "IV" | "V" | "NA";

export interface LolRankedLeagueDivisionInfo {
  apexUnlockTimeMillis: number;
  division: LolRankedLeagueDivision;
  maxLeagueSize: number;
  minLpForApexTier: number;
  standings: Array<LolRankedLeagueStanding>;
  tier: LolRankedLeagueTier;
  topNumberOfPlayers: number;
}

export interface LolRankedLeagueLadderDTO {
  apexUnlockTimeMillis: number;
  entries: Array<LolRankedLeagueLadderEntryDTO>;
  maxLeagueSize: number;
  minLpForTier: number;
  nextApexUpdate: number;
  provisionalGameThreshold: number;
  queueType: string;
  tier: string;
  topNumberOfPlayers: number;
}

export interface LolRankedLeagueLadderEntryDTO {
  earnedRegaliaRewardIds: Array<string>;
  leaguePoints: number;
  losses: number;
  miniSeriesProgress: string;
  previousDayLeaguePosition: number;
  previousSeasonAchievedRank: string;
  previousSeasonAchievedTier: string;
  provisionalGamesRemaining: number;
  puuid: string;
  rank: string;
  summonerId: number;
  summonerName: string;
  tier: string;
  wins: number;
}

export interface LolRankedLeagueLadderInfo {
  divisions: Array<LolRankedLeagueDivisionInfo>;
  nextApexUpdateMillis: number;
  provisionalGameThreshold: number;
  queueType: LolRankedLeagueQueueType;
  requestedRankedEntry: LolRankedLeagueStanding;
  tier: LolRankedLeagueTier;
}

export interface LolRankedLeagueNotification {
  afkLpPenaltyAmount: number;
  afkLpPenaltyLevel: number;
  canDemoteFromTier: boolean;
  changeReason: string;
  consolationLpUsed: number;
  eligibleForPromoHelper: boolean;
  gameId: number;
  leaguePoints: number;
  leaguePointsDelta: number;
  miniseriesProgress: string;
  notifyReason: string;
  promoSeriesForRanksEnabled: boolean;
  provisionalGamesRemaining: number;
  queueType: string;
  rank: string;
  ratedRating: number;
  ratedRatingDelta: number;
  ratedTier: string;
  splitPoints: number;
  splitPointsBreakdown: number | undefined;
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
  leaguePoints: number;
  losses: number;
  miniseriesResults: Array<LolRankedMiniseries>;
  pendingDemotion: boolean;
  pendingPromotion: boolean;
  position: number;
  positionDelta: number;
  previousPosition: number;
  previousSeasonAchievedDivision: LolRankedLeagueDivision;
  previousSeasonAchievedTier: LolRankedLeagueTier;
  provisionalGamesRemaining: number;
  puuid: string;
  rankedRegaliaLevel: number;
  summonerId: number;
  summonerName: string;
  tier: LolRankedLeagueTier;
  wins: number;
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
  accountId: number;
  state: LolRankedLoginSessionStates;
  summonerId: number;
}

export type LolRankedLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export type LolRankedMiniseries = "W" | "L" | "N";

export type LolRankedNotificationDisplayType = "NONE" | "TOAST" | "MODAL" | "VIGNETTE";

export interface LolRankedParticipantTiers {
  achievedTiers: Array<LolRankedAchievedTier>;
  summonerId: number;
}

export interface LolRankedQueue {
  type: boolean | undefined;
}

export interface LolRankedQueuesAndPuuidsPayload {
  queueTypes: Array<LolRankedLeagueQueueType>;
  summonerIds: Array<number>;
}

export interface LolRankedRankedQueueStats {
  division: LolRankedLeagueDivision;
  isProvisional: boolean;
  leaguePoints: number;
  losses: number;
  miniSeriesProgress: string;
  previousSeasonAchievedDivision: LolRankedLeagueDivision;
  previousSeasonAchievedTier: LolRankedLeagueTier;
  previousSeasonEndDivision: LolRankedLeagueDivision;
  previousSeasonEndTier: LolRankedLeagueTier;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  queueType: LolRankedLeagueQueueType;
  ratedRating: number;
  ratedTier: LolRankedRatedTier;
  tier: LolRankedLeagueTier;
  warnings: LolRankedRankedQueueWarnings;
  wins: number;
}

export interface LolRankedRankedQueueStatsDTO {
  leaguePoints: number;
  losses: number;
  miniSeriesProgress: string;
  previousSeasonAchievedRank: string;
  previousSeasonAchievedTier: string;
  previousSeasonEndRank: string;
  previousSeasonEndTier: string;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  queueType: string;
  rank: string;
  ratedRating: number;
  ratedTier: string;
  tier: string;
  warnings: LolRankedRankedQueueWarningsDTO;
  wins: number;
}

export interface LolRankedRankedQueueWarnings {
  daysUntilDecay: number;
  demotionWarning: number;
  displayDecayWarning: boolean;
  timeUntilInactivityStatusChanges: number;
}

export interface LolRankedRankedQueueWarningsDTO {
  apexDaysUntilDecay: number;
  daysUntilDecay: number;
  demotionWarning: number;
  displayDecayWarning: boolean;
  timeUntilInactivityStatusChanges: number;
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
  rankedRegaliaLevel: number;
  seasons: LolRankedSeasonDTO | undefined;
  splitsProgress: number | undefined;
}

export interface LolRankedRankedStatsDTO {
  earnedRegaliaRewardIds: Array<string>;
  highestPreviousSeasonAchievedRank: string;
  highestPreviousSeasonAchievedTier: string;
  highestPreviousSeasonEndRank: string;
  highestPreviousSeasonEndTier: string;
  queues: Array<LolRankedRankedQueueStatsDTO>;
  seasons: LolRankedSeasonDTO | undefined;
  splitsProgress: number | undefined;
}

export interface LolRankedRatedLadderEntryDTO {
  previousUpdateLadderPosition: number;
  puuid: string;
  ratedRating: number;
  ratedTier: string;
  summonerId: number;
  summonerName: string;
  wins: number;
}

export interface LolRankedRatedLadderInfo {
  queueType: LolRankedLeagueQueueType;
  standings: Array<LolRankedRatedLadderStanding>;
}

export interface LolRankedRatedLadderStanding {
  leaguePoints: number;
  position: number;
  positionDelta: number;
  previousPosition: number;
  puuid: string;
  ratedTier: LolRankedRatedTier;
  summonerId: number;
  summonerName: string;
  wins: number;
}

export type LolRankedRatedTier = "NONE" | "GRAY" | "GREEN" | "BLUE" | "PURPLE" | "ORANGE";

export interface LolRankedRewardsInfo {
  currentSeasonId: number;
  currentSplit: LolRankedSeasonSplit;
  currentSplitId: number;
  rewardInfoByRewardId: LolRankedSplitReward | undefined;
  splits: Array<LolRankedSeasonSplit>;
}

export interface LolRankedSeasonDTO {
  currentSeasonEnd: number;
  currentSeasonId: number;
  nextSeasonStart: number;
}

export interface LolRankedSeasonSplit {
  endTimeMillis: number;
  rewardTrack: Array<LolRankedSplitRewardGroup>;
  seasonId: number;
  splitId: number;
  startTimeMillis: number;
}

export interface LolRankedSeasonSplitDTO {
  endTime: number;
  rewardTrack: Array<LolRankedSplitRewardGroupDTO>;
  seasonId: number;
  splitId: number;
  startTime: number;
}

export interface LolRankedSequenceEvent {
  name: string;
  priority: number;
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
  splitsProgress: number | undefined;
}

export interface LolRankedSocialLeaderboardRankedQueueStats {
  division: LolRankedLeagueDivision;
  isProvisional: boolean;
  leaguePoints: number;
  losses: number;
  miniSeriesProgress: string;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  queueType: LolRankedLeagueQueueType;
  ratedRating: number;
  ratedTier: LolRankedRatedTier;
  tier: LolRankedLeagueTier;
  wins: number;
}

export interface LolRankedSocialLeaderboardRankedQueueStatsDTO {
  leaguePoints: number;
  losses: number;
  miniSeriesProgress: string;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  queueType: string;
  rank: string;
  ratedRating: number;
  ratedTier: string;
  tier: string;
  wins: number;
}

export interface LolRankedSplitPointsNotification {
  nextRewardId: string;
  nextRewardType: string;
  previousSplitPointsRequired: number;
  splitPointsAfterGame: number;
  splitPointsBeforeGame: number;
  splitPointsBreakdown: number | undefined;
  splitPointsDelta: number;
  splitPointsRequired: number;
}

export interface LolRankedSplitReward {
  description: string;
  id: string;
  pointsRequired: number;
  quantity: number;
  regaliaLevel: number;
  rewardType: string;
  splitId: number;
}

export interface LolRankedSplitRewardDTO {
  defaultRewardId: string;
  metadata: LolRankedSplitRewardsMetaData;
  rewardType: string;
  tieredRewardIds: string | undefined;
}

export interface LolRankedSplitRewardGroup {
  rewards: Array<LolRankedSplitReward>;
  splitPoints: number;
}

export interface LolRankedSplitRewardGroupDTO {
  rewards: Array<LolRankedSplitRewardDTO>;
  splitPoints: number;
}

export interface LolRankedSplitRewardsMetaData {
  description: string;
  quantity: number;
}

export interface LolRankedSummoner {
  puuid: string;
  summonerId: number;
}

export interface LolRegaliaAccountIdAndSummonerId {
  summonerId: number;
}

export interface LolRegaliaChatPresence {
  icon: number;
  lol: LolRegaliaChatPresenceLolData;
  summonerId: number;
}

export interface LolRegaliaChatPresenceExternal {
  icon: number;
  id: string;
  lol: string | undefined;
  summonerId: number;
}

export interface LolRegaliaChatPresenceLolData {
  level: number;
  rankedLeagueDivision: LolRegaliaLeagueDivision;
  rankedLeagueQueue: LolRegaliaLeagueQueueType;
  rankedLeagueTier: LolRegaliaLeagueTier;
  rankedPrevSeasonDivision: LolRegaliaLeagueDivision;
  rankedPrevSeasonTier: LolRegaliaLeagueTier;
  rankedSplitRewardLevel: number;
  regalia: LolRegaliaRegaliaSettings;
}

export interface LolRegaliaItemKey {
  inventoryType: string;
  itemId: number;
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
  rankedRegaliaLevel: number;
}

export interface LolRegaliaRegalia {
  bannerType: string;
  crestType: string;
  highestRankedEntry: LolRegaliaRegaliaRankedEntry;
  lastSeasonHighestRank: LolRegaliaLeagueTier;
  profileIconId: number;
  summonerLevel: number;
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
  splitRewardLevel: number;
  tier: LolRegaliaLeagueTier;
}

export interface LolRegaliaRegaliaSettings {
  bannerType: LolRegaliaRegaliaBannerType;
  crestType: LolRegaliaRegaliaCrestType;
}

export interface LolRegaliaRegaliaSettingsExternal {
  bannerType: number;
  crestType: number;
}

export interface LolRegaliaRegaliaWithPreferences {
  bannerType: string;
  crestType: string;
  highestRankedEntry: LolRegaliaRegaliaRankedEntry;
  lastSeasonHighestRank: LolRegaliaLeagueTier;
  preferredBannerType: string;
  preferredCrestType: string;
  profileIconId: number;
  summonerLevel: number;
}

export interface LolRegaliaSummoner {
  profileIconId: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
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
  gameEnd: number;
  gameType: string;
  gameVersion: string;
  queueId: number;
}

export interface LolReplaysReplayMetadata {
  downloadProgress: number;
  gameId: number;
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
  gameLength: number;
  gameVersion: string;
  lastGameChunkId: number;
  lastKeyFrameId: number;
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
  quantity: number;
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
  maxSelectionsAllowed: number;
  minSelectionsAllowed: number;
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
  quantity: number;
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
  championId: number;
  championLevel: number;
  hasLeveledUp: boolean;
  id: number;
  playerId: number;
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
  expiry: number;
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
  currentAccountId: number;
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
  expiry: number;
  token: string;
}

export interface LolRsoAuthIdToken {
  expiry: number;
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
  id: number;
  incident_severity: string;
  platforms: Array<string>;
  titles: Array<LolServiceStatusRiotStatusTitle>;
  updated_at: string;
  updates: Array<LolServiceStatusRiotStatusUpdate>;
}

export interface LolServiceStatusRiotStatusMaintenance {
  archive_at: string;
  created_at: string;
  id: number;
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
  id: number;
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
  accountId: number;
  gasToken: boolean | undefined;
  state: LolSettingsLoginSessionStates;
  summonerId: number;
}

export type LolSettingsLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolSettingsSettingCategory {
  data: boolean | undefined;
  schemaVersion: number;
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
  id: number;
  type: string;
}

export interface LolSimpleDialogMessagesSimpleMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolSocialLeaderboardFriendResource {
  availability: string;
  icon: number;
  name: string;
  puuid: string;
  summonerId: number;
}

export interface LolSocialLeaderboardGiftingFriend {
  summonerId: number;
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
  leaguePoints: number;
  provisionalGamesRemaining: number;
  queueType: LolSocialLeaderboardLeagueQueueType;
  tier: LolSocialLeaderboardLeagueTier;
  wins: number;
}

export interface LolSocialLeaderboardRankedStats {
  queueMap: LolSocialLeaderboardRankedQueueStats | undefined;
}

export interface LolSocialLeaderboardSocialLeaderboardData {
  nextUpdateTime: number;
  rowData: Array<LolSocialLeaderboardSocialLeaderboardRowData>;
}

export interface LolSocialLeaderboardSocialLeaderboardRowData {
  availability: string;
  division: LolSocialLeaderboardLeagueDivision;
  isGiftable: boolean;
  isProvisional: boolean;
  leaderboardPosition: number;
  leaguePoints: number;
  profileIconId: number;
  provisionalGamesRemaining: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
  summonerName: string;
  tier: LolSocialLeaderboardLeagueTier;
  wins: number;
}

export interface LolSocialLeaderboardSummoner {
  accountId: number;
  displayName: string;
  internalName: string;
  profileIconId: number;
  puuid: string;
  summonerId: number;
  summonerLevel: number;
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
  cost: number;
  currency: string;
}

export interface LolStatstonesCatalogItemDetails {
  inventoryType: string;
  itemId: number;
  itemInstanceId: string;
  prices: Array<LolStatstonesCatalogBundlePrice>;
  releaseDate: string;
  subInventoryType: string;
}

export interface LolStatstonesChampionStatstoneSetSummary {
  milestonesPassed: number;
  name: string;
  stonesAvailable: number;
  stonesIlluminated: number;
  stonesOwned: number;
}

export interface LolStatstonesChampionStatstoneSummary {
  championId: number;
  milestonesPassed: number;
  sets: Array<LolStatstonesChampionStatstoneSetSummary>;
  stonesAvailable: number;
  stonesIlluminated: number;
  stonesOwned: number;
}

export interface LolStatstonesCollectionsChampion {
  id: number;
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
  itemId: number;
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
  itemId: number;
  milestones: Array<number>;
  name: string;
  trackingType: number;
}

export interface LolStatstonesGameDataStatstonePack {
  contentId: string;
  description: string;
  itemId: number;
  name: string;
}

export interface LolStatstonesGameDataStatstoneSet {
  contentId: string;
  inventoryType: string;
  itemId: number;
  name: string;
  price: number;
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
  itemId: number;
  loadout: boolean | undefined | undefined;
  name: string;
  scope: string;
}

export interface LolStatstonesLoadoutItem {
  contentId: string;
  inventoryType: string;
  itemId: number;
}

export interface LolStatstonesMilestoneNotificationDto {
  isCompleted: boolean;
  level: number;
  statstoneId: string;
  threshold: number;
}

export interface LolStatstonesMilestoneProgressNotification {
  imageUrl: string;
  level: string;
  statstoneId: string;
  statstoneName: string;
  threshold: number;
}

export interface LolStatstonesNumberFormattingBehavior {
  digitsForThousandsSeperator: number;
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
  price: number;
}

export interface LolStatstonesProfileStatstoneSummary {
  category: string;
  championId: number;
  imageUrl: string;
  name: string;
  value: string;
}

export interface LolStatstonesStatstone {
  boundChampionItemId: number;
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
  index: number;
}

export interface LolStatstonesStatstoneMasteryVignette {
  completedSetUuids: Array<string>;
  masteryLevel: number;
  numSetsCompleted: number;
  puuid: string;
}

export interface LolStatstonesStatstoneNotificationDto {
  best: number;
  delta: number;
  isNewBest: boolean;
  level: number;
  puuid: string;
  statstoneId: string;
  value: number;
}

export interface LolStatstonesStatstoneNotificationEnvelopeDto {
  gameId: number;
  milestones: Array<LolStatstonesMilestoneNotificationDto>;
  updates: Array<LolStatstonesStatstoneNotificationDto>;
}

export interface LolStatstonesStatstonePlayerRecord {
  dateAcquired: string;
  dateArchived: string;
  dateCompleted: string;
  dateModified: string;
  entitled: boolean;
  milestoneLevel: number;
  personalBest: number;
  puuid: string;
  statstoneId: string;
  value: number;
}

export interface LolStatstonesStatstoneProgress {
  best: number;
  category: string;
  delta: string;
  description: string;
  existingProgressPercent: string;
  imageUrl: string;
  isNewBest: boolean;
  level: number;
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
  itemId: number;
  itemInstanceID: string;
  milestonesPassed: number;
  name: string;
  ownedFromPacks: Array<LolStatstonesGameDataStatstonePack>;
  prices: Array<LolStatstonesPriceInfo>;
  statstones: Array<LolStatstonesStatstone>;
  stonesOwned: number;
  subInventoryType: string;
}

export interface LolStatstonesStatstoneSetCompleteVignette {
  statstones: Array<LolStatstonesStatstoneCompletion>;
}

export interface LolStatstonesStatstoneVignetteNotificationEnvelopeDto {
  champId: number;
  champName: string;
  masteryVignetteNotifications: Array<LolStatstonesStatstoneMasteryVignette>;
  rekindledVignetteNotifications: Array<LolStatstonesStatstoneRekindledVignette>;
  setCompleteVignetteNotifications: Array<LolStatstonesStatstoneSetCompleteVignette>;
}

export interface LolStatstonesSummoner {
  displayName: string;
  puuid: string;
  summonerId: number;
}

export interface LolStoreAccessTokenResource {
  expiry: number;
  scopes: Array<string>;
  token: string;
}

export interface LolStoreAllSummonerData {
  summoner: LolStoreSummoner;
  summonerLevelAndPoints: LolStoreSummonerLevelAndPoints;
}

export interface LolStoreBundleItemDTO {
  description: string;
  discountedRp: number;
  iconUrl: string;
  inventoryType: string;
  ip: number;
  itemId: number;
  name: string;
  owned: boolean;
  quantity: number;
  rp: number;
}

export interface LolStoreBundled {
  flexible: boolean;
  items: Array<LolStoreBundledItem>;
  minimumPrices: Array<LolStoreBundledItemCost>;
}

export interface LolStoreBundledItem {
  discountPrices: Array<LolStoreBundledItemCost>;
  inventoryType: string;
  itemId: number;
  quantity: number;
}

export interface LolStoreBundledItemCost {
  cost: number;
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
  itemPriceMap: number | undefined;
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
  itemId: number;
  itemInstanceId: string;
  itemRequirements: Array<LolStoreItemKey>;
  localizations: LolStoreItemLocalization | undefined;
  maxQuantity: number;
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
  giftingHextecMaxDailyGiftsReceive: number;
  giftingHextechMaxDailyGiftsSend: number;
  giftingItemMaxDailyGiftsReceive: number;
  giftingItemMaxDailyGiftsSend: number;
  giftingItemMinLevelSend: number;
  giftingRestrictionFlagRioter: number;
  giftingRpMaxDailyGiftsReceive: number;
  giftingRpMaxDailyGiftsSend: number;
  giftingRpMinLevelSend: number;
  recipientLevelLimitItem: number;
  recipientLevelLimitRp: number;
  requiresIdentityVerification: boolean;
}

export interface LolStoreGiftingFriend {
  friendsSince: string;
  nick: string;
  oldFriends: boolean;
  summonerId: number;
}

export interface LolStoreItemCost {
  cost: number;
  currency: string;
  discount: number;
}

export interface LolStoreItemKey {
  inventoryType: string;
  itemId: number;
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
  id: number;
  item: LolStoreItemKey;
  sale: LolStoreSale;
}

export interface LolStoreLoginDataPacket {
  allSummonerData: LolStoreAllSummonerData;
  simpleMessages: Array<LolStoreSimpleDialogMessage>;
}

export interface LolStoreLoginSession {
  accountId: number;
  gasToken: boolean | undefined;
  idToken: string;
  state: LolStoreLoginSessionStates;
  summonerId: number;
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
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface LolStoreOrderNotificationResource {
  eventType: string;
  eventTypeId: string;
  id: number;
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
  accountId: number;
  ip: number;
  rp: number;
  summonerLevel: number;
}

export interface LolStoreRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: number;
  version: string;
}

export interface LolStoreSale {
  endDate: string;
  prices: Array<LolStoreItemCost>;
  startDate: string;
}

export interface LolStoreServiceBalance {
  amount: number;
  currency: string;
}

export interface LolStoreServiceWallet {
  accountId: number;
  balances: Array<LolStoreServiceBalance>;
}

export interface LolStoreSimpleDialogMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface LolStoreStoreStatus {
  storefrontIsRunning: boolean;
}

export interface LolStoreSummoner {
  acctId: number;
  sumId: number;
}

export interface LolStoreSummonerLevelAndPoints {
  summonerLevel: number;
}

export interface LolStoreWallet {
  ip: number;
  rp: number;
}

export interface LolSuggestedPlayersEndOfGamePlayer {
  summonerId: number;
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
  FriendsOfFriendsLimit: number;
  MaxNumReplacements: number;
  MaxNumSuggestedPlayers: number;
  OnlineFriendsLimit: number;
  PreviousPremadesLimit: number;
  VicoriousComradesLimit: number;
}

export interface LolSuggestedPlayersSuggestedPlayersDynamicClientConfig {
  SuggestedPlayers: LolSuggestedPlayersSuggestedPlayersConfig;
}

export interface LolSuggestedPlayersSuggestedPlayersFriend {
  availability: string;
  name: string;
  summonerId: number;
}

export interface LolSuggestedPlayersSuggestedPlayersKudoedPlayer {
  kudoedSummonerId: number;
  kudoedSummonerName: string;
}

export interface LolSuggestedPlayersSuggestedPlayersLobbyStatus {
  invitedSummonerIds: Array<number>;
  memberSummonerIds: Array<number>;
  queueId: number;
}

export interface LolSuggestedPlayersSuggestedPlayersPlayerStatus {
  currentLobbyStatus: LolSuggestedPlayersSuggestedPlayersLobbyStatus;
  lastQueuedLobbyStatus: LolSuggestedPlayersSuggestedPlayersLobbyStatus;
}

export interface LolSuggestedPlayersSuggestedPlayersQueue {
  id: number;
  minLevel: number;
}

export type LolSuggestedPlayersSuggestedPlayersReason =
  | "PreviousPremade"
  | "OnlineFriend"
  | "FriendOfFriend"
  | "VictoriousComrade"
  | "LegacyPlayAgain";

export interface LolSuggestedPlayersSuggestedPlayersReportedPlayer {
  reportedSummonerId: number;
}

export interface LolSuggestedPlayersSuggestedPlayersSuggestedPlayer {
  commonFriendId: number;
  commonFriendName: string;
  reason: LolSuggestedPlayersSuggestedPlayersReason;
  summonerId: number;
  summonerName: string;
}

export interface LolSuggestedPlayersSuggestedPlayersSummoner {
  displayName: string;
  summonerId: number;
  summonerLevel: number;
}

export interface LolSuggestedPlayersSuggestedPlayersVictoriousComrade {
  summonerId: number;
  summonerName: string;
}

export interface LolSummonerAccountIdAndSummonerId {
  accountId: number;
  summonerId: number;
}

export interface LolSummonerAutoFillQueueDto {
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForStreaking: boolean;
  queueId: number;
}

export interface LolSummonerGameloopPlayerInfoV2 {
  autoFillDataBags: Array<LolSummonerAutoFillQueueDto>;
  rerollDataBags: Array<LolSummonerRerollDataBagForClientV1>;
}

export interface LolSummonerLevelField {
  finalLevel: number;
  initialLevel: number;
  progress: LolSummonerLevelProgression;
}

export interface LolSummonerLevelProgression {
  finalLevelBoundary: number;
  finalXp: number;
  initialLevelBoundary: number;
  initialXp: number;
}

export interface LolSummonerLoginSession {
  accountId: number;
  connected: boolean;
  puuid: string;
  state: LolSummonerLoginSessionStates;
  summonerId: number;
}

export type LolSummonerLoginSessionStates = "IN_PROGRESS" | "SUCCEEDED" | "LOGGING_OUT" | "ERROR";

export interface LolSummonerProfilePrivacy {
  enabledState: LolSummonerProfilePrivacyEnabledState;
  setting: LolSummonerProfilePrivacySetting;
}

export type LolSummonerProfilePrivacyEnabledState = "UNKNOWN" | "ENABLED" | "DISABLED";

export type LolSummonerProfilePrivacySetting = "PRIVATE" | "PUBLIC";

export interface LolSummonerRerollDataBagForClientV1 {
  maximumRerolls: number;
  pointCostOfReroll: number;
  pointsUntilNextReroll: number;
  queueId: number;
  rerollCount: number;
  totalPoints: number;
}

export interface LolSummonerStatus {
  ready: boolean;
}

export interface LolSummonerSummoner {
  accountId: number;
  displayName: string;
  internalName: string;
  nameChangeFlag: boolean;
  percentCompleteForNextLevel: number;
  privacy: LolSummonerProfilePrivacySetting;
  profileIconId: number;
  puuid: string;
  rerollPoints: LolSummonerSummonerRerollPoints;
  summonerId: number;
  summonerLevel: number;
  unnamed: boolean;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
}

export interface LolSummonerSummonerCacheData {
  privacy: LolSummonerProfilePrivacySetting;
  summoner: LolSummonerSummoner;
  summonerIcon: number;
  summonerName: string;
}

export interface LolSummonerSummonerCreateRequest {
  summonerName: string;
}

export interface LolSummonerSummonerCreatedId {
  summonerId: number;
}

export interface LolSummonerSummonerDTO {
  accountId: number;
  expPoints: number;
  expToNextLevel: number;
  id: number;
  level: number;
  name: string;
  nameChangeFlag: boolean;
  partnerId: string;
  privacy: LolSummonerProfilePrivacySetting;
  profileIconId: number;
  puuid: string;
  unnamed: boolean;
}

export interface LolSummonerSummonerIcon {
  inventoryToken: string;
  profileIconId: number;
}

export interface LolSummonerSummonerIdAndIcon {
  profileIconId: number;
  summonerId: number;
}

export interface LolSummonerSummonerIdAndName {
  displayName: string;
  summonerId: number;
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
  currentPoints: number;
  maxRolls: number;
  numberOfRolls: number;
  pointsCostToRoll: number;
  pointsToReroll: number;
}

export interface LolSummonerSummonerSession {
  displayName: string;
  isNewPlayer: boolean;
  summonerId: number;
}

export interface LolSummonerXpAndLevelMessage {
  level: LolSummonerLevelField;
  xp: boolean | undefined;
}

export interface LolTastesDataModelResponse {
  modelData: boolean | undefined;
  responseCode: number;
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
  itemId: number;
}

export interface LolTrophiesOtherPlayerTrophyInventoryItem {
  inventoryType: string;
  itemId: number;
  payload: LolTrophiesCapClashTrophyEntitlementPayload;
  purchaseDate: string;
  uuid: string;
}

export interface LolTrophiesTournamentTrophyInventoryItem {
  payload: LolTrophiesCapClashTrophyEntitlementPayload;
  purchaseDate: string;
}

export interface LolTrophiesTrophyProfileData {
  bracket: number;
  cup: string;
  gem: string;
  pedestal: string;
  seasonId: number;
  theme: string;
  tier: number;
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
  summonerId: number;
}

export interface LolWorldsTokenCardInventoryItem {
  inventoryType: string;
  itemId: number;
  ownershipType: LolWorldsTokenCardItemOwnershipType;
  purchaseDate: string;
  quantity: number;
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
  dependentInventoryId: number;
  dependentInventoryType: string;
  endDate: string;
  id: string;
  internalName: string;
  lockedCount: number;
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
  expiryTime: number;
  lootName: string;
  rarity: string;
  rentalGames: number;
  rentalSeconds: number;
  storeItemId: number;
  tags: string;
  type: string;
  upgradeLootName: string;
  value: number;
}

export interface LootItemListClientDTO {
  lastUpdate: number;
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
  lastUpdate: number;
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
  slotNumber: number;
}

export interface LootLedgerRecipeConfigMap {
  lastUpdate: number;
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
  lootOrder: number;
  parentId: string;
  quantity: number;
}

export interface LootSimpleDialogMessageResponse {
  accountId: number;
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
  leaverPenaltyMillisRemaining: number;
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
  queueIds: Array<number>;
  team: Array<number>;
  teamId: number;
}

export interface MatchmakingLcdsMatchMakerPayload {
  LEAVER_BUSTER_ACCESS_TOKEN: string;
}

export interface MatchmakingLcdsPlayerParticipant {
  summonerId: number;
}

export interface MatchmakingLcdsQueueDisabled {
  message: string;
  queueId: number;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsQueueDodger {
  dodgePenaltyRemainingTime: number;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsQueueInfo {
  queueId: number;
  waitTime: number;
}

export interface MatchmakingLcdsQueueRestricted {
  message: string;
  queueId: number;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsQueueThrottled {
  message: string;
  queueId: number;
  reasonFailed: string;
  summoner: MatchmakingLcdsSummoner;
}

export interface MatchmakingLcdsSearchingForMatchNotification {
  joinedQueues: Array<MatchmakingLcdsQueueInfo>;
  playerJoinFailures: Array<boolean | undefined>;
}

export interface MatchmakingLcdsSummoner {
  name: string;
  sumId: number;
}

export interface MemberBanUnbanTournament {
  tournamentId: number;
  tournamentPhaseLockInTime: number;
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
  period: number;
  pretty_name: string;
  priority: MetricPriority;
  sample_window_ms: number;
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
  alertTime: number;
  message: string;
  type: string;
}

export interface MissionDisplay {
  attributes: Array<string>;
  locations: Array<string>;
}

export interface MissionMetadata {
  level: number;
  npeRewardPack: NpeRewardPackMetadata;
  tutorial: TutorialMetadata;
}

export interface MissionProgressDTO {
  currentProgress: number;
  lastViewedProgress: number;
  totalCount: number;
}

export interface MissionRequirementDTO {
  expression: string;
}

export interface MissionsCompressedPayloadDTO {
  missionsCompressed: string;
}

export interface MultipleReplayMetadataRequestV2 {
  gameIds: Array<number>;
  platformId: string;
}

export interface MultipleReplayMetadataResponseItemV2 {
  gameId: number;
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
  when: number;
}

export interface NpeReward {
  data: boolean | undefined;
  renderer: string;
}

export interface NpeRewardPackMetadata {
  index: number;
  majorReward: NpeReward;
  minorRewards: Array<NpeReward>;
  premiumReward: boolean;
  rewardKey: string;
}

export interface OpenedTeamDTO {
  captainId: number;
  invitationId: string;
  invitees: Array<PendingRosterInviteeDTO>;
  logo: number;
  logoColor: number;
  members: Array<OpenedTeamMemberDTO>;
  name: string;
  openPositions: Array<Position>;
  shortName: string;
  tier: number;
}

export interface OpenedTeamMemberDTO {
  friendship: number;
  playerId: number;
  position: Position;
  tier: number;
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
  bytesComplete: number;
  bytesPerSecond: number;
  bytesRequired: number;
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
  successfullyInstalledVersion: number;
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
  summonerLevel: number;
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
  summonerLevel: number;
}

export interface PaymentsPMCStartUrlResult {
  createdAt: string;
  id: string;
  localeId: string;
  playerFacingId: string;
  pmcStartUrl: string;
  summonerLevel: number;
  userId: string;
}

export interface PendingOpenedTeamDTO {
  invitationId: string;
  logo: number;
  logoColor: number;
  name: string;
  shortName: string;
  tier: number;
}

export interface PendingRosterDTO {
  captainId: number;
  highTierVariance: boolean;
  invitationId: string;
  inviteFaileds: Array<FailedInvite>;
  invitees: Array<PendingRosterInviteeDTO>;
  lft: boolean;
  logo: number;
  logoColor: number;
  members: Array<PendingRosterMemberDTO>;
  multiUserChatJWT: string;
  name: string;
  rewardLogos: Array<RewardLogo>;
  shortName: string;
  ticketOffers: Array<TicketOfferDTO>;
  tier: number;
  tournamentId: number;
  version: number;
}

export interface PendingRosterInviteeDTO {
  inviteTime: number;
  inviteType: InviteType;
  inviteeId: number;
  inviteeState: PendingRosterInviteeState;
  inviter: number;
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
  bet: number;
  betType: TicketType;
  joinTime: number;
  memberState: PendingRosterMemberState;
  pendingPay: number;
  pendingPremiumPay: number;
  playerId: number;
  position: Position;
  selfBet: number;
  tier: number;
}

export type PendingRosterMemberState = "NOT_READY" | "FORCED_NOT_READY" | "READY" | "LEFT" | "KICK";

export interface PersonalizedOffersLcdsChampionDTO {
  championId: number;
  owned: boolean;
}

export interface PersonalizedOffersLcdsChampionSkinDTO {
  championId: number;
  owned: boolean;
  skinId: number;
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
  bet: number;
  pendingPay: number;
  playerId: number;
  selfBet: number;
}

export interface PhaseRosterDTO {
  bracketDTO: Bracket;
  bracketId: number;
  checkinTime: number;
  period: number;
  phaseId: number;
  phaseRosterSubs: Array<PhaseRosterSubDTO>;
}

export interface PhaseRosterSubDTO {
  bet: number;
  betType: TicketType;
  pay: number;
  playerId: number;
  position: Position;
  premiumPay: number;
  replacedPlayerId: number;
  subState: SubState;
  tier: number;
}

export type PickModes = "NOT_PICKING" | "IN_PROGRESS" | "DONE";

export interface PlayerBehaviorLcdsForcedClientShutdown {
  additionalInfo: string;
  reason: string;
}

export interface PlayerBehaviorLcdsSimpleMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface PlayerBehaviorSimpleMessageResponse {
  accountId: number;
  command: string;
  msgId: string;
}

export interface PlayerDTO {
  banned: boolean;
  lft: boolean;
  notifications: Array<ClashOfflineNotification>;
  primaryPos: string;
  secondaryPos: string;
  tmntLosses: number;
  tmntWins: number;
}

export interface PlayerFinderDTO {
  friendId: number;
  playerId: number;
  primaryPos: Position;
  secondaryPos: Position;
  tier: number;
  type: PlayerFinderEnum;
}

export type PlayerFinderEnum = "FREEAGENT" | "FRIEND";

export interface PlayerInfoDTO {
  playerId: number;
  position: string;
  role: Role;
  teamId: string;
}

export interface PlayerInventory {
  champions: Array<number>;
  icons: Array<number>;
  inventoryJwts: Array<string>;
  skins: Array<number>;
  wardSkins: Array<number>;
}

export interface PlayerLootDTO {
  count: number;
  expiryTime: number;
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
  completedDate: number;
  completionExpression: string;
  cooldownTimeMillis: number;
  description: string;
  display: MissionDisplay;
  displayType: string;
  earnedDate: number;
  endTime: number;
  expiringWarnings: Array<MissionAlertDTO>;
  helperText: string;
  iconImageUrl: string;
  id: string;
  internalName: string;
  isNew: boolean;
  lastUpdatedTimestamp: number;
  locale: string;
  media: string | undefined;
  metadata: MissionMetadata;
  missionType: string;
  objectives: Array<PlayerMissionObjectiveDTO>;
  requirements: Array<string>;
  rewardStrategy: RewardStrategy;
  rewards: Array<PlayerMissionRewardDTO>;
  sequence: number;
  seriesName: string;
  startTime: number;
  status: string;
  title: string;
  viewed: boolean;
}

export interface PlayerMissionEligibilityData {
  level: number;
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
  sequence: number;
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
  quantity: number;
  rewardFulfilled: boolean;
  rewardGroup: string;
  rewardGroupSelected: boolean;
  rewardType: string;
  sequence: number;
  smallIconUrl: string;
  uniqueName: string;
}

export interface PlayerNotificationsPlayerNotificationConfigResource {
  ExpirationCheckFrequency: number;
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
  id: number;
  source: string;
  state: string;
  titleKey: string;
  type: string;
}

export interface PlayerNotificationsRiotMessagingServiceMessage {
  payload: string;
  resource: string;
  service: string;
  timestamp: number;
  version: string;
}

export interface PlayerParticipant {
  summonerId: number;
}

export interface PlayerRosterHistoryDTO {
  rosters: Array<RosterMemberDTO>;
}

export interface PlayerTierDTO {
  playerId: number;
  primaryPos: Position;
  secondPos: Position;
  tier: number;
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
  orderWADFileMounted: number;
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
  playerId: number;
  replacedPlayerId: number;
}

export interface PublicPhaseSubsDTO {
  phaseId: number;
  phaseSubs: Array<PublicPhaseSubDTO>;
}

export interface PublicRosterDTO {
  id: number;
  logo: number;
  logoColor: number;
  memberIds: Array<number>;
  name: string;
  phasesSubs: Array<PublicPhaseSubsDTO>;
  shortName: string;
  tournamentId: number;
}

export interface Punishment {
  permaBan: boolean;
  playerFacingMessage: string;
  punishedForChatLogs: Array<string>;
  punishedForGameIds: Array<number>;
  punishedUntilDateMillis: number;
  punishmentLengthGames: number;
  punishmentLengthMillis: number;
  punishmentReason: string;
  punishmentType: string;
}

export interface QueryResultDTO {
  lastUpdate: number;
  queryToLootNames: boolean | undefined;
}

export interface RankedScoutingDTO {
  playerId: number;
  topMasteries: Array<ChampionMasteryPublicDTO>;
  topSeasonChampions: Array<ChampionScoutingDTO>;
  totalMasteryScore: number;
}

export interface RankedScoutingMemberDTO {
  championScoutingData: Array<RankedScoutingTopChampionDTO>;
  playerId: number;
}

export interface RankedScoutingTopChampionDTO {
  championId: number;
  gameCount: number;
  kda: number;
  rank: number;
  winCount: number;
}

export interface RedeemLootTransactionDTO {
  accountId: number;
  clientId: string;
  lootName: string;
  playerId: number;
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
  fileSize: number;
  gameVersion: string;
}

export type ReplayResponseStatus =
  | "OK"
  | "NOT_FOUND"
  | "EXPIRED"
  | "BAD_REQUEST"
  | "INTERNAL_SERVER_ERROR";

export interface RewardDetails {
  rosterId: number;
  teamMemberIds: Array<number>;
  tournamentId: number;
}

export interface RewardLogo {
  logo: number;
  memberOwnedCount: number;
}

export interface RewardStrategy {
  groupStrategy: string;
  selectMaxGroupCount: number;
  selectMinGroupCount: number;
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
  timestamp: number;
  version: string;
}

export type Role = "CAPTAIN" | "MEMBER" | "NONE";

export interface RosterAggregatedStatsDTO {
  periodStats: Array<RosterPeriodAggregatedStatsDTO>;
  playerStats: RosterPlayerAggregatedStatsDTO | undefined;
}

export interface RosterDTO {
  banned: boolean;
  captainId: number;
  dynamicState: RosterDynamicStateDTO;
  eliminated: boolean;
  id: number;
  invitationId: string;
  logo: number;
  logoColor: number;
  losses: number;
  members: Array<RosterMemberDTO>;
  multiUserChatJWT: string;
  name: string;
  phases: Array<PhaseRosterDTO>;
  points: number;
  shortName: string;
  tier: number;
  tournamentId: number;
  version: number;
  wins: number;
}

export interface RosterDynamicStateDTO {
  members: Array<PhaseInMember>;
  phaseCheckinStates: Array<number>;
  phaseRosterSubs: Array<PhaseRosterSubDTO>;
  rosterId: number;
  subbedMemberIds: Array<number>;
  ticketOffers: Array<TicketOfferDTO>;
  tournamentId: number;
  version: number;
  withdraw: RosterWithdraw;
}

export interface RosterMatchAggregatedStatsDTO {
  duration: number;
  gameId: number;
  kills: number;
  loserBracket: boolean;
  opponentKills: number;
  opponentLogo: number;
  opponentLogoColor: number;
  opponentShortName: string;
  playerChampionIds: number | undefined;
  round: number;
  win: boolean;
}

export interface RosterMemberDTO {
  bidType: TicketType;
  currentBid: number;
  joinTime: number;
  pendingPremiumSpend: number;
  pendingSpend: number;
  playerId: number;
  position: Position;
  rosterId: number;
  tier: number;
  tournamentId: number;
}

export interface RosterPeriodAggregatedStatsDTO {
  bracketSize: number;
  matchStats: Array<RosterMatchAggregatedStatsDTO>;
  period: number;
  playerBids: number | undefined;
  time: number;
}

export interface RosterPlayerAggregatedStatsDTO {
  rawStatsMax: number | undefined;
  rawStatsSum: number | undefined;
  sub: boolean;
}

export interface RosterStatsDTO {
  rosterId: number;
  rosterLogo: number;
  rosterLogoColor: number;
  rosterName: string;
  rosterShortName: string;
  scheduleEndTime: number;
  scheduleTime: number;
  stats: RosterAggregatedStatsDTO;
  tier: number;
  tournamentNameLocKey: string;
  tournamentNameLocKeySecondary: string;
  tournamentPeriods: number;
  tournamentThemeId: number;
}

export interface RosterWithdraw {
  declineWithdrawMembers: Array<number>;
  gameStartBufferMs: number;
  initVoteMember: number;
  initVoteTime: number;
  lockoutTimeMs: number;
  voteTimeoutMs: number;
  voteWithdrawMembers: Array<number>;
}

export interface SanitizerContainsSanitizedRequest {
  aggressiveScan: boolean;
  level: number;
  text: string;
}

export interface SanitizerContainsSanitizedResponse {
  contains: boolean;
}

export interface SanitizerSanitizeRequest {
  aggressiveScan: boolean;
  level: number;
  text: string;
  texts: Array<string>;
}

export interface SanitizerSanitizeResponse {
  modified: boolean;
  text: string;
  texts: Array<string>;
}

export interface SanitizerSanitizerStatus {
  breakingCharsCount: number;
  filteredWordCountsByLevel: number | undefined;
  locale: string;
  projectedCharsCount: number;
  ready: boolean;
  region: string;
  whitelistedWordCountsByLevel: number | undefined;
}

export interface SeriesDTO {
  createdDate: number;
  description: string;
  displayType: string;
  eligibilityType: string;
  endDate: number;
  id: string;
  internalName: string;
  lastUpdatedTimestamp: number;
  media: SeriesMediaDTO;
  optInButtonText: string;
  optOutButtonText: string;
  parentInternalName: string;
  startDate: number;
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
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface SimpleDialogMessageResponse {
  accountId: number;
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
  championId: number;
  championSkins: Array<StoreLcdsChampionSkinDTO>;
  endDate: number;
  freeToPlay: boolean;
  freeToPlayReward: boolean;
  owned: boolean;
  purchaseDate: number;
  rankedPlayEnabled: boolean;
  sources: Array<string>;
  winCountRemaining: number;
}

export interface StoreLcdsChampionSkinDTO {
  championId: number;
  endDate: number;
  freeToPlayReward: boolean;
  lastSelected: boolean;
  owned: boolean;
  purchaseDate: number;
  skinId: number;
  sources: Array<string>;
  stillObtainable: boolean;
  winCountRemaining: number;
}

export interface StoreLcdsSimpleDialogMessage {
  accountId: number;
  msgId: string;
  params: Array<string>;
  type: string;
}

export interface StoreLcdsSimpleDialogMessageResponse {
  accountId: number;
  command: string;
  msgId: string;
}

export interface StoreLcdsStoreAccountBalanceNotification {
  ip: number;
  rp: number;
}

export interface StoreLcdsStoreFulfillmentNotification {
  data: boolean | undefined;
  inventoryType: string;
  ip: number;
  rp: number;
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
  themeId: number;
  themeVp: number;
}

export interface TicketOfferDTO {
  count: number;
  offerPlayerId: number;
  receivePlayerId: number;
  ticketOfferState: TicketOfferState;
  type: TicketType;
}

export type TicketOfferState = "ACTIVE" | "ACCEPTED" | "REJECTED" | "REVOKED";

export type TicketType = "BASIC" | "PREMIUM";

export interface TierConfig {
  delayTime: number;
  estimateTime: number;
  tier: number;
}

export interface TimeSeriesEventBeginV1 {
  eventName: string;
  when: number;
}

export interface TimeSeriesEventEndV1 {
  eventName: string;
  suffix: string;
  when: number;
}

export interface TimeSeriesEventMarkerV1 {
  eventName: string;
  markerName: string;
  when: number;
}

export interface TournamentDTO {
  bracketFormationInitDelayMs: number;
  bracketFormationIntervalMs: number;
  bracketSize: string;
  buyInOptions: Array<number>;
  buyInOptionsPremium: Array<number>;
  entryFee: number;
  honorRestriction: boolean;
  id: number;
  lastThemeOfSeason: boolean;
  lft: boolean;
  maxInvites: number;
  maxSub: number;
  maxSuggestionsPerPlayer: number;
  minGames: number;
  nameLocKey: string;
  nameLocKeySecondary: string;
  phases: Array<TournamentPhaseDTO>;
  queueId: number;
  rankRestriction: boolean;
  resumeTime: number;
  rewardConfig: Array<ClashRewardConfigClient>;
  rosterCreateDeadline: number;
  rosterSize: number;
  scheduleEndTime: number;
  scheduleTime: number;
  scoutingTimeMs: number;
  smsRestriction: boolean;
  status: TournamentStatusEnum;
  themeId: number;
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
  themeVp: number;
  tournament: TournamentDTO;
}

export interface TournamentInfoMinimalDTO {
  time: number;
  tournamentInfo: Array<TournamentInfoDTO>;
}

export interface TournamentPhaseDTO {
  cancelled: boolean;
  capacityStatus: CapacityEnum;
  id: number;
  limitTiers: Array<number>;
  period: number;
  registrationTime: number;
  startTime: number;
  tournamentId: number;
}

export interface TournamentPlayerInfoDTO {
  player: PlayerDTO;
  rosterStats: Array<RosterStatsDTO>;
  seasonVp: number;
  themeVps: Array<ThemeVp>;
  tier: number;
  time: number;
  tournamentInfo: Array<TournamentInfoDTO>;
}

export type TournamentStatusEnum = "DEFAULT" | "CANCELLED" | "PAUSED" | "PRERESUME";

export interface TracingEventV1 {
  dest: string;
  details: string;
  name: string;
  src: string;
  tags: string;
  when: number;
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
  moduleId: number;
  name: string;
  threadingModel: TracingModuleThreadingModelV1;
  type: TracingModuleTypeV1;
}

export interface TracingPhaseBeginV1 {
  importance: TracingPhaseImportanceV1;
  name: string;
  when: number;
}

export interface TracingPhaseEndV1 {
  name: string;
  when: number;
}

export type TracingPhaseImportanceV1 = "trivial" | "minor" | "major";

export interface TutorialMetadata {
  displayRewards: string | undefined;
  queueId: string;
  stepNumber: number;
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
  micEnergy: number;
  micVolume: number;
  noiseFloorMeter: number;
  speakerEnergy: number;
  speakerVolume: number;
  speechThresholdMeter: number;
}

export interface VoiceChatCallStatsResource {
  callId: string;
  captureDeviceConsecutivelyReadCount: Array<number>;
  codecName: string;
  currentBars: number;
  currentOpusBandwidth: number;
  currentOpusBitRate: number;
  currentOpusComplexity: number;
  currentOpusMaxPacketSize: number;
  currentOpusVbrMode: number;
  incomingDiscarded: number;
  incomingOutOfTime: number;
  incomingPacketloss: number;
  incomingReceived: number;
  lastLatencyMeasured: number;
  latencyMeasurementCount: number;
  latencyPacketsDropped: number;
  latencyPacketsLost: number;
  latencyPacketsMalformed: number;
  latencyPacketsNegativeLatency: number;
  latencyPacketsSent: number;
  latencySum: number;
  maxLatency: number;
  minLatency: number;
  outgoingSent: number;
  plcOn: number;
  plcSyntheticFrames: number;
  rFactor: number;
  renderDeviceErrors: number;
  renderDeviceOverruns: number;
  renderDeviceUnderruns: number;
  sampleIntervalBegin: number;
  sampleIntervalEnd: number;
}

export type VoiceChatCaptureDevicePermissionStatus =
  | "promptForPermission"
  | "permissionDenied"
  | "permissionGranted";

export interface VoiceChatCodecSettingsResource {
  codecBandwidth: number;
  codecBitrate: number;
  codecComplexity: number;
  codecVbrMode: number;
}

export type VoiceChatConfigReadinessEnum = "NotReady" | "Ready" | "Disabled";

export interface VoiceChatConfigResource {
  accessTokenUri: string;
  authTokenUri: string;
  jwt2gvtUrl: string;
  logLevel: number;
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
  energy: number;
  id: string;
  isMuted: boolean;
  isSpeaking: boolean;
  name: string;
  speakingTimestamp: number;
  uri: string;
  volume: number;
}

export interface VoiceChatPushToTalkResource {
  pttEnabled: boolean;
  pttKeyBinding: string;
}

export interface VoiceChatRsoAuthorizationResource {
  currentAccountId: number;
  currentPlatformId: string;
  subject: string;
}

export interface VoiceChatSessionResource {
  id: string;
  isMuted: boolean;
  isTransmitEnabled: boolean;
  participants: Array<VoiceChatParticipantResource>;
  status: VoiceChatSessionStatus;
  volume: number;
}

export type VoiceChatSessionStatus = "active" | "onHold";

export interface VoiceChatSettingsResource {
  currentCaptureDeviceHandle: string;
  currentRenderDeviceHandle: string;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  micLevel: number;
  speakerLevel: number;
  vadHangoverTime: number;
  vadSensitivity: number;
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
  codecBandwidth: number;
  codecBitrate: number;
  codecComplexity: number;
  codecVbrMode: number;
}

export interface VoiceChatUpdateParticipantResource {
  isMuted: boolean;
  volume: number;
}

export interface VoiceChatUpdateSettingsResource {
  currentCaptureDeviceHandle: string;
  currentRenderDeviceHandle: string;
  localMicMuted: boolean;
  loopbackEnabled: boolean;
  micLevel: number;
  speakerLevel: number;
  vadHangoverTime: number;
  vadSensitivity: number;
}

export interface VoiceChatVoiceErrorCounterResource {
  count: number;
  error: VoiceChatVoiceErrorResource;
  timeOfLastError: number;
}

export interface VoiceChatVoiceErrorResource {
  errorString: string;
  responseType: number;
  responseTypeString: string;
  returnCode: number;
  statusCode: number;
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
  physicalMemory: number;
  physicalProcessorCores: number;
  processorSpeed: number;
}

export interface cookie {
  domain: string;
  expires: number;
  httponly: boolean;
  name: string;
  path: string;
  secure: boolean;
  url: string;
  value: string;
}
