import * as LCU_Type from "../Types";
export interface RequestInfo {
  "/AsyncDelete": {
    post: {
      parameters: {
        /**
         * ID of the asynchronous operation to remove
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
  };
  "/AsyncResult": {
    post: {
      parameters: {
        /**
         * ID of the asynchronous operation to check
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
  };
  "/AsyncStatus": {
    post: {
      parameters: {
        /**
         * ID of the asynchronous operation to check
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
  };
  "/Cancel": {
    post: {
      parameters: {
        /**
         * Operation to cancel
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
  };
  "/Exit": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/Help": {
    /**
     * With no arguments, returns a list of all available functions and types along with a short description. If a function or type is specified, returns detailed information about it.
     */
    post: {
      parameters: {
        /**
         * Name of the function or type to describe
         */
        target?: string;
        /**
         * Format for returned information
         */
        format?: "Full" | "Epytext" | "Brief" | "Console";
      };
      responce: boolean | undefined;
    };
  };
  "/LoggingGetEntries": {
    post: {
      responce: Array<LCU_Type.LogEvent>;
    };
  };
  "/LoggingMetrics": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/LoggingMetricsMetadata": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/LoggingStart": {
    post: {
      parameters: {
        /**
         * Specifies whether logs will be buffered for LoggingGetEntries to work
         */
        buffered?: boolean;
        /**
         * Minimum severity level to fire a log event
         */
        severity?: "Okay" | "Warning" | "Error" | "Always";
      };
    };
  };
  "/LoggingStop": {
    post: {};
  };
  "/MemoryPools": {
    post: {
      parameters: {
        /**
         * Name of the context to find (optional)
         */
        contextName?: string;
      };
      responce: boolean | undefined;
    };
  };
  "/Subscribe": {
    post: {
      parameters: {
        /**
         * Name of the event to subscribe to
         */
        eventName: string;
        /**
         * Desired format to receive events in. If unspecified, events will be sent in the active result format at the time.
         */
        format?: "JSON" | "YAML" | "MsgPack";
      };
      responce: boolean | undefined;
    };
  };
  "/Unsubscribe": {
    post: {
      parameters: {
        /**
         * Name of the event to unsubscribe from
         */
        eventName: string;
      };
      responce: boolean | undefined;
    };
  };
  "/WebSocketFormat": {
    /**
     * With no arguments, returns the current output format being used. If a format is specified, switches the console output to that format.
     */
    post: {
      parameters: {
        /**
         * Output format to switch to
         */
        format?: "JSON" | "YAML" | "MsgPack";
      };
      responce: boolean | undefined;
    };
  };
  "/anti-addiction/v1/policies/{policyType}/anti-addiction-state": {
    get: {
      parameters: {
        policyType: "antiAddictionWarning" | "antiAddictionShutdown" | "antiAddictionHeartbeat";
      };
      responce: LCU_Type.LolAntiAddictionAntiAddictionState;
    };
  };
  "/async/v1/result/{asyncToken}": {
    get: {
      parameters: {
        /**
         * ID of the asynchronous operation to check
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
  };
  "/async/v1/status/{asyncToken}": {
    delete: {
      parameters: {
        /**
         * ID of the asynchronous operation to remove
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        /**
         * ID of the asynchronous operation to check
         */
        asyncToken: number;
      };
      responce: boolean | undefined;
    };
  };
  "/client-config/v1/config": {
    get: {
      parameters: {
        type: "public" | "player";
        app?: string;
        version?: string;
        patchline?: string;
        region?: string;
        namespace?: string;
      };
      responce: boolean | undefined | undefined;
    };
  };
  "/client-config/v1/config/{name}": {
    get: {
      parameters: {
        name: string;
        type: "public" | "player";
        app?: string;
        version?: string;
        patchline?: string;
        region?: string;
      };
      responce: boolean | undefined;
    };
  };
  "/client-config/v1/entitlements-token": {
    put: {
      requestBody: LCU_Type.ClientConfigEntitlementsUpdate;
    };
  };
  "/client-config/v1/refresh-config-status": {
    put: {};
  };
  "/client-config/v1/status/{type}": {
    get: {
      parameters: {
        type: "public" | "player";
      };
      responce: LCU_Type.ClientConfigConfigStatus;
    };
  };
  "/client-config/v2/config/{name}": {
    get: {
      parameters: {
        name: string;
      };
      responce: boolean | undefined;
    };
  };
  "/client-config/v2/namespace-changes": {
    put: {
      requestBody: LCU_Type.ClientConfigConfigNamespaceUpdate;
    };
  };
  "/client-config/v2/namespace/{namespace}": {
    get: {
      parameters: {
        namespace: string;
      };
      responce: boolean | undefined | undefined;
    };
  };
  "/client-config/v2/namespace/{namespace}/player": {
    get: {
      parameters: {
        namespace: string;
      };
      responce: boolean | undefined | undefined;
    };
  };
  "/client-config/v2/namespace/{namespace}/public": {
    get: {
      parameters: {
        namespace: string;
      };
      responce: boolean | undefined | undefined;
    };
  };
  "/cookie-jar/v1/cookies": {
    get: {
      responce: Array<LCU_Type.cookie>;
    };
    post: {
      requestBody: Array<LCU_Type.cookie>;
      responce: boolean | undefined;
    };
  };
  "/crash-reporting/v1/crash-status": {
    get: {
      responce: boolean;
    };
  };
  "/data-store/v1/install-dir": {
    get: {
      responce: string;
    };
  };
  "/data-store/v1/install-settings/{path}": {
    get: {
      parameters: {
        /**
         * The path to the settings key
         */
        path: string;
      };
      responce: boolean | undefined;
    };
    post: {
      parameters: {
        /**
         * The path to the settings key
         */
        path: string;
      };
      requestBody: boolean | undefined;
    };
  };
  "/data-store/v1/system-settings/{path}": {
    get: {
      parameters: {
        /**
         * The path to the settings key
         */
        path: string;
      };
      responce: boolean | undefined;
    };
  };
  "/entitlements/v1/token": {
    get: {
      responce: LCU_Type.EntitlementsToken;
    };
  };
  "/lol-account-verification/v1/authenticate": {
    post: {
      requestBody: LCU_Type.LolAccountVerificationAuthenticateRequest;
      responce: LCU_Type.LolAccountVerificationAuthenticateResponse;
    };
  };
  "/lol-account-verification/v1/device": {
    get: {
      responce: LCU_Type.LolAccountVerificationDeviceResponse;
    };
  };
  "/lol-account-verification/v1/invalidate": {
    post: {
      responce: LCU_Type.LolAccountVerificationInvalidateResponse;
    };
  };
  "/lol-account-verification/v1/is-verified": {
    get: {
      responce: LCU_Type.LolAccountVerificationIsVerifiedResponse;
    };
  };
  "/lol-account-verification/v1/send-token": {
    post: {
      requestBody: LCU_Type.LolAccountVerificationSendTokenRequest;
      responce: LCU_Type.LolAccountVerificationSendTokenResponse;
    };
  };
  "/lol-account-verification/v1/verify": {
    post: {
      requestBody: LCU_Type.LolAccountVerificationVerifyRequest;
      responce: LCU_Type.LolAccountVerificationVerifyResponse;
    };
  };
  "/lol-active-boosts/v1/active-boosts": {
    get: {
      responce: LCU_Type.LolActiveBoostsActiveBoosts;
    };
  };
  "/lol-anti-addiction/v1/anti-addiction-token": {
    get: {
      responce: LCU_Type.LolAntiAddictionAntiAddictionToken;
    };
  };
  "/lol-banners/v1/current-summoner/flags": {
    get: {
      responce: Array<LCU_Type.LolBannersBannerFlag>;
    };
  };
  "/lol-banners/v1/current-summoner/flags/equipped": {
    get: {
      responce: LCU_Type.LolBannersBannerFlag;
    };
    put: {
      requestBody: LCU_Type.LolBannersBannerFlag;
      responce: LCU_Type.LolBannersBannerFlag;
    };
  };
  "/lol-banners/v1/current-summoner/frames/equipped": {
    get: {
      responce: LCU_Type.LolBannersBannerFrame;
    };
  };
  "/lol-banners/v1/players/{puuid}/flags/equipped": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: LCU_Type.LolBannersBannerFlag;
    };
  };
  "/lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}": {
    get: {
      parameters: {
        season: number;
        championId: number;
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
        tier:
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
        queue:
          | "draft5"
          | "rank5flex"
          | "rank5solo"
          | "blind5"
          | "aram"
          | "blind3"
          | "rank3flex"
          | "other";
      };
      responce: LCU_Type.LolCareerStatsChampionQueueStatsResponse;
    };
  };
  "/lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}": {
    get: {
      parameters: {
        championId: number;
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
        tier:
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
        queue:
          | "draft5"
          | "rank5flex"
          | "rank5solo"
          | "blind5"
          | "aram"
          | "blind3"
          | "rank3flex"
          | "other";
      };
      responce: LCU_Type.LolCareerStatsChampionQueueStatsResponse;
    };
  };
  "/lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}": {
    get: {
      parameters: {
        season: number;
        championId: number;
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
      };
      responce: Array<LCU_Type.LolCareerStatsExpertPlayer>;
    };
  };
  "/lol-career-stats/v1/champion-experts/{championId}/{position}": {
    get: {
      parameters: {
        championId: number;
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
      };
      responce: Array<LCU_Type.LolCareerStatsExpertPlayer>;
    };
  };
  "/lol-career-stats/v1/champion-stats-percentiles": {
    post: {
      requestBody: Array<LCU_Type.LolCareerStatsStatsQueryRequest>;
      responce: Array<LCU_Type.LolCareerStatsStatisticsPercentilesResponse>;
    };
  };
  "/lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}": {
    get: {
      parameters: {
        season: number;
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
        tier:
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
        queue:
          | "draft5"
          | "rank5flex"
          | "rank5solo"
          | "blind5"
          | "aram"
          | "blind3"
          | "rank3flex"
          | "other";
      };
      responce: LCU_Type.LolCareerStatsChampionQueueStatsResponse;
    };
  };
  "/lol-career-stats/v1/position-averages/{position}/{tier}/{queue}": {
    get: {
      parameters: {
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
        tier:
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
        queue:
          | "draft5"
          | "rank5flex"
          | "rank5solo"
          | "blind5"
          | "aram"
          | "blind3"
          | "rank3flex"
          | "other";
      };
      responce: LCU_Type.LolCareerStatsChampionQueueStatsResponse;
    };
  };
  "/lol-career-stats/v1/position-experts/season/{season}/{position}": {
    get: {
      parameters: {
        season: number;
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
      };
      responce: Array<LCU_Type.LolCareerStatsExpertPlayer>;
    };
  };
  "/lol-career-stats/v1/position-experts/{position}": {
    get: {
      parameters: {
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
      };
      responce: Array<LCU_Type.LolCareerStatsExpertPlayer>;
    };
  };
  "/lol-career-stats/v1/position-stats-percentiles": {
    post: {
      requestBody: Array<LCU_Type.LolCareerStatsPositionStatsQueryRequest>;
      responce: Array<LCU_Type.LolCareerStatsStatisticsPercentilesResponse>;
    };
  };
  "/lol-career-stats/v1/summoner-games/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-career-stats/v1/summoner-games/{puuid}/season/{season}": {
    get: {
      parameters: {
        puuid: string;
        season: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}": {
    get: {
      parameters: {
        puuid: string;
        season: number;
        queue:
          | "draft5"
          | "rank5flex"
          | "rank5solo"
          | "blind5"
          | "aram"
          | "blind3"
          | "rank3flex"
          | "other";
        position: "ALL" | "UNKNOWN" | "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT";
        championId?: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-catalog/v1/item-details": {
    get: {
      parameters: {
        inventoryType: string;
        itemId: number;
      };
      responce: LCU_Type.LolCatalogCatalogPluginItemWithDetails;
    };
  };
  "/lol-catalog/v1/items": {
    get: {
      parameters: {
        inventoryType: string;
        itemIds: Array<number>;
      };
      responce: Array<LCU_Type.LolCatalogItemChoiceDetails>;
    };
  };
  "/lol-catalog/v1/items/{inventoryType}": {
    get: {
      parameters: {
        inventoryType: string;
      };
      responce: Array<LCU_Type.LolCatalogCatalogPluginItem>;
    };
  };
  "/lol-challenges/v1/available-queue-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-challenges/v1/challenges/{product}/local-player": {
    get: {
      parameters: {
        product: string;
      };
      responce: Array<LCU_Type.LolChallengesUIChallenge>;
    };
  };
  "/lol-challenges/v1/level-points": {
    get: {
      responce: number | undefined;
    };
  };
  "/lol-challenges/v1/my-updated-challenges/{gameId}": {
    get: {
      parameters: {
        gameId: number;
      };
      responce: Array<LCU_Type.LolChallengesUIChallenge>;
    };
  };
  "/lol-challenges/v1/processGame/{product}/{gameId}": {
    post: {
      parameters: {
        product: string;
        gameId: number;
      };
    };
  };
  "/lol-challenges/v1/suggested-challenges/{product}/local-player": {
    get: {
      parameters: {
        product: string;
      };
      responce: Array<LCU_Type.LolChallengesUIChallenge>;
    };
  };
  "/lol-challenges/v1/summary-player-data/{product}/local-player": {
    get: {
      parameters: {
        product: string;
      };
      responce: LCU_Type.LolChallengesUIPlayerSummary;
    };
  };
  "/lol-challenges/v1/summary-player-data/{product}/player/{puuid}": {
    get: {
      parameters: {
        product: string;
        puuid: string;
      };
      responce: LCU_Type.LolChallengesUIPlayerSummary;
    };
  };
  "/lol-challenges/v1/summary-players-data/{product}/players": {
    get: {
      parameters: {
        product: string;
        puuids: Array<string>;
      };
      responce: LCU_Type.LolChallengesUIPlayerSummary | undefined;
    };
  };
  "/lol-challenges/v1/titles/local-player": {
    get: {
      responce: Array<LCU_Type.LolChallengesUITitle>;
    };
  };
  "/lol-challenges/v1/update-player-preferences/{product}": {
    post: {
      parameters: {
        product: string;
      };
      requestBody: LCU_Type.LolChallengesChallengesPlayerPreferences;
    };
  };
  "/lol-challenges/v1/updated-challenge/{gameId}/{puuid}": {
    get: {
      parameters: {
        gameId: number;
        puuid: string;
      };
      responce: LCU_Type.LolChallengesUIChallenge;
    };
  };
  "/lol-champ-select-legacy/v1/bannable-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select-legacy/v1/battle-training/launch": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/current-champion": {
    get: {
      responce: number;
    };
  };
  "/lol-champ-select-legacy/v1/disabled-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select-legacy/v1/implementation-active": {
    get: {
      responce: boolean;
    };
  };
  "/lol-champ-select-legacy/v1/pickable-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select-legacy/v1/pickable-skin-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select-legacy/v1/session": {
    get: {
      responce: LCU_Type.LolChampSelectLegacyChampSelectSession;
    };
  };
  "/lol-champ-select-legacy/v1/session/actions/{id}": {
    patch: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolChampSelectLegacyChampSelectAction;
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/actions/{id}/complete": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/my-selection": {
    patch: {
      requestBody: LCU_Type.LolChampSelectLegacyChampSelectMySelection;
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/my-selection/reroll": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/timer": {
    get: {
      responce: LCU_Type.LolChampSelectLegacyChampSelectTimer;
    };
  };
  "/lol-champ-select-legacy/v1/session/trades": {
    get: {
      responce: Array<LCU_Type.LolChampSelectLegacyChampSelectTradeContract>;
    };
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolChampSelectLegacyChampSelectTradeContract;
    };
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/accept": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/cancel": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/decline": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select-legacy/v1/session/trades/{id}/request": {
    post: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolChampSelectLegacyChampSelectTradeContract;
    };
  };
  "/lol-champ-select-legacy/v1/team-boost": {
    get: {
      responce: LCU_Type.LolChampSelectLegacyTeamBoost;
    };
  };
  "/lol-champ-select/v1/all-grid-champions": {
    get: {
      responce: Array<LCU_Type.LolChampSelectChampGridChampion>;
    };
  };
  "/lol-champ-select/v1/bannable-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select/v1/battle-training/launch": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/current-champion": {
    get: {
      responce: number;
    };
  };
  "/lol-champ-select/v1/disabled-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select/v1/grid-champions/{championId}": {
    get: {
      parameters: {
        championId: number;
      };
      responce: LCU_Type.LolChampSelectChampGridChampion;
    };
  };
  "/lol-champ-select/v1/muted-players": {
    get: {
      responce: Array<LCU_Type.LolChampSelectMutedPlayerInfo>;
    };
  };
  "/lol-champ-select/v1/ongoing-trade": {
    get: {
      responce: LCU_Type.LolChampSelectChampSelectTradeNotification;
    };
  };
  "/lol-champ-select/v1/ongoing-trade/{id}/clear": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/pickable-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select/v1/pickable-skin-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-champ-select/v1/pin-drop-notification": {
    get: {
      responce: LCU_Type.LolChampSelectChampSelectPinDropNotification;
    };
  };
  "/lol-champ-select/v1/retrieve-latest-game-dto": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session": {
    get: {
      responce: LCU_Type.LolChampSelectChampSelectSession;
    };
  };
  "/lol-champ-select/v1/session/actions/{id}": {
    patch: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolChampSelectChampSelectAction;
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/actions/{id}/complete": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/bench/swap/{championId}": {
    post: {
      parameters: {
        championId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/my-selection": {
    patch: {
      requestBody: LCU_Type.LolChampSelectChampSelectMySelection;
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/my-selection/reroll": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/simple-inventory": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/timer": {
    get: {
      responce: LCU_Type.LolChampSelectChampSelectTimer;
    };
  };
  "/lol-champ-select/v1/session/trades": {
    get: {
      responce: Array<LCU_Type.LolChampSelectChampSelectTradeContract>;
    };
  };
  "/lol-champ-select/v1/session/trades/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolChampSelectChampSelectTradeContract;
    };
  };
  "/lol-champ-select/v1/session/trades/{id}/accept": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/trades/{id}/cancel": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/trades/{id}/decline": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/session/trades/{id}/request": {
    post: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolChampSelectChampSelectTradeContract;
    };
  };
  "/lol-champ-select/v1/sfx-notifications": {
    get: {
      responce: Array<LCU_Type.LolChampSelectSfxNotification>;
    };
  };
  "/lol-champ-select/v1/skin-carousel-skins": {
    get: {
      responce: Array<LCU_Type.LolChampSelectSkinSelectorSkin>;
    };
  };
  "/lol-champ-select/v1/skin-selector-info": {
    get: {
      responce: LCU_Type.LolChampSelectSkinSelectorInfo;
    };
  };
  "/lol-champ-select/v1/summoners/{slotId}": {
    get: {
      parameters: {
        slotId: number;
      };
      responce: LCU_Type.LolChampSelectChampSelectSummoner;
    };
  };
  "/lol-champ-select/v1/team-boost": {
    get: {
      responce: LCU_Type.LolChampSelectTeamBoost;
    };
  };
  "/lol-champ-select/v1/team-boost/purchase": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/toggle-favorite/{championId}/{position}": {
    post: {
      parameters: {
        championId: number;
        position: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-champ-select/v1/toggle-player-muted": {
    post: {
      requestBody: LCU_Type.LolChampSelectMutedPlayerInfo;
      responce: boolean | undefined;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: Array<LCU_Type.LolChampionsCollectionsChampion>;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions-minimal": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: Array<LCU_Type.LolChampionsCollectionsChampionMinimal>;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions-playable-count": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: LCU_Type.LolChampionsCollectionsChampionPlayableCounts;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}": {
    get: {
      parameters: {
        summonerId: number;
        championId: number;
      };
      responce: LCU_Type.LolChampionsCollectionsChampion;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins": {
    get: {
      parameters: {
        summonerId: number;
        championId: number;
      };
      responce: Array<LCU_Type.LolChampionsCollectionsChampionSkin>;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}": {
    get: {
      parameters: {
        summonerId: number;
        championId: number;
        championSkinId: number;
      };
      responce: LCU_Type.LolChampionsCollectionsChampionSkin;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas": {
    get: {
      parameters: {
        summonerId: number;
        championId: number;
        skinId: number;
      };
      responce: Array<LCU_Type.LolChampionsCollectionsChampionChroma>;
    };
  };
  "/lol-champions/v1/inventories/{summonerId}/skins-minimal": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: Array<LCU_Type.LolChampionsCollectionsChampionSkinMinimal>;
    };
  };
  "/lol-champions/v1/owned-champions-minimal": {
    get: {
      responce: Array<LCU_Type.LolChampionsCollectionsChampionMinimal>;
    };
  };
  "/lol-chat/v1/blocked-players": {
    get: {
      responce: Array<LCU_Type.LolChatBlockedPlayerResource>;
    };
    post: {
      requestBody: LCU_Type.LolChatBlockedPlayerResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/blocked-players/{id}": {
    delete: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolChatBlockedPlayerResource;
    };
  };
  "/lol-chat/v1/config": {
    get: {
      responce: LCU_Type.LolChatChatServiceDynamicClientConfig;
    };
  };
  "/lol-chat/v1/conversations": {
    get: {
      responce: Array<LCU_Type.LolChatConversationResource>;
    };
    post: {
      requestBody: LCU_Type.LolChatConversationResource;
      responce: LCU_Type.LolChatConversationResource;
    };
  };
  "/lol-chat/v1/conversations/active": {
    delete: {
      responce: boolean | undefined;
    };
    get: {
      responce: LCU_Type.LolChatActiveConversationResource;
    };
    put: {
      requestBody: LCU_Type.LolChatActiveConversationResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/conversations/notify": {
    get: {
      responce: string;
    };
  };
  "/lol-chat/v1/conversations/{id}": {
    delete: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolChatConversationResource;
    };
    put: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolChatConversationResource;
      responce: LCU_Type.LolChatConversationResource;
    };
  };
  "/lol-chat/v1/conversations/{id}/closed": {
    post: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/conversations/{id}/messages": {
    delete: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: string;
      };
      responce: Array<LCU_Type.LolChatConversationMessageResource>;
    };
    post: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolChatConversationMessageResource;
      responce: LCU_Type.LolChatConversationMessageResource;
    };
  };
  "/lol-chat/v1/conversations/{id}/participants": {
    get: {
      parameters: {
        id: string;
      };
      responce: Array<LCU_Type.LolChatUserResource>;
    };
    post: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolChatUserResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/conversations/{id}/participants/{pid}": {
    get: {
      parameters: {
        id: string;
        pid: string;
      };
      responce: LCU_Type.LolChatUserResource;
    };
  };
  "/lol-chat/v1/errors": {
    get: {
      responce: Array<LCU_Type.LolChatErrorResource>;
    };
  };
  "/lol-chat/v1/errors/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/friend-counts": {
    get: {
      responce: LCU_Type.LolChatFriendCountsResource;
    };
  };
  "/lol-chat/v1/friend-exists/{summonerId}": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: boolean;
    };
  };
  "/lol-chat/v1/friend-groups": {
    get: {
      responce: Array<LCU_Type.LolChatGroupResource>;
    };
    post: {
      requestBody: LCU_Type.LolChatGroupResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/friend-groups/order": {
    put: {
      requestBody: LCU_Type.LolChatFriendGroupOrder;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/friend-groups/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolChatGroupResource;
    };
    put: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolChatGroupResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/friend-groups/{id}/friends": {
    get: {
      parameters: {
        id: number;
      };
      responce: Array<LCU_Type.LolChatFriendResource>;
    };
  };
  "/lol-chat/v1/friend-requests": {
    get: {
      responce: Array<LCU_Type.LolChatFriendRequestResource>;
    };
    post: {
      requestBody: LCU_Type.LolChatFriendRequestResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/friend-requests/{id}": {
    delete: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolChatFriendRequestResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/friends": {
    get: {
      responce: Array<LCU_Type.LolChatFriendResource>;
    };
  };
  "/lol-chat/v1/friends/{id}": {
    delete: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolChatFriendResource;
    };
    put: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolChatFriendResource;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/me": {
    get: {
      responce: LCU_Type.LolChatUserResource;
    };
    put: {
      requestBody: LCU_Type.LolChatUserResource;
      responce: LCU_Type.LolChatUserResource;
    };
  };
  "/lol-chat/v1/resources": {
    get: {
      responce: LCU_Type.LolChatProductMetadataMap;
    };
  };
  "/lol-chat/v1/session": {
    delete: {
      responce: boolean | undefined;
    };
    get: {
      responce: LCU_Type.LolChatSessionResource;
    };
  };
  "/lol-chat/v1/session/plain": {
    post: {
      requestBody: LCU_Type.LolChatAuthResourcePlain;
      responce: LCU_Type.LolChatSessionResource;
    };
  };
  "/lol-chat/v1/session/rso": {
    post: {
      requestBody: LCU_Type.LolChatAuthResourceRsoAccessToken;
      responce: LCU_Type.LolChatSessionResource;
    };
  };
  "/lol-chat/v1/settings": {
    get: {
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        doAsync?: boolean;
      };
      requestBody: boolean | undefined;
      responce: boolean | undefined;
    };
  };
  "/lol-chat/v1/settings/{key}": {
    delete: {
      parameters: {
        key: string;
        doAsync?: boolean;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        key: string;
      };
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        key: string;
        doAsync?: boolean;
      };
      requestBody: boolean | undefined;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/all-tournaments": {
    get: {
      responce: Array<LCU_Type.TournamentDTO>;
    };
  };
  "/lol-clash/v1/bracket/{bracketId}": {
    get: {
      parameters: {
        bracketId: number;
      };
      responce: LCU_Type.LolClashBracket;
    };
  };
  "/lol-clash/v1/checkin-allowed": {
    get: {
      responce: boolean;
    };
  };
  "/lol-clash/v1/currentTournamentIds": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-clash/v1/disabled-config": {
    get: {
      responce: LCU_Type.LolClashClashDisabledConfig;
    };
  };
  "/lol-clash/v1/enabled": {
    get: {
      responce: boolean;
    };
  };
  "/lol-clash/v1/eog-player-update": {
    get: {
      responce: LCU_Type.LolClashEogPlayerUpdateDTO;
    };
  };
  "/lol-clash/v1/eog-player-update/acknowledge": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/event/{uuid}": {
    get: {
      parameters: {
        uuid: string;
      };
      responce: LCU_Type.ClashEventData;
    };
  };
  "/lol-clash/v1/events": {
    post: {
      requestBody: Array<string>;
      responce: LCU_Type.ClashEventData | undefined;
    };
  };
  "/lol-clash/v1/game-end": {
    get: {
      responce: LCU_Type.LolClashTournamentGameEnd;
    };
  };
  "/lol-clash/v1/game-end/acknowledge": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/historyandwinners": {
    get: {
      responce: LCU_Type.LolClashTournamentHistoryAndWinners;
    };
  };
  "/lol-clash/v1/iconconfig": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/invited-roster-ids": {
    get: {
      responce: Array<string>;
    };
  };
  "/lol-clash/v1/lft/player": {
    post: {
      requestBody: LCU_Type.LolClashLftState;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/lft/player/find": {
    post: {
      requestBody: LCU_Type.LolClashFindPlayers;
      responce: Array<LCU_Type.PlayerFinderDTO>;
    };
  };
  "/lol-clash/v1/lft/team": {
    post: {
      requestBody: LCU_Type.LolClashTeamOpenState;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/lft/team/fetch-requests": {
    post: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/lft/team/find": {
    post: {
      requestBody: LCU_Type.LolClashFindTeams;
      responce: Array<LCU_Type.OpenedTeamDTO>;
    };
  };
  "/lol-clash/v1/lft/team/requests": {
    get: {
      responce: Array<LCU_Type.PendingOpenedTeamDTO>;
    };
  };
  "/lol-clash/v1/lft/team/{rosterId}/request": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/notifications": {
    get: {
      responce: LCU_Type.LolClashPlayerNotificationData;
    };
  };
  "/lol-clash/v1/notifications/acknowledge": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/ping": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/player": {
    get: {
      responce: LCU_Type.LolClashPlayerData;
    };
  };
  "/lol-clash/v1/player/chat-rosters": {
    get: {
      responce: Array<LCU_Type.LolClashPlayerChatRoster>;
    };
  };
  "/lol-clash/v1/player/history": {
    get: {
      responce: Array<LCU_Type.LolClashRosterStats>;
    };
  };
  "/lol-clash/v1/playmode-restricted": {
    get: {
      responce: boolean;
    };
  };
  "/lol-clash/v1/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-clash/v1/refresh": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/rewards": {
    get: {
      responce: LCU_Type.LolClashPlayerRewards;
    };
  };
  "/lol-clash/v1/roster/{rosterId}": {
    get: {
      parameters: {
        rosterId: string;
      };
      responce: LCU_Type.LolClashRoster;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/accept": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/cancel-withdraw": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/change-all-details": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashRosterDetails;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/change-icon": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashChangeIconRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/change-name": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashChangeNameRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/change-short-name": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashChangeNameRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/decline": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/disband": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/invite": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: Array<number>;
      responce: Array<LCU_Type.LolClashClientFailedInvite>;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/kick": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashKickRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/leave": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/lockin": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/set-position": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashSetPositionRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/set-ticket": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashSetTicketRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/stats": {
    get: {
      parameters: {
        rosterId: number;
      };
      responce: LCU_Type.LolClashRosterStats;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/substitute/accept": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/substitute/decline": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/substitute/invite": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: LCU_Type.LolClashInviteSubRequest;
      responce: Array<LCU_Type.LolClashClientFailedInvite>;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/substitute/reclaim": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/substitute/{summonerId}/revoke": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/suggest": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: Array<number>;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      requestBody: LCU_Type.LolClashOfferTicketRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke": {
    post: {
      parameters: {
        rosterId: string;
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/transfer-captain": {
    post: {
      parameters: {
        rosterId: string;
      };
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/unlockin": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/unwithdraw": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/update-logos": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/roster/{rosterId}/withdraw": {
    post: {
      parameters: {
        rosterId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/scouting/champions": {
    get: {
      parameters: {
        summonerIds: Array<number>;
      };
      responce: Array<LCU_Type.LolClashScoutingChampions>;
    };
  };
  "/lol-clash/v1/scouting/matchhistory": {
    get: {
      parameters: {
        summonerIds: Array<number>;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/season-rewards/{seasonId}": {
    get: {
      parameters: {
        seasonId: number;
      };
      responce: LCU_Type.ClashSeasonRewardResult;
    };
  };
  "/lol-clash/v1/simple-state-flags": {
    get: {
      responce: Array<LCU_Type.LolClashSimpleStateFlag>;
    };
  };
  "/lol-clash/v1/simple-state-flags/{id}/acknowledge": {
    post: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/thirdparty/team-data": {
    get: {
      responce: LCU_Type.LolClashThirdPartyApiRoster;
    };
  };
  "/lol-clash/v1/time": {
    get: {
      responce: number;
    };
  };
  "/lol-clash/v1/tournament-state-info": {
    get: {
      responce: Array<LCU_Type.LolClashTournamentStateInfo>;
    };
  };
  "/lol-clash/v1/tournament-summary": {
    get: {
      responce: Array<LCU_Type.LolClashTournamentSummary>;
    };
  };
  "/lol-clash/v1/tournament/cancelled": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-clash/v1/tournament/get-all-player-tiers": {
    get: {
      responce: Array<LCU_Type.PlayerTierDTO>;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}": {
    get: {
      parameters: {
        tournamentId: number;
      };
      responce: LCU_Type.LolClashTournament;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}/create-roster": {
    post: {
      parameters: {
        tournamentId: number;
      };
      requestBody: LCU_Type.LolClashRosterDetails;
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}/get-player-tiers": {
    get: {
      parameters: {
        tournamentId: number;
        summonerIds: Array<number>;
      };
      responce: Array<LCU_Type.PlayerTierDTO>;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}/player": {
    get: {
      parameters: {
        tournamentId: number;
      };
      responce: LCU_Type.LolClashPlayerTournamentData;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}/player-honor-restricted": {
    get: {
      parameters: {
        tournamentId?: number;
      };
      responce: boolean;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}/stateInfo": {
    get: {
      parameters: {
        tournamentId: number;
      };
      responce: LCU_Type.LolClashTournamentStateInfo;
    };
  };
  "/lol-clash/v1/tournament/{tournamentId}/winners": {
    get: {
      parameters: {
        tournamentId: number;
      };
      responce: LCU_Type.LolClashTournamentWinnerHistory;
    };
  };
  "/lol-clash/v1/update-logos": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/visible": {
    get: {
      responce: boolean;
    };
  };
  "/lol-clash/v1/voice": {
    delete: {
      responce: boolean | undefined;
    };
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/voice-delay/{delaySeconds}": {
    delete: {
      parameters: {
        delaySeconds: number;
      };
      responce: boolean | undefined;
    };
    post: {
      parameters: {
        delaySeconds: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-clash/v1/voice-enabled": {
    get: {
      responce: boolean;
    };
  };
  "/lol-clash/v2/playmode-restricted": {
    get: {
      responce: LCU_Type.LolClashPlaymodeRestrictedInfo;
    };
  };
  "/lol-client-config/v3/client-config/{name}": {
    get: {
      parameters: {
        name: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-collections/v1/inventories/chest-eligibility": {
    get: {
      responce: LCU_Type.LolCollectionsCollectionsChestEligibility;
    };
  };
  "/lol-collections/v1/inventories/local-player/champion-mastery-score": {
    get: {
      responce: number;
    };
  };
  "/lol-collections/v1/inventories/scouting": {
    get: {
      requestBody: Array<number>;
      responce: Array<LCU_Type.RankedScoutingDTO>;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/backdrop": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: LCU_Type.LolCollectionsCollectionsSummonerBackdrop;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/champion-mastery": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: Array<LCU_Type.LolCollectionsCollectionsChampionMastery>;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/champion-mastery/top": {
    get: {
      parameters: {
        summonerId: number;
        limit: number;
        sortRule?: string;
      };
      responce: LCU_Type.LolCollectionsCollectionsTopChampionMasteries;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/spells": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: LCU_Type.LolCollectionsCollectionsSummonerSpells;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/verification": {
    put: {
      parameters: {
        summonerId: number;
      };
      requestBody: string;
      responce: string;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/ward-skins": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: Array<LCU_Type.LolCollectionsCollectionsWardSkin>;
    };
  };
  "/lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}": {
    get: {
      parameters: {
        summonerId: number;
        wardSkinId: number;
      };
      responce: LCU_Type.LolCollectionsCollectionsWardSkin;
    };
  };
  "/lol-content-targeting/v1/filters": {
    get: {
      responce: LCU_Type.LolContentTargetingContentTargetingFilterResponse;
    };
  };
  "/lol-content-targeting/v1/locale": {
    get: {
      responce: LCU_Type.LolContentTargetingContentTargetingLocaleResponse;
    };
  };
  "/lol-content-targeting/v1/protected_filters": {
    get: {
      responce: LCU_Type.LolContentTargetingContentTargetingFilterResponse;
    };
  };
  "/lol-content-targeting/v1/tft_experiment_bucket": {
    put: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-cosmetics/v1/inventories/{setName}/companions": {
    get: {
      parameters: {
        setName: string;
      };
      responce: LCU_Type.LolCosmeticsCompanionsGroupedViewModel;
    };
  };
  "/lol-cosmetics/v1/inventories/{setName}/damage-skins": {
    get: {
      parameters: {
        setName: string;
      };
      responce: LCU_Type.LolCosmeticsTFTDamageSkinGroupedViewModel;
    };
  };
  "/lol-cosmetics/v1/inventories/{setName}/map-skins": {
    get: {
      parameters: {
        setName: string;
      };
      responce: LCU_Type.LolCosmeticsTFTMapSkinGroupedViewModel;
    };
  };
  "/lol-cosmetics/v1/recent/{type}": {
    patch: {
      parameters: {
        type: string;
      };
      requestBody: Array<string>;
      responce: boolean | undefined;
    };
  };
  "/lol-cosmetics/v1/selection/companion": {
    delete: {
      responce: boolean | undefined;
    };
    put: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-cosmetics/v1/selection/tft-damage-skin": {
    delete: {
      responce: boolean | undefined;
    };
    put: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-cosmetics/v1/selection/tft-map-skin": {
    delete: {
      responce: boolean | undefined;
    };
    put: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-email-verification/v1/confirm-email": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-email-verification/v1/email": {
    get: {
      responce: LCU_Type.LolEmailVerificationEmailVerificationSession;
    };
    put: {
      requestBody: LCU_Type.LolEmailVerificationEmailUpdate;
      responce: boolean | undefined;
    };
  };
  "/lol-end-of-game/v1/champion-mastery-updates": {
    get: {
      responce: LCU_Type.LolEndOfGameChampionMasteryUpdate;
    };
  };
  "/lol-end-of-game/v1/eog-stats-block": {
    get: {
      responce: LCU_Type.LolEndOfGameEndOfGameStats;
    };
  };
  "/lol-end-of-game/v1/gameclient-eog-stats-block": {
    get: {
      responce: LCU_Type.LolEndOfGameGameClientEndOfGameStats;
    };
    post: {
      requestBody: LCU_Type.LolEndOfGameGameClientEndOfGameStats;
      responce: boolean | undefined;
    };
  };
  "/lol-end-of-game/v1/reported-players": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-end-of-game/v1/state/dismiss-stats": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-end-of-game/v1/tft-eog-stats": {
    get: {
      responce: LCU_Type.LolEndOfGameTFTEndOfGameViewModel;
    };
  };
  "/lol-end-of-game/v2/player-complaints": {
    post: {
      requestBody: LCU_Type.LolEndOfGameEndOfGamePlayerComplaintV2;
      responce: LCU_Type.LolEndOfGameEndOfGamePlayerComplaintV2;
    };
  };
  "/lol-esport-stream-notifications/v1/live-streams": {
    get: {
      responce: LCU_Type.LolEsportStreamNotificationsESportsLiveStreams;
    };
  };
  "/lol-esport-stream-notifications/v1/send-stats": {
    post: {
      parameters: {
        eventType: string;
        matchId: string;
      };
    };
  };
  "/lol-esport-stream-notifications/v1/stream-url": {
    get: {
      responce: string;
    };
  };
  "/lol-game-client-chat/v1/buddies": {
    get: {
      responce: Array<string>;
    };
  };
  "/lol-game-client-chat/v1/ignored-summoners": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-game-client-chat/v1/instant-messages": {
    post: {
      parameters: {
        summonerName: string;
        message: string;
      };
    };
  };
  "/lol-game-client-chat/v1/muted-summoners": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-game-client-chat/v1/party-messages": {
    post: {
      parameters: {
        message: string;
      };
    };
  };
  "/lol-game-queues/v1/custom": {
    get: {
      responce: LCU_Type.LolGameQueuesQueueCustomGame;
    };
  };
  "/lol-game-queues/v1/custom-non-default": {
    get: {
      responce: LCU_Type.LolGameQueuesQueueCustomGame;
    };
  };
  "/lol-game-queues/v1/game-type-config/{gameTypeConfigId}": {
    get: {
      parameters: {
        gameTypeConfigId: number;
      };
      responce: LCU_Type.LolGameQueuesQueueGameTypeConfig;
    };
  };
  "/lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}": {
    get: {
      parameters: {
        gameTypeConfigId: number;
        mapId: number;
      };
      responce: LCU_Type.LolGameQueuesQueueGameTypeConfig;
    };
  };
  "/lol-game-queues/v1/queues": {
    get: {
      responce: Array<LCU_Type.LolGameQueuesQueue>;
    };
  };
  "/lol-game-queues/v1/queues/type/{queueType}": {
    get: {
      parameters: {
        queueType: string;
      };
      responce: LCU_Type.LolGameQueuesQueue;
    };
  };
  "/lol-game-queues/v1/queues/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolGameQueuesQueue;
    };
  };
  "/lol-game-settings/v1/didreset": {
    get: {
      responce: boolean;
    };
  };
  "/lol-game-settings/v1/game-settings": {
    get: {
      responce: boolean | undefined;
    };
    patch: {
      requestBody: boolean | undefined;
      responce: boolean | undefined;
    };
  };
  "/lol-game-settings/v1/game-settings-schema": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-game-settings/v1/input-settings": {
    get: {
      responce: boolean | undefined;
    };
    patch: {
      requestBody: boolean | undefined;
      responce: boolean | undefined;
    };
  };
  "/lol-game-settings/v1/input-settings-schema": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-game-settings/v1/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-game-settings/v1/reload-post-game": {
    post: {};
  };
  "/lol-game-settings/v1/save": {
    post: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/ack-failed-to-launch": {
    post: {};
  };
  "/lol-gameflow/v1/active-patcher-lock": {
    get: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/availability": {
    get: {
      responce: LCU_Type.LolGameflowGameflowAvailability;
    };
  };
  "/lol-gameflow/v1/basic-tutorial": {
    get: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/basic-tutorial/start": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/battle-training": {
    get: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/battle-training/start": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/battle-training/stop": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/client-received-message": {
    post: {
      requestBody: string;
    };
  };
  "/lol-gameflow/v1/early-exit": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/early-exit-notifications/eog": {
    delete: {};
    get: {
      responce: Array<boolean | undefined>;
    };
  };
  "/lol-gameflow/v1/early-exit-notifications/eog/{key}": {
    delete: {
      parameters: {
        key: number;
      };
    };
  };
  "/lol-gameflow/v1/early-exit-notifications/missions": {
    delete: {};
    get: {
      responce: Array<boolean | undefined>;
    };
  };
  "/lol-gameflow/v1/early-exit-notifications/missions/{key}": {
    delete: {
      parameters: {
        key: number;
      };
    };
  };
  "/lol-gameflow/v1/extra-game-client-args": {
    get: {
      responce: Array<string>;
    };
    post: {
      requestBody: Array<string>;
    };
  };
  "/lol-gameflow/v1/gameflow-metadata/player-status": {
    get: {
      responce: LCU_Type.LolGameflowPlayerStatus;
    };
    post: {
      requestBody: LCU_Type.LolGameflowPlayerStatus;
    };
  };
  "/lol-gameflow/v1/gameflow-metadata/registration-status": {
    get: {
      responce: LCU_Type.LolGameflowRegistrationStatus;
    };
    post: {
      requestBody: LCU_Type.LolGameflowRegistrationStatus;
    };
  };
  "/lol-gameflow/v1/gameflow-phase": {
    get: {
      responce: LCU_Type.LolGameflowGameflowPhase;
    };
  };
  "/lol-gameflow/v1/pre-end-game-transition": {
    post: {
      parameters: {
        enabled: boolean;
      };
    };
  };
  "/lol-gameflow/v1/reconnect": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/session": {
    get: {
      responce: LCU_Type.LolGameflowGameflowSession;
    };
  };
  "/lol-gameflow/v1/session/dodge": {
    post: {
      requestBody: LCU_Type.LolGameflowGameflowGameDodge;
    };
  };
  "/lol-gameflow/v1/session/event": {
    post: {
      requestBody: string;
    };
  };
  "/lol-gameflow/v1/session/game-configuration": {
    post: {
      requestBody: LCU_Type.LolGameflowQueue;
    };
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/disallowed": {
    get: {
      responce: LCU_Type.LolGameflowGameModeSpellList | undefined;
    };
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string": {
    get: {
      responce: string;
    };
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/required": {
    get: {
      responce: LCU_Type.LolGameflowGameModeSpellList | undefined;
    };
  };
  "/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string": {
    get: {
      responce: string;
    };
  };
  "/lol-gameflow/v1/session/request-enter-gameflow": {
    post: {
      requestBody: string;
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/session/request-lobby": {
    post: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/session/request-tournament-checkin": {
    post: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/session/tournament-ended": {
    post: {};
  };
  "/lol-gameflow/v1/spectate": {
    get: {
      responce: boolean;
    };
  };
  "/lol-gameflow/v1/spectate/delayed-launch": {
    get: {};
  };
  "/lol-gameflow/v1/spectate/launch": {
    post: {
      requestBody: string;
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/spectate/quit": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v1/tick": {
    post: {};
  };
  "/lol-gameflow/v1/watch": {
    get: {
      responce: LCU_Type.LolGameflowGameflowWatchPhase;
    };
  };
  "/lol-gameflow/v1/watch/launch": {
    post: {
      requestBody: Array<string>;
      responce: boolean | undefined;
    };
  };
  "/lol-gameflow/v2/spectate/launch": {
    post: {
      requestBody: LCU_Type.LolGameflowSpectateGameInfoResource;
      responce: boolean | undefined;
    };
  };
  "/lol-geoinfo/v1/getlocation": {
    get: {
      parameters: {
        ip_address: string;
      };
      responce: LCU_Type.LolGeoinfoGeoInfo;
    };
  };
  "/lol-geoinfo/v1/whereami": {
    get: {
      responce: LCU_Type.LolGeoinfoGeoInfoResponse;
    };
  };
  "/lol-highlights/v1/config": {
    get: {
      responce: LCU_Type.LolHighlightsHighlightsConfig;
    };
  };
  "/lol-highlights/v1/file-browser/{highlightId}": {
    post: {
      parameters: {
        highlightId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-highlights/v1/highlights": {
    get: {
      responce: Array<LCU_Type.LolHighlightsHighlight>;
    };
    post: {
      responce: Array<LCU_Type.LolHighlightsHighlight>;
    };
  };
  "/lol-highlights/v1/highlights-folder-path": {
    get: {
      responce: string;
    };
  };
  "/lol-highlights/v1/highlights-folder-path/default": {
    get: {
      responce: string;
    };
  };
  "/lol-highlights/v1/highlights/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolHighlightsHighlight;
    };
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolHighlightsHighlight;
    };
    put: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolHighlightsHighlight;
      responce: LCU_Type.LolHighlightsHighlight;
    };
  };
  "/lol-honor-v2/v1/ballot": {
    get: {
      responce: LCU_Type.LolHonorV2Ballot;
    };
  };
  "/lol-honor-v2/v1/config": {
    get: {
      responce: LCU_Type.LolHonorV2HonorConfig;
    };
  };
  "/lol-honor-v2/v1/honor-player": {
    post: {
      requestBody: LCU_Type.LolHonorV2ApiHonorPlayerServerRequest;
      responce: string;
    };
  };
  "/lol-honor-v2/v1/late-recognition": {
    get: {
      responce: Array<LCU_Type.LolHonorV2Honor>;
    };
  };
  "/lol-honor-v2/v1/late-recognition/ack": {
    post: {};
  };
  "/lol-honor-v2/v1/latest-eligible-game": {
    get: {
      responce: number;
    };
  };
  "/lol-honor-v2/v1/level-change": {
    get: {
      responce: LCU_Type.LolHonorV2VendedHonorChange;
    };
  };
  "/lol-honor-v2/v1/level-change/ack": {
    post: {};
  };
  "/lol-honor-v2/v1/mutual-honor": {
    get: {
      responce: LCU_Type.LolHonorV2MutualHonor;
    };
  };
  "/lol-honor-v2/v1/mutual-honor/ack": {
    post: {};
  };
  "/lol-honor-v2/v1/profile": {
    get: {
      responce: LCU_Type.LolHonorV2ProfileInfo;
    };
  };
  "/lol-honor-v2/v1/recognition": {
    get: {
      responce: Array<LCU_Type.LolHonorV2Honor>;
    };
  };
  "/lol-honor-v2/v1/reward-granted": {
    get: {
      responce: LCU_Type.LolHonorV2VendedReward;
    };
  };
  "/lol-honor-v2/v1/reward-granted/ack": {
    post: {};
  };
  "/lol-honor-v2/v1/team-choices": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-honor-v2/v1/vote-completion": {
    get: {
      responce: LCU_Type.LolHonorV2VoteCompletion;
    };
  };
  "/lol-hovercard/v1/friend-info-by-summoner/{summonerId}": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: LCU_Type.LolHovercardHovercardUserInfo;
    };
  };
  "/lol-hovercard/v1/friend-info/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: LCU_Type.LolHovercardHovercardUserInfo;
    };
  };
  "/lol-inventory/v1/champSelectInventory": {
    get: {
      responce: string;
    };
  };
  "/lol-inventory/v1/initial-configuration-complete": {
    get: {
      responce: boolean;
    };
  };
  "/lol-inventory/v1/inventory": {
    get: {
      parameters: {
        inventoryTypes: Array<string>;
      };
      responce: Array<LCU_Type.LolInventoryInventoryItemWithPayload>;
    };
  };
  "/lol-inventory/v1/inventory/emotes": {
    get: {
      responce: Array<LCU_Type.LolInventoryInventoryItemWithPayload>;
    };
  };
  "/lol-inventory/v1/notification/acknowledge": {
    post: {
      requestBody: number;
    };
  };
  "/lol-inventory/v1/notifications/{inventoryType}": {
    get: {
      parameters: {
        inventoryType: string;
      };
      responce: Array<LCU_Type.LolInventoryInventoryNotification>;
    };
  };
  "/lol-inventory/v1/players/{puuid}/inventory": {
    get: {
      parameters: {
        puuid: string;
        inventoryTypes: Array<string>;
      };
      responce: Array<LCU_Type.LolInventoryInventoryItemWithPayload>;
    };
  };
  "/lol-inventory/v1/signedInventory": {
    get: {
      parameters: {
        inventoryTypes: Array<string>;
      };
      responce: string | undefined;
    };
  };
  "/lol-inventory/v1/signedInventory/simple": {
    get: {
      parameters: {
        inventoryTypes: Array<string>;
        queryParams?: string | undefined;
      };
      responce: string;
    };
  };
  "/lol-inventory/v1/signedInventory/tournamentlogos": {
    get: {
      responce: string | undefined;
    };
  };
  "/lol-inventory/v1/signedInventoryCache": {
    get: {
      responce: LCU_Type.LolInventoryInventoryCacheEntry | undefined;
    };
  };
  "/lol-inventory/v1/signedWallet": {
    get: {
      parameters: {
        currencyTypes: Array<string>;
      };
      responce: string | undefined;
    };
  };
  "/lol-inventory/v1/signedWallet/{currencyType}": {
    get: {
      parameters: {
        currencyType: string;
      };
      responce: string | undefined;
    };
  };
  "/lol-inventory/v1/wallet": {
    get: {
      parameters: {
        currencyTypes: Array<string>;
      };
      responce: number | undefined;
    };
  };
  "/lol-inventory/v1/wallet/{currencyType}": {
    get: {
      parameters: {
        currencyType: string;
      };
      responce: number | undefined;
    };
  };
  "/lol-inventory/v2/inventory/{inventoryType}": {
    get: {
      parameters: {
        inventoryType: string;
      };
      responce: Array<LCU_Type.LolInventoryInventoryItemWithPayload>;
    };
  };
  "/lol-item-sets/v1/item-sets/{summonerId}/sets": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: LCU_Type.LolItemSetsItemSets;
    };
    post: {
      parameters: {
        summonerId: number;
      };
      requestBody: LCU_Type.LolItemSetsItemSet;
    };
    put: {
      parameters: {
        summonerId: number;
      };
      requestBody: LCU_Type.LolItemSetsItemSets;
    };
  };
  "/lol-item-sets/v1/item-sets/{summonerId}/validate": {
    post: {
      parameters: {
        summonerId: number;
      };
      requestBody: LCU_Type.LolItemSetsValidateItemSetNameInput;
      responce: LCU_Type.LolItemSetsValidateItemSetNameResponse;
    };
  };
  "/lol-kickout/v1/notification": {
    get: {
      responce: LCU_Type.LolKickoutKickoutMessage;
    };
  };
  "/lol-kr-playtime-reminder/v1/message": {
    get: {
      responce: string;
    };
  };
  "/lol-kr-playtime-reminder/v1/playtime": {
    get: {
      responce: LCU_Type.LolKrPlaytimeReminderPlaytimeReminder;
    };
  };
  "/lol-kr-shutdown-law/v1/custom-status": {
    get: {
      responce: LCU_Type.LolKrShutdownLawQueueShutdownStatus;
    };
  };
  "/lol-kr-shutdown-law/v1/disabled-queues": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-kr-shutdown-law/v1/notification": {
    get: {
      responce: LCU_Type.LolKrShutdownLawShutdownLawNotification;
    };
  };
  "/lol-kr-shutdown-law/v1/queue-status/{queue_id}": {
    get: {
      parameters: {
        queue_id: number;
      };
      responce: LCU_Type.LolKrShutdownLawQueueShutdownStatus;
    };
  };
  "/lol-kr-shutdown-law/v1/rating-screen": {
    get: {
      responce: LCU_Type.LolKrShutdownLawRatingScreenInfo;
    };
  };
  "/lol-kr-shutdown-law/v1/rating-screen/acknowledge": {
    post: {};
  };
  "/lol-kr-shutdown-law/v1/status": {
    get: {
      responce: LCU_Type.LolKrShutdownLawAllQueueShutdownStatus;
    };
  };
  "/lol-league-session/v1/league-session-token": {
    get: {
      responce: string;
    };
  };
  "/lol-leaver-buster/v1/notifications": {
    get: {
      responce: Array<LCU_Type.LolLeaverBusterLeaverBusterNotificationResource>;
    };
  };
  "/lol-leaver-buster/v1/notifications/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolLeaverBusterLeaverBusterNotificationResource;
    };
  };
  "/lol-license-agreement/v1/agreements": {
    get: {
      responce: Array<LCU_Type.LolLicenseAgreementLicenseAgreement>;
    };
  };
  "/lol-license-agreement/v1/agreements/{id}/accept": {
    post: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-license-agreement/v1/agreements/{id}/decline": {
    post: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-license-agreement/v1/all-agreements": {
    get: {
      responce: Array<LCU_Type.LolLicenseAgreementLicenseAgreement>;
    };
  };
  "/lol-license-agreement/v1/serve-location": {
    get: {
      responce: LCU_Type.LolLicenseAgreementLicenseServeLocation;
    };
  };
  "/lol-loadouts/v1/loadouts-ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-loadouts/v4/loadouts": {
    post: {
      requestBody: LCU_Type.LolLoadoutsCreateLoadoutDTO;
      responce: LCU_Type.LolLoadoutsScopedLoadout;
    };
  };
  "/lol-loadouts/v4/loadouts/scope/account": {
    get: {
      responce: Array<LCU_Type.LolLoadoutsScopedLoadout>;
    };
  };
  "/lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}": {
    get: {
      parameters: {
        scope: string;
        scopeItemId?: number;
      };
      responce: Array<LCU_Type.LolLoadoutsScopedLoadout>;
    };
  };
  "/lol-loadouts/v4/loadouts/{id}": {
    delete: {
      parameters: {
        id: string;
      };
    };
    patch: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolLoadoutsUpdateLoadoutDTO;
      responce: LCU_Type.LolLoadoutsScopedLoadout;
    };
    put: {
      parameters: {
        id: string;
      };
      requestBody: LCU_Type.LolLoadoutsUpdateLoadoutDTO;
      responce: LCU_Type.LolLoadoutsScopedLoadout;
    };
  };
  "/lol-loadouts/v4/loadouts/{loadoutId}": {
    get: {
      parameters: {
        loadoutId: string;
      };
      responce: LCU_Type.LolLoadoutsScopedLoadout;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/current-champion": {
    get: {
      responce: number;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite": {
    get: {
      responce: boolean;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/implementation-active": {
    get: {
      responce: boolean;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/match-token": {
    get: {
      responce: string;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/preferences": {
    get: {
      responce: LCU_Type.LolLobbyTeamBuilderChampionSelectPreferences;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled": {
    get: {
      responce: boolean;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session": {
    get: {
      responce: LCU_Type.LolLobbyTeamBuilderChampSelectSession;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/actions/{id}": {
    patch: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolLobbyTeamBuilderChampSelectAction;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}": {
    post: {
      parameters: {
        championId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/my-selection": {
    patch: {
      requestBody: LCU_Type.LolLobbyTeamBuilderChampSelectMySelection;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/timer": {
    get: {
      responce: LCU_Type.LolLobbyTeamBuilderChampSelectTimer;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades": {
    get: {
      responce: Array<LCU_Type.LolLobbyTeamBuilderChampSelectTradeContract>;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolLobbyTeamBuilderChampSelectTradeContract;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request": {
    post: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolLobbyTeamBuilderChampSelectTradeContract;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/simple-inventory": {
    post: {};
  };
  "/lol-lobby-team-builder/champ-select/v1/team-boost": {
    get: {
      responce: LCU_Type.LolLobbyTeamBuilderTeamBoost;
    };
  };
  "/lol-lobby-team-builder/champ-select/v1/team-boost/purchase": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/v1/matchmaking": {
    get: {
      responce: LCU_Type.LolLobbyTeamBuilderMatchmakingSearchResource;
    };
  };
  "/lol-lobby-team-builder/v1/ready-check/accept": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby-team-builder/v1/ready-check/decline": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/autofill-displayed": {
    get: {
      responce: boolean;
    };
    put: {
      responce: boolean;
    };
  };
  "/lol-lobby/v1/clash": {
    delete: {
      responce: boolean | undefined;
    };
    post: {
      requestBody: string;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/custom-games": {
    get: {
      responce: Array<LCU_Type.LolLobbyLobbyCustomGame>;
    };
  };
  "/lol-lobby/v1/custom-games/refresh": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/custom-games/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolLobbyLobbyCustomGame;
    };
  };
  "/lol-lobby/v1/custom-games/{id}/join": {
    post: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolLobbyLobbyCustomJoinParameters;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/lobby/availability": {
    get: {
      responce: LCU_Type.LolLobbyQueueAvailability;
    };
  };
  "/lol-lobby/v1/lobby/countdown": {
    get: {
      responce: number;
    };
  };
  "/lol-lobby/v1/lobby/custom/bots": {
    post: {
      requestBody: LCU_Type.LolLobbyLobbyBotParams;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/lobby/custom/bots/{summonerInternalName}": {
    delete: {
      parameters: {
        summonerInternalName: string;
      };
      responce: boolean | undefined;
    };
    post: {
      parameters: {
        summonerInternalName: string;
      };
      requestBody: LCU_Type.LolLobbyLobbyBotParams;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/lobby/custom/cancel-champ-select": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/lobby/custom/start-champ-select": {
    post: {
      responce: LCU_Type.LolLobbyLobbyCustomChampSelectStartResponse;
    };
  };
  "/lol-lobby/v1/lobby/custom/switch-teams": {
    post: {
      parameters: {
        team?: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/lobby/invitations": {
    get: {
      responce: Array<LCU_Type.LolLobbyLobbyInvitation>;
    };
    post: {
      requestBody: LCU_Type.LolLobbyLobbyInvitation;
      responce: LCU_Type.LolLobbyLobbyInvitation;
    };
  };
  "/lol-lobby/v1/lobby/invitations/{id}": {
    get: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolLobbyLobbyInvitation;
    };
  };
  "/lol-lobby/v1/lobby/members/localMember/position-preferences": {
    put: {
      requestBody: LCU_Type.LolLobbyLobbyPositionPreferences;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v1/parties/active": {
    put: {
      requestBody: number;
    };
  };
  "/lol-lobby/v1/parties/gamemode": {
    get: {
      responce: LCU_Type.LolLobbyGameModeDto;
    };
  };
  "/lol-lobby/v1/parties/metadata": {
    put: {
      requestBody: LCU_Type.LolLobbyPartyMemberMetadataDto;
    };
  };
  "/lol-lobby/v1/parties/player": {
    get: {
      responce: LCU_Type.LolLobbyPlayerDto;
    };
  };
  "/lol-lobby/v1/parties/queue": {
    put: {
      requestBody: number;
    };
  };
  "/lol-lobby/v1/parties/ready": {
    put: {
      requestBody: number;
    };
  };
  "/lol-lobby/v1/parties/{partyId}/members/{puuid}/role": {
    put: {
      parameters: {
        partyId: string;
        puuid: string;
      };
      requestBody: string;
    };
  };
  "/lol-lobby/v1/party-rewards": {
    get: {
      responce: LCU_Type.LolLobbyLobbyPartyRewards;
    };
  };
  "/lol-lobby/v1/tournaments/{id}/join": {
    post: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/comms/members": {
    get: {
      responce: LCU_Type.LolLobbyPremadePartyDto;
    };
  };
  "/lol-lobby/v2/comms/token": {
    get: {
      responce: string;
    };
  };
  "/lol-lobby/v2/eligibility/game-select-eligibility-hash": {
    get: {
      responce: number;
    };
  };
  "/lol-lobby/v2/eligibility/initial-configuration-complete": {
    get: {
      responce: boolean;
    };
  };
  "/lol-lobby/v2/eligibility/party": {
    post: {
      responce: Array<LCU_Type.LolLobbyEligibility>;
    };
  };
  "/lol-lobby/v2/eligibility/self": {
    post: {
      responce: Array<LCU_Type.LolLobbyEligibility>;
    };
  };
  "/lol-lobby/v2/eog-invitations": {
    post: {
      requestBody: Array<LCU_Type.LolLobbyLobbyInvitationDto>;
      responce: Array<LCU_Type.LolLobbyLobbyInvitationDto>;
    };
  };
  "/lol-lobby/v2/lobby": {
    delete: {};
    get: {
      responce: LCU_Type.LolLobbyLobbyDto;
    };
    post: {
      requestBody: LCU_Type.LolLobbyLobbyChangeGameDto;
      responce: LCU_Type.LolLobbyLobbyDto;
    };
  };
  "/lol-lobby/v2/lobby/custom/available-bots": {
    get: {
      responce: Array<LCU_Type.LolLobbyLobbyBotChampion>;
    };
  };
  "/lol-lobby/v2/lobby/custom/bots-enabled": {
    get: {
      responce: boolean;
    };
  };
  "/lol-lobby/v2/lobby/invitations": {
    get: {
      responce: Array<LCU_Type.LolLobbyLobbyInvitationDto>;
    };
    post: {
      requestBody: Array<LCU_Type.LolLobbyLobbyInvitationDto>;
      responce: Array<LCU_Type.LolLobbyLobbyInvitationDto>;
    };
  };
  "/lol-lobby/v2/lobby/matchmaking/search": {
    delete: {
      responce: boolean | undefined;
    };
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/lobby/matchmaking/search-state": {
    get: {
      responce: LCU_Type.LolLobbyLobbyMatchmakingSearchResource;
    };
  };
  "/lol-lobby/v2/lobby/members": {
    get: {
      responce: Array<LCU_Type.LolLobbyLobbyParticipantDto>;
    };
  };
  "/lol-lobby/v2/lobby/members/localMember/position-preferences": {
    put: {
      requestBody: LCU_Type.LolLobbyLobbyPositionPreferences;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/grant-invite": {
    post: {
      parameters: {
        summonerId: number;
      };
      responce: number;
    };
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/kick": {
    post: {
      parameters: {
        summonerId: number;
      };
      responce: number;
    };
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/promote": {
    post: {
      parameters: {
        summonerId: number;
      };
      responce: number;
    };
  };
  "/lol-lobby/v2/lobby/members/{summonerId}/revoke-invite": {
    post: {
      parameters: {
        summonerId: number;
      };
      responce: number;
    };
  };
  "/lol-lobby/v2/lobby/partyType": {
    put: {
      requestBody: string;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/lobby/team/{team}": {
    post: {
      parameters: {
        team: string;
      };
    };
  };
  "/lol-lobby/v2/matchmaking/quick-search": {
    post: {
      requestBody: LCU_Type.LolLobbyLobbyChangeGameDto;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/notifications": {
    get: {
      responce: Array<LCU_Type.LolLobbyLobbyNotification>;
    };
    post: {
      requestBody: LCU_Type.LolLobbyLobbyNotification;
    };
  };
  "/lol-lobby/v2/notifications/{notificationId}": {
    delete: {
      parameters: {
        notificationId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues": {
    post: {
      parameters: {
        enabledForTeambuilderQueues: boolean;
      };
    };
  };
  "/lol-lobby/v2/party-active": {
    get: {
      responce: boolean;
    };
  };
  "/lol-lobby/v2/party/eog-status": {
    get: {
      responce: LCU_Type.LolLobbyPartyStatusDto;
    };
  };
  "/lol-lobby/v2/party/{partyId}/join": {
    post: {
      parameters: {
        partyId: string;
      };
      requestBody: LCU_Type.LolLobbyCustomJoinOptionsDto;
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/play-again": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/play-again-decline": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-lobby/v2/received-invitations": {
    get: {
      responce: Array<LCU_Type.LolLobbyReceivedInvitationDto>;
    };
  };
  "/lol-lobby/v2/received-invitations/{invitationId}/accept": {
    post: {
      parameters: {
        invitationId: string;
      };
    };
  };
  "/lol-lobby/v2/received-invitations/{invitationId}/decline": {
    post: {
      parameters: {
        invitationId: string;
      };
    };
  };
  "/lol-lobby/v2/registration-status": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/account-state": {
    get: {
      responce: LCU_Type.LolLoginAccountStateResource;
    };
    post: {};
  };
  "/lol-login/v1/change-summoner-name": {
    post: {
      requestBody: string;
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/delete-rso-on-close": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/leagueSessionStatus": {
    post: {
      requestBody: LCU_Type.LolLoginLeagueSessionStatus;
    };
  };
  "/lol-login/v1/login-connection-state": {
    get: {
      responce: LCU_Type.LolLoginLoginConnectionState;
    };
  };
  "/lol-login/v1/login-data-packet": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/login-in-game-creds": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/login-platform-credentials": {
    get: {
      responce: LCU_Type.LolLoginPlatformGeneratedCredentials;
    };
  };
  "/lol-login/v1/login-queue-state": {
    get: {
      responce: LCU_Type.LolLoginLoginQueue;
    };
  };
  "/lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}": {
    delete: {
      parameters: {
        serviceName: string;
        methodName: string;
        pluginId: number;
      };
    };
    post: {
      parameters: {
        serviceName: string;
        methodName: string;
        pluginId: number;
      };
    };
  };
  "/lol-login/v1/service-proxy-uuid-requests": {
    post: {
      parameters: {
        serviceName: string;
        methodName: string;
        pluginId: number;
        timeoutMillis: number;
        payload: string;
      };
      responce: string;
    };
  };
  "/lol-login/v1/session": {
    delete: {};
    get: {
      responce: LCU_Type.LolLoginLoginSession;
    };
    post: {
      requestBody: LCU_Type.LolLoginUsernameAndPassword;
      responce: LCU_Type.LolLoginLoginSession;
    };
  };
  "/lol-login/v1/session/invoke": {
    post: {
      parameters: {
        destination: string;
        method: string;
      };
      responce: LCU_Type.LolLoginLcdsResponse;
    };
  };
  "/lol-login/v1/shutdown-locks/{lockName}": {
    delete: {
      parameters: {
        lockName: string;
      };
    };
    put: {
      parameters: {
        lockName: string;
      };
    };
  };
  "/lol-login/v1/summoner-session": {
    post: {
      requestBody: LCU_Type.LolLoginSummonerSessionResource;
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/summoner-session-failed": {
    post: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-login/v1/wallet": {
    get: {
      responce: LCU_Type.LolLoginLoginSessionWallet;
    };
  };
  "/lol-login/v2/league-session-init-token": {
    get: {
      responce: LCU_Type.LolLoginLeagueSessionTokenEnvelope;
    };
  };
  "/lol-loot/v1/currency-configuration": {
    get: {};
  };
  "/lol-loot/v1/enabled": {
    get: {
      responce: boolean;
    };
  };
  "/lol-loot/v1/loot-grants": {
    get: {
      responce: Array<LCU_Type.LolLootLootGrantNotification>;
    };
  };
  "/lol-loot/v1/loot-grants/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-loot/v1/loot-items": {
    get: {
      responce: Array<LCU_Type.LolLootLootItem>;
    };
  };
  "/lol-loot/v1/loot-odds/{recipeName}": {
    get: {
      parameters: {
        recipeName: string;
      };
      responce: LCU_Type.LolLootVerboseLootOddsResponse;
    };
  };
  "/lol-loot/v1/milestones": {
    get: {
      parameters: {
        minimizeResponse: boolean;
        includeInactive?: boolean;
      };
      responce: Array<LCU_Type.LolLootLootMilestones>;
    };
  };
  "/lol-loot/v1/milestones/counters": {
    get: {
      responce: Array<LCU_Type.LolLootLootMilestonesCounter>;
    };
  };
  "/lol-loot/v1/milestones/items": {
    get: {
      responce: Array<string>;
    };
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}": {
    get: {
      parameters: {
        lootMilestonesId: string;
        includeInactive?: boolean;
      };
      responce: LCU_Type.LolLootLootMilestones;
    };
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}/claim": {
    post: {
      parameters: {
        lootMilestonesId: string;
      };
    };
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}/claimProgress": {
    get: {
      parameters: {
        lootMilestonesId: string;
      };
      responce: LCU_Type.LolLootLootMilestonesClaimResponse;
    };
  };
  "/lol-loot/v1/milestones/{lootMilestonesId}/counter": {
    get: {
      parameters: {
        lootMilestonesId: string;
      };
      responce: LCU_Type.LolLootLootMilestonesCounter;
    };
  };
  "/lol-loot/v1/new-player-check-done": {
    get: {
      responce: boolean;
    };
  };
  "/lol-loot/v1/new-player-check-done/{newValue}": {
    post: {
      parameters: {
        newValue: boolean;
      };
      responce: string;
    };
  };
  "/lol-loot/v1/player-display-categories": {
    get: {
      responce: Array<string>;
    };
  };
  "/lol-loot/v1/player-loot": {
    get: {
      responce: Array<LCU_Type.LolLootPlayerLoot>;
    };
  };
  "/lol-loot/v1/player-loot-map": {
    get: {
      responce: LCU_Type.LolLootPlayerLoot | undefined;
    };
  };
  "/lol-loot/v1/player-loot-notifications": {
    get: {
      responce: Array<LCU_Type.LolLootPlayerLootNotification>;
    };
  };
  "/lol-loot/v1/player-loot-notifications/{id}/acknowledge": {
    post: {
      parameters: {
        id: string;
      };
      responce: string;
    };
  };
  "/lol-loot/v1/player-loot/{lootId}": {
    get: {
      parameters: {
        lootId: string;
      };
      responce: LCU_Type.LolLootPlayerLoot;
    };
  };
  "/lol-loot/v1/player-loot/{lootId}/context-menu": {
    get: {
      parameters: {
        lootId: string;
      };
      responce: Array<LCU_Type.LolLootContextMenu>;
    };
    post: {
      parameters: {
        lootId: string;
      };
      responce: Array<LCU_Type.LolLootContextMenu>;
    };
  };
  "/lol-loot/v1/player-loot/{lootId}/new-notification": {
    delete: {
      parameters: {
        lootId: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-loot/v1/player-loot/{lootName}/redeem": {
    post: {
      parameters: {
        lootName: string;
      };
      responce: LCU_Type.LolLootPlayerLootUpdate;
    };
  };
  "/lol-loot/v1/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-loot/v1/recipes/configuration": {
    get: {};
  };
  "/lol-loot/v1/recipes/initial-item/{lootId}": {
    get: {
      parameters: {
        lootId: string;
        includeInactive?: boolean;
      };
      responce: Array<LCU_Type.LolLootRecipeWithMilestones>;
    };
    post: {
      parameters: {
        lootId: string;
        includeInactive?: boolean;
      };
      responce: Array<LCU_Type.LolLootRecipeWithMilestones>;
    };
  };
  "/lol-loot/v1/recipes/{recipeName}/craft": {
    post: {
      parameters: {
        recipeName: string;
        repeat?: number;
      };
      requestBody: Array<string>;
      responce: LCU_Type.LolLootPlayerLootUpdate;
    };
  };
  "/lol-loot/v1/refresh": {
    post: {
      parameters: {
        force: boolean;
      };
      responce: string;
    };
  };
  "/lol-loot/v2/player-loot-map": {
    get: {
      responce: LCU_Type.LolLootPlayerLootMap;
    };
  };
  "/lol-loyalty/v1/inventory-request-notification": {
    get: {
      responce: LCU_Type.LolLoyaltyLoyaltyStatusNotification;
    };
  };
  "/lol-loyalty/v1/status-notification": {
    get: {
      responce: LCU_Type.LolLoyaltyLoyaltyStatusNotification;
    };
  };
  "/lol-loyalty/v1/updateTftInventory": {
    post: {
      requestBody: LCU_Type.LolLoyaltyLoyaltyRewards;
    };
  };
  "/lol-maps/v1/map": {
    post: {
      requestBody: LCU_Type.LolMapsMaps;
    };
  };
  "/lol-maps/v1/map/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolMapsMaps;
    };
  };
  "/lol-maps/v1/maps": {
    get: {
      responce: Array<LCU_Type.LolMapsMaps>;
    };
  };
  "/lol-maps/v2/map/{id}/{gameMode}": {
    get: {
      parameters: {
        id: number;
        gameMode: string;
      };
      responce: LCU_Type.LolMapsMaps;
    };
  };
  "/lol-maps/v2/map/{id}/{gameMode}/{gameMutator}": {
    get: {
      parameters: {
        id: number;
        gameMode: string;
        gameMutator: string;
      };
      responce: LCU_Type.LolMapsMaps;
    };
  };
  "/lol-maps/v2/maps": {
    get: {
      responce: Array<LCU_Type.LolMapsMaps>;
    };
  };
  "/lol-match-history/v1/acs-endpoint-override": {
    post: {
      requestBody: LCU_Type.LolMatchHistoryAcsEndPoint;
      responce: boolean | undefined;
    };
  };
  "/lol-match-history/v1/delta": {
    get: {
      responce: LCU_Type.LolMatchHistoryMatchHistoryPlayerDelta;
    };
  };
  "/lol-match-history/v1/game-timelines/{gameId}": {
    get: {
      parameters: {
        gameId: number;
      };
      responce: LCU_Type.LolMatchHistoryMatchHistoryTimelineFrames;
    };
  };
  "/lol-match-history/v1/games/{gameId}": {
    get: {
      parameters: {
        gameId: number;
      };
      responce: LCU_Type.LolMatchHistoryMatchHistoryGame;
    };
  };
  "/lol-match-history/v1/products/lol/current-summoner/matches": {
    get: {
      parameters: {
        begIndex?: number;
        endIndex?: number;
      };
      responce: LCU_Type.LolMatchHistoryMatchHistoryList;
    };
  };
  "/lol-match-history/v1/products/lol/{puuid}/matches": {
    get: {
      parameters: {
        puuid: string;
        begIndex?: number;
        endIndex?: number;
      };
      responce: LCU_Type.LolMatchHistoryMatchHistoryList;
    };
  };
  "/lol-match-history/v1/products/tft/{puuid}/matches": {
    get: {
      parameters: {
        puuid: string;
        begin?: number;
        count?: number;
        tag?: string;
      };
      responce: LCU_Type.LolMatchHistoryGAMHSMatchHistoryList;
    };
  };
  "/lol-match-history/v1/recently-played-summoners": {
    get: {
      responce: Array<LCU_Type.LolMatchHistoryRecentlyPlayedSummoner>;
    };
  };
  "/lol-match-history/v1/web-url": {
    get: {
      responce: string;
    };
  };
  "/lol-match-history/v3/matchlist/account/{accountId}": {
    get: {
      parameters: {
        accountId: number;
        begIndex?: number;
        endIndex?: number;
      };
      responce: LCU_Type.LolMatchHistoryMatchHistoryList;
    };
  };
  "/lol-matchmaking/v1/ready-check": {
    get: {
      responce: LCU_Type.LolMatchmakingMatchmakingReadyCheckResource;
    };
  };
  "/lol-matchmaking/v1/ready-check/accept": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-matchmaking/v1/ready-check/decline": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-matchmaking/v1/search": {
    delete: {
      responce: boolean | undefined;
    };
    get: {
      responce: LCU_Type.LolMatchmakingMatchmakingSearchResource;
    };
    post: {
      responce: boolean | undefined;
    };
    put: {
      requestBody: LCU_Type.LolMatchmakingMatchmakingSearchResource;
      responce: boolean | undefined;
    };
  };
  "/lol-matchmaking/v1/search/errors": {
    get: {
      responce: Array<LCU_Type.LolMatchmakingMatchmakingSearchErrorResource>;
    };
  };
  "/lol-matchmaking/v1/search/errors/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolMatchmakingMatchmakingSearchErrorResource;
    };
  };
  "/lol-missions/v1/data": {
    get: {
      responce: LCU_Type.PlayerMissionEligibilityData;
    };
  };
  "/lol-missions/v1/force": {
    post: {};
  };
  "/lol-missions/v1/missions": {
    get: {
      responce: Array<LCU_Type.PlayerMissionDTO>;
    };
  };
  "/lol-missions/v1/player": {
    put: {
      requestBody: LCU_Type.IdsDTO;
    };
  };
  "/lol-missions/v1/player/{missionId}": {
    put: {
      parameters: {
        missionId: string;
      };
      requestBody: LCU_Type.LolMissionsRewardGroupsSelection;
    };
  };
  "/lol-missions/v1/series": {
    get: {
      responce: Array<LCU_Type.SeriesDTO>;
    };
  };
  "/lol-missions/v2/player/opt": {
    put: {
      requestBody: LCU_Type.LolMissionsSeriesOpt;
    };
  };
  "/lol-npe-rewards/v1/challenges/opt": {
    post: {};
  };
  "/lol-npe-rewards/v1/challenges/progress": {
    get: {
      responce: LCU_Type.LolNpeRewardsChallengesProgress;
    };
  };
  "/lol-npe-rewards/v1/level-rewards": {
    get: {
      responce: LCU_Type.LolNpeRewardsRewardSeries;
    };
  };
  "/lol-npe-rewards/v1/level-rewards/state": {
    get: {
      responce: LCU_Type.LolNpeRewardsRewardSeriesState;
    };
  };
  "/lol-npe-rewards/v1/login-rewards": {
    get: {
      responce: LCU_Type.LolNpeRewardsRewardSeries;
    };
  };
  "/lol-npe-rewards/v1/login-rewards/state": {
    get: {
      responce: LCU_Type.LolNpeRewardsRewardSeriesState;
    };
  };
  "/lol-npe-tutorial-path/v1/rewards/champ": {
    get: {
      responce: LCU_Type.LolNpeTutorialPathCollectionsChampion;
    };
  };
  "/lol-npe-tutorial-path/v1/settings": {
    get: {
      responce: LCU_Type.LolNpeTutorialPathAccountSettingsTutorial;
    };
    put: {
      requestBody: LCU_Type.LolNpeTutorialPathAccountSettingsTutorial;
    };
  };
  "/lol-npe-tutorial-path/v1/tutorials": {
    get: {
      responce: Array<LCU_Type.LolNpeTutorialPathTutorial>;
    };
  };
  "/lol-npe-tutorial-path/v1/tutorials/init": {
    patch: {};
  };
  "/lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view": {
    put: {
      parameters: {
        tutorialId: string;
      };
    };
  };
  "/lol-patch/v1/checking-enabled": {
    get: {
      responce: boolean;
    };
  };
  "/lol-patch/v1/environment": {
    get: {
      responce: LCU_Type.LolPatchChunkingPatcherEnvironment;
    };
  };
  "/lol-patch/v1/game-patch-url": {
    put: {
      parameters: {
        url: string;
      };
    };
  };
  "/lol-patch/v1/game-version": {
    get: {
      responce: string;
    };
  };
  "/lol-patch/v1/notifications": {
    get: {
      responce: Array<LCU_Type.LolPatchNotification>;
    };
  };
  "/lol-patch/v1/notifications/{id}": {
    delete: {
      parameters: {
        id: string;
      };
    };
  };
  "/lol-patch/v1/products/league_of_legends/detect-corruption-request": {
    post: {};
  };
  "/lol-patch/v1/products/league_of_legends/install-location": {
    get: {
      responce: LCU_Type.LolPatchInstallPaths;
    };
  };
  "/lol-patch/v1/products/league_of_legends/partial-repair-request": {
    post: {};
  };
  "/lol-patch/v1/products/league_of_legends/start-checking-request": {
    post: {};
  };
  "/lol-patch/v1/products/league_of_legends/start-patching-request": {
    post: {};
  };
  "/lol-patch/v1/products/league_of_legends/state": {
    get: {
      responce: LCU_Type.LolPatchProductState;
    };
  };
  "/lol-patch/v1/products/league_of_legends/stop-checking-request": {
    post: {};
  };
  "/lol-patch/v1/products/league_of_legends/stop-patching-request": {
    post: {
      parameters: {
        restart: boolean;
      };
    };
  };
  "/lol-patch/v1/products/league_of_legends/supported-game-releases": {
    get: {
      responce: LCU_Type.LolPatchSupportedGameReleases;
    };
  };
  "/lol-patch/v1/self-update-restart": {
    put: {
      parameters: {
        forceRestartOnSelfUpdate: boolean;
      };
    };
  };
  "/lol-patch/v1/status": {
    get: {
      responce: LCU_Type.LolPatchStatus;
    };
  };
  "/lol-patch/v1/ux": {
    put: {
      requestBody: LCU_Type.LolPatchUxResource;
    };
  };
  "/lol-perks/v1/currentpage": {
    get: {
      responce: LCU_Type.LolPerksPerkPageResource;
    };
    put: {
      requestBody: number;
      responce: boolean | undefined;
    };
  };
  "/lol-perks/v1/customizationlimits": {
    get: {
      responce: LCU_Type.LolPerksCustomizationLimits;
    };
  };
  "/lol-perks/v1/inventory": {
    get: {
      responce: LCU_Type.LolPerksPlayerInventory;
    };
  };
  "/lol-perks/v1/pages": {
    delete: {
      responce: boolean | undefined;
    };
    get: {
      responce: Array<LCU_Type.LolPerksPerkPageResource>;
    };
    post: {
      requestBody: LCU_Type.LolPerksPerkPageResource;
      responce: LCU_Type.LolPerksPerkPageResource;
    };
  };
  "/lol-perks/v1/pages/validate": {
    put: {
      requestBody: LCU_Type.LolPerksValidatePageNameData;
      responce: LCU_Type.LolPerksValidatePageNameResponse;
    };
  };
  "/lol-perks/v1/pages/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolPerksPerkPageResource;
    };
    put: {
      parameters: {
        id: number;
      };
      requestBody: LCU_Type.LolPerksPerkPageResource;
      responce: boolean | undefined;
    };
  };
  "/lol-perks/v1/pages/{id}/auto-modified-selections": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-perks/v1/perks": {
    get: {
      responce: Array<LCU_Type.LolPerksPerkUIPerk>;
    };
  };
  "/lol-perks/v1/perks/ack-gameplay-updated": {
    put: {
      requestBody: Array<number>;
      responce: boolean | undefined;
    };
  };
  "/lol-perks/v1/perks/disabled": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-perks/v1/perks/gameplay-updated": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-perks/v1/schema-version": {
    get: {
      responce: number;
    };
  };
  "/lol-perks/v1/servicesettings": {
    get: {
      responce: LCU_Type.LolPerksServiceSettings;
    };
  };
  "/lol-perks/v1/settings": {
    get: {
      responce: LCU_Type.LolPerksUISettings;
    };
    put: {
      requestBody: LCU_Type.LolPerksUISettings;
      responce: boolean | undefined;
    };
  };
  "/lol-perks/v1/show-auto-modified-pages-notification": {
    get: {
      responce: boolean;
    };
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-perks/v1/styles": {
    get: {
      responce: Array<LCU_Type.LolPerksPerkUIStyle>;
    };
  };
  "/lol-perks/v1/update-page-order": {
    post: {
      requestBody: LCU_Type.LolPerksUpdatePageOrderRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-personalized-offers/v1/offers": {
    get: {
      responce: Array<LCU_Type.LolPersonalizedOffersUIOffer>;
    };
  };
  "/lol-personalized-offers/v1/offers/{id}/purchase": {
    post: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolPersonalizedOffersPurchaseResponse;
    };
  };
  "/lol-personalized-offers/v1/offers/{id}/reveal": {
    post: {
      parameters: {
        id: string;
      };
      responce: Array<LCU_Type.LolPersonalizedOffersUIOffer>;
    };
  };
  "/lol-personalized-offers/v1/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-personalized-offers/v1/status": {
    get: {
      responce: LCU_Type.LolPersonalizedOffersUIStatus;
    };
  };
  "/lol-personalized-offers/v1/themed": {
    get: {
      responce: boolean;
    };
  };
  "/lol-pft/v2/events": {
    post: {
      requestBody: LCU_Type.LolPftPFTEvent;
      responce: boolean | undefined;
    };
  };
  "/lol-pft/v2/survey": {
    get: {
      responce: LCU_Type.LolPftPFTSurvey;
    };
    post: {
      requestBody: LCU_Type.LolPftPFTSurvey;
    };
  };
  "/lol-platform-config/v1/initial-configuration-complete": {
    get: {
      responce: boolean;
    };
  };
  "/lol-platform-config/v1/namespaces": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-platform-config/v1/namespaces/{ns}": {
    get: {
      parameters: {
        ns: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-platform-config/v1/namespaces/{ns}/{key}": {
    get: {
      parameters: {
        ns: string;
        key: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-player-behavior/v1/ban": {
    get: {
      responce: LCU_Type.LolPlayerBehaviorBanNotification;
    };
  };
  "/lol-player-behavior/v1/chat-restriction": {
    get: {
      responce: LCU_Type.LolPlayerBehaviorRestrictionNotification;
    };
  };
  "/lol-player-behavior/v1/code-of-conduct-notification": {
    delete: {
      responce: boolean | undefined;
    };
    get: {
      responce: LCU_Type.LolPlayerBehaviorCodeOfConductNotification;
    };
  };
  "/lol-player-behavior/v1/config": {
    get: {
      responce: LCU_Type.LolPlayerBehaviorPlayerBehaviorConfig;
    };
  };
  "/lol-player-behavior/v1/ranked-restriction": {
    get: {
      responce: LCU_Type.LolPlayerBehaviorRestrictionNotification;
    };
  };
  "/lol-player-behavior/v1/reform-card": {
    get: {
      responce: LCU_Type.LolPlayerBehaviorReformCard;
    };
  };
  "/lol-player-behavior/v1/reporter-feedback": {
    get: {
      responce: Array<LCU_Type.LolPlayerBehaviorReporterFeedback>;
    };
  };
  "/lol-player-behavior/v1/reporter-feedback/{id}": {
    delete: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolPlayerBehaviorReporterFeedback;
    };
    get: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.LolPlayerBehaviorReporterFeedback;
    };
  };
  "/lol-player-behavior/v2/reform-card": {
    get: {
      responce: LCU_Type.LolPlayerBehaviorReformCardV2;
    };
  };
  "/lol-player-level-up/v1/level-up": {
    get: {
      responce: LCU_Type.LolPlayerLevelUpPlayerLevelUpEvent;
    };
  };
  "/lol-player-level-up/v1/level-up-notifications/{pluginName}": {
    get: {
      parameters: {
        pluginName: string;
      };
      responce: LCU_Type.LolPlayerLevelUpPlayerLevelUpEventAck;
    };
    post: {
      parameters: {
        pluginName: string;
      };
      requestBody: LCU_Type.LolPlayerLevelUpPlayerLevelUpEventAck;
    };
  };
  "/lol-player-messaging/v1/celebration/notification": {
    get: {
      responce: LCU_Type.LolPlayerMessagingDynamicCelebrationMessagingNotificationResource;
    };
  };
  "/lol-player-messaging/v1/celebration/notification/{id}/acknowledge": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-player-messaging/v1/notification": {
    get: {
      responce: LCU_Type.LolPlayerMessagingPlayerMessagingNotificationResource;
    };
  };
  "/lol-player-messaging/v1/notification/{id}/acknowledge": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-player-preferences/v1/hash": {
    post: {
      requestBody: string;
      responce: string;
    };
  };
  "/lol-player-preferences/v1/player-preferences-endpoint-override": {
    post: {
      requestBody: LCU_Type.LolPlayerPreferencesPlayerPreferencesEndpoint;
      responce: boolean | undefined;
    };
  };
  "/lol-player-preferences/v1/player-preferences-ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-player-preferences/v1/preference": {
    put: {
      requestBody: LCU_Type.LolPlayerPreferencesPlayerPreferences;
      responce: boolean | undefined;
    };
  };
  "/lol-player-preferences/v1/preference/{type}": {
    get: {
      parameters: {
        type: string;
        hash?: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-player-report-sender/v1/champ-select-reports/puuid/{puuid}/category/{category}": {
    post: {
      parameters: {
        puuid: string;
        category: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-player-report-sender/v1/end-of-game-reports": {
    post: {
      requestBody: LCU_Type.LolPlayerReportSenderEndOfGamePlayerReport;
      responce: boolean | undefined;
    };
  };
  "/lol-pre-end-of-game/v1/complete/{sequenceEventName}": {
    post: {
      parameters: {
        sequenceEventName: string;
      };
    };
  };
  "/lol-pre-end-of-game/v1/currentSequenceEvent": {
    get: {
      responce: LCU_Type.LolPreEndOfGameSequenceEvent;
    };
  };
  "/lol-pre-end-of-game/v1/registration/{sequenceEventName}": {
    delete: {
      parameters: {
        sequenceEventName: string;
      };
    };
  };
  "/lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}": {
    post: {
      parameters: {
        sequenceEventName: string;
        priority: number;
      };
    };
  };
  "/lol-premade-voice/v1/availability": {
    get: {
      responce: LCU_Type.LolPremadeVoiceVoiceAvailability;
    };
  };
  "/lol-premade-voice/v1/capturedevices": {
    get: {
      responce: Array<LCU_Type.LolPremadeVoiceDeviceResource>;
    };
    put: {
      requestBody: string;
    };
  };
  "/lol-premade-voice/v1/first-experience": {
    get: {
      responce: LCU_Type.LolPremadeVoiceFirstExperience;
    };
  };
  "/lol-premade-voice/v1/first-experience/game": {
    post: {};
  };
  "/lol-premade-voice/v1/first-experience/lcu": {
    post: {};
  };
  "/lol-premade-voice/v1/first-experience/reset": {
    post: {};
  };
  "/lol-premade-voice/v1/gameClientUpdatedPTTKey": {
    post: {
      requestBody: string;
    };
  };
  "/lol-premade-voice/v1/mic-test": {
    delete: {
      responce: boolean | undefined;
    };
    get: {
      responce: LCU_Type.LolPremadeVoiceAudioPropertiesResource;
    };
    post: {
      responce: boolean | undefined;
    };
  };
  "/lol-premade-voice/v1/participant-records": {
    get: {
      responce: Array<LCU_Type.LolPremadeVoicePremadeVoiceParticipantDto>;
    };
  };
  "/lol-premade-voice/v1/participants": {
    get: {
      responce: Array<LCU_Type.LolPremadeVoicePremadeVoiceParticipantDto>;
    };
  };
  "/lol-premade-voice/v1/participants/{puuid}/mute": {
    put: {
      parameters: {
        puuid: string;
      };
      requestBody: number;
    };
  };
  "/lol-premade-voice/v1/participants/{puuid}/volume": {
    put: {
      parameters: {
        puuid: string;
      };
      requestBody: number;
    };
  };
  "/lol-premade-voice/v1/push-to-talk/check-available": {
    post: {
      requestBody: number;
      responce: boolean;
    };
  };
  "/lol-premade-voice/v1/self/activationSensitivity": {
    put: {
      requestBody: number;
    };
  };
  "/lol-premade-voice/v1/self/inputMode": {
    put: {
      requestBody: LCU_Type.LolPremadeVoiceInputMode;
    };
  };
  "/lol-premade-voice/v1/self/micLevel": {
    put: {
      requestBody: number;
    };
  };
  "/lol-premade-voice/v1/self/mute": {
    put: {
      requestBody: number;
    };
  };
  "/lol-premade-voice/v1/session": {
    delete: {};
    post: {};
  };
  "/lol-premade-voice/v1/settings": {
    get: {
      responce: LCU_Type.LolPremadeVoiceSettingsResource;
    };
  };
  "/lol-premade-voice/v1/settings/reset": {
    post: {};
  };
  "/lol-publishing-content/v1/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-publishing-content/v1/tft-hub-cards": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/lol-purchase-widget/v1/configuration": {
    get: {
      responce: LCU_Type.LolPurchaseWidgetPurchaseWidgetConfig;
    };
  };
  "/lol-purchase-widget/v1/order-notifications": {
    get: {
      responce: Array<LCU_Type.LolPurchaseWidgetOrderNotificationResource>;
    };
  };
  "/lol-purchase-widget/v1/purchasable-item": {
    get: {
      parameters: {
        inventoryType: string;
        itemId: number;
      };
      responce: LCU_Type.LolPurchaseWidgetPurchasableItem;
    };
  };
  "/lol-purchase-widget/v1/purchasable-items/{inventoryType}": {
    post: {
      parameters: {
        inventoryType: string;
      };
      requestBody: Array<number>;
      responce: LCU_Type.LolPurchaseWidgetItemChoices;
    };
  };
  "/lol-purchase-widget/v2/purchaseItems": {
    post: {
      requestBody: LCU_Type.LolPurchaseWidgetPurchaseRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-purchase-widget/v3/base-skin-line-data/{offerId}": {
    get: {
      parameters: {
        offerId: string;
      };
      responce: LCU_Type.LolPurchaseWidgetBaseSkinLineDto;
    };
  };
  "/lol-purchase-widget/v3/purchase-offer-order-statuses": {
    get: {
      responce: LCU_Type.LolPurchaseWidgetPurchaseOfferOrderStatuses;
    };
  };
  "/lol-purchase-widget/v3/purchaseOffer": {
    post: {
      requestBody: LCU_Type.LolPurchaseWidgetPurchaseOfferRequestV3;
      responce: LCU_Type.LolPurchaseWidgetPurchaseOfferResponseV3;
    };
  };
  "/lol-purchase-widget/v3/validateOffer": {
    post: {
      requestBody: LCU_Type.LolPurchaseWidgetValidateOfferRequestV3;
      responce: LCU_Type.LolPurchaseWidgetValidateOfferResponseV3;
    };
  };
  "/lol-ranked/v1/apex-leagues/{queueType}/{tier}": {
    get: {
      parameters: {
        queueType:
          | "NONE"
          | "RANKED_SOLO_5x5"
          | "RANKED_FLEX_SR"
          | "RANKED_FLEX_TT"
          | "RANKED_TFT"
          | "RANKED_TFT_TURBO"
          | "RANKED_TFT_PAIRS";
        tier:
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
      };
      responce: LCU_Type.LolRankedLeagueLadderInfo;
    };
  };
  "/lol-ranked/v1/challenger-ladders-enabled": {
    get: {
      responce: Array<string>;
    };
  };
  "/lol-ranked/v1/current-lp-change-notification": {
    get: {
      responce: LCU_Type.LolRankedLcuLeagueNotification;
    };
  };
  "/lol-ranked/v1/current-ranked-stats": {
    get: {
      responce: LCU_Type.LolRankedRankedStats;
    };
  };
  "/lol-ranked/v1/eos-notifications": {
    get: {
      responce: Array<LCU_Type.LolRankedEosNotificationResource>;
    };
  };
  "/lol-ranked/v1/eos-notifications/{id}/acknowledge": {
    post: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-ranked/v1/eos-rewards": {
    get: {
      responce: LCU_Type.LolRankedEosRewardsConfig;
    };
  };
  "/lol-ranked/v1/league-ladders/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: Array<LCU_Type.LolRankedLeagueLadderInfo>;
    };
  };
  "/lol-ranked/v1/notifications": {
    get: {
      responce: Array<LCU_Type.LolRankedLcuLeagueNotification>;
    };
  };
  "/lol-ranked/v1/notifications/{id}/acknowledge": {
    post: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-ranked/v1/ranked-stats": {
    get: {
      parameters: {
        puuids: Array<string>;
      };
      responce: LCU_Type.LolRankedRankedStats | undefined;
    };
  };
  "/lol-ranked/v1/ranked-stats/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: LCU_Type.LolRankedRankedStats;
    };
  };
  "/lol-ranked/v1/rated-ladder/{queueType}": {
    get: {
      parameters: {
        queueType:
          | "NONE"
          | "RANKED_SOLO_5x5"
          | "RANKED_FLEX_SR"
          | "RANKED_FLEX_TT"
          | "RANKED_TFT"
          | "RANKED_TFT_TURBO"
          | "RANKED_TFT_PAIRS";
      };
      responce: LCU_Type.LolRankedRatedLadderInfo;
    };
  };
  "/lol-ranked/v1/signed-ranked-stats": {
    get: {
      responce: LCU_Type.LolRankedSignedRankedStatsDTO;
    };
  };
  "/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids": {
    get: {
      parameters: {
        queueType:
          | "NONE"
          | "RANKED_SOLO_5x5"
          | "RANKED_FLEX_SR"
          | "RANKED_FLEX_TT"
          | "RANKED_TFT"
          | "RANKED_TFT_TURBO"
          | "RANKED_TFT_PAIRS";
        puuids: Array<string>;
      };
      responce: LCU_Type.LolRankedSocialLeaderboardRankedQueueStats | undefined;
    };
  };
  "/lol-ranked/v1/splits-config": {
    get: {
      responce: LCU_Type.LolRankedRewardsInfo;
    };
  };
  "/lol-ranked/v1/top-rated-ladders-enabled": {
    get: {
      responce: Array<string>;
    };
  };
  "/lol-ranked/v2/tiers": {
    get: {
      parameters: {
        summonerIds: Array<number>;
        queueTypes: Array<LCU_Type.LolRankedLeagueQueueType>;
      };
      responce: Array<LCU_Type.LolRankedParticipantTiers>;
    };
  };
  "/lol-regalia/v2/config": {
    get: {
      responce: LCU_Type.LolRegaliaRegaliaFrontendConfig;
    };
  };
  "/lol-regalia/v2/current-summoner/regalia": {
    get: {
      responce: LCU_Type.LolRegaliaRegaliaWithPreferences;
    };
    put: {
      requestBody: LCU_Type.LolRegaliaRegaliaPreferences;
      responce: LCU_Type.LolRegaliaRegaliaWithPreferences;
    };
  };
  "/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia": {
    get: {
      parameters: {
        summonerId: number;
        queue: string;
        position: string;
      };
      responce: LCU_Type.LolRegaliaRegalia;
    };
  };
  "/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia": {
    get: {
      parameters: {
        summonerId: number;
        queue: string;
      };
      responce: LCU_Type.LolRegaliaRegalia;
    };
  };
  "/lol-regalia/v2/summoners/{summonerId}/regalia": {
    get: {
      parameters: {
        summonerId: number;
        hovercard: boolean;
      };
      responce: LCU_Type.LolRegaliaRegalia;
    };
  };
  "/lol-regalia/v2/summoners/{summonerId}/regalia/async": {
    get: {
      parameters: {
        summonerId: number;
      };
      responce: LCU_Type.LolRegaliaRegaliaAsync;
    };
  };
  "/lol-replays/v1/configuration": {
    get: {
      responce: LCU_Type.LolReplaysReplaysConfiguration;
    };
  };
  "/lol-replays/v1/metadata/{gameId}": {
    get: {
      parameters: {
        gameId: number;
      };
      responce: LCU_Type.LolReplaysReplayMetadata;
    };
  };
  "/lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}": {
    post: {
      parameters: {
        gameId: number;
        gameVersion: string;
        gameType: string;
        queueId: number;
      };
    };
  };
  "/lol-replays/v1/rofls/path": {
    get: {
      responce: string;
    };
  };
  "/lol-replays/v1/rofls/path/default": {
    get: {
      responce: string;
    };
  };
  "/lol-replays/v1/rofls/scan": {
    post: {};
  };
  "/lol-replays/v1/rofls/{gameId}/download": {
    post: {
      parameters: {
        gameId: number;
      };
      requestBody: LCU_Type.LolReplaysReplayContextData;
    };
  };
  "/lol-replays/v1/rofls/{gameId}/download/graceful": {
    post: {
      parameters: {
        gameId: number;
      };
      requestBody: LCU_Type.LolReplaysReplayContextData;
    };
  };
  "/lol-replays/v1/rofls/{gameId}/watch": {
    post: {
      parameters: {
        gameId: number;
      };
      requestBody: LCU_Type.LolReplaysReplayContextData;
    };
  };
  "/lol-replays/v2/metadata/{gameId}/create": {
    post: {
      parameters: {
        gameId: number;
      };
      requestBody: LCU_Type.LolReplaysReplayCreateMetadata;
    };
  };
  "/lol-rewards/v1/grants": {
    get: {
      parameters: {
        status?: "PENDING_FULFILLMENT" | "PENDING_SELECTION" | "FULFILLED" | "FAILED";
      };
      responce: Array<LCU_Type.LolRewardsRewardGrant>;
    };
  };
  "/lol-rewards/v1/grants/{grantId}/select": {
    post: {
      parameters: {
        grantId: string;
      };
      requestBody: LCU_Type.LolRewardsSelectionRequestDTO;
      responce: LCU_Type.LolRewardsRewardGrant;
    };
  };
  "/lol-rewards/v1/grants/{grantId}/view": {
    patch: {
      parameters: {
        grantId: string;
      };
    };
  };
  "/lol-rewards/v1/groups": {
    get: {
      parameters: {
        types?: Array<string>;
      };
      responce: Array<LCU_Type.LolRewardsSvcRewardGroup>;
    };
  };
  "/lol-rms/v1/champion-mastery-leaveup-update": {
    get: {
      responce: Array<LCU_Type.LolRiotMessagingServiceChampionMasteryLevelUp>;
    };
  };
  "/lol-rms/v1/champion-mastery-leaveup-update/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-rso-auth/configuration/v3/ready-state": {
    get: {
      responce: LCU_Type.LolRsoAuthRSOConfigReadyState;
    };
  };
  "/lol-rso-auth/v1/auth-hints/hint": {
    delete: {};
    get: {
      responce: LCU_Type.LolRsoAuthAuthHint;
    };
  };
  "/lol-rso-auth/v1/authorization": {
    delete: {};
    get: {
      responce: LCU_Type.LolRsoAuthAuthorization;
    };
  };
  "/lol-rso-auth/v1/authorization/access-token": {
    get: {
      responce: LCU_Type.LolRsoAuthAccessToken;
    };
  };
  "/lol-rso-auth/v1/authorization/error": {
    get: {
      responce: LCU_Type.LolRsoAuthAuthError;
    };
  };
  "/lol-rso-auth/v1/authorization/gas": {
    post: {
      requestBody: LCU_Type.LolRsoAuthRSOPlayerCredentials;
      responce: LCU_Type.LolRsoAuthAuthorization;
    };
  };
  "/lol-rso-auth/v1/authorization/id-token": {
    get: {
      responce: LCU_Type.LolRsoAuthIdToken;
    };
  };
  "/lol-rso-auth/v1/authorization/refresh": {
    post: {
      responce: LCU_Type.LolRsoAuthAuthorization;
    };
  };
  "/lol-rso-auth/v1/authorization/userinfo": {
    get: {
      responce: LCU_Type.LolRsoAuthUserInfo;
    };
    post: {
      responce: LCU_Type.LolRsoAuthUserInfo;
    };
  };
  "/lol-rso-auth/v1/device-id": {
    post: {
      responce: LCU_Type.LolRsoAuthDeviceId;
    };
  };
  "/lol-rso-auth/v1/session": {
    delete: {};
  };
  "/lol-rso-auth/v1/status/{platformId}": {
    get: {
      parameters: {
        platformId: string;
      };
      responce: LCU_Type.LolRsoAuthRegionStatus;
    };
  };
  "/lol-rso-auth/v2/config": {
    delete: {};
    post: {
      requestBody: LCU_Type.LolRsoAuthPublicClientConfig;
    };
  };
  "/lol-service-status/v1/lcu-status": {
    get: {
      responce: LCU_Type.LolServiceStatusServiceStatusResource;
    };
  };
  "/lol-service-status/v1/ticker-messages": {
    get: {
      responce: Array<LCU_Type.LolServiceStatusTickerMessage>;
    };
  };
  "/lol-settings/v1/account/didreset": {
    get: {
      responce: boolean;
    };
  };
  "/lol-settings/v1/account/save": {
    post: {};
  };
  "/lol-settings/v1/account/{category}": {
    get: {
      parameters: {
        category: string;
      };
      responce: boolean | undefined;
    };
    patch: {
      parameters: {
        category: string;
      };
      requestBody: LCU_Type.LolSettingsSettingCategory;
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        category: string;
      };
      requestBody: LCU_Type.LolSettingsSettingCategory;
      responce: boolean | undefined;
    };
  };
  "/lol-settings/v1/local/{category}": {
    get: {
      parameters: {
        category: string;
      };
      responce: boolean | undefined;
    };
    patch: {
      parameters: {
        category: string;
      };
      requestBody: LCU_Type.LolSettingsSettingCategory;
      responce: boolean | undefined;
    };
  };
  "/lol-settings/v2/account/{ppType}/{category}": {
    get: {
      parameters: {
        ppType: string;
        category: string;
      };
      responce: boolean | undefined;
    };
    patch: {
      parameters: {
        ppType: string;
        category: string;
      };
      requestBody: LCU_Type.LolSettingsSettingCategory;
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        ppType: string;
        category: string;
      };
      requestBody: LCU_Type.LolSettingsSettingCategory;
      responce: boolean | undefined;
    };
  };
  "/lol-settings/v2/didreset/{ppType}": {
    get: {
      parameters: {
        ppType: string;
      };
      responce: boolean;
    };
  };
  "/lol-settings/v2/local/{category}": {
    get: {
      parameters: {
        category: string;
      };
      responce: boolean | undefined;
    };
    patch: {
      parameters: {
        category: string;
      };
      requestBody: LCU_Type.LolSettingsSettingCategory;
      responce: boolean | undefined;
    };
  };
  "/lol-settings/v2/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-shutdown/v1/notification": {
    get: {
      responce: LCU_Type.LolShutdownShutdownNotification;
    };
  };
  "/lol-simple-dialog-messages/v1/messages": {
    get: {
      responce: Array<LCU_Type.LolSimpleDialogMessagesMessage>;
    };
    post: {
      requestBody: LCU_Type.LolSimpleDialogMessagesLocalMessageRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-simple-dialog-messages/v1/messages/{messageId}": {
    delete: {
      parameters: {
        messageId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-social-leaderboard/v1/leaderboard-next-update-time": {
    get: {
      parameters: {
        queueType:
          | "NONE"
          | "RANKED_SOLO_5x5"
          | "RANKED_FLEX_SR"
          | "RANKED_FLEX_TT"
          | "RANKED_TFT"
          | "RANKED_TFT_TURBO"
          | "RANKED_TFT_PAIRS";
      };
      responce: number;
    };
  };
  "/lol-social-leaderboard/v1/social-leaderboard-data": {
    get: {
      parameters: {
        queueType:
          | "NONE"
          | "RANKED_SOLO_5x5"
          | "RANKED_FLEX_SR"
          | "RANKED_FLEX_TT"
          | "RANKED_TFT"
          | "RANKED_TFT_TURBO"
          | "RANKED_TFT_PAIRS";
      };
      responce: LCU_Type.LolSocialLeaderboardSocialLeaderboardData;
    };
  };
  "/lol-spectator/v1/buddy/spectate": {
    post: {
      requestBody: Array<string>;
      responce: LCU_Type.LolSpectatorSummonerOrTeamAvailabilty;
    };
  };
  "/lol-spectator/v1/spectate": {
    get: {
      responce: LCU_Type.LolSpectatorSpectateGameInfo;
    };
  };
  "/lol-spectator/v1/spectate/launch": {
    post: {
      requestBody: LCU_Type.LolSpectatorSpectateGameInfo;
      responce: boolean | undefined;
    };
  };
  "/lol-statstones/v1/eog-notifications": {
    delete: {};
    get: {
      responce: Array<boolean | undefined>;
    };
  };
  "/lol-statstones/v1/eog-notifications/{key}": {
    delete: {
      parameters: {
        key: number;
      };
    };
  };
  "/lol-statstones/v1/featured-champion-statstones/{championItemId}": {
    get: {
      parameters: {
        championItemId: number;
      };
      responce: Array<LCU_Type.LolStatstonesStatstone>;
    };
  };
  "/lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}": {
    post: {
      parameters: {
        championItemId: number;
        statstoneId: string;
      };
      requestBody: LCU_Type.LolStatstonesStatstoneFeaturedRequest;
      responce: boolean | undefined;
    };
  };
  "/lol-statstones/v1/profile-summary/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: Array<LCU_Type.LolStatstonesProfileStatstoneSummary>;
    };
  };
  "/lol-statstones/v1/statstone/{contentId}/owned": {
    get: {
      parameters: {
        contentId: string;
      };
      responce: boolean;
    };
  };
  "/lol-statstones/v1/statstones-enabled-queue-ids": {
    get: {
      responce: Array<number>;
    };
  };
  "/lol-statstones/v1/vignette-notifications": {
    delete: {};
    get: {
      responce: Array<boolean | undefined>;
    };
  };
  "/lol-statstones/v1/vignette-notifications/{key}": {
    delete: {
      parameters: {
        key: number;
      };
    };
  };
  "/lol-statstones/v2/player-statstones-self/{championItemId}": {
    get: {
      parameters: {
        championItemId: number;
      };
      responce: Array<LCU_Type.LolStatstonesStatstoneSet>;
    };
  };
  "/lol-statstones/v2/player-summary-self": {
    get: {
      responce: Array<LCU_Type.LolStatstonesChampionStatstoneSummary>;
    };
  };
  "/lol-store/v1/catalog": {
    get: {
      parameters: {
        inventoryType?: Array<string>;
        itemId?: Array<number>;
      };
      responce: Array<LCU_Type.LolStoreCatalogItem>;
    };
  };
  "/lol-store/v1/catalog/sales": {
    get: {
      responce: Array<LCU_Type.LolStoreItemSale>;
    };
  };
  "/lol-store/v1/catalog/{inventoryType}": {
    get: {
      parameters: {
        inventoryType: string;
        itemIds: Array<number>;
      };
      responce: Array<LCU_Type.LolStoreCatalogItem>;
    };
  };
  "/lol-store/v1/catalogByInstanceIds": {
    get: {
      parameters: {
        instanceIds: Array<string>;
      };
      responce: Array<LCU_Type.LolStoreCatalogItem>;
    };
  };
  "/lol-store/v1/getStoreUrl": {
    get: {
      responce: string;
    };
  };
  "/lol-store/v1/giftablefriends": {
    get: {
      responce: Array<LCU_Type.LolStoreGiftingFriend>;
    };
  };
  "/lol-store/v1/itemKeysFromInstanceIds": {
    get: {
      parameters: {
        instanceIds: Array<string>;
      };
      responce: LCU_Type.LolStoreItemKey | undefined;
    };
  };
  "/lol-store/v1/itemKeysFromOfferIds": {
    get: {
      parameters: {
        offerIds: Array<string>;
      };
      responce: LCU_Type.LolStoreItemKey | undefined;
    };
  };
  "/lol-store/v1/lastPage": {
    get: {
      responce: string;
    };
    post: {
      requestBody: string;
    };
  };
  "/lol-store/v1/notifications/acknowledge": {
    post: {
      requestBody: string;
      responce: boolean | undefined;
    };
  };
  "/lol-store/v1/offers": {
    get: {
      parameters: {
        inventoryTypeUUIDs?: Array<string>;
      };
      responce: Array<LCU_Type.LolStoreCapOffer>;
    };
  };
  "/lol-store/v1/order-notifications": {
    get: {
      responce: Array<LCU_Type.LolStoreOrderNotificationResource>;
    };
  };
  "/lol-store/v1/order-notifications/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolStoreOrderNotificationResource;
    };
  };
  "/lol-store/v1/paymentDetails": {
    get: {
      parameters: {
        action: string;
        giftRecipientAccountId?: number;
        giftMessage?: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-store/v1/skins/{skinId}": {
    get: {
      parameters: {
        skinId: number;
      };
      responce: LCU_Type.LolStoreCatalogItem;
    };
  };
  "/lol-store/v1/skins/{skinId}/purchase": {
    post: {
      parameters: {
        skinId: number;
      };
      requestBody: LCU_Type.LolStoreItemCost;
      responce: boolean | undefined;
    };
  };
  "/lol-store/v1/status": {
    get: {
      responce: LCU_Type.LolStoreStoreStatus;
    };
  };
  "/lol-store/v1/store-ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-store/v1/wallet": {
    get: {
      responce: LCU_Type.LolStoreWallet;
    };
  };
  "/lol-store/v1/{pageType}": {
    get: {
      parameters: {
        pageType: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-suggested-players/v1/reported-player": {
    post: {
      requestBody: LCU_Type.LolSuggestedPlayersSuggestedPlayersReportedPlayer;
    };
  };
  "/lol-suggested-players/v1/suggested-players": {
    get: {
      responce: Array<LCU_Type.LolSuggestedPlayersSuggestedPlayersSuggestedPlayer>;
    };
  };
  "/lol-suggested-players/v1/suggested-players/{summonerId}": {
    delete: {
      parameters: {
        summonerId: number;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-suggested-players/v1/victorious-comrade": {
    post: {
      requestBody: LCU_Type.LolSuggestedPlayersSuggestedPlayersVictoriousComrade;
    };
  };
  "/lol-summoner/v1/check-name-availability-new-summoners/{name}": {
    get: {
      parameters: {
        name: string;
      };
      responce: boolean;
    };
  };
  "/lol-summoner/v1/check-name-availability/{name}": {
    get: {
      parameters: {
        name: string;
      };
      responce: boolean;
    };
  };
  "/lol-summoner/v1/current-summoner": {
    get: {
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-summoner/v1/current-summoner/account-and-summoner-ids": {
    get: {
      responce: LCU_Type.LolSummonerAccountIdAndSummonerId;
    };
  };
  "/lol-summoner/v1/current-summoner/autofill": {
    get: {
      responce: Array<LCU_Type.LolSummonerAutoFillQueueDto>;
    };
  };
  "/lol-summoner/v1/current-summoner/icon": {
    put: {
      requestBody: LCU_Type.LolSummonerSummonerIcon;
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-summoner/v1/current-summoner/jwt": {
    get: {
      responce: string;
    };
  };
  "/lol-summoner/v1/current-summoner/name": {
    post: {
      requestBody: string;
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-summoner/v1/current-summoner/profile-privacy": {
    get: {
      responce: LCU_Type.LolSummonerProfilePrivacy;
    };
    put: {
      requestBody: LCU_Type.LolSummonerProfilePrivacySetting;
      responce: boolean | undefined;
    };
  };
  "/lol-summoner/v1/current-summoner/rerollPoints": {
    get: {
      responce: LCU_Type.LolSummonerSummonerRerollPoints;
    };
  };
  "/lol-summoner/v1/current-summoner/summoner-profile": {
    get: {
      responce: boolean | undefined;
    };
    post: {
      requestBody: LCU_Type.LolSummonerSummonerProfileUpdate;
      responce: boolean | undefined;
    };
  };
  "/lol-summoner/v1/profile-privacy-enabled": {
    get: {
      responce: LCU_Type.LolSummonerProfilePrivacyEnabledState;
    };
  };
  "/lol-summoner/v1/status": {
    get: {
      responce: LCU_Type.LolSummonerStatus;
    };
  };
  "/lol-summoner/v1/summoner-profile": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: boolean | undefined;
    };
  };
  "/lol-summoner/v1/summoner-requests-ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-summoner/v1/summoners": {
    get: {
      parameters: {
        name: string;
      };
      responce: LCU_Type.LolSummonerSummoner;
    };
    post: {
      requestBody: LCU_Type.LolSummonerSummonerRequestedName;
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-summoner/v1/summoners-by-puuid-cached/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-summoner/v1/summoners/{id}": {
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-summoner/v2/summoner-icons": {
    get: {
      parameters: {
        ids: Array<number>;
      };
      responce: Array<LCU_Type.LolSummonerSummonerIdAndIcon>;
    };
  };
  "/lol-summoner/v2/summoner-names": {
    get: {
      parameters: {
        ids: Array<number>;
      };
      responce: Array<LCU_Type.LolSummonerSummonerIdAndName>;
    };
  };
  "/lol-summoner/v2/summoners": {
    get: {
      parameters: {
        ids?: Array<number>;
      };
      responce: Array<LCU_Type.LolSummonerSummoner>;
    };
  };
  "/lol-summoner/v2/summoners/names": {
    post: {
      requestBody: Array<string>;
      responce: Array<LCU_Type.LolSummonerSummoner>;
    };
  };
  "/lol-summoner/v2/summoners/puuid": {
    post: {
      requestBody: Array<string>;
      responce: Array<LCU_Type.LolSummonerSummoner>;
    };
  };
  "/lol-summoner/v2/summoners/puuid/{puuid}": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: LCU_Type.LolSummonerSummoner;
    };
  };
  "/lol-tastes/v1/ready": {
    get: {
      responce: boolean;
    };
  };
  "/lol-tastes/v1/skins-model": {
    get: {
      responce: LCU_Type.LolTastesDataModelResponse;
    };
  };
  "/lol-tft/v1/tft/hubFooterColors": {
    get: {
      responce: LCU_Type.LolTftLolTftHubFooterColors;
    };
  };
  "/lol-tft/v1/tft/storePromos": {
    get: {
      responce: LCU_Type.LolTftLolTftStorePromos;
    };
  };
  "/lol-tft/v2/tft/battlepass": {
    get: {
      responce: LCU_Type.LolMissionsTftPaidBattlepass;
    };
  };
  "/lol-token-upsell/v1/all": {
    get: {
      responce: Array<LCU_Type.LolWorldsTokenCardTokenUpsell>;
    };
  };
  "/lol-trophies/v1/current-summoner/trophies/profile": {
    get: {
      responce: LCU_Type.LolTrophiesTrophyProfileData;
    };
  };
  "/lol-trophies/v1/players/{puuid}/trophies/profile": {
    get: {
      parameters: {
        puuid: string;
      };
      responce: LCU_Type.LolTrophiesTrophyProfileData;
    };
  };
  "/memory/v1/fe-processes-ready": {
    get: {
      responce: boolean;
    };
  };
  "/memory/v1/notify-fe-processes-ready": {
    post: {};
  };
  "/memory/v1/snapshot": {
    post: {
      parameters: {
        context: string;
      };
      requestBody: Array<number>;
    };
  };
  "/patcher/v1/notifications": {
    get: {
      responce: Array<LCU_Type.PatcherNotification>;
    };
    post: {
      parameters: {
        notificationId:
          | "UnspecifiedError"
          | "ConnectionError"
          | "MissingFilesError"
          | "FailedToWriteError"
          | "WillRestoreClientBackupOnRestart"
          | "DidRestoreClientBackup"
          | "NotEnoughDiskSpace"
          | "BrokenPermissions";
      };
    };
  };
  "/patcher/v1/notifications/{id}": {
    delete: {
      parameters: {
        id: string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/p2p/status": {
    get: {
      responce: LCU_Type.PatcherP2PStatus;
    };
    patch: {
      requestBody: LCU_Type.PatcherP2PStatusUpdate;
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products": {
    get: {
      responce: Array<string>;
    };
  };
  "/patcher/v1/products/league_of_legends/full-repair-request": {
    post: {
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}": {
    delete: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/detect-corruption-request": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: LCU_Type.PatcherProductState;
    };
  };
  "/patcher/v1/products/{product-id}/partial-repair-request": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/paths": {
    get: {
      parameters: {
        "product-id": string;
      };
      responce: string | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/signal-start-patching-delayed": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/start-checking-request": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/start-patching-request": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/state": {
    get: {
      parameters: {
        "product-id": string;
      };
      responce: LCU_Type.PatcherProductState;
    };
  };
  "/patcher/v1/products/{product-id}/stop-checking-request": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/stop-patching-request": {
    post: {
      parameters: {
        "product-id": string;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/products/{product-id}/tags": {
    get: {
      parameters: {
        "product-id": string;
      };
      responce: string | undefined;
    };
  };
  "/patcher/v1/self-update-restart": {
    put: {
      parameters: {
        forceRestartOnSelfUpdate: boolean;
      };
      responce: boolean | undefined;
    };
  };
  "/patcher/v1/status": {
    get: {
      responce: LCU_Type.PatcherStatus;
    };
  };
  "/patcher/v1/ux": {
    put: {
      requestBody: LCU_Type.PatcherUxResource;
    };
  };
  "/payments/v1/pmc-start-url": {
    post: {
      requestBody: LCU_Type.PaymentsFrontEndRequest;
      responce: LCU_Type.PaymentsFrontEndResult;
    };
  };
  "/performance/v1/memory": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/performance/v1/process/{processId}": {
    post: {
      parameters: {
        /**
         * Id of the process to track performance information.
         */
        processId: number;
      };
    };
  };
  "/performance/v1/report": {
    get: {
      responce: Array<boolean | undefined>;
    };
  };
  "/performance/v1/report/restart": {
    post: {
      parameters: {
        /**
         * Time in seconds for each CPU timing sample.
         */
        sampleLength?: number;
        /**
         * Number of samples to record.
         */
        sampleCount?: number;
      };
      responce: Array<boolean | undefined>;
    };
  };
  "/performance/v1/system-info": {
    get: {
      parameters: {
        /**
         * Returns all available system information
         */
        full?: number;
      };
      responce: boolean | undefined;
    };
  };
  "/player-notifications/v1/config": {
    get: {
      responce: LCU_Type.PlayerNotificationsPlayerNotificationConfigResource;
    };
    put: {
      requestBody: LCU_Type.PlayerNotificationsPlayerNotificationConfigResource;
      responce: LCU_Type.PlayerNotificationsPlayerNotificationConfigResource;
    };
  };
  "/player-notifications/v1/notifications": {
    get: {
      responce: Array<LCU_Type.PlayerNotificationsPlayerNotificationResource>;
    };
    post: {
      requestBody: LCU_Type.PlayerNotificationsPlayerNotificationResource;
      responce: LCU_Type.PlayerNotificationsPlayerNotificationResource;
    };
  };
  "/player-notifications/v1/notifications/{id}": {
    delete: {
      parameters: {
        id: number;
      };
      responce: boolean | undefined;
    };
    get: {
      parameters: {
        id: number;
      };
      responce: LCU_Type.PlayerNotificationsPlayerNotificationResource;
    };
    put: {
      parameters: {
        id: number;
      };
      requestBody: boolean | undefined;
      responce: LCU_Type.PlayerNotificationsPlayerNotificationResource;
    };
  };
  "/plugin-manager/v1/external-plugins/availability": {
    get: {
      responce: LCU_Type.ExternalPluginsResource;
    };
  };
  "/plugin-manager/v1/status": {
    get: {
      responce: LCU_Type.PluginManagerResource;
    };
  };
  "/plugin-manager/v2/descriptions": {
    get: {
      responce: Array<LCU_Type.PluginDescriptionResource>;
    };
  };
  "/plugin-manager/v2/descriptions/{plugin}": {
    get: {
      parameters: {
        /**
         * Plugin name
         */
        plugin: string;
      };
      responce: LCU_Type.PluginDescriptionResource;
    };
  };
  "/plugin-manager/v2/plugins": {
    get: {
      responce: Array<LCU_Type.PluginResource>;
    };
  };
  "/plugin-manager/v2/plugins/{plugin}": {
    get: {
      parameters: {
        /**
         * Plugin name
         */
        plugin: string;
      };
      responce: LCU_Type.PluginResource;
    };
  };
  "/plugin-manager/v3/plugins-manifest": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/process-control/v1/process": {
    get: {
      responce: LCU_Type.ProcessControlProcess;
    };
  };
  "/process-control/v1/process/quit": {
    post: {};
  };
  "/process-control/v1/process/restart": {
    post: {
      parameters: {
        delaySeconds: number;
        restartVersion?: number;
      };
    };
  };
  "/process-control/v1/process/restart-to-repair": {
    post: {};
  };
  "/riot-messaging-service/v1/connect": {
    delete: {};
    post: {
      requestBody: string;
    };
  };
  "/riot-messaging-service/v1/entitlements": {
    delete: {};
    post: {
      requestBody: LCU_Type.RiotMessagingServiceEntitlementsToken;
    };
  };
  "/riot-messaging-service/v1/message/{a}": {
    get: {
      parameters: {
        a: string;
      };
      responce: LCU_Type.RmsMessage;
    };
  };
  "/riot-messaging-service/v1/message/{a}/{b}": {
    get: {
      parameters: {
        a: string;
        b: string;
      };
      responce: LCU_Type.RmsMessage;
    };
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}": {
    get: {
      parameters: {
        a: string;
        b: string;
        c: string;
      };
      responce: LCU_Type.RmsMessage;
    };
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}": {
    get: {
      parameters: {
        a: string;
        b: string;
        c: string;
        d: string;
      };
      responce: LCU_Type.RmsMessage;
    };
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}": {
    get: {
      parameters: {
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
      };
      responce: LCU_Type.RmsMessage;
    };
  };
  "/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}": {
    get: {
      parameters: {
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
        f: string;
      };
      responce: LCU_Type.RmsMessage;
    };
  };
  "/riot-messaging-service/v1/session": {
    delete: {};
    get: {
      responce: LCU_Type.RiotMessagingServiceSession;
    };
  };
  "/riot-messaging-service/v1/state": {
    get: {
      responce: LCU_Type.RiotMessagingServiceState;
    };
  };
  "/riotclient/addorupdatemetric": {
    post: {
      parameters: {
        /**
         * Name of metric group
         */
        group: string;
        /**
         * Name of metric object
         */
        object: string;
        /**
         * Name of metric item
         */
        name: string;
        /**
         * Value to store
         */
        value: number;
      };
    };
  };
  "/riotclient/affinity": {
    delete: {};
    get: {
      responce: boolean | undefined;
    };
    post: {
      parameters: {
        /**
         * The new affinity to use.
         */
        newAffinity: string;
      };
    };
  };
  "/riotclient/app-name": {
    get: {
      responce: string;
    };
  };
  "/riotclient/app-port": {
    get: {
      responce: number;
    };
  };
  "/riotclient/auth-token": {
    get: {
      responce: string;
    };
  };
  "/riotclient/command-line-args": {
    get: {
      responce: Array<string>;
    };
  };
  "/riotclient/get_region_locale": {
    get: {
      responce: LCU_Type.RegionLocale;
    };
  };
  "/riotclient/kill-and-restart-ux": {
    post: {};
  };
  "/riotclient/kill-ux": {
    post: {};
  };
  "/riotclient/launch-ux": {
    post: {};
  };
  "/riotclient/machine-id": {
    get: {
      responce: string;
    };
  };
  "/riotclient/new-args": {
    post: {};
  };
  "/riotclient/region-locale": {
    get: {
      responce: LCU_Type.RegionLocale;
    };
    put: {
      requestBody: LCU_Type.RegionLocale;
    };
  };
  "/riotclient/region-locale/ack": {
    put: {
      requestBody: number;
    };
  };
  "/riotclient/set_region_locale": {
    post: {
      parameters: {
        /**
         * Name of the region.
         */
        region: string;
        /**
         * Name of the locale.
         */
        locale: string;
      };
    };
  };
  "/riotclient/show-swagger": {
    post: {};
  };
  "/riotclient/splash": {
    delete: {};
    put: {
      parameters: {
        splash: string;
      };
    };
  };
  "/riotclient/system-info/v1/basic-info": {
    get: {
      responce: LCU_Type.basicSystemInfo;
    };
  };
  "/riotclient/trace": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/riotclient/unload": {
    post: {};
  };
  "/riotclient/ux-allow-foreground": {
    post: {};
  };
  "/riotclient/ux-crash-count": {
    get: {
      responce: number;
    };
  };
  "/riotclient/ux-flash": {
    post: {};
  };
  "/riotclient/ux-load-complete": {
    put: {};
  };
  "/riotclient/ux-minimize": {
    post: {};
  };
  "/riotclient/ux-show": {
    post: {};
  };
  "/riotclient/ux-state": {
    get: {
      responce: string;
    };
  };
  "/riotclient/ux-state/ack": {
    put: {
      requestBody: number;
    };
  };
  "/riotclient/v1/auth-tokens/{authToken}": {
    delete: {
      parameters: {
        authToken: string;
      };
      responce: boolean | undefined;
    };
    put: {
      parameters: {
        /**
         * Authentication token to add.
         */
        authToken: string;
      };
      responce: boolean | undefined;
    };
  };
  "/riotclient/v1/crash-reporting/environment": {
    get: {
      responce: LCU_Type.CrashReportingEnvironment;
    };
    put: {
      requestBody: LCU_Type.CrashReportingEnvironment;
    };
  };
  "/riotclient/v1/crash-reporting/logs": {
    post: {
      requestBody: string;
    };
  };
  "/riotclient/v1/elevation-requests": {
    post: {
      requestBody: LCU_Type.ElevationRequest;
    };
  };
  "/riotclient/v1/self-update-info": {
    put: {
      parameters: {
        url: string;
        uuid: string;
      };
    };
  };
  "/riotclient/zoom-scale": {
    get: {
      responce: number;
    };
    post: {
      parameters: {
        /**
         * The new value of the zoom scale.
         */
        newZoomScale: number;
      };
    };
  };
  "/sanitizer/v1/containsSanitized": {
    post: {
      requestBody: LCU_Type.SanitizerContainsSanitizedRequest;
      responce: LCU_Type.SanitizerContainsSanitizedResponse;
    };
  };
  "/sanitizer/v1/sanitize": {
    post: {
      requestBody: LCU_Type.SanitizerSanitizeRequest;
      responce: LCU_Type.SanitizerSanitizeResponse;
    };
  };
  "/sanitizer/v1/status": {
    get: {
      responce: LCU_Type.SanitizerSanitizerStatus;
    };
  };
  "/swagger/v1/api-docs": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/swagger/v1/api-docs/{api}": {
    get: {
      parameters: {
        /**
         * API to get a declaration for
         */
        api: string;
      };
      responce: boolean | undefined;
    };
  };
  "/swagger/v2/swagger.json": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/swagger/v3/openapi.json": {
    get: {
      responce: boolean | undefined;
    };
  };
  "/system/v1/builds": {
    get: {
      responce: LCU_Type.BuildInfo;
    };
  };
  "/telemetry/v1/application-start-time": {
    get: {
      responce: number;
    };
  };
  "/telemetry/v1/common-data/{key}": {
    post: {
      parameters: {
        /**
         * The name of the common data key
         */
        key: string;
      };
      requestBody: string;
    };
  };
  "/telemetry/v1/events-once/{eventType}": {
    post: {
      parameters: {
        /**
         * The name of the event type
         */
        eventType: string;
        /**
         * A unique tag used to ensure this event is sent only once
         */
        onceTag: string;
      };
      requestBody: boolean | undefined | undefined;
    };
  };
  "/telemetry/v1/events-with-perf-info/{eventType}": {
    post: {
      parameters: {
        /**
         * The name of the event type
         */
        eventType: string;
      };
      requestBody: boolean | undefined | undefined;
    };
  };
  "/telemetry/v1/events/{eventType}": {
    post: {
      parameters: {
        /**
         * The name of the event type
         */
        eventType: string;
      };
      requestBody: boolean | undefined | undefined;
    };
  };
  "/telemetry/v3/events-once/{eventType}": {
    post: {
      parameters: {
        /**
         * The name of the event type
         */
        eventType: string;
        /**
         * A unique tag used to ensure this event is sent only once
         */
        onceTag: string;
      };
      requestBody: boolean | undefined | undefined;
    };
  };
  "/telemetry/v3/events/{eventType}": {
    post: {
      parameters: {
        /**
         * The name of the event type
         */
        eventType: string;
      };
      requestBody: boolean | undefined | undefined;
    };
  };
  "/tracing/v1/performance/{name}": {
    delete: {
      parameters: {
        name: string;
      };
    };
    post: {
      parameters: {
        name: string;
      };
    };
  };
  "/tracing/v1/trace/event": {
    post: {
      requestBody: LCU_Type.TracingEventV1;
    };
  };
  "/tracing/v1/trace/module": {
    post: {
      requestBody: LCU_Type.TracingModuleV1;
    };
  };
  "/tracing/v1/trace/non-timing-event/{eventName}": {
    post: {
      parameters: {
        /**
         * Name of the event
         */
        eventName: string;
        /**
         * The value to be recorded
         */
        value: string;
        /**
         * The unit of measurement for the value
         */
        unit: string;
      };
      requestBody: number;
    };
  };
  "/tracing/v1/trace/phase/begin": {
    post: {
      requestBody: LCU_Type.TracingPhaseBeginV1;
    };
  };
  "/tracing/v1/trace/phase/end": {
    post: {
      requestBody: LCU_Type.TracingPhaseEndV1;
    };
  };
  "/tracing/v1/trace/step-event": {
    post: {
      requestBody: string;
    };
  };
  "/tracing/v1/trace/time-series-event/{eventName}": {
    delete: {
      parameters: {
        /**
         * Name of the event
         */
        eventName: string;
        /**
         * When the event occurred
         */
        when: number;
        /**
         * Optional eventName suffix to apply that mutates the event name to indicate the outcome
         */
        suffix?: string;
      };
    };
    post: {
      parameters: {
        /**
         * Name of the event
         */
        eventName: string;
      };
      requestBody: number;
    };
  };
  "/tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}": {
    post: {
      parameters: {
        /**
         * Plugin name
         */
        eventName: string;
        /**
         * Name of the marker within the event
         */
        markerName: string;
      };
      requestBody: number;
    };
  };
  "/voice-chat/v1/audio-properties": {
    get: {
      responce: LCU_Type.VoiceChatAudioPropertiesResource;
    };
  };
  "/voice-chat/v1/call-stats/aggregate": {
    get: {
      responce: LCU_Type.VoiceChatCallStatsResource;
    };
  };
  "/voice-chat/v1/call-stats/{id}": {
    get: {
      parameters: {
        id: string;
      };
      responce: Array<LCU_Type.VoiceChatCallStatsResource>;
    };
  };
  "/voice-chat/v1/codec-settings": {
    get: {
      responce: LCU_Type.VoiceChatCodecSettingsResource;
    };
    put: {
      requestBody: LCU_Type.VoiceChatUpdateCodecSettingsResource;
    };
  };
  "/voice-chat/v1/config": {
    get: {
      responce: LCU_Type.VoiceChatConfigResource;
    };
  };
  "/voice-chat/v1/errors": {
    get: {
      responce: Array<LCU_Type.VoiceChatVoiceErrorCounterResource>;
    };
  };
  "/voice-chat/v1/push-to-talk": {
    get: {
      responce: LCU_Type.VoiceChatPushToTalkResource;
    };
    put: {
      requestBody: LCU_Type.VoiceChatPushToTalkResource;
      responce: boolean | undefined;
    };
  };
  "/voice-chat/v1/push-to-talk/check-available": {
    post: {
      requestBody: number;
      responce: boolean;
    };
  };
  "/voice-chat/v2/devices/capture": {
    get: {
      responce: Array<LCU_Type.VoiceChatDeviceResource>;
    };
  };
  "/voice-chat/v2/devices/capture/permission": {
    get: {
      responce: LCU_Type.VoiceChatCaptureDevicePermissionStatus;
    };
  };
  "/voice-chat/v2/devices/capture/prompt-for-permission": {
    put: {};
  };
  "/voice-chat/v2/devices/render": {
    get: {
      responce: Array<LCU_Type.VoiceChatDeviceResource>;
    };
  };
  "/voice-chat/v2/sessions": {
    delete: {};
    get: {
      responce: Array<LCU_Type.VoiceChatSessionResource>;
    };
    post: {
      parameters: {
        JWT: string;
      };
      responce: LCU_Type.VoiceChatSessionResource;
    };
  };
  "/voice-chat/v2/sessions/{id}": {
    delete: {
      parameters: {
        id: string;
      };
    };
    get: {
      parameters: {
        id: string;
      };
      responce: LCU_Type.VoiceChatSessionResource;
    };
    post: {
      parameters: {
        id: string;
        JWT: string;
      };
      responce: LCU_Type.VoiceChatSessionResource;
    };
  };
  "/voice-chat/v2/sessions/{sessionId}/participants/{participantId}": {
    get: {
      parameters: {
        sessionId: string;
        participantId: string;
      };
      responce: LCU_Type.VoiceChatParticipantResource;
    };
    put: {
      parameters: {
        sessionId: string;
        participantId: string;
      };
      requestBody: LCU_Type.VoiceChatUpdateParticipantResource;
    };
  };
  "/voice-chat/v2/settings": {
    get: {
      responce: LCU_Type.VoiceChatSettingsResource;
    };
    put: {
      requestBody: LCU_Type.VoiceChatUpdateSettingsResource;
    };
  };
  "/voice-chat/v2/state": {
    get: {
      responce: LCU_Type.VoiceChatStateResource;
    };
  };
  "/{plugin}/assets/{path}": {
    get: {
      parameters: {
        /**
         * Plugin name to serve from
         */
        plugin: string;
        /**
         * Path to the asset to serve
         */
        path: string;
        /**
         * optional ETag of the asset that the caller has cached
         */
        "if-none-match"?: string;
      };
      responce: boolean | undefined;
    };
    head: {
      parameters: {
        /**
         * Plugin name to serve from
         */
        plugin: string;
        /**
         * Path to the asset to serve
         */
        path: string;
        /**
         * optional ETag of the asset that the caller has cached
         */
        "if-none-match"?: string;
      };
      responce: boolean | undefined;
    };
  };
}

export type Paths = keyof RequestInfo;
export type MethodsOf<Path extends Paths> = keyof RequestInfo[Path];

export type InfoOf<Path extends Paths, Method extends MethodsOf<Path>> = RequestInfo[Path][Method];

export type PropertyOf<Object, Property> = Object[Property & keyof Object];
