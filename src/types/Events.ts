import * as LCU_Type from "./Types";

export type EventMap = {
  OnJsonApiEvent_entitlements_v1_token: {
    uri: "/entitlements/v1/token";
    returnType: LCU_Type.EntitlementsToken;
  };
  "OnJsonApiEvent_lol-account-verification_v1_is-verified": {
    uri: "/lol-account-verification/v1/is-verified";
    returnType: LCU_Type.LolAccountVerificationIsVerifiedResponse;
  };
  "OnJsonApiEvent_lol-active-boosts_v1_active-boosts": {
    uri: "/lol-active-boosts/v1/active-boosts";
    returnType: LCU_Type.LolActiveBoostsActiveBoosts;
  };
  "OnJsonApiEvent_lol-anti-addiction_v1_anti-addiction-token": {
    uri: "/lol-anti-addiction/v1/anti-addiction-token";
    returnType: LCU_Type.LolAntiAddictionAntiAddictionToken;
  };
  "OnJsonApiEvent_lol-catalog_v1_items": {
    uri: "/lol-catalog/v1/items";
    returnType: Array<LCU_Type.LolCatalogItemChoiceDetails>;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_bannable-champion-ids": {
    uri: "/lol-champ-select-legacy/v1/bannable-champion-ids";
    returnType: Array<bigint>;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_current-champion": {
    uri: "/lol-champ-select-legacy/v1/current-champion";
    returnType: bigint;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_disabled-champion-ids": {
    uri: "/lol-champ-select-legacy/v1/disabled-champion-ids";
    returnType: Array<bigint>;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_implementation-active": {
    uri: "/lol-champ-select-legacy/v1/implementation-active";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_pickable-champion-ids": {
    uri: "/lol-champ-select-legacy/v1/pickable-champion-ids";
    returnType: Array<bigint>;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_pickable-skin-ids": {
    uri: "/lol-champ-select-legacy/v1/pickable-skin-ids";
    returnType: Array<bigint>;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_session": {
    uri: "/lol-champ-select-legacy/v1/session";
    returnType: LCU_Type.LolChampSelectLegacyChampSelectSession;
  };
  "OnJsonApiEvent_lol-champ-select-legacy_v1_team-boost": {
    uri: "/lol-champ-select-legacy/v1/team-boost";
    returnType: LCU_Type.LolChampSelectLegacyTeamBoost;
  };
  "OnJsonApiEvent_lol-champ-select_v1_all-grid-champions": {
    uri: "/lol-champ-select/v1/all-grid-champions";
    returnType: Array<LCU_Type.LolChampSelectChampGridChampion>;
  };
  "OnJsonApiEvent_lol-champ-select_v1_current-champion": {
    uri: "/lol-champ-select/v1/current-champion";
    returnType: bigint;
  };
  "OnJsonApiEvent_lol-champ-select_v1_muted-players": {
    uri: "/lol-champ-select/v1/muted-players";
    returnType: Array<LCU_Type.LolChampSelectMutedPlayerInfo>;
  };
  "OnJsonApiEvent_lol-champ-select_v1_session": {
    uri: "/lol-champ-select/v1/session";
    returnType: LCU_Type.LolChampSelectChampSelectSession;
  };
  "OnJsonApiEvent_lol-champ-select_v1_team-boost": {
    uri: "/lol-champ-select/v1/team-boost";
    returnType: LCU_Type.LolChampSelectTeamBoost;
  };
  "OnJsonApiEvent_lol-champions_v1_owned-champions-minimal": {
    uri: "/lol-champions/v1/owned-champions-minimal";
    returnType: Array<LCU_Type.LolChampionsCollectionsChampionMinimal>;
  };
  "OnJsonApiEvent_lol-chat_v1_blocked-players": {
    uri: "/lol-chat/v1/blocked-players";
    returnType: Array<LCU_Type.LolChatBlockedPlayerResource>;
  };
  "OnJsonApiEvent_lol-chat_v1_config": {
    uri: "/lol-chat/v1/config";
    returnType: LCU_Type.LolChatChatServiceDynamicClientConfig;
  };
  "OnJsonApiEvent_lol-chat_v1_conversations": {
    uri: "/lol-chat/v1/conversations";
    returnType: Array<LCU_Type.LolChatConversationResource>;
  };
  "OnJsonApiEvent_lol-chat_v1_friend-counts": {
    uri: "/lol-chat/v1/friend-counts";
    returnType: LCU_Type.LolChatFriendCountsResource;
  };
  "OnJsonApiEvent_lol-chat_v1_friend-groups": {
    uri: "/lol-chat/v1/friend-groups";
    returnType: Array<LCU_Type.LolChatGroupResource>;
  };
  "OnJsonApiEvent_lol-chat_v1_friend-requests": {
    uri: "/lol-chat/v1/friend-requests";
    returnType: Array<LCU_Type.LolChatFriendRequestResource>;
  };
  "OnJsonApiEvent_lol-chat_v1_friends": {
    uri: "/lol-chat/v1/friends";
    returnType: Array<LCU_Type.LolChatFriendResource>;
  };
  "OnJsonApiEvent_lol-chat_v1_me": {
    uri: "/lol-chat/v1/me";
    returnType: LCU_Type.LolChatUserResource;
  };
  "OnJsonApiEvent_lol-chat_v1_resources": {
    uri: "/lol-chat/v1/resources";
    returnType: LCU_Type.LolChatProductMetadataMap;
  };
  "OnJsonApiEvent_lol-chat_v1_session": {
    uri: "/lol-chat/v1/session";
    returnType: LCU_Type.LolChatSessionResource;
  };
  "OnJsonApiEvent_lol-chat_v1_settings": {
    uri: "/lol-chat/v1/settings";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-clash_v1_all-tournaments": {
    uri: "/lol-clash/v1/all-tournaments";
    returnType: Array<LCU_Type.TournamentDTO>;
  };
  "OnJsonApiEvent_lol-clash_v1_checkin-allowed": {
    uri: "/lol-clash/v1/checkin-allowed";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-clash_v1_currentTournamentIds": {
    uri: "/lol-clash/v1/currentTournamentIds";
    returnType: Array<bigint>;
  };
  "OnJsonApiEvent_lol-clash_v1_disabled-config": {
    uri: "/lol-clash/v1/disabled-config";
    returnType: LCU_Type.LolClashClashDisabledConfig;
  };
  "OnJsonApiEvent_lol-clash_v1_enabled": { uri: "/lol-clash/v1/enabled"; returnType: boolean };
  "OnJsonApiEvent_lol-clash_v1_iconconfig": {
    uri: "/lol-clash/v1/iconconfig";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-clash_v1_invited-roster-ids": {
    uri: "/lol-clash/v1/invited-roster-ids";
    returnType: Array<string>;
  };
  "OnJsonApiEvent_lol-clash_v1_player": {
    uri: "/lol-clash/v1/player";
    returnType: LCU_Type.LolClashPlayerData;
  };
  "OnJsonApiEvent_lol-clash_v1_playmode-restricted": {
    uri: "/lol-clash/v1/playmode-restricted";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-clash_v1_ready": { uri: "/lol-clash/v1/ready"; returnType: boolean };
  "OnJsonApiEvent_lol-clash_v1_simple-state-flags": {
    uri: "/lol-clash/v1/simple-state-flags";
    returnType: Array<LCU_Type.LolClashSimpleStateFlag>;
  };
  "OnJsonApiEvent_lol-clash_v1_time": { uri: "/lol-clash/v1/time"; returnType: bigint };
  "OnJsonApiEvent_lol-clash_v1_tournament-state-info": {
    uri: "/lol-clash/v1/tournament-state-info";
    returnType: Array<LCU_Type.LolClashTournamentStateInfo>;
  };
  "OnJsonApiEvent_lol-clash_v1_tournament-summary": {
    uri: "/lol-clash/v1/tournament-summary";
    returnType: Array<LCU_Type.LolClashTournamentSummary>;
  };
  "OnJsonApiEvent_lol-clash_v1_visible": { uri: "/lol-clash/v1/visible"; returnType: boolean };
  "OnJsonApiEvent_lol-clash_v1_voice-enabled": {
    uri: "/lol-clash/v1/voice-enabled";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-clash_v2_playmode-restricted": {
    uri: "/lol-clash/v2/playmode-restricted";
    returnType: LCU_Type.LolClashPlaymodeRestrictedInfo;
  };
  "OnJsonApiEvent_lol-content-targeting_v1_filters": {
    uri: "/lol-content-targeting/v1/filters";
    returnType: LCU_Type.LolContentTargetingContentTargetingFilterResponse;
  };
  "OnJsonApiEvent_lol-end-of-game_v1_eog-stats-block": {
    uri: "/lol-end-of-game/v1/eog-stats-block";
    returnType: LCU_Type.LolEndOfGameEndOfGameStats;
  };
  "OnJsonApiEvent_lol-end-of-game_v1_gameclient-eog-stats-block": {
    uri: "/lol-end-of-game/v1/gameclient-eog-stats-block";
    returnType: LCU_Type.LolEndOfGameGameClientEndOfGameStats;
  };
  "OnJsonApiEvent_lol-end-of-game_v1_tft-eog-stats": {
    uri: "/lol-end-of-game/v1/tft-eog-stats";
    returnType: LCU_Type.LolEndOfGameTFTEndOfGameViewModel;
  };
  "OnJsonApiEvent_lol-game-client-chat_v1_buddies": {
    uri: "/lol-game-client-chat/v1/buddies";
    returnType: Array<string>;
  };
  "OnJsonApiEvent_lol-game-queues_v1_custom": {
    uri: "/lol-game-queues/v1/custom";
    returnType: LCU_Type.LolGameQueuesQueueCustomGame;
  };
  "OnJsonApiEvent_lol-game-queues_v1_custom-non-default": {
    uri: "/lol-game-queues/v1/custom-non-default";
    returnType: LCU_Type.LolGameQueuesQueueCustomGame;
  };
  "OnJsonApiEvent_lol-game-queues_v1_queues": {
    uri: "/lol-game-queues/v1/queues";
    returnType: Array<LCU_Type.LolGameQueuesQueue>;
  };
  "OnJsonApiEvent_lol-game-settings_v1_game-settings": {
    uri: "/lol-game-settings/v1/game-settings";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-game-settings_v1_input-settings": {
    uri: "/lol-game-settings/v1/input-settings";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-game-settings_v1_ready": {
    uri: "/lol-game-settings/v1/ready";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-gameflow_v1_availability": {
    uri: "/lol-gameflow/v1/availability";
    returnType: LCU_Type.LolGameflowGameflowAvailability;
  };
  "OnJsonApiEvent_lol-gameflow_v1_battle-training": {
    uri: "/lol-gameflow/v1/battle-training";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-gameflow_v1_gameflow-phase": {
    uri: "/lol-gameflow/v1/gameflow-phase";
    returnType: LCU_Type.LolGameflowGameflowPhase;
  };
  "OnJsonApiEvent_lol-gameflow_v1_session": {
    uri: "/lol-gameflow/v1/session";
    returnType: LCU_Type.LolGameflowGameflowSession;
  };
  "OnJsonApiEvent_lol-gameflow_v1_spectate": {
    uri: "/lol-gameflow/v1/spectate";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-gameflow_v1_watch": {
    uri: "/lol-gameflow/v1/watch";
    returnType: LCU_Type.LolGameflowGameflowWatchPhase;
  };
  "OnJsonApiEvent_lol-highlights_v1_config": {
    uri: "/lol-highlights/v1/config";
    returnType: LCU_Type.LolHighlightsHighlightsConfig;
  };
  "OnJsonApiEvent_lol-highlights_v1_highlights-folder-path": {
    uri: "/lol-highlights/v1/highlights-folder-path";
    returnType: string;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_ballot": {
    uri: "/lol-honor-v2/v1/ballot";
    returnType: LCU_Type.LolHonorV2Ballot;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_config": {
    uri: "/lol-honor-v2/v1/config";
    returnType: LCU_Type.LolHonorV2HonorConfig;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_level-change": {
    uri: "/lol-honor-v2/v1/level-change";
    returnType: LCU_Type.LolHonorV2VendedHonorChange;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_profile": {
    uri: "/lol-honor-v2/v1/profile";
    returnType: LCU_Type.LolHonorV2ProfileInfo;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_recognition": {
    uri: "/lol-honor-v2/v1/recognition";
    returnType: Array<LCU_Type.LolHonorV2Honor>;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_team-choices": {
    uri: "/lol-honor-v2/v1/team-choices";
    returnType: Array<bigint>;
  };
  "OnJsonApiEvent_lol-inventory_v1_initial-configuration-complete": {
    uri: "/lol-inventory/v1/initial-configuration-complete";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-inventory_v1_inventory": {
    uri: "/lol-inventory/v1/inventory";
    returnType: Array<LCU_Type.LolInventoryInventoryItemWithPayload>;
  };
  "OnJsonApiEvent_lol-inventory_v1_signedInventory": {
    uri: "/lol-inventory/v1/signedInventory";
    returnType: string | undefined;
  };
  "OnJsonApiEvent_lol-inventory_v1_wallet": {
    uri: "/lol-inventory/v1/wallet";
    returnType: bigint | undefined;
  };
  "OnJsonApiEvent_lol-kr-playtime-reminder_v1_message": {
    uri: "/lol-kr-playtime-reminder/v1/message";
    returnType: string;
  };
  "OnJsonApiEvent_lol-league-session_v1_league-session-token": {
    uri: "/lol-league-session/v1/league-session-token";
    returnType: string;
  };
  "OnJsonApiEvent_lol-license-agreement_v1_agreements": {
    uri: "/lol-license-agreement/v1/agreements";
    returnType: Array<LCU_Type.LolLicenseAgreementLicenseAgreement>;
  };
  "OnJsonApiEvent_lol-license-agreement_v1_all-agreements": {
    uri: "/lol-license-agreement/v1/all-agreements";
    returnType: Array<LCU_Type.LolLicenseAgreementLicenseAgreement>;
  };
  "OnJsonApiEvent_lol-license-agreement_v1_serve-location": {
    uri: "/lol-license-agreement/v1/serve-location";
    returnType: LCU_Type.LolLicenseAgreementLicenseServeLocation;
  };
  "OnJsonApiEvent_lol-loadouts_v1_loadouts-ready": {
    uri: "/lol-loadouts/v1/loadouts-ready";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-lobby-team-builder_v1_matchmaking": {
    uri: "/lol-lobby-team-builder/v1/matchmaking";
    returnType: LCU_Type.LolLobbyTeamBuilderMatchmakingSearchResource;
  };
  "OnJsonApiEvent_lol-lobby_v2_lobby": {
    uri: "/lol-lobby/v2/lobby";
    returnType: LCU_Type.LolLobbyLobbyDto;
  };
  "OnJsonApiEvent_lol-login_v1_login-connection-state": {
    uri: "/lol-login/v1/login-connection-state";
    returnType: LCU_Type.LolLoginLoginConnectionState;
  };
  "OnJsonApiEvent_lol-login_v1_login-data-packet": {
    uri: "/lol-login/v1/login-data-packet";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-login_v1_login-in-game-creds": {
    uri: "/lol-login/v1/login-in-game-creds";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-login_v1_login-platform-credentials": {
    uri: "/lol-login/v1/login-platform-credentials";
    returnType: LCU_Type.LolLoginPlatformGeneratedCredentials;
  };
  "OnJsonApiEvent_lol-login_v1_session": {
    uri: "/lol-login/v1/session";
    returnType: LCU_Type.LolLoginLoginSession;
  };
  "OnJsonApiEvent_lol-login_v1_wallet": {
    uri: "/lol-login/v1/wallet";
    returnType: LCU_Type.LolLoginLoginSessionWallet;
  };
  "OnJsonApiEvent_lol-login_v2_league-session-init-token": {
    uri: "/lol-login/v2/league-session-init-token";
    returnType: LCU_Type.LolLoginLeagueSessionTokenEnvelope;
  };
  "OnJsonApiEvent_lol-loot_v1_enabled": { uri: "/lol-loot/v1/enabled"; returnType: boolean };
  "OnJsonApiEvent_lol-loot_v1_milestones": {
    uri: "/lol-loot/v1/milestones";
    returnType: Array<LCU_Type.LolLootLootMilestones>;
  };
  "OnJsonApiEvent_lol-loot_v1_player-display-categories": {
    uri: "/lol-loot/v1/player-display-categories";
    returnType: Array<string>;
  };
  "OnJsonApiEvent_lol-loot_v1_player-loot": {
    uri: "/lol-loot/v1/player-loot";
    returnType: Array<LCU_Type.LolLootPlayerLoot>;
  };
  "OnJsonApiEvent_lol-loot_v1_player-loot-map": {
    uri: "/lol-loot/v1/player-loot-map";
    returnType: LCU_Type.LolLootPlayerLoot | undefined;
  };
  "OnJsonApiEvent_lol-loot_v1_ready": { uri: "/lol-loot/v1/ready"; returnType: boolean };
  "OnJsonApiEvent_lol-loot_v2_player-loot-map": {
    uri: "/lol-loot/v2/player-loot-map";
    returnType: LCU_Type.LolLootPlayerLootMap;
  };
  "OnJsonApiEvent_lol-loyalty_v1_status-notification": {
    uri: "/lol-loyalty/v1/status-notification";
    returnType: LCU_Type.LolLoyaltyLoyaltyStatusNotification;
  };
  "OnJsonApiEvent_lol-maps_v1_maps": {
    uri: "/lol-maps/v1/maps";
    returnType: Array<LCU_Type.LolMapsMaps>;
  };
  "OnJsonApiEvent_lol-maps_v2_maps": {
    uri: "/lol-maps/v2/maps";
    returnType: Array<LCU_Type.LolMapsMaps>;
  };
  "OnJsonApiEvent_lol-matchmaking_v1_search": {
    uri: "/lol-matchmaking/v1/search";
    returnType: LCU_Type.LolMatchmakingMatchmakingSearchResource;
  };
  "OnJsonApiEvent_lol-missions_v1_missions": {
    uri: "/lol-missions/v1/missions";
    returnType: Array<LCU_Type.PlayerMissionDTO>;
  };
  "OnJsonApiEvent_lol-missions_v1_series": {
    uri: "/lol-missions/v1/series";
    returnType: Array<LCU_Type.SeriesDTO>;
  };
  "OnJsonApiEvent_lol-npe-tutorial-path_v1_settings": {
    uri: "/lol-npe-tutorial-path/v1/settings";
    returnType: LCU_Type.LolNpeTutorialPathAccountSettingsTutorial;
  };
  "OnJsonApiEvent_lol-npe-tutorial-path_v1_tutorials": {
    uri: "/lol-npe-tutorial-path/v1/tutorials";
    returnType: Array<LCU_Type.LolNpeTutorialPathTutorial>;
  };
  "OnJsonApiEvent_lol-patch_v1_checking-enabled": {
    uri: "/lol-patch/v1/checking-enabled";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-patch_v1_environment": {
    uri: "/lol-patch/v1/environment";
    returnType: LCU_Type.LolPatchChunkingPatcherEnvironment;
  };
  "OnJsonApiEvent_lol-patch_v1_game-version": {
    uri: "/lol-patch/v1/game-version";
    returnType: string;
  };
  "OnJsonApiEvent_lol-patch_v1_notifications": {
    uri: "/lol-patch/v1/notifications";
    returnType: Array<LCU_Type.LolPatchNotification>;
  };
  "OnJsonApiEvent_lol-patch_v1_status": {
    uri: "/lol-patch/v1/status";
    returnType: LCU_Type.LolPatchStatus;
  };
  "OnJsonApiEvent_lol-perks_v1_currentpage": {
    uri: "/lol-perks/v1/currentpage";
    returnType: LCU_Type.LolPerksPerkPageResource;
  };
  "OnJsonApiEvent_lol-perks_v1_inventory": {
    uri: "/lol-perks/v1/inventory";
    returnType: LCU_Type.LolPerksPlayerInventory;
  };
  "OnJsonApiEvent_lol-perks_v1_pages": {
    uri: "/lol-perks/v1/pages";
    returnType: Array<LCU_Type.LolPerksPerkPageResource>;
  };
  "OnJsonApiEvent_lol-perks_v1_perks": {
    uri: "/lol-perks/v1/perks";
    returnType: Array<LCU_Type.LolPerksPerkUIPerk>;
  };
  "OnJsonApiEvent_lol-perks_v1_settings": {
    uri: "/lol-perks/v1/settings";
    returnType: LCU_Type.LolPerksUISettings;
  };
  "OnJsonApiEvent_lol-perks_v1_styles": {
    uri: "/lol-perks/v1/styles";
    returnType: Array<LCU_Type.LolPerksPerkUIStyle>;
  };
  "OnJsonApiEvent_lol-platform-config_v1_initial-configuration-complete": {
    uri: "/lol-platform-config/v1/initial-configuration-complete";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces": {
    uri: "/lol-platform-config/v1/namespaces";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_lol-player-behavior_v1_config": {
    uri: "/lol-player-behavior/v1/config";
    returnType: LCU_Type.LolPlayerBehaviorPlayerBehaviorConfig;
  };
  "OnJsonApiEvent_lol-player-preferences_v1_player-preferences-ready": {
    uri: "/lol-player-preferences/v1/player-preferences-ready";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-pre-end-of-game_v1_currentSequenceEvent": {
    uri: "/lol-pre-end-of-game/v1/currentSequenceEvent";
    returnType: LCU_Type.LolPreEndOfGameSequenceEvent;
  };
  "OnJsonApiEvent_lol-premade-voice_v1_availability": {
    uri: "/lol-premade-voice/v1/availability";
    returnType: LCU_Type.LolPremadeVoiceVoiceAvailability;
  };
  "OnJsonApiEvent_lol-premade-voice_v1_capturedevices": {
    uri: "/lol-premade-voice/v1/capturedevices";
    returnType: Array<LCU_Type.LolPremadeVoiceDeviceResource>;
  };
  "OnJsonApiEvent_lol-premade-voice_v1_first-experience": {
    uri: "/lol-premade-voice/v1/first-experience";
    returnType: LCU_Type.LolPremadeVoiceFirstExperience;
  };
  "OnJsonApiEvent_lol-premade-voice_v1_participant-records": {
    uri: "/lol-premade-voice/v1/participant-records";
    returnType: Array<LCU_Type.LolPremadeVoicePremadeVoiceParticipantDto>;
  };
  "OnJsonApiEvent_lol-premade-voice_v1_settings": {
    uri: "/lol-premade-voice/v1/settings";
    returnType: LCU_Type.LolPremadeVoiceSettingsResource;
  };
  "OnJsonApiEvent_lol-publishing-content_v1_ready": {
    uri: "/lol-publishing-content/v1/ready";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-purchase-widget_v1_configuration": {
    uri: "/lol-purchase-widget/v1/configuration";
    returnType: LCU_Type.LolPurchaseWidgetPurchaseWidgetConfig;
  };
  "OnJsonApiEvent_lol-ranked_v1_challenger-ladders-enabled": {
    uri: "/lol-ranked/v1/challenger-ladders-enabled";
    returnType: Array<string>;
  };
  "OnJsonApiEvent_lol-ranked_v1_current-ranked-stats": {
    uri: "/lol-ranked/v1/current-ranked-stats";
    returnType: LCU_Type.LolRankedRankedStats;
  };
  "OnJsonApiEvent_lol-ranked_v1_eos-rewards": {
    uri: "/lol-ranked/v1/eos-rewards";
    returnType: LCU_Type.LolRankedEosRewardsConfig;
  };
  "OnJsonApiEvent_lol-ranked_v1_notifications": {
    uri: "/lol-ranked/v1/notifications";
    returnType: Array<LCU_Type.LolRankedLcuLeagueNotification>;
  };
  "OnJsonApiEvent_lol-ranked_v1_ranked-stats": {
    uri: "/lol-ranked/v1/ranked-stats";
    returnType: LCU_Type.LolRankedRankedStats | undefined;
  };
  "OnJsonApiEvent_lol-ranked_v1_signed-ranked-stats": {
    uri: "/lol-ranked/v1/signed-ranked-stats";
    returnType: LCU_Type.LolRankedSignedRankedStatsDTO;
  };
  "OnJsonApiEvent_lol-ranked_v1_splits-config": {
    uri: "/lol-ranked/v1/splits-config";
    returnType: LCU_Type.LolRankedRewardsInfo;
  };
  "OnJsonApiEvent_lol-ranked_v1_top-rated-ladders-enabled": {
    uri: "/lol-ranked/v1/top-rated-ladders-enabled";
    returnType: Array<string>;
  };
  "OnJsonApiEvent_lol-regalia_v2_config": {
    uri: "/lol-regalia/v2/config";
    returnType: LCU_Type.LolRegaliaRegaliaFrontendConfig;
  };
  "OnJsonApiEvent_lol-replays_v1_configuration": {
    uri: "/lol-replays/v1/configuration";
    returnType: LCU_Type.LolReplaysReplaysConfiguration;
  };
  "OnJsonApiEvent_lol-rewards_v1_grants": {
    uri: "/lol-rewards/v1/grants";
    returnType: Array<LCU_Type.LolRewardsRewardGrant>;
  };
  "OnJsonApiEvent_lol-rewards_v1_groups": {
    uri: "/lol-rewards/v1/groups";
    returnType: Array<LCU_Type.LolRewardsSvcRewardGroup>;
  };
  "OnJsonApiEvent_lol-rso-auth_v1_authorization": {
    uri: "/lol-rso-auth/v1/authorization";
    returnType: LCU_Type.LolRsoAuthAuthorization;
  };
  "OnJsonApiEvent_lol-service-status_v1_ticker-messages": {
    uri: "/lol-service-status/v1/ticker-messages";
    returnType: Array<LCU_Type.LolServiceStatusTickerMessage>;
  };
  "OnJsonApiEvent_lol-settings_v2_ready": { uri: "/lol-settings/v2/ready"; returnType: boolean };
  "OnJsonApiEvent_lol-shutdown_v1_notification": {
    uri: "/lol-shutdown/v1/notification";
    returnType: LCU_Type.LolShutdownShutdownNotification;
  };
  "OnJsonApiEvent_lol-spectator_v1_spectate": {
    uri: "/lol-spectator/v1/spectate";
    returnType: LCU_Type.LolSpectatorSpectateGameInfo;
  };
  "OnJsonApiEvent_lol-statstones_v2_player-summary-self": {
    uri: "/lol-statstones/v2/player-summary-self";
    returnType: Array<LCU_Type.LolStatstonesChampionStatstoneSummary>;
  };
  "OnJsonApiEvent_lol-store_v1_getStoreUrl": {
    uri: "/lol-store/v1/getStoreUrl";
    returnType: string;
  };
  "OnJsonApiEvent_lol-store_v1_store-ready": {
    uri: "/lol-store/v1/store-ready";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-store_v1_wallet": {
    uri: "/lol-store/v1/wallet";
    returnType: LCU_Type.LolStoreWallet;
  };
  "OnJsonApiEvent_lol-suggested-players_v1_suggested-players": {
    uri: "/lol-suggested-players/v1/suggested-players";
    returnType: Array<LCU_Type.LolSuggestedPlayersSuggestedPlayersSuggestedPlayer>;
  };
  "OnJsonApiEvent_lol-summoner_v1_current-summoner": {
    uri: "/lol-summoner/v1/current-summoner";
    returnType: LCU_Type.LolSummonerSummoner;
  };
  "OnJsonApiEvent_lol-summoner_v1_status": {
    uri: "/lol-summoner/v1/status";
    returnType: LCU_Type.LolSummonerStatus;
  };
  "OnJsonApiEvent_lol-summoner_v1_summoner-requests-ready": {
    uri: "/lol-summoner/v1/summoner-requests-ready";
    returnType: boolean;
  };
  "OnJsonApiEvent_lol-tastes_v1_ready": { uri: "/lol-tastes/v1/ready"; returnType: boolean };
  "OnJsonApiEvent_memory_v1_fe-processes-ready": {
    uri: "/memory/v1/fe-processes-ready";
    returnType: boolean;
  };
  OnJsonApiEvent_patcher_v1_notifications: {
    uri: "/patcher/v1/notifications";
    returnType: Array<LCU_Type.PatcherNotification>;
  };
  OnJsonApiEvent_patcher_v1_products: { uri: "/patcher/v1/products"; returnType: Array<string> };
  OnJsonApiEvent_patcher_v1_status: {
    uri: "/patcher/v1/status";
    returnType: LCU_Type.PatcherStatus;
  };
  "OnJsonApiEvent_player-notifications_v1_notifications": {
    uri: "/player-notifications/v1/notifications";
    returnType: Array<LCU_Type.PlayerNotificationsPlayerNotificationResource>;
  };
  "OnJsonApiEvent_plugin-manager_v1_status": {
    uri: "/plugin-manager/v1/status";
    returnType: LCU_Type.PluginManagerResource;
  };
  "OnJsonApiEvent_process-control_v1_process": {
    uri: "/process-control/v1/process";
    returnType: LCU_Type.ProcessControlProcess;
  };
  "OnJsonApiEvent_riot-messaging-service_v1_session": {
    uri: "/riot-messaging-service/v1/session";
    returnType: LCU_Type.RiotMessagingServiceSession;
  };
  "OnJsonApiEvent_riot-messaging-service_v1_state": {
    uri: "/riot-messaging-service/v1/state";
    returnType: LCU_Type.RiotMessagingServiceState;
  };
  OnJsonApiEvent_riotclient_affinity: {
    uri: "/riotclient/affinity";
    returnType: boolean | undefined;
  };
  "OnJsonApiEvent_riotclient_app-port": { uri: "/riotclient/app-port"; returnType: bigint };
  "OnJsonApiEvent_riotclient_region-locale": {
    uri: "/riotclient/region-locale";
    returnType: LCU_Type.RegionLocale;
  };
  "OnJsonApiEvent_riotclient_ux-crash-count": {
    uri: "/riotclient/ux-crash-count";
    returnType: bigint;
  };
  "OnJsonApiEvent_riotclient_zoom-scale": { uri: "/riotclient/zoom-scale"; returnType: number };
  OnJsonApiEvent_sanitizer_v1_status: {
    uri: "/sanitizer/v1/status";
    returnType: LCU_Type.SanitizerSanitizerStatus;
  };
  OnJsonApiEvent_system_v1_builds: { uri: "/system/v1/builds"; returnType: LCU_Type.BuildInfo };
  "OnJsonApiEvent_voice-chat_v1_audio-properties": {
    uri: "/voice-chat/v1/audio-properties";
    returnType: LCU_Type.VoiceChatAudioPropertiesResource;
  };
  "OnJsonApiEvent_voice-chat_v2_state": {
    uri: "/voice-chat/v2/state";
    returnType: LCU_Type.VoiceChatStateResource;
  };
};
export type Events = keyof EventMap;
export type UntrustedEventMap = {
  OnCallback: { uri: undefined; returnType: any };
  OnJsonApiEvent: { uri: undefined; returnType: any };
  OnJsonApiEvent_chat_v1_session: { uri: "/chat/v1/session"; returnType: any };
  OnJsonApiEvent_chat_v1_settings: { uri: "/chat/v1/settings"; returnType: any };
  OnJsonApiEvent_chat_v3_blocked: { uri: "/chat/v3/blocked"; returnType: any };
  OnJsonApiEvent_chat_v3_errors: { uri: "/chat/v3/errors"; returnType: any };
  OnJsonApiEvent_chat_v3_friends: { uri: "/chat/v3/friends"; returnType: any };
  OnJsonApiEvent_chat_v3_groups: { uri: "/chat/v3/groups"; returnType: any };
  OnJsonApiEvent_chat_v4_friendrequests: { uri: "/chat/v4/friendrequests"; returnType: any };
  OnJsonApiEvent_chat_v4_presences: { uri: "/chat/v4/presences"; returnType: any };
  OnJsonApiEvent_chat_v5_messages: { uri: "/chat/v5/messages"; returnType: any };
  OnJsonApiEvent_chat_v5_participants: { uri: "/chat/v5/participants"; returnType: any };
  OnJsonApiEvent_chat_v6_conversations: { uri: "/chat/v6/conversations"; returnType: any };
  "OnJsonApiEvent_client-config_v1_status": { uri: "/client-config/v1/status"; returnType: any };
  "OnJsonApiEvent_client-config_v2_config": { uri: "/client-config/v2/config"; returnType: any };
  "OnJsonApiEvent_client-config_v2_namespace": {
    uri: "/client-config/v2/namespace";
    returnType: any;
  };
  OnJsonApiEvent_config_v1_config: { uri: "/config/v1/config"; returnType: any };
  "OnJsonApiEvent_data-store_v1_install-settings": {
    uri: "/data-store/v1/install-settings";
    returnType: any;
  };
  "OnJsonApiEvent_data-store_v1_system-settings": {
    uri: "/data-store/v1/system-settings";
    returnType: any;
  };
  "OnJsonApiEvent_ga-restriction_v1_penalty-notifications": {
    uri: "/ga-restriction/v1/penalty-notifications";
    returnType: any;
  };
  "OnJsonApiEvent_lol-challenges_v1_client-state": {
    uri: "/lol-challenges/v1/client-state";
    returnType: any;
  };
  "OnJsonApiEvent_lol-challenges_v1_seasons": {
    uri: "/lol-challenges/v1/seasons";
    returnType: any;
  };
  "OnJsonApiEvent_lol-champ-select_v1_grid-champions": {
    uri: "/lol-champ-select/v1/grid-champions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-champions_v1_inventories": {
    uri: "/lol-champions/v1/inventories";
    returnType: any;
  };
  "OnJsonApiEvent_lol-clash_v1_tournament": { uri: "/lol-clash/v1/tournament"; returnType: any };
  "OnJsonApiEvent_lol-client-config_v3_client-config": {
    uri: "/lol-client-config/v3/client-config";
    returnType: any;
  };
  "OnJsonApiEvent_lol-collections_v1_inventories": {
    uri: "/lol-collections/v1/inventories";
    returnType: any;
  };
  "OnJsonApiEvent_lol-cosmetics_v1_inventories": {
    uri: "/lol-cosmetics/v1/inventories";
    returnType: any;
  };
  "OnJsonApiEvent_lol-game-client-chat_v1_aas-messages": {
    uri: "/lol-game-client-chat/v1/aas-messages";
    returnType: any;
  };
  "OnJsonApiEvent_lol-gameflow_v1_early-exit-notifications": {
    uri: "/lol-gameflow/v1/early-exit-notifications";
    returnType: any;
  };
  "OnJsonApiEvent_lol-gameflow_v1_gameflow-metadata": {
    uri: "/lol-gameflow/v1/gameflow-metadata";
    returnType: any;
  };
  "OnJsonApiEvent_lol-honeyfruit_v1_account-claim": {
    uri: "/lol-honeyfruit/v1/account-claim";
    returnType: any;
  };
  "OnJsonApiEvent_lol-honeyfruit_v1_linking-settings-button-available": {
    uri: "/lol-honeyfruit/v1/linking-settings-button-available";
    returnType: any;
  };
  "OnJsonApiEvent_lol-honeyfruit_v1_vng-publisher-settings": {
    uri: "/lol-honeyfruit/v1/vng-publisher-settings";
    returnType: any;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_recipients": {
    uri: "/lol-honor-v2/v1/recipients";
    returnType: any;
  };
  "OnJsonApiEvent_lol-honor-v2_v1_recognition-history": {
    uri: "/lol-honor-v2/v1/recognition-history";
    returnType: any;
  };
  "OnJsonApiEvent_lol-hovercard_v1_friend-info": {
    uri: "/lol-hovercard/v1/friend-info";
    returnType: any;
  };
  "OnJsonApiEvent_lol-hovercard_v1_friend-info-by-summoner": {
    uri: "/lol-hovercard/v1/friend-info-by-summoner";
    returnType: any;
  };
  "OnJsonApiEvent_lol-inventory_v2_inventory": {
    uri: "/lol-inventory/v2/inventory";
    returnType: any;
  };
  "OnJsonApiEvent_lol-loadouts_v1_enabled": { uri: "/lol-loadouts/v1/enabled"; returnType: any };
  "OnJsonApiEvent_lol-loadouts_v4_loadout": { uri: "/lol-loadouts/v4/loadout"; returnType: any };
  "OnJsonApiEvent_lol-lobby-team-builder_champ-select_v1": {
    uri: "/lol-lobby-team-builder/champ-select/v1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-lobby_v1_lobby": { uri: "/lol-lobby/v1/lobby"; returnType: any };
  "OnJsonApiEvent_lol-lobby_v2_comms": { uri: "/lol-lobby/v2/comms"; returnType: any };
  "OnJsonApiEvent_lol-lobby_v2_eligibility": { uri: "/lol-lobby/v2/eligibility"; returnType: any };
  "OnJsonApiEvent_lol-loot_v1_recipes": { uri: "/lol-loot/v1/recipes"; returnType: any };
  "OnJsonApiEvent_lol-marketing-preferences_v1_ready": {
    uri: "/lol-marketing-preferences/v1/ready";
    returnType: any;
  };
  "OnJsonApiEvent_lol-npe-tutorial-path_v1_rewards": {
    uri: "/lol-npe-tutorial-path/v1/rewards";
    returnType: any;
  };
  "OnJsonApiEvent_lol-patch_v1_products": { uri: "/lol-patch/v1/products"; returnType: any };
  "OnJsonApiEvent_lol-perks_v1_rune-recommender-auto-select": {
    uri: "/lol-perks/v1/rune-recommender-auto-select";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespace_Parties_PublishPresenceDelay": {
    uri: "/lol-platform-config/v1/namespace/Parties/PublishPresenceDelay";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_IsNewAvsServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/IsNewAvsServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_KrPhoneDisplayEnabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/KrPhoneDisplayEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_PasswordEnabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/PasswordEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_PhoneValidationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/PhoneValidationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_SettingsEnable": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/SettingsEnable";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_SettingsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/SettingsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_SettingsVerifyEnabled": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/SettingsVerifyEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_ShouldUseNewAvs": {
    uri: "/lol-platform-config/v1/namespaces/AccountVerification/ShouldUseNewAvs";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners": {
    uri: "/lol-platform-config/v1/namespaces/Banners";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners_IsEnabledOnProfile": {
    uri: "/lol-platform-config/v1/namespaces/Banners/IsEnabledOnProfile";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners_IsEquipEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Banners/IsEquipEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners_IsOtherSummonersProfileEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Banners/IsOtherSummonersProfileEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards": {
    uri: "/lol-platform-config/v1/namespaces/BetterRewards";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards_DayOneModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/BetterRewards/DayOneModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards_GetPostgameXpFromRms": {
    uri: "/lol-platform-config/v1/namespaces/BetterRewards/GetPostgameXpFromRms";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards_VisualUpdateEnabled": {
    uri: "/lol-platform-config/v1/namespaces/BetterRewards/VisualUpdateEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_BotConfigurations": {
    uri: "/lol-platform-config/v1/namespaces/BotConfigurations";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_BotConfigurations_IntermediateInCustoms": {
    uri: "/lol-platform-config/v1/namespaces/BotConfigurations/IntermediateInCustoms";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_CareerStats": {
    uri: "/lol-platform-config/v1/namespaces/CareerStats";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_CareerStats_StatsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/CareerStats/StatsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges": {
    uri: "/lol-platform-config/v1/namespaces/Challenges";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_ChallengeUpdateDelaySeconds": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/ChallengeUpdateDelaySeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_ClientState": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/ClientState";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_CollectionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/CollectionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_CustomizeIdentityEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/CustomizeIdentityEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_DarkModeAllowlistOnly": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/DarkModeAllowlistOnly";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_EnabledInventoryTypes": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/EnabledInventoryTypes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_FeatureIntroEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/FeatureIntroEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_LobbyChallengesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/LobbyChallengesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_MaxNotificationSubscriptionDelaySeconds": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/MaxNotificationSubscriptionDelaySeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_MaxWaitTimeBeforeNotificationSubscriptionSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/MaxWaitTimeBeforeNotificationSubscriptionSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_NumberOfSuggestedChallenges": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/NumberOfSuggestedChallenges";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_PartiesV2Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/PartiesV2Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_PostgameOverride": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/PostgameOverride";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_RankIdentityOverride": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/RankIdentityOverride";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_WaitTimeBeforeCallChallengeUpdateSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/WaitTimeBeforeCallChallengeUpdateSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_WaitTimeBeforeDarkModeAdditionalCallsSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Challenges/WaitTimeBeforeDarkModeAdditionalCallsSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_CapUnlockChampionLevel": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/CapUnlockChampionLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_ChampionPointQueueTypes": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/ChampionPointQueueTypes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_EndOfGameEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/EndOfGameEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_GradeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/GradeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_LegsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/LegsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_LootChestsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/LootChestsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_MaxChampionLevel": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/MaxChampionLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_MinSummonerLevel": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/MinSummonerLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_ShowGradeAvailablePopup": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/ShowGradeAvailablePopup";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_SupportedQueueTypes": {
    uri: "/lol-platform-config/v1/namespaces/ChampionMasteryConfig/SupportedQueueTypes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_AllChampsAvailableInAram": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/AllChampsAvailableInAram";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_AlwaysShowRewardIcon": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/AlwaysShowRewardIcon";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_AutoReconnectEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/AutoReconnectEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_CollatorChampionFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/CollatorChampionFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseActionPatchV2": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/UseActionPatchV2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseOptimizedBotChampionSelectProcessor": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/UseOptimizedBotChampionSelectProcessor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseOptimizedChampSelectProcessor": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/UseOptimizedChampSelectProcessor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseOptimizedSpellSelectProcessor": {
    uri: "/lol-platform-config/v1/namespaces/ChampionSelect/UseOptimizedSpellSelectProcessor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionTradeService": {
    uri: "/lol-platform-config/v1/namespaces/ChampionTradeService";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionTradeService_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ChampionTradeService/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat": {
    uri: "/lol-platform-config/v1/namespaces/Chat";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChatDomain": {
    uri: "/lol-platform-config/v1/namespaces/ChatDomain";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChatDomain_ChampSelectDomainName": {
    uri: "/lol-platform-config/v1/namespaces/ChatDomain/ChampSelectDomainName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ChatDomain_PostGameDomainName": {
    uri: "/lol-platform-config/v1/namespaces/ChatDomain/PostGameDomainName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_ChatHistoryEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Chat/ChatHistoryEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_ChatHistoryThreshold": {
    uri: "/lol-platform-config/v1/namespaces/Chat/ChatHistoryThreshold";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_MaximumRosterSize": {
    uri: "/lol-platform-config/v1/namespaces/Chat/MaximumRosterSize";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_MobileEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Chat/MobileEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_Rename_general_group_throttle": {
    uri: "/lol-platform-config/v1/namespaces/Chat/Rename/general/group/throttle";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chroma": {
    uri: "/lol-platform-config/v1/namespaces/Chroma";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Chroma_IsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Chroma/IsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_AwardsTabEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/AwardsTabEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_BracketSpectateEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/BracketSpectateEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_CapacityIndicatorEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/CapacityIndicatorEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ClashStartModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/ClashStartModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_DarkModeEntitlement": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/DarkModeEntitlement";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_EnabledState": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/EnabledState";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_EndOfGameFlowEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/EndOfGameFlowEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_FindTeamViewEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/FindTeamViewEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_HonorLevelRequired": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/HonorLevelRequired";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IconConfig": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/IconConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_InviteModalTiersEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/InviteModalTiersEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IsPlaymodeRestrictionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/IsPlaymodeRestrictionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IsRewardsModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/IsRewardsModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_LftEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/LftEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_LoginModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/LoginModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_PremiumTicketsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/PremiumTicketsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ScoutingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/ScoutingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_SmsVerificationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/SmsVerificationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_StorePageLink": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/StorePageLink";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_SubstitutionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/SubstitutionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ThirdPartyInvitesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/ThirdPartyInvitesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_TutorialEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/TutorialEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_Visibility": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/Visibility";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_VoiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/VoiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_Worlds2020LootModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClashConfig/Worlds2020LootModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_MaxNumPlayersForPracticeToolGame": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/MaxNumPlayersForPracticeToolGame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_advancedTutorialEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/advancedTutorialEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_archivedStatsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/archivedStatsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_buddyNotesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/buddyNotesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_championTradeThroughLCDS": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/championTradeThroughLCDS";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_clientHeartBeatRateSeconds": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/clientHeartBeatRateSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_currentSeason": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/currentSeason";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_displayPromoGamesPlayedEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/displayPromoGamesPlayedEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_enabledQueueIdsList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/enabledQueueIdsList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_freeToPlayChampionForNewPlayersIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/freeToPlayChampionForNewPlayersIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_freeToPlayChampionIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/freeToPlayChampionIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_freeToPlayChampionsForNewPlayersMaxLevel": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/freeToPlayChampionsForNewPlayersMaxLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_gameMapEnabledDTOList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/gameMapEnabledDTOList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_gameModeToInactiveSpellIds": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/gameModeToInactiveSpellIds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveAramSpellIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/inactiveAramSpellIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveChampionIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/inactiveChampionIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveClassicSpellIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/inactiveClassicSpellIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveOdinSpellIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/inactiveOdinSpellIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveSpellIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/inactiveSpellIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveTutorialSpellIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/inactiveTutorialSpellIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_knownGeographicGameServerRegions": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/knownGeographicGameServerRegions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_leagueServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/leagueServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_leaguesDecayMessagingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/leaguesDecayMessagingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_localeSpecificChatRoomsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/localeSpecificChatRoomsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_masteryPageOnServer": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/masteryPageOnServer";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_maxMasteryPagesOnServer": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/maxMasteryPagesOnServer";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_minNumPlayersForPracticeGame": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/minNumPlayersForPracticeGame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_modularGameModeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/modularGameModeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_observableCustomGameModes": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/observableCustomGameModes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_observableGameModes": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/observableGameModes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_observerModeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/observerModeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_practiceGameEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/practiceGameEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_practiceGameTypeConfigIdList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/practiceGameTypeConfigIdList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_queueThrottleDTO": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/queueThrottleDTO";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_replayServiceAddress": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/replayServiceAddress";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_replaySystemStates": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/replaySystemStates";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_riotDataServiceDataSendProbability": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/riotDataServiceDataSendProbability";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_runeUniquePerSpellBook": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/runeUniquePerSpellBook";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_sendFeedbackEventsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/sendFeedbackEventsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_spectatorSlotLimit": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/spectatorSlotLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_storeCustomerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/storeCustomerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_teamServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/teamServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_tournamentSendStatsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/tournamentSendStatsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_tournamentShortCodesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/tournamentShortCodesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_tribunalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/tribunalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_unobtainableChampionSkinIDList": {
    uri: "/lol-platform-config/v1/namespaces/ClientSystemStates/unobtainableChampionSkinIDList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs": {
    uri: "/lol-platform-config/v1/namespaces/Clubs";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubPresenceDecryptionKey": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/ClubPresenceDecryptionKey";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubServiceUrl": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/ClubServiceUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsActiveIcon": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/ClubsActiveIcon";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/ClubsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsLCUEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/ClubsLCUEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsMemberIcon": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/ClubsMemberIcon";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_InviteToClubLobbyEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Clubs/InviteToClubLobbyEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Companions": {
    uri: "/lol-platform-config/v1/namespaces/Companions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Companions_SelectorInChampSelectEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Companions/SelectorInChampSelectEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation": {
    uri: "/lol-platform-config/v1/namespaces/ContextualEducation";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducationURLs": {
    uri: "/lol-platform-config/v1/namespaces/ContextualEducationURLs";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducationURLs_LAST_HIT": {
    uri: "/lol-platform-config/v1/namespaces/ContextualEducationURLs/LAST/HIT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ContextualEducation/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation_MaxTargetSummonerLevel": {
    uri: "/lol-platform-config/v1/namespaces/ContextualEducation/MaxTargetSummonerLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation_TargetMinionsPerWave": {
    uri: "/lol-platform-config/v1/namespaces/ContextualEducation/TargetMinionsPerWave";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_CustomGame": {
    uri: "/lol-platform-config/v1/namespaces/CustomGame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_CustomGame_BotsAvailableInAram": {
    uri: "/lol-platform-config/v1/namespaces/CustomGame/BotsAvailableInAram";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_CustomGame_MinorRestrictionsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/CustomGame/MinorRestrictionsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampionSkins": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampionSkins";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampionSkins_DisabledChampionSkins": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampionSkins/DisabledChampionSkins";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampionSkins_DisabledChromas": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampionSkins/DisabledChromas";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ARAM";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM_BOT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ARAM/BOT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM_CLASH": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ARAM/CLASH";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM_UNRANKED_5x5": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ARAM/UNRANKED/5x5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARSR": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ARSR";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ASCENSION": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ASCENSION";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_BILGEWATER": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/BILGEWATER";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_BOT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/BOT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_BOT_3x3": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/BOT/3x3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_CLASH": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/CLASH";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_CLASSIC": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/CLASSIC";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_COUNTER_PICK": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/COUNTER/PICK";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_FIRSTBLOOD": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/FIRSTBLOOD";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_FIRSTBLOOD_1x1": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/FIRSTBLOOD/1x1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_FIRSTBLOOD_2x2": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/FIRSTBLOOD/2x2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_GAMEMODEX": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/GAMEMODEX";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_HEXAKILL": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/HEXAKILL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_KINGPORO": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/KINGPORO";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_KING_PORO": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/KING/PORO";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_LNY23_TFT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/LNY23/TFT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NEXUSBLITZ": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/NEXUSBLITZ";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NIGHTMARE_BOT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/NIGHTMARE/BOT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NORMAL": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/NORMAL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NORMAL_3x3": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/NORMAL/3x3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NORMAL_TFT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/NORMAL/TFT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ODIN": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ODIN";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ODIN_UNRANKED": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ODIN/UNRANKED";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ODYSSEY": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ODYSSEY";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ONEFORALL": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ONEFORALL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ONEFORALL_5x5": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ONEFORALL/5x5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_PRACTICETOOL": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/PRACTICETOOL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_FLEX_SR": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/FLEX/SR";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_FLEX_TT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/FLEX/TT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_SOLO_5x5": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/SOLO/5x5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TEAM_3x3": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/TEAM/3x3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TEAM_5x5": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/TEAM/5x5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/TFT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT_DOUBLE_UP": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/TFT/DOUBLE/UP";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT_PAIRS": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/TFT/PAIRS";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT_TURBO": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/RANKED/TFT/TURBO";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_SIEGE": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/SIEGE";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_SNOWURF": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/SNOWURF";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_SR_6x6": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/SR/6x6";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TFT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/TFT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/TUTORIAL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_MODULE_1": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/TUTORIAL/MODULE/1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_MODULE_2": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/TUTORIAL/MODULE/2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_MODULE_3": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/TUTORIAL/MODULE/3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_TFT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/TUTORIAL/TFT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ULTBOOK": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/ULTBOOK";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_URF": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/URF";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_URF_BOT": {
    uri: "/lol-platform-config/v1/namespaces/DisabledChampions/URF/BOT";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DiscordRP_IsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/DiscordRP/IsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DockedPrompt": {
    uri: "/lol-platform-config/v1/namespaces/DockedPrompt";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DockedPrompt_EnabledNewDockedPrompt": {
    uri: "/lol-platform-config/v1/namespaces/DockedPrompt/EnabledNewDockedPrompt";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_DockedPrompt_EnabledNewDockedPromptRenderer": {
    uri: "/lol-platform-config/v1/namespaces/DockedPrompt/EnabledNewDockedPromptRenderer";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports": {
    uri: "/lol-platform-config/v1/namespaces/ESports";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_CS_CZ_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/CS/CZ/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_DE_DE_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/DE/DE/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EL_GR_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EL/GR/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_AU_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EN/AU/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_GB_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EN/GB/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_PH_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EN/PH/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_PL_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EN/PL/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_SG_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EN/SG/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_US_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EN/US/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ES_AR_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ES/AR/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ES_ES_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ES/ES/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ES_MX_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ES/MX/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubDataURL": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EsportsHubDataURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubInitialized": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EsportsHubInitialized";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubLongPollMinutes": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EsportsHubLongPollMinutes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubShortPollMinutes": {
    uri: "/lol-platform-config/v1/namespaces/ESports/EsportsHubShortPollMinutes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_FR_FR_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/FR/FR/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_HU_HU_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/HU/HU/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ID_ID_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ID/ID/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_IT_IT_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/IT/IT/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_JA_JP_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/JA/JP/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_KO_KR_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/KO/KR/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_KillHub": {
    uri: "/lol-platform-config/v1/namespaces/ESports/KillHub";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_Landing_Embed_URL": {
    uri: "/lol-platform-config/v1/namespaces/ESports/Landing/Embed/URL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_MS_MY_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/MS/MY/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_PL_PL_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/PL/PL/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_PT_BR_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/PT/BR/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_RO_RO_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/RO/RO/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_RU_RU_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/RU/RU/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_Staging": {
    uri: "/lol-platform-config/v1/namespaces/ESports/Staging";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_TH_TH_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/TH/TH/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_TR_TR_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/TR/TR/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_VN_VN_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/VN/VN/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ZH_CN_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ZH/CN/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ZH_MY_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ZH/MY/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ZH_TW_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ESports/ZH/TW/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Emotes": {
    uri: "/lol-platform-config/v1/namespaces/Emotes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Emotes_IsEmotePanelEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Emotes/IsEmotePanelEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Emotes_IsEmoteTutorialModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Emotes/IsEmoteTutorialModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndOfGameGifting": {
    uri: "/lol-platform-config/v1/namespaces/EndOfGameGifting";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndOfGameGifting_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/EndOfGameGifting/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings": {
    uri: "/lol-platform-config/v1/namespaces/EndofGameGiftSettings";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_GiftRecipientLevelMin": {
    uri: "/lol-platform-config/v1/namespaces/EndofGameGiftSettings/GiftRecipientLevelMin";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_GiftSenderLevelMin": {
    uri: "/lol-platform-config/v1/namespaces/EndofGameGiftSettings/GiftSenderLevelMin";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_GiftSenderRPMax": {
    uri: "/lol-platform-config/v1/namespaces/EndofGameGiftSettings/GiftSenderRPMax";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_RecipientGiftDailyMax": {
    uri: "/lol-platform-config/v1/namespaces/EndofGameGiftSettings/RecipientGiftDailyMax";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_SenderGiftDailyMax": {
    uri: "/lol-platform-config/v1/namespaces/EndofGameGiftSettings/SenderGiftDailyMax";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EoGReporting": {
    uri: "/lol-platform-config/v1/namespaces/EoGReporting";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_EoGReporting_GameAgnosticReportingTrinary": {
    uri: "/lol-platform-config/v1/namespaces/EoGReporting/GameAgnosticReportingTrinary";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports": {
    uri: "/lol-platform-config/v1/namespaces/Esports";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsAssetMagickURL": {
    uri: "/lol-platform-config/v1/namespaces/Esports/NotificationsAssetMagickURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Esports/NotificationsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsServiceEndpoint": {
    uri: "/lol-platform-config/v1/namespaces/Esports/NotificationsServiceEndpoint";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsStreamGroupSlug": {
    uri: "/lol-platform-config/v1/namespaces/Esports/NotificationsStreamGroupSlug";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsStreamURL": {
    uri: "/lol-platform-config/v1/namespaces/Esports/NotificationsStreamURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Eternals": {
    uri: "/lol-platform-config/v1/namespaces/Eternals";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Eternals_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Eternals/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Eternals_ServiceUrl": {
    uri: "/lol-platform-config/v1/namespaces/Eternals/ServiceUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedGame": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedGame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedGame_MetadataEnabled": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedGame/MetadataEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_DisabledRgmButtonEnabled": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/DisabledRgmButtonEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_GoldenSpatulaClubDisabled": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/GoldenSpatulaClubDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_MaxNotificationSaveDelayMinutes": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/MaxNotificationSaveDelayMinutes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_NotificationsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/NotificationsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_QueueToggleNotificationMinutesThreshold": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/QueueToggleNotificationMinutesThreshold";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_QueuesDelayedRefreshMaxTimeout": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/QueuesDelayedRefreshMaxTimeout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_QueuesDelayedRefreshMinTimeout": {
    uri: "/lol-platform-config/v1/namespaces/FeaturedModes/QueuesDelayedRefreshMinTimeout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_AssociationUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/AssociationUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_ContactDetailsUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/ContactDetailsUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_ContactsUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/ContactsUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnableAddFriendButton": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/EnableAddFriendButton";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnableSocial": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/EnableSocial";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnableViewAllPanel": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/EnableViewAllPanel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnabledPercent": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/EnabledPercent";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnabledSocialNetworks": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/EnabledSocialNetworks";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_FaqLink": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/FaqLink";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_GetRecoRefreshRateMillis": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/GetRecoRefreshRateMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_HideFriends": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/HideFriends";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_Partner": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/Partner";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_RefreshRecommendations": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/RefreshRecommendations";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_RegistrationPollDurationMillis": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/RegistrationPollDurationMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_RegistrationPollRateMillis": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/RegistrationPollRateMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_ShowToolTip": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/ShowToolTip";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_StatusExpiryMillis": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/StatusExpiryMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_UnlinkUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/UnlinkUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_VKAssociationUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/VKAssociationUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_VKUnlinkUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/FriendRecommendations/VKUnlinkUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles": {
    uri: "/lol-platform-config/v1/namespaces/GameClientCmdLineToggles";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_EnableLNP": {
    uri: "/lol-platform-config/v1/namespaces/GameClientCmdLineToggles/EnableLNP";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseDX11": {
    uri: "/lol-platform-config/v1/namespaces/GameClientCmdLineToggles/UseDX11";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseMetal": {
    uri: "/lol-platform-config/v1/namespaces/GameClientCmdLineToggles/UseMetal";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseNewX3D": {
    uri: "/lol-platform-config/v1/namespaces/GameClientCmdLineToggles/UseNewX3D";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseNewX3DFramebuffers": {
    uri: "/lol-platform-config/v1/namespaces/GameClientCmdLineToggles/UseNewX3DFramebuffers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites": {
    uri: "/lol-platform-config/v1/namespaces/GameInvites";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_InviteBulkMaxSize": {
    uri: "/lol-platform-config/v1/namespaces/GameInvites/InviteBulkMaxSize";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_LobbyCreationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/GameInvites/LobbyCreationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_ServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/GameInvites/ServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameTimerSync": {
    uri: "/lol-platform-config/v1/namespaces/GameTimerSync";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameTimerSync_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/GameTimerSync/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GameTimerSync_PercentOfTotalTimerToSyncAt": {
    uri: "/lol-platform-config/v1/namespaces/GameTimerSync/PercentOfTotalTimerToSyncAt";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Gameflow_ForceGameLocaleAsEnglish": {
    uri: "/lol-platform-config/v1/namespaces/Gameflow/ForceGameLocaleAsEnglish";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Gameflow_ShouldSendRiotClientHeartBeat": {
    uri: "/lol-platform-config/v1/namespaces/Gameflow/ShouldSendRiotClientHeartBeat";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GeoInfo": {
    uri: "/lol-platform-config/v1/namespaces/GeoInfo";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GeoInfo_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/GeoInfo/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GuestSlots": {
    uri: "/lol-platform-config/v1/namespaces/GuestSlots";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_GuestSlots_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/GuestSlots/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Highlights": {
    uri: "/lol-platform-config/v1/namespaces/Highlights";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Highlights_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Highlights/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor": {
    uri: "/lol-platform-config/v1/namespaces/Honor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_DayOneModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Honor/DayOneModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Honor/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_Honor2018Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Honor/Honor2018Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_SecondsToVote": {
    uri: "/lol-platform-config/v1/namespaces/Honor/SecondsToVote";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Inventory": {
    uri: "/lol-platform-config/v1/namespaces/Inventory";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Inventory_BaseServiceUrl": {
    uri: "/lol-platform-config/v1/namespaces/Inventory/BaseServiceUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Inventory_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Inventory/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets": {
    uri: "/lol-platform-config/v1/namespaces/ItemSets";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets_EditorEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ItemSets/EditorEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets_MaxItemSets": {
    uri: "/lol-platform-config/v1/namespaces/ItemSets/MaxItemSets";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets_SendItemSetsToGame": {
    uri: "/lol-platform-config/v1/namespaces/ItemSets/SendItemSetsToGame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Karma": {
    uri: "/lol-platform-config/v1/namespaces/Karma";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Karma_Worlds2017VotingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Karma/Worlds2017VotingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Kickout": {
    uri: "/lol-platform-config/v1/namespaces/Kickout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_KrPlaytimeReminder": {
    uri: "/lol-platform-config/v1/namespaces/KrPlaytimeReminder";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCU": {
    uri: "/lol-platform-config/v1/namespaces/LCU";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUACS": {
    uri: "/lol-platform-config/v1/namespaces/LCUACS";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUACS_Endpoint": {
    uri: "/lol-platform-config/v1/namespaces/LCUACS/Endpoint";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUACS_UseIdTokens": {
    uri: "/lol-platform-config/v1/namespaces/LCUACS/UseIdTokens";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUAugmentsVisible": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections/LCUAugmentsVisible";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUCollectiblesWardSkinsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections/LCUCollectiblesWardSkinsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUMasteriesVisible": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections/LCUMasteriesVisible";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUPerksVisible": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections/LCUPerksVisible";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCURunesVisible": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections/LCURunesVisible";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUSkinsViewerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LCUCollections/LCUSkinsViewerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_CanQueryInactiveItems": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/CanQueryInactiveItems";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_DisableCapRMS": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/DisableCapRMS";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_EnableDropRatesInPurchaseModal": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/EnableDropRatesInPurchaseModal";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_EnableFetchOffers": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/EnableFetchOffers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_LookupMissingCatalogItemKeys": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/LookupMissingCatalogItemKeys";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_PlayerGiftingNotificationsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/PlayerGiftingNotificationsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_SinglePageApplicationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/SinglePageApplicationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_StoreUrl": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/StoreUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_UseGameDataAssets": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/UseGameDataAssets";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_UseRMS": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/UseRMS";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_UseRsoAccessToken": {
    uri: "/lol-platform-config/v1/namespaces/LCUStore/UseRsoAccessToken";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCU_AirClientAlphaInviteEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LCU/AirClientAlphaInviteEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LCU_AirClientAlphaInviteURL": {
    uri: "/lol-platform-config/v1/namespaces/LCU/AirClientAlphaInviteURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAlphaShutdown": {
    uri: "/lol-platform-config/v1/namespaces/LcuAlphaShutdown";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAlphaShutdown_Countdown": {
    uri: "/lol-platform-config/v1/namespaces/LcuAlphaShutdown/Countdown";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAlphaShutdown_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuAlphaShutdown/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuBuddySpectate": {
    uri: "/lol-platform-config/v1/namespaces/LcuBuddySpectate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuBuddySpectate_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuBuddySpectate/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionDetails";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_AbilitiesSectionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionDetails/AbilitiesSectionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionDetails/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_PawEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionDetails/PawEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_SkinsSectionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionDetails/SkinsSectionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_AlliedSkinDisplayEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/AlliedSkinDisplayEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectChangeTooltipDurationMillis": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ChampSelectChangeTooltipDurationMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectChangeTooltipKey": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ChampSelectChangeTooltipKey";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectMutingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ChampSelectMutingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectReportV2Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ChampSelectReportV2Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampTradingTooltipEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ChampTradingTooltipEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_DisableAutoSmiteAssignment": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/DisableAutoSmiteAssignment";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_EnableFavorites": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/EnableFavorites";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_EnablePositionFilters": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/EnablePositionFilters";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_IsDisconnectNotificationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/IsDisconnectNotificationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_PickOrderSwappingTooltipEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/PickOrderSwappingTooltipEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_PositionAssignmentAnimationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/PositionAssignmentAnimationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_RandomChampionEnabledGameQueues": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/RandomChampionEnabledGameQueues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_RandomChampionRateLimitInterval": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/RandomChampionRateLimitInterval";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_RandomChampionRateLimitMaxActions": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/RandomChampionRateLimitMaxActions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ReportingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ReportingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ShowChampSelectChangeTooltip": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ShowChampSelectChangeTooltip";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ShowEmoteButton": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/ShowEmoteButton";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_SkinPurchaseEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/SkinPurchaseEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_SkinPurchaseNotificationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/SkinPurchaseNotificationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_SkinPurchaseTime": {
    uri: "/lol-platform-config/v1/namespaces/LcuChampionSelect/SkinPurchaseTime";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_ABTestFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/ABTestFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_ABTestFilterGroups": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/ABTestFilterGroups";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_ABTestFilterSalt": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/ABTestFilterSalt";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_EntitlementsFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/EntitlementsFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_LaneFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/LaneFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_LevelFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/LevelFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_LocationFiltersEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/LocationFiltersEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_Mapping": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/Mapping";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterChampionLimit": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/MasteryFilterChampionLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterDaysSinceLastPlayed": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/MasteryFilterDaysSinceLastPlayed";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/MasteryFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterLevelThreshold": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/MasteryFilterLevelThreshold";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MissionsFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/MissionsFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RankFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/RankFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RankedFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/RankedFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RevivalFilterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/RevivalFilterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RevivalFilterThreshold": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/RevivalFilterThreshold";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageBaseUri": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/TargetingAttributeStorageBaseUri";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/TargetingAttributeStorageEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageRolloutPct": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/TargetingAttributeStorageRolloutPct";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageUri": {
    uri: "/lol-platform-config/v1/namespaces/LcuContentTargeting/TargetingAttributeStorageUri";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuDisambiguation": {
    uri: "/lol-platform-config/v1/namespaces/LcuDisambiguation";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuDisambiguation_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuDisambiguation/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuDisambiguation_Required": {
    uri: "/lol-platform-config/v1/namespaces/LcuDisambiguation/Required";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_IsOptional": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification/IsOptional";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_MandatoryAt": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification/MandatoryAt";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_MaxOptionalLevel": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification/MaxOptionalLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_MinimumSummonerLevel": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification/MinimumSummonerLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_RequiredLogins": {
    uri: "/lol-platform-config/v1/namespaces/LcuEmailVerification/RequiredLogins";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings": {
    uri: "/lol-platform-config/v1/namespaces/LcuGameSettings";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_GameplayEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuGameSettings/GameplayEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_HotkeysEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuGameSettings/HotkeysEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_InterfaceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuGameSettings/InterfaceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_SoundEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuGameSettings/SoundEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome": {
    uri: "/lol-platform-config/v1/namespaces/LcuHome";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_LandingPagesTimeout": {
    uri: "/lol-platform-config/v1/namespaces/LcuHome/LandingPagesTimeout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_ReloadEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuHome/ReloadEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_ReloadPollerInterval": {
    uri: "/lol-platform-config/v1/namespaces/LcuHome/ReloadPollerInterval";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_ReloadStaleInterval": {
    uri: "/lol-platform-config/v1/namespaces/LcuHome/ReloadStaleInterval";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_RequireItemLoaded": {
    uri: "/lol-platform-config/v1/namespaces/LcuHome/RequireItemLoaded";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHovercard": {
    uri: "/lol-platform-config/v1/namespaces/LcuHovercard";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHovercard_Disabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuHovercard/Disabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHovercard_RoleInfoEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuHovercard/RoleInfoEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLeagueSpectate": {
    uri: "/lol-platform-config/v1/namespaces/LcuLeagueSpectate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLeagueSpectate_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLeagueSpectate/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLevelUp": {
    uri: "/lol-platform-config/v1/namespaces/LcuLevelUp";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLevelUp_EventEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLevelUp/EventEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLevelUp_ModalNotificationDisabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLevelUp/ModalNotificationDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_AutoGrantInviteEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/AutoGrantInviteEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_GameInvitesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/GameInvitesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_ObserverModeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/ObserverModeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_PracticeGameEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/PracticeGameEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_PracticeGameListEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/PracticeGameListEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_QueueEligibilityGateKeeperEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/QueueEligibilityGateKeeperEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_QueueEligibilityV2Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/QueueEligibilityV2Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_SendInventoryTokenMetricsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/SendInventoryTokenMetricsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_UseInventoryToken": {
    uri: "/lol-platform-config/v1/namespaces/LcuLobby/UseInventoryToken";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLoyalty": {
    uri: "/lol-platform-config/v1/namespaces/LcuLoyalty";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLoyalty_LeagueUnlockedEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLoyalty/LeagueUnlockedEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLoyalty_LolcafeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuLoyalty/LolcafeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe": {
    uri: "/lol-platform-config/v1/namespaces/LcuNpe";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_HardMaxSummonerLevel": {
    uri: "/lol-platform-config/v1/namespaces/LcuNpe/HardMaxSummonerLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_MaxSummonerLevel": {
    uri: "/lol-platform-config/v1/namespaces/LcuNpe/MaxSummonerLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_RewardsChallengesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuNpe/RewardsChallengesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_RewardsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuNpe/RewardsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_RewardsLoginEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuNpe/RewardsLoginEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_BypassAccountIds": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/BypassAccountIds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_Host": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/Host";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_PmcEdgeHost": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/PmcEdgeHost";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_PmcEdgeUrl": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/PmcEdgeUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_PmcSessionsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/PmcSessionsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_RiotPayEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/RiotPayEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_RiotPayThrottle": {
    uri: "/lol-platform-config/v1/namespaces/LcuPayments/RiotPayThrottle";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuProfiles": {
    uri: "/lol-platform-config/v1/namespaces/LcuProfiles";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuProfiles_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuProfiles/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuProfiles_ForceLayout": {
    uri: "/lol-platform-config/v1/namespaces/LcuProfiles/ForceLayout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget": {
    uri: "/lol-platform-config/v1/namespaces/LcuPurchaseWidget";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_BaseUrl": {
    uri: "/lol-platform-config/v1/namespaces/LcuPurchaseWidget/BaseUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_CapOrdersUrl": {
    uri: "/lol-platform-config/v1/namespaces/LcuPurchaseWidget/CapOrdersUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuPurchaseWidget/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_NonRefundableDisclaimerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuPurchaseWidget/NonRefundableDisclaimerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_PurchaseDisclaimerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuPurchaseWidget/PurchaseDisclaimerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuReadyCheckUpdate": {
    uri: "/lol-platform-config/v1/namespaces/LcuReadyCheckUpdate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuReadyCheckUpdate_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuReadyCheckUpdate/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuRevivals": {
    uri: "/lol-platform-config/v1/namespaces/LcuRevivals";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuRevivals_FoundationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuRevivals/FoundationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors": {
    uri: "/lol-platform-config/v1/namespaces/LcuSentryJSErrors";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSentryJSErrors/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors_SampleRate": {
    uri: "/lol-platform-config/v1/namespaces/LcuSentryJSErrors/SampleRate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors_SentryDSN": {
    uri: "/lol-platform-config/v1/namespaces/LcuSentryJSErrors/SentryDSN";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSettings": {
    uri: "/lol-platform-config/v1/namespaces/LcuSettings";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSettings_FullRepairEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSettings/FullRepairEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_AutoLinkEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/AutoLinkEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_ChatWindowPopoutEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/ChatWindowPopoutEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_ChatWindowResizeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/ChatWindowResizeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_ClearChatHistoryEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/ClearChatHistoryEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_DefaultGameQueues": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/DefaultGameQueues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_DetachedChatWindowResizeDisabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/DetachedChatWindowResizeDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_EnabledGameQueues": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/EnabledGameQueues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_FriendRequestToastsDisabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/FriendRequestToastsDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_FriendsListGiftingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/FriendsListGiftingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_LcuSupportedGameQueues": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/LcuSupportedGameQueues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_MoreUnreadsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/MoreUnreadsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_NewChatButtonEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/NewChatButtonEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_RecentlyPlayedDisabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/RecentlyPlayedDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_SlashMeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/SlashMeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_SortConversationsByTimeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/SortConversationsByTimeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_StatusesDisabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/StatusesDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_VirtualizedMessagesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/VirtualizedMessagesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_VirtualizedRosterEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSocial/VirtualizedRosterEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSummonerIconPicker": {
    uri: "/lol-platform-config/v1/namespaces/LcuSummonerIconPicker";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSummonerIconPicker_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuSummonerIconPicker/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_BattlepassHubEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/BattlepassHubEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_EligibilityInventoryTypes": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/EligibilityInventoryTypes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_HubEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/HubEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_MatchHistoryEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/MatchHistoryEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_OrbEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/OrbEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_PlayButtonEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/PlayButtonEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_SeriesInternalName": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/SeriesInternalName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_TftHomeEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTft/TftHomeEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_CarouselChampIds": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/CarouselChampIds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_GameModeSelectEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/GameModeSelectEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_IntroABTestPercentage": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/IntroABTestPercentage";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_NewPlayerExperienceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/NewPlayerExperienceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_PracticeToolEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/PracticeToolEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_SkipTutorialPathAfterLevel": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/SkipTutorialPathAfterLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_StatsTimeout": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/StatsTimeout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_TutorialSummonerIcon": {
    uri: "/lol-platform-config/v1/namespaces/LcuTutorial/TutorialSummonerIcon";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuUiKit": {
    uri: "/lol-platform-config/v1/namespaces/LcuUiKit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuUiKit_CelebrationModalsDisabled": {
    uri: "/lol-platform-config/v1/namespaces/LcuUiKit/CelebrationModalsDisabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_ApexDemotionNotificationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/ApexDemotionNotificationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_ChallengerLaddersEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/ChallengerLaddersEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_ConfigRefreshIntervalSeconds": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/ConfigRefreshIntervalSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_CurrentSplit": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/CurrentSplit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_CurrentYear": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/CurrentYear";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_DefaultJwtTimeToLiveSeconds": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/DefaultJwtTimeToLiveSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationEndTime": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationEndTime";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationSettingsName": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationSettingsName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationSettingsSchemaVer": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationSettingsSchemaVer";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationStartTime1": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationStartTime1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationStartTime2": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationStartTime2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationStartTime3": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationStartTime3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationsConfig": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationsConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosNotificationsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosRewardGroupsConfig": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosRewardGroupsConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosRewardsConfig": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/EosRewardsConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_FlexRestrictionModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/FlexRestrictionModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsGlobalNotificationsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/IsGlobalNotificationsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsPreseason": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/IsPreseason";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsSeasonMemorialModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/IsSeasonMemorialModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsSplitStartModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/IsSplitStartModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_JWTEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/JWTEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_MasterTierEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/MasterTierEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_PreseasonName": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/PreseasonName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_PromoHelperEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/PromoHelperEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_PromotionVignetteV2Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/PromotionVignetteV2Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_Ranked2017Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/Ranked2017Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_Ranked2019Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/Ranked2019Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_RankedReferenceModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/RankedReferenceModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_RankedRewardConfig": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/RankedRewardConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_SeasonModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/SeasonModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_SeasonName": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/SeasonName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_SendSignedRankedOverview": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/SendSignedRankedOverview";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_TftSeasonNameLocKey": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/TftSeasonNameLocKey";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_TopRatedLaddersEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueConfig/TopRatedLaddersEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClient": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClient";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_GSMv2": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/GSMv2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_GameAgnosticMatchHistory": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/GameAgnosticMatchHistory";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Leagues": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/Leagues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_MarketingPreferences": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/MarketingPreferences";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Missions": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/Missions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Parties": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/Parties";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_PlayerBehavior": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/PlayerBehavior";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_PublishingContent": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/PublishingContent";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Summoner": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/Summoner";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Tastes": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/Tastes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Teambuilder": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientEnabledServices/Teambuilder";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientLeagueSessionServicesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientLeagueSessionServicesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientLeagueSessionServicesEnabled_Leagues": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientLeagueSessionServicesEnabled/Leagues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientServiceTrafficBalanceRate": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientServiceTrafficBalanceRate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientServiceTrafficBalanceRate_Parties": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClientServiceTrafficBalanceRate/Parties";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClient_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClient/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClient_LeagueSessionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeagueEdgeClient/LeagueSessionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueSession_FailureRefreshTimeoutSeconds": {
    uri: "/lol-platform-config/v1/namespaces/LeagueSession/FailureRefreshTimeoutSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueSession_RefreshTokenOverride": {
    uri: "/lol-platform-config/v1/namespaces/LeagueSession/RefreshTokenOverride";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueSession_UseSessionRefreshV2": {
    uri: "/lol-platform-config/v1/namespaces/LeagueSession/UseSessionRefreshV2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeaverBuster": {
    uri: "/lol-platform-config/v1/namespaces/LeaverBuster";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeaverBuster_IsLbsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeaverBuster/IsLbsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LeaverBuster_IsLockoutModalEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LeaverBuster/IsLockoutModalEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_EnableStarShardsServices": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/EnableStarShardsServices";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_EnableStarShardsUpgradeFlow": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/EnableStarShardsUpgradeFlow";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_InventoryServiceUrl": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/InventoryServiceUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_LoadoutsServiceUrl": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/LoadoutsServiceUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_NewLoadoutPickerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/NewLoadoutPickerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_UseV4LoadoutFlow": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/UseV4LoadoutFlow";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_ValidInventoryTypes": {
    uri: "/lol-platform-config/v1/namespaces/Loadouts/ValidInventoryTypes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_bannedUntilDateMillis": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/bannedUntilDateMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_broadcastNotification": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/broadcastNotification";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_coOpVsAiMinutesLeftToday": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/coOpVsAiMinutesLeftToday";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_coOpVsAiMsecsUntilReset": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/coOpVsAiMsecsUntilReset";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_competitiveRegion": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/competitiveRegion";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_customMinutesLeftToday": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/customMinutesLeftToday";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_customMsecsUntilReset": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/customMsecsUntilReset";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_displayPrimeReformCard": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/displayPrimeReformCard";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_emailStatus": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/emailStatus";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_gameTypeConfigs": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/gameTypeConfigs";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_inGhostGame": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/inGhostGame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_languages": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/languages";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_matchMakingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/matchMakingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_maxPracticeGameSize": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/maxPracticeGameSize";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minor": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/minor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minorShutdownEnforced": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/minorShutdownEnforced";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minutesUntilMidnight": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/minutesUntilMidnight";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minutesUntilShutdown": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/minutesUntilShutdown";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minutesUntilShutdownEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/minutesUntilShutdownEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_platformGameLifecycle": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/platformGameLifecycle";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_platformId": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/platformId";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_playerStatSummaries": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/playerStatSummaries";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_restrictedChatGamesRemaining": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/restrictedChatGamesRemaining";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_restrictedGamesRemainingForRanked": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/restrictedGamesRemainingForRanked";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_showEmailVerificationPopup": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/showEmailVerificationPopup";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_simpleMessages": {
    uri: "/lol-platform-config/v1/namespaces/LoginDataPacket/simpleMessages";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount1": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/ChestBundleDiscount1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount2": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/ChestBundleDiscount2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount3": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/ChestBundleDiscount3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount4": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/ChestBundleDiscount4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount5": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/ChestBundleDiscount5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EnableMythicEssenceDisplay": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EnableMythicEssenceDisplay";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId1": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EventChestBundleId1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId2": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EventChestBundleId2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId3": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EventChestBundleId3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId4": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EventChestBundleId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId5": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EventChestBundleId5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/EventChestsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_InitializationGoalFlags": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/InitializationGoalFlags";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LEdgeAccessEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/LEdgeAccessEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LEdgeAccessPercentage": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/LEdgeAccessPercentage";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LcuEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/LcuEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LootMilestonesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/LootMilestonesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LootOddsQueryEvaluationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/LootOddsQueryEvaluationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_MATERIAL_112LearnMoreURL": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/MATERIAL/112LearnMoreURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_MinSummonerLevel": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/MinSummonerLevel";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_NewPlayerChestEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/NewPlayerChestEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_NoRefundConfirmationEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/NoRefundConfirmationEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_PurchaseChestsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/PurchaseChestsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_Visible": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/Visible";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_WorldsTokensEnabled": {
    uri: "/lol-platform-config/v1/namespaces/LootConfig/WorldsTokensEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Masteries": {
    uri: "/lol-platform-config/v1/namespaces/Masteries";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Masteries_ShowPointsResetMessage": {
    uri: "/lol-platform-config/v1/namespaces/Masteries/ShowPointsResetMessage";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions": {
    uri: "/lol-platform-config/v1/namespaces/Missions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_EligibilityInventoryTypes": {
    uri: "/lol-platform-config/v1/namespaces/Missions/EligibilityInventoryTypes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsCompressed": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsCompressed";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsCooldownPollingTime": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsCooldownPollingTime";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsFrontEndEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsFrontEndEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsPollingTime": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsPollingTime";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsTabTrackerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsTabTrackerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsUseV4Api": {
    uri: "/lol-platform-config/v1/namespaces/Missions/MissionsUseV4Api";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_SendSimpleInventoryTokens": {
    uri: "/lol-platform-config/v1/namespaces/Missions/SendSimpleInventoryTokens";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators": {
    uri: "/lol-platform-config/v1/namespaces/Mutators";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_BasicTutorialMutators": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/BasicTutorialMutators";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_BattleTrainingMutators": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/BattleTrainingMutators";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_CustomGameMutators": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/CustomGameMutators";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledAssetMutators": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/EnabledAssetMutators";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledCustomModes": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/EnabledCustomModes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledModes": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/EnabledModes";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledMutators": {
    uri: "/lol-platform-config/v1/namespaces/Mutators/EnabledMutators";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation": {
    uri: "/lol-platform-config/v1/namespaces/Navigation";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation_NavBarDisplayMode": {
    uri: "/lol-platform-config/v1/namespaces/Navigation/NavBarDisplayMode";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation_UseEnhancedMenu": {
    uri: "/lol-platform-config/v1/namespaces/Navigation/UseEnhancedMenu";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation_UseTextLabels": {
    uri: "/lol-platform-config/v1/namespaces/Navigation/UseTextLabels";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_MatchHistoryWebURL": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory/MatchHistoryWebURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_PostIPXPToLegSEnabled": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory/PostIPXPToLegSEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_RecentlyPlayedNumGames": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory/RecentlyPlayedNumGames";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_SharingEnabled": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory/SharingEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_TftMatchHistoryEnabled": {
    uri: "/lol-platform-config/v1/namespaces/NewMatchHistory/TftMatchHistoryEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerIntro": {
    uri: "/lol-platform-config/v1/namespaces/NewPlayerIntro";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerIntro_IntroUrl": {
    uri: "/lol-platform-config/v1/namespaces/NewPlayerIntro/IntroUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerIntro_NewSummonerIconIds": {
    uri: "/lol-platform-config/v1/namespaces/NewPlayerIntro/NewSummonerIconIds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerRouter": {
    uri: "/lol-platform-config/v1/namespaces/NewPlayerRouter";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerRouter_ABDisablingOfTutorial": {
    uri: "/lol-platform-config/v1/namespaces/NewPlayerRouter/ABDisablingOfTutorial";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerRouter_QueueID": {
    uri: "/lol-platform-config/v1/namespaces/NewPlayerRouter/QueueID";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties": {
    uri: "/lol-platform-config/v1/namespaces/Parties";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_CustomsInPartiesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Parties/CustomsInPartiesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_EnableLobbyCreation": {
    uri: "/lol-platform-config/v1/namespaces/Parties/EnableLobbyCreation";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Parties/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_EnabledForTeamBuilderQueues": {
    uri: "/lol-platform-config/v1/namespaces/Parties/EnabledForTeamBuilderQueues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_GameflowRegistrationStatusRequired": {
    uri: "/lol-platform-config/v1/namespaces/Parties/GameflowRegistrationStatusRequired";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_GameflowSamplingProbability": {
    uri: "/lol-platform-config/v1/namespaces/Parties/GameflowSamplingProbability";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_LoginRegistrationTimeout": {
    uri: "/lol-platform-config/v1/namespaces/Parties/LoginRegistrationTimeout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_NotificationDelaySamplingPercentage": {
    uri: "/lol-platform-config/v1/namespaces/Parties/NotificationDelaySamplingPercentage";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_OpenPartyEnable": {
    uri: "/lol-platform-config/v1/namespaces/Parties/OpenPartyEnable";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_PremadeEligibilityFromPartiesEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Parties/PremadeEligibilityFromPartiesEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_PremadeEligibilityQueuesDelayedRefreshTimeoutSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Parties/PremadeEligibilityQueuesDelayedRefreshTimeoutSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_RegistrationConfigurationChangedTimeout": {
    uri: "/lol-platform-config/v1/namespaces/Parties/RegistrationConfigurationChangedTimeout";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_RegistrationCredentialsRequired": {
    uri: "/lol-platform-config/v1/namespaces/Parties/RegistrationCredentialsRequired";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_RegistrationRetryInterval": {
    uri: "/lol-platform-config/v1/namespaces/Parties/RegistrationRetryInterval";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_ServiceProxySamplingPercentage": {
    uri: "/lol-platform-config/v1/namespaces/Parties/ServiceProxySamplingPercentage";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PartyRewards": {
    uri: "/lol-platform-config/v1/namespaces/PartyRewards";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PartyRewards_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/PartyRewards/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PartyRewards_GameFlowVisualUpdate": {
    uri: "/lol-platform-config/v1/namespaces/PartyRewards/GameFlowVisualUpdate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Perks": {
    uri: "/lol-platform-config/v1/namespaces/Perks";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Perks_MinSummonerLevelUnlockCustomPages": {
    uri: "/lol-platform-config/v1/namespaces/Perks/MinSummonerLevelUnlockCustomPages";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Perks_PerksEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Perks/PerksEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_BaseServiceURL": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/BaseServiceURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_HubEnabled": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/HubEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_Port": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/Port";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_PromotionEndTime": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/PromotionEndTime";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_PromotionName": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/PromotionName";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_PromotionStartTime": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/PromotionStartTime";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_Protocol": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/Protocol";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ServiceConfig": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/ServiceConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ServicePath": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/ServicePath";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ShowNavButton": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/ShowNavButton";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ThemedBackground": {
    uri: "/lol-platform-config/v1/namespaces/PersonalizedOffers/ThemedBackground";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_BaseServiceURL": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers/BaseServiceURL";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_HubEnabled": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers/HubEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_Port": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers/Port";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_Protocol": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers/Protocol";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_ServiceConfig": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers/ServiceConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_ServicePath": {
    uri: "/lol-platform-config/v1/namespaces/PersonlizedOffers/ServicePath";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlatformShutdown": {
    uri: "/lol-platform-config/v1/namespaces/PlatformShutdown";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlatformShutdown_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/PlatformShutdown/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerBehavior": {
    uri: "/lol-platform-config/v1/namespaces/PlayerBehavior";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerBehavior_CodeOfConductEnabled": {
    uri: "/lol-platform-config/v1/namespaces/PlayerBehavior/CodeOfConductEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerBehavior_ReformCardV2Enabled": {
    uri: "/lol-platform-config/v1/namespaces/PlayerBehavior/ReformCardV2Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerFeedbackTool": {
    uri: "/lol-platform-config/v1/namespaces/PlayerFeedbackTool";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerFeedbackTool_BackendUrl": {
    uri: "/lol-platform-config/v1/namespaces/PlayerFeedbackTool/BackendUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerFeedbackTool_EnableHomeTrigger": {
    uri: "/lol-platform-config/v1/namespaces/PlayerFeedbackTool/EnableHomeTrigger";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerNotification": {
    uri: "/lol-platform-config/v1/namespaces/PlayerNotification";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerNotification_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/PlayerNotification/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences": {
    uri: "/lol-platform-config/v1/namespaces/PlayerPreferences";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/PlayerPreferences/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_EnforceHttps": {
    uri: "/lol-platform-config/v1/namespaces/PlayerPreferences/EnforceHttps";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_ServiceEndpoint": {
    uri: "/lol-platform-config/v1/namespaces/PlayerPreferences/ServiceEndpoint";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_Version": {
    uri: "/lol-platform-config/v1/namespaces/PlayerPreferences/Version";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Postgame": {
    uri: "/lol-platform-config/v1/namespaces/Postgame";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Postgame_ShowPositionDetectionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Postgame/ShowPositionDetectionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_ACSLookup": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/ACSLookup";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_ChampionMasteryLookup": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/ChampionMasteryLookup";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForBuddyPanelView": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForBuddyPanelView";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForChatFriendsList": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForChatFriendsList";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForChatGroupChatParticipants": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForChatGroupChatParticipants";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForClubChatParticipants": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForClubChatParticipants";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForCustomGameLobby": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForCustomGameLobby";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForGameLobbySuggestedPlayers": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForGameLobbySuggestedPlayers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForGroupFinderCapViewSuggestedPlayers": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForGroupFinderCapViewSuggestedPlayers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForSummonerQuickView": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForSummonerQuickView";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForTeamBuilderSuggestedPlayers": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/IsEnabledForTeamBuilderSuggestedPlayers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_LeagueLookup": {
    uri: "/lol-platform-config/v1/namespaces/ProfileHoverCard/LeagueLookup";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles": {
    uri: "/lol-platform-config/v1/namespaces/Profiles";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_EosIconEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Profiles/EosIconEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_EosTooltipShowOnce": {
    uri: "/lol-platform-config/v1/namespaces/Profiles/EosTooltipShowOnce";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_RankQueueOnCount": {
    uri: "/lol-platform-config/v1/namespaces/Profiles/RankQueueOnCount";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_SkinsPickerEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Profiles/SkinsPickerEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent": {
    uri: "/lol-platform-config/v1/namespaces/PublishingContent";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/PublishingContent/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_LocalePreferenceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/PublishingContent/LocalePreferenceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_LocalePreferenceOptions": {
    uri: "/lol-platform-config/v1/namespaces/PublishingContent/LocalePreferenceOptions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_TftGdsTest": {
    uri: "/lol-platform-config/v1/namespaces/PublishingContent/TftGdsTest";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_TftHubCardsUrl": {
    uri: "/lol-platform-config/v1/namespaces/PublishingContent/TftHubCardsUrl";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueImages": {
    uri: "/lol-platform-config/v1/namespaces/QueueImages";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueImages_OverrideQueueImage": {
    uri: "/lol-platform-config/v1/namespaces/QueueImages/OverrideQueueImage";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_AllowablePremadeSizesForQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/AllowablePremadeSizesForQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_KarmaEnabled": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/KarmaEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndDivisionForPremadeSize2QueueId1100": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndDivisionForPremadeSize2QueueId1100";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndDivisionForPremadeSize2QueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndDivisionForPremadeSize2QueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize1QueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize1QueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize1QueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize1QueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize2QueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize2QueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize2QueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize2QueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize3QueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize3QueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize3QueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize3QueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize4QueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize4QueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize4QueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize4QueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize5";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize5QueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize5QueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize5QueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/MaxTierAndRankForPremadeSize5QueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_QueuesRequiringTwentyChampions": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/QueuesRequiringTwentyChampions";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTier": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTier";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTierQueueId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId410": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTierQueueId410";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTierQueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTierQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTierQueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueDefaultUnseededTierQueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueRestrictionMaxDelta": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueRestrictionMaxDelta";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueRestrictionMode": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedDuoQueueRestrictionMode";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeMaxSize": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighMmrPremadeMaxSize";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeRank": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighMmrPremadeRank";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeRestrictionEnabled": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighMmrPremadeRestrictionEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeTier": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighMmrPremadeTier";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTier": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTier";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTierQueueId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId410": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTierQueueId410";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTierQueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTierQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTierQueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillLowestTierQueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDelta": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDelta";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDeltaQueueId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId410": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDeltaQueueId410";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDeltaQueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDeltaQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDeltaQueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMaxDeltaQueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMode": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionMode";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionModeQueueId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId410": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionModeQueueId410";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionModeQueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionModeQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionModeQueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedHighSkillRestrictionModeQueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDelta": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDelta";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDeltaQueueId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId410": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDeltaQueueId410";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDeltaQueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDeltaQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDeltaQueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMaxDeltaQueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMode": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionMode";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId4": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionModeQueueId4";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId410": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionModeQueueId410";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId420": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionModeQueueId420";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId440": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionModeQueueId440";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId470": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionModeQueueId470";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId9": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/RankedLowSkillRestrictionModeQueueId9";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_ServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/QueueRestriction/ServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Regalia": {
    uri: "/lol-platform-config/v1/namespaces/Regalia";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Replays": {
    uri: "/lol-platform-config/v1/namespaces/Replays";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Replays_MinSupportedGameServerVersion": {
    uri: "/lol-platform-config/v1/namespaces/Replays/MinSupportedGameServerVersion";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Replays_ThirdPersonAccessibleGameQueues": {
    uri: "/lol-platform-config/v1/namespaces/Replays/ThirdPersonAccessibleGameQueues";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Rewards": {
    uri: "/lol-platform-config/v1/namespaces/Rewards";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Rewards_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Rewards/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Sanitizer": {
    uri: "/lol-platform-config/v1/namespaces/Sanitizer";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Sanitizer_Level1Unfilter": {
    uri: "/lol-platform-config/v1/namespaces/Sanitizer/Level1Unfilter";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Maximum_team_reward_level": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/Maximum/team/reward/level";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_points_per_reward_level": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/Minimum/points/per/reward/level";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_win_team_reward_level_1": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/Minimum/win/team/reward/level/1";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_win_team_reward_level_2": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/Minimum/win/team/reward/level/2";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_win_team_reward_level_3": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/Minimum/win/team/reward/level/3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_QualificationWarningEnabled": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/QualificationWarningEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_ServiceCallEnabled": {
    uri: "/lol-platform-config/v1/namespaces/SeasonReward/ServiceCallEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SendConfigurationDeltasToClient": {
    uri: "/lol-platform-config/v1/namespaces/SendConfigurationDeltasToClient";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SendConfigurationDeltasToClient_ASCENSION": {
    uri: "/lol-platform-config/v1/namespaces/SendConfigurationDeltasToClient/ASCENSION";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Sentry": {
    uri: "/lol-platform-config/v1/namespaces/Sentry";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Sentry_SampleRate": {
    uri: "/lol-platform-config/v1/namespaces/Sentry/SampleRate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ServiceStatusAPI": {
    uri: "/lol-platform-config/v1/namespaces/ServiceStatusAPI";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ServiceStatusAPI_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/ServiceStatusAPI/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_AdvancedGameDetailsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/AdvancedGameDetailsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_AdvancedGameDetailsUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/AdvancedGameDetailsUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_MatchDetailsUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/MatchDetailsUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_MatchHistoryEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/MatchHistoryEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_MatchHistoryUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/MatchHistoryUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_ShareEndOfGameEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/ShareEndOfGameEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_ShareGameUrlTemplate": {
    uri: "/lol-platform-config/v1/namespaces/ShareMatchHistory/ShareGameUrlTemplate";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinRentals": {
    uri: "/lol-platform-config/v1/namespaces/SkinRentals";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinRentals_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/SkinRentals/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinsViewer": {
    uri: "/lol-platform-config/v1/namespaces/SkinsViewer";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinsViewer_VintageSkinSummonerIconConfig": {
    uri: "/lol-platform-config/v1/namespaces/SkinsViewer/VintageSkinSummonerIconConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard": {
    uri: "/lol-platform-config/v1/namespaces/SocialLeaderboard";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_IsSocialLeaderboardEnabled": {
    uri: "/lol-platform-config/v1/namespaces/SocialLeaderboard/IsSocialLeaderboardEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_LeaguesPuuidPageSize": {
    uri: "/lol-platform-config/v1/namespaces/SocialLeaderboard/LeaguesPuuidPageSize";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_MinsTillCacheExpiry": {
    uri: "/lol-platform-config/v1/namespaces/SocialLeaderboard/MinsTillCacheExpiry";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_SecsTillAvailabilityCacheExpiry": {
    uri: "/lol-platform-config/v1/namespaces/SocialLeaderboard/SecsTillAvailabilityCacheExpiry";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_UseSocialLeaderboardLeaguesEndpoint": {
    uri: "/lol-platform-config/v1/namespaces/SocialLeaderboard/UseSocialLeaderboardLeaguesEndpoint";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Spectator": {
    uri: "/lol-platform-config/v1/namespaces/Spectator";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Spectator_SaveReconnectInfoEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Spectator/SaveReconnectInfoEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_String": {
    uri: "/lol-platform-config/v1/namespaces/String";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_String_IsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/String/IsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_String_String": {
    uri: "/lol-platform-config/v1/namespaces/String/String";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_FriendsOfFriendsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/FriendsOfFriendsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_FriendsOfFriendsLimit": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/FriendsOfFriendsLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_HonoredPlayersLimit": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/HonoredPlayersLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_MaxNumReplacements": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/MaxNumReplacements";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_MaxNumSuggestedPlayers": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/MaxNumSuggestedPlayers";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_OnlineFriendsLimit": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/OnlineFriendsLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_PreviousPremadesLimit": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/PreviousPremadesLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_VictoriousComradesLimit": {
    uri: "/lol-platform-config/v1/namespaces/SuggestedPlayers/VictoriousComradesLimit";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_ConfigRefreshIntervalSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Summoner/ConfigRefreshIntervalSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_JWTMaxTimeoutSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Summoner/JWTMaxTimeoutSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_JWTMinTimeoutSeconds": {
    uri: "/lol-platform-config/v1/namespaces/Summoner/JWTMinTimeoutSeconds";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_SummonerProfileCacheEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Summoner/SummonerProfileCacheEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBoost": {
    uri: "/lol-platform-config/v1/namespaces/TeamBoost";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBoost_AllSkinEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBoost/AllSkinEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBoost_RandomSkinEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBoost/RandomSkinEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_EnableChampionSelectPreferences": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/EnableChampionSelectPreferences";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_EstimatedWaitAdjustmentEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/EstimatedWaitAdjustmentEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_FillPrimaryWaitFactor": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/FillPrimaryWaitFactor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_FillSecondaryWaitFactor": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/FillSecondaryWaitFactor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_LogAllLCDSMessages": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/LogAllLCDSMessages";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_MidPrimaryWaitFactor": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/MidPrimaryWaitFactor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SendAfkCheckMetricsEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/SendAfkCheckMetricsEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_ServiceCallTimeoutMillis": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/ServiceCallTimeoutMillis";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SkinPurchaseEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/SkinPurchaseEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SupportPrimaryWaitFactor": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/SupportPrimaryWaitFactor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SupportSecondaryWaitFactor": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/SupportSecondaryWaitFactor";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_TBRerollServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/TBRerollServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_TakeoverEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/TakeoverEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_UnlockLockInButtonTimeoutEnabled": {
    uri: "/lol-platform-config/v1/namespaces/TeamBuilderDraft/UnlockLockInButtonTimeoutEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_TencentAntiAddiction_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/TencentAntiAddiction/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ThirdPartyVerification": {
    uri: "/lol-platform-config/v1/namespaces/ThirdPartyVerification";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_ThirdPartyVerification_CAHServiceEnabled": {
    uri: "/lol-platform-config/v1/namespaces/ThirdPartyVerification/CAHServiceEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Trophies": {
    uri: "/lol-platform-config/v1/namespaces/Trophies";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Trophies_IsEnabledOnProfile": {
    uri: "/lol-platform-config/v1/namespaces/Trophies/IsEnabledOnProfile";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Trophies_IsOtherSummonersProfileEnabled": {
    uri: "/lol-platform-config/v1/namespaces/Trophies/IsOtherSummonersProfileEnabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Voice": {
    uri: "/lol-platform-config/v1/namespaces/Voice";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_Voice_Enabled": {
    uri: "/lol-platform-config/v1/namespaces/Voice/Enabled";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_WardSkinConfig": {
    uri: "/lol-platform-config/v1/namespaces/WardSkinConfig";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_WardSkinConfig_UseLoadouts": {
    uri: "/lol-platform-config/v1/namespaces/WardSkinConfig/UseLoadouts";
    returnType: any;
  };
  "OnJsonApiEvent_lol-platform-config_v1_namespaces_WardSkinConfig_WardSkinSelection": {
    uri: "/lol-platform-config/v1/namespaces/WardSkinConfig/WardSkinSelection";
    returnType: any;
  };
  "OnJsonApiEvent_lol-player-behavior_v2_reporter-feedback": {
    uri: "/lol-player-behavior/v2/reporter-feedback";
    returnType: any;
  };
  "OnJsonApiEvent_lol-player-behavior_v3_reform-cards": {
    uri: "/lol-player-behavior/v3/reform-cards";
    returnType: any;
  };
  "OnJsonApiEvent_lol-progression_v1_groups": {
    uri: "/lol-progression/v1/groups";
    returnType: any;
  };
  "OnJsonApiEvent_lol-progression_v1_ready": { uri: "/lol-progression/v1/ready"; returnType: any };
  "OnJsonApiEvent_lol-publishing-content_v1_listeners": {
    uri: "/lol-publishing-content/v1/listeners";
    returnType: any;
  };
  "OnJsonApiEvent_lol-publishing-content_v1_settings": {
    uri: "/lol-publishing-content/v1/settings";
    returnType: any;
  };
  "OnJsonApiEvent_lol-ranked_v1_global-notifications": {
    uri: "/lol-ranked/v1/global-notifications";
    returnType: any;
  };
  "OnJsonApiEvent_lol-regalia_v2_summoners": { uri: "/lol-regalia/v2/summoners"; returnType: any };
  "OnJsonApiEvent_lol-replays_v1_metadata": { uri: "/lol-replays/v1/metadata"; returnType: any };
  "OnJsonApiEvent_lol-replays_v1_rofls": { uri: "/lol-replays/v1/rofls"; returnType: any };
  "OnJsonApiEvent_lol-rso-auth_configuration_v3": {
    uri: "/lol-rso-auth/configuration/v3";
    returnType: any;
  };
  "OnJsonApiEvent_lol-settings_v1_account": { uri: "/lol-settings/v1/account"; returnType: any };
  "OnJsonApiEvent_lol-settings_v1_local": { uri: "/lol-settings/v1/local"; returnType: any };
  "OnJsonApiEvent_lol-settings_v2_account": { uri: "/lol-settings/v2/account"; returnType: any };
  "OnJsonApiEvent_lol-settings_v2_config": { uri: "/lol-settings/v2/config"; returnType: any };
  "OnJsonApiEvent_lol-settings_v2_local": { uri: "/lol-settings/v2/local"; returnType: any };
  "OnJsonApiEvent_lol-tft-team-planner_v1_config": {
    uri: "/lol-tft-team-planner/v1/config";
    returnType: any;
  };
  "OnJsonApiEvent_lol-tft-team-planner_v1_team": {
    uri: "/lol-tft-team-planner/v1/team";
    returnType: any;
  };
  "OnJsonApiEvent_lol-tft_v1_tft": { uri: "/lol-tft/v1/tft"; returnType: any };
  "OnJsonApiEvent_lol-tft_v2_tft": { uri: "/lol-tft/v2/tft"; returnType: any };
  "OnJsonApiEvent_lol-yourshop_v1_modal": { uri: "/lol-yourshop/v1/modal"; returnType: any };
  "OnJsonApiEvent_lol-yourshop_v1_ready": { uri: "/lol-yourshop/v1/ready"; returnType: any };
  "OnJsonApiEvent_lol-yourshop_v1_status": { uri: "/lol-yourshop/v1/status"; returnType: any };
  "OnJsonApiEvent_player-reporting_v1_reporter-feedback": {
    uri: "/player-reporting/v1/reporter-feedback";
    returnType: any;
  };
  "OnJsonApiEvent_plugin-manager_v1_external-plugins": {
    uri: "/plugin-manager/v1/external-plugins";
    returnType: any;
  };
  "OnJsonApiEvent_product-metadata_v2_products": {
    uri: "/product-metadata/v2/products";
    returnType: any;
  };
  "OnJsonApiEvent_product-session_v1_external-sessions": {
    uri: "/product-session/v1/external-sessions";
    returnType: any;
  };
  "OnJsonApiEvent_riot-messaging-service_v1_message": {
    uri: "/riot-messaging-service/v1/message";
    returnType: any;
  };
  "OnJsonApiEvent_riot-messaging-service_v1_out-of-sync": {
    uri: "/riot-messaging-service/v1/out-of-sync";
    returnType: any;
  };
  OnJsonApiEvent_riotclient_get_region_locale: {
    uri: "/riotclient/get/region/locale";
    returnType: any;
  };
  "OnJsonApiEvent_riotclient_pre-shutdown_begin": {
    uri: "/riotclient/pre-shutdown/begin";
    returnType: any;
  };
  "OnJsonApiEvent_riotclient_system-info_v1": {
    uri: "/riotclient/system-info/v1";
    returnType: any;
  };
  "OnJsonApiEvent_riotclient_ux-state_request": {
    uri: "/riotclient/ux-state/request";
    returnType: any;
  };
  "OnJsonApiEvent_riotclient_v1_crash-reporting": {
    uri: "/riotclient/v1/crash-reporting";
    returnType: any;
  };
  "OnJsonApiEvent_rso-auth_configuration_v3": {
    uri: "/rso-auth/configuration/v3";
    returnType: any;
  };
  "OnJsonApiEvent_rso-auth_v1_auth-hints": { uri: "/rso-auth/v1/auth-hints"; returnType: any };
  "OnJsonApiEvent_rso-auth_v1_session": { uri: "/rso-auth/v1/session"; returnType: any };
  "OnJsonApiEvent_rso-auth_v2_authorizations": {
    uri: "/rso-auth/v2/authorizations";
    returnType: any;
  };
  OnJsonApiEvent_scd_v1_cookies: { uri: "/scd/v1/cookies"; returnType: any };
  "OnJsonApiEvent_voice-chat_v2_devices": { uri: "/voice-chat/v2/devices"; returnType: any };
  "OnJsonApiEvent_voice-chat_v3_sessions": { uri: "/voice-chat/v3/sessions"; returnType: any };
  "OnJsonApiEvent_voice-chat_v3_settings": { uri: "/voice-chat/v3/settings"; returnType: any };
  OnLcdsEvent: { uri: undefined; returnType: any };
  OnLcdsEvent_com_riotgames_platform_broadcast_BroadcastNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_client_dynamic_configuration_ClientDynamicConfigurationNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_game_GameDTO: { uri: undefined; returnType: any };
  OnLcdsEvent_com_riotgames_platform_game_PlayerCredentialsDto: { uri: undefined; returnType: any };
  OnLcdsEvent_com_riotgames_platform_game_TeamSkinRentalDTO: { uri: undefined; returnType: any };
  OnLcdsEvent_com_riotgames_platform_game_message_GameNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_gameinvite_contract_InvitationRequest: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_gameinvite_contract_InvitePrivileges: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_gameinvite_contract_LobbyStatus: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_gameinvite_contract_RemovedFromLobbyNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_leaverbuster_event_messaging_LeaverBusterLowPriorityQueueAbandoned: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_loyalty_message_LoyaltyStateChangeNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_matchmaking_SearchingForMatchNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_messaging_ForcedClientShutdown: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_messaging_RentalUpdateNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_messaging_StoreAccountBalanceNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_messaging_StoreFulfillmentNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_messaging_persistence_SimpleDialogMessage: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_statistics_EndOfGameStats: { uri: undefined; returnType: any };
  OnLcdsEvent_com_riotgames_platform_systemstate_ClientSystemStatesNotification: {
    uri: undefined;
    returnType: any;
  };
  OnLcdsEvent_com_riotgames_platform_trade_api_contract_TradeContractDTO: {
    uri: undefined;
    returnType: any;
  };
  OnLog: { uri: undefined; returnType: any };
  OnRegionLocaleChanged: { uri: undefined; returnType: any };
  OnServiceProxyAsyncEvent: { uri: undefined; returnType: any };
  OnServiceProxyMethodEvent: { uri: undefined; returnType: any };
  OnServiceProxyUuidEvent: { uri: undefined; returnType: any };
};
export type UntrustedEvents = keyof UntrustedEventMap;

export type AllEvents = Events | UntrustedEvents;
export type AllEventMap = EventMap & UntrustedEventMap;
