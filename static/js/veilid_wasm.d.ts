/* tslint:disable */
/* eslint-disable */
/**
*/
export function initialize_veilid_wasm(): void;
/**
* @param {string} platform_config
*/
export function initialize_veilid_core(platform_config: string): void;
/**
* @param {string} layer
* @param {string} log_level
*/
export function change_log_level(layer: string, log_level: string): void;
/**
* @param {string} layer
* @param {string} log_ignore
*/
export function change_log_ignore(layer: string, log_ignore: string): void;
/**
* @param {Function} update_callback_js
* @param {string} json_config
* @returns {Promise<any>}
*/
export function startup_veilid_core(update_callback_js: Function, json_config: string): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function get_veilid_state(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function attach(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function detach(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function shutdown_veilid_core(): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function routing_context(): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function release_routing_context(id: number): number;
/**
* @param {number} id
* @returns {number}
*/
export function routing_context_with_default_safety(id: number): number;
/**
* @param {number} id
* @param {string} safety_selection
* @returns {number}
*/
export function routing_context_with_safety(id: number, safety_selection: string): number;
/**
* @param {number} id
* @param {string} sequencing
* @returns {number}
*/
export function routing_context_with_sequencing(id: number, sequencing: string): number;
/**
* @param {number} id
* @returns {Promise<any>}
*/
export function routing_context_safety(id: number): Promise<any>;
/**
* @param {number} id
* @param {string} target_string
* @param {string} request
* @returns {Promise<any>}
*/
export function routing_context_app_call(id: number, target_string: string, request: string): Promise<any>;
/**
* @param {number} id
* @param {string} target_string
* @param {string} message
* @returns {Promise<any>}
*/
export function routing_context_app_message(id: number, target_string: string, message: string): Promise<any>;
/**
* @param {number} id
* @param {string} schema
* @param {number} kind
* @returns {Promise<any>}
*/
export function routing_context_create_dht_record(id: number, schema: string, kind: number): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string | undefined} [writer]
* @returns {Promise<any>}
*/
export function routing_context_open_dht_record(id: number, key: string, writer?: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @returns {Promise<any>}
*/
export function routing_context_close_dht_record(id: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @returns {Promise<any>}
*/
export function routing_context_delete_dht_record(id: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {number} subkey
* @param {boolean} force_refresh
* @returns {Promise<any>}
*/
export function routing_context_get_dht_value(id: number, key: string, subkey: number, force_refresh: boolean): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {number} subkey
* @param {string} data
* @param {string | undefined} [writer]
* @returns {Promise<any>}
*/
export function routing_context_set_dht_value(id: number, key: string, subkey: number, data: string, writer?: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string} subkeys
* @param {string} expiration
* @param {number} count
* @returns {Promise<any>}
*/
export function routing_context_watch_dht_values(id: number, key: string, subkeys: string, expiration: string, count: number): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string} subkeys
* @returns {Promise<any>}
*/
export function routing_context_cancel_dht_watch(id: number, key: string, subkeys: string): Promise<any>;
/**
* @param {number} id
* @param {string} key
* @param {string} subkeys
* @param {string} scope
* @returns {Promise<any>}
*/
export function routing_context_inspect_dht_record(id: number, key: string, subkeys: string, scope: string): Promise<any>;
/**
* @returns {Promise<any>}
*/
export function new_private_route(): Promise<any>;
/**
* @param {string} stability
* @param {string} sequencing
* @returns {Promise<any>}
*/
export function new_custom_private_route(stability: string, sequencing: string): Promise<any>;
/**
* @param {string} blob
* @returns {Promise<any>}
*/
export function import_remote_private_route(blob: string): Promise<any>;
/**
* @param {string} route_id
* @returns {Promise<any>}
*/
export function release_private_route(route_id: string): Promise<any>;
/**
* @param {string} call_id
* @param {string} message
* @returns {Promise<any>}
*/
export function app_call_reply(call_id: string, message: string): Promise<any>;
/**
* @param {string} name
* @param {number} column_count
* @returns {Promise<any>}
*/
export function open_table_db(name: string, column_count: number): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function release_table_db(id: number): number;
/**
* @param {string} name
* @returns {Promise<any>}
*/
export function delete_table_db(name: string): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function table_db_get_column_count(id: number): number;
/**
* @param {number} id
* @param {number} col
* @returns {Promise<any>}
*/
export function table_db_get_keys(id: number, col: number): Promise<any>;
/**
* @param {number} id
* @returns {number}
*/
export function table_db_transact(id: number): number;
/**
* @param {number} id
* @returns {number}
*/
export function release_table_db_transaction(id: number): number;
/**
* @param {number} id
* @returns {Promise<any>}
*/
export function table_db_transaction_commit(id: number): Promise<any>;
/**
* @param {number} id
* @returns {Promise<any>}
*/
export function table_db_transaction_rollback(id: number): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @param {string} value
* @returns {Promise<any>}
*/
export function table_db_transaction_store(id: number, col: number, key: string, value: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @returns {Promise<any>}
*/
export function table_db_transaction_delete(id: number, col: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @param {string} value
* @returns {Promise<any>}
*/
export function table_db_store(id: number, col: number, key: string, value: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @returns {Promise<any>}
*/
export function table_db_load(id: number, col: number, key: string): Promise<any>;
/**
* @param {number} id
* @param {number} col
* @param {string} key
* @returns {Promise<any>}
*/
export function table_db_delete(id: number, col: number, key: string): Promise<any>;
/**
* @returns {string}
*/
export function valid_crypto_kinds(): string;
/**
* @returns {number}
*/
export function best_crypto_kind(): number;
/**
* @param {string} node_ids
* @param {string} data
* @param {string} signatures
* @returns {Promise<any>}
*/
export function verify_signatures(node_ids: string, data: string, signatures: string): Promise<any>;
/**
* @param {string} data
* @param {string} key_pairs
* @returns {Promise<any>}
*/
export function generate_signatures(data: string, key_pairs: string): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function generate_key_pair(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @returns {Promise<any>}
*/
export function crypto_cached_dh(kind: number, key: string, secret: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @returns {Promise<any>}
*/
export function crypto_compute_dh(kind: number, key: string, secret: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @param {string} domain
* @returns {Promise<any>}
*/
export function crypto_generate_shared_secret(kind: number, key: string, secret: string, domain: string): Promise<any>;
/**
* @param {number} kind
* @param {number} len
* @returns {Promise<any>}
*/
export function crypto_random_bytes(kind: number, len: number): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_default_salt_length(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} password
* @param {string} salt
* @returns {Promise<any>}
*/
export function crypto_hash_password(kind: number, password: string, salt: string): Promise<any>;
/**
* @param {number} kind
* @param {string} password
* @param {string} password_hash
* @returns {Promise<any>}
*/
export function crypto_verify_password(kind: number, password: string, password_hash: string): Promise<any>;
/**
* @param {number} kind
* @param {string} password
* @param {string} salt
* @returns {Promise<any>}
*/
export function crypto_derive_shared_secret(kind: number, password: string, salt: string): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_random_nonce(kind: number): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_random_shared_secret(kind: number): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_generate_key_pair(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} data
* @returns {Promise<any>}
*/
export function crypto_generate_hash(kind: number, data: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @returns {Promise<any>}
*/
export function crypto_validate_key_pair(kind: number, key: string, secret: string): Promise<any>;
/**
* @param {number} kind
* @param {string} data
* @param {string} hash
* @returns {Promise<any>}
*/
export function crypto_validate_hash(kind: number, data: string, hash: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key1
* @param {string} key2
* @returns {Promise<any>}
*/
export function crypto_distance(kind: number, key1: string, key2: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} secret
* @param {string} data
* @returns {Promise<any>}
*/
export function crypto_sign(kind: number, key: string, secret: string, data: string): Promise<any>;
/**
* @param {number} kind
* @param {string} key
* @param {string} data
* @param {string} signature
* @returns {Promise<any>}
*/
export function crypto_verify(kind: number, key: string, data: string, signature: string): Promise<any>;
/**
* @param {number} kind
* @returns {Promise<any>}
*/
export function crypto_aead_overhead(kind: number): Promise<any>;
/**
* @param {number} kind
* @param {string} body
* @param {string} nonce
* @param {string} shared_secret
* @param {string | undefined} [associated_data]
* @returns {Promise<any>}
*/
export function crypto_decrypt_aead(kind: number, body: string, nonce: string, shared_secret: string, associated_data?: string): Promise<any>;
/**
* @param {number} kind
* @param {string} body
* @param {string} nonce
* @param {string} shared_secret
* @param {string | undefined} [associated_data]
* @returns {Promise<any>}
*/
export function crypto_encrypt_aead(kind: number, body: string, nonce: string, shared_secret: string, associated_data?: string): Promise<any>;
/**
* @param {number} kind
* @param {string} body
* @param {string} nonce
* @param {string} shared_secret
* @returns {Promise<any>}
*/
export function crypto_crypt_no_auth(kind: number, body: string, nonce: string, shared_secret: string): Promise<any>;
/**
* @returns {string}
*/
export function now(): string;
/**
* @param {string} command
* @returns {Promise<any>}
*/
export function debug(command: string): Promise<any>;
/**
* @returns {string}
*/
export function veilid_version_string(): string;
/**
* @returns {any}
*/
export function veilid_version(): any;
/**
* @returns {string}
*/
export function default_veilid_config(): string;
export interface VeilidWASMConfigLoggingPerformance {
    enabled: boolean;
    level: VeilidConfigLogLevel;
    logs_in_timings: boolean;
    logs_in_console: boolean;
    ignore_log_targets: string[];
}

export interface VeilidWASMConfigLoggingAPI {
    enabled: boolean;
    level: VeilidConfigLogLevel;
    ignore_log_targets: string[];
}

export interface VeilidWASMConfigLogging {
    performance: VeilidWASMConfigLoggingPerformance;
    api: VeilidWASMConfigLoggingAPI;
}

export interface VeilidWASMConfig {
    logging: VeilidWASMConfigLogging;
}

export interface VeilidRouteBlob {
    route_id: RouteId;
    blob: string;
}

export interface VeilidVersion {
    major: number;
    minor: number;
    patch: number;
}


export type UpdateVeilidFunction = (event: VeilidUpdate) => void;

// Type overrides for structs that always get serialized by serde.
export type CryptoKey = string;
export type Nonce = string;
export type Signature = string;
export type KeyPair = `${PublicKey}:${SecretKey}`;
export type FourCC = "NONE" | "VLD0" | string;
export type CryptoTyped<TCryptoKey extends string> = `${FourCC}:${TCryptoKey}`;
export type CryptoTypedGroup<TCryptoKey extends string> = Array<CryptoTyped<TCryptoKey>>;


export type TypedSharedSecretGroup = CryptoTypedGroup<SharedSecret>;

export type TypedSignatureGroup = CryptoTypedGroup<Signature>;

export type TypedKeyPairGroup = CryptoTypedGroup<KeyPair>;

export type TypedSecretGroup = CryptoTypedGroup<SecretKey>;

export type TypedKeyGroup = CryptoTypedGroup<PublicKey>;

export type TypedSharedSecret = CryptoTyped<SharedSecret>;

export type TypedSignature = CryptoTyped<Signature>;

export type TypedKeyPair = CryptoTyped<KeyPair>;

export type TypedSecret = CryptoTyped<SecretKey>;

export type TypedKey = CryptoTyped<PublicKey>;

export type CryptoKind = FourCC;

export interface VeilidConfigInner {
    program_name: string;
    namespace: string;
    capabilities: VeilidConfigCapabilities;
    protected_store: VeilidConfigProtectedStore;
    table_store: VeilidConfigTableStore;
    block_store: VeilidConfigBlockStore;
    network: VeilidConfigNetwork;
}

declare namespace VeilidConfigLogLevel {
    export type Off = "Off";
    export type Error = "Error";
    export type Warn = "Warn";
    export type Info = "Info";
    export type Debug = "Debug";
    export type Trace = "Trace";
}

export type VeilidConfigLogLevel = "Off" | "Error" | "Warn" | "Info" | "Debug" | "Trace";

export interface VeilidConfigCapabilities {
    disable: FourCC[];
}

export interface VeilidConfigProtectedStore {
    allow_insecure_fallback: boolean;
    always_use_insecure_storage: boolean;
    directory: string;
    delete: boolean;
    device_encryption_key_password: string;
    new_device_encryption_key_password?: string;
}

export interface VeilidConfigBlockStore {
    directory: string;
    delete: boolean;
}

export interface VeilidConfigTableStore {
    directory: string;
    delete: boolean;
}

export interface VeilidConfigNetwork {
    connection_initial_timeout_ms: number;
    connection_inactivity_timeout_ms: number;
    max_connections_per_ip4: number;
    max_connections_per_ip6_prefix: number;
    max_connections_per_ip6_prefix_size: number;
    max_connection_frequency_per_min: number;
    client_allowlist_timeout_ms: number;
    reverse_connection_receipt_time_ms: number;
    hole_punch_receipt_time_ms: number;
    network_key_password?: string;
    routing_table: VeilidConfigRoutingTable;
    rpc: VeilidConfigRPC;
    dht: VeilidConfigDHT;
    upnp: boolean;
    detect_address_changes: boolean;
    restricted_nat_retries: number;
    tls: VeilidConfigTLS;
    application: VeilidConfigApplication;
    protocol: VeilidConfigProtocol;
}

export interface VeilidConfigRoutingTable {
    node_id: TypedKeyGroup;
    node_id_secret: TypedSecretGroup;
    bootstrap: string[];
    limit_over_attached: number;
    limit_fully_attached: number;
    limit_attached_strong: number;
    limit_attached_good: number;
    limit_attached_weak: number;
}

export interface VeilidConfigRPC {
    concurrency: number;
    queue_size: number;
    max_timestamp_behind_ms?: number;
    max_timestamp_ahead_ms?: number;
    timeout_ms: number;
    max_route_hop_count: number;
    default_route_hop_count: number;
}

export interface VeilidConfigDHT {
    max_find_node_count: number;
    resolve_node_timeout_ms: number;
    resolve_node_count: number;
    resolve_node_fanout: number;
    get_value_timeout_ms: number;
    get_value_count: number;
    get_value_fanout: number;
    set_value_timeout_ms: number;
    set_value_count: number;
    set_value_fanout: number;
    min_peer_count: number;
    min_peer_refresh_time_ms: number;
    validate_dial_info_receipt_time_ms: number;
    local_subkey_cache_size: number;
    local_max_subkey_cache_memory_mb: number;
    remote_subkey_cache_size: number;
    remote_max_records: number;
    remote_max_subkey_cache_memory_mb: number;
    remote_max_storage_space_mb: number;
    public_watch_limit: number;
    member_watch_limit: number;
    max_watch_expiration_ms: number;
}

export interface VeilidConfigTLS {
    certificate_path: string;
    private_key_path: string;
    connection_initial_timeout_ms: number;
}

export interface VeilidConfigProtocol {
    udp: VeilidConfigUDP;
    tcp: VeilidConfigTCP;
    ws: VeilidConfigWS;
    wss: VeilidConfigWSS;
}

export interface VeilidConfigWSS {
    connect: boolean;
    listen: boolean;
    max_connections: number;
    listen_address: string;
    path: string;
    url?: string;
}

export interface VeilidConfigWS {
    connect: boolean;
    listen: boolean;
    max_connections: number;
    listen_address: string;
    path: string;
    url?: string;
}

export interface VeilidConfigTCP {
    connect: boolean;
    listen: boolean;
    max_connections: number;
    listen_address: string;
    public_address?: string;
}

export interface VeilidConfigUDP {
    enabled: boolean;
    socket_pool_size: number;
    listen_address: string;
    public_address?: string;
}

export interface VeilidConfigApplication {
    https: VeilidConfigHTTPS;
    http: VeilidConfigHTTP;
}

export interface VeilidConfigHTTP {
    enabled: boolean;
    listen_address: string;
    path: string;
    url?: string;
}

export interface VeilidConfigHTTPS {
    enabled: boolean;
    listen_address: string;
    path: string;
    url?: string;
}

export interface VeilidState {
    attachment: VeilidStateAttachment;
    network: VeilidStateNetwork;
    config: VeilidStateConfig;
}

export type VeilidUpdate = ({ kind: "Log" } & VeilidLog) | ({ kind: "AppMessage" } & VeilidAppMessage) | ({ kind: "AppCall" } & VeilidAppCall) | ({ kind: "Attachment" } & VeilidStateAttachment) | ({ kind: "Network" } & VeilidStateNetwork) | ({ kind: "Config" } & VeilidStateConfig) | ({ kind: "RouteChange" } & VeilidRouteChange) | ({ kind: "ValueChange" } & VeilidValueChange) | { kind: "Shutdown" };

export interface VeilidValueChange {
    key: TypedKey;
    subkeys: ValueSubkeyRangeSet;
    count: number;
    value: ValueData | undefined;
}

export interface VeilidStateConfig {
    config: VeilidConfigInner;
}

export interface VeilidRouteChange {
    dead_routes: RouteId[];
    dead_remote_routes: RouteId[];
}

export interface VeilidStateNetwork {
    started: boolean;
    bps_down: ByteCount;
    bps_up: ByteCount;
    peers: PeerTableData[];
}

export interface PeerTableData {
    node_ids: string[];
    peer_address: string;
    peer_stats: PeerStats;
}

export interface VeilidStateAttachment {
    state: AttachmentState;
    public_internet_ready: boolean;
    local_network_ready: boolean;
}

declare namespace AttachmentState {
    export type Detached = "Detached";
    export type Attaching = "Attaching";
    export type AttachedWeak = "AttachedWeak";
    export type AttachedGood = "AttachedGood";
    export type AttachedStrong = "AttachedStrong";
    export type FullyAttached = "FullyAttached";
    export type OverAttached = "OverAttached";
    export type Detaching = "Detaching";
}

export type AttachmentState = "Detached" | "Attaching" | "AttachedWeak" | "AttachedGood" | "AttachedStrong" | "FullyAttached" | "OverAttached" | "Detaching";

export interface VeilidLog {
    log_level: VeilidLogLevel;
    message: string;
    backtrace?: string;
}

declare namespace VeilidLogLevel {
    export type Error = "Error";
    export type Warn = "Warn";
    export type Info = "Info";
    export type Debug = "Debug";
    export type Trace = "Trace";
}

export type VeilidLogLevel = "Error" | "Warn" | "Info" | "Debug" | "Trace";

export interface PeerStats {
    time_added: Timestamp;
    rpc_stats: RPCStats;
    latency: LatencyStats | undefined;
    transfer: TransferStatsDownUp;
}

export interface RPCStats {
    messages_sent: number;
    messages_rcvd: number;
    questions_in_flight: number;
    last_question_ts: Timestamp | undefined;
    last_seen_ts: Timestamp | undefined;
    first_consecutive_seen_ts: Timestamp | undefined;
    recent_lost_answers: number;
    failed_to_send: number;
}

export interface TransferStatsDownUp {
    down: TransferStats;
    up: TransferStats;
}

export interface TransferStats {
    total: ByteCount;
    maximum: ByteCount;
    average: ByteCount;
    minimum: ByteCount;
}

export interface LatencyStats {
    fastest: TimestampDuration;
    average: TimestampDuration;
    slowest: TimestampDuration;
}

export interface SafetySpec {
    preferred_route?: string;
    hop_count: number;
    stability: Stability;
    sequencing: Sequencing;
}

type __SafetySelectionSafetySpec = SafetySpec;
type __SafetySelectionSequencing = Sequencing;
declare namespace SafetySelection {
    export type Unsafe = { Unsafe: __SafetySelectionSequencing };
    export type Safe = { Safe: __SafetySelectionSafetySpec };
}

export type SafetySelection = { Unsafe: Sequencing } | { Safe: SafetySpec };

declare namespace Stability {
    export type LowLatency = "LowLatency";
    export type Reliable = "Reliable";
}

export type Stability = "LowLatency" | "Reliable";

declare namespace Sequencing {
    export type NoPreference = "NoPreference";
    export type PreferOrdered = "PreferOrdered";
    export type EnsureOrdered = "EnsureOrdered";
}

export type Sequencing = "NoPreference" | "PreferOrdered" | "EnsureOrdered";

export interface ValueData {
    seq: ValueSeqNum;
    data: Uint8Array;
    writer: PublicKey;
}

declare namespace DHTReportScope {
    export type Local = "Local";
    export type SyncGet = "SyncGet";
    export type SyncSet = "SyncSet";
    export type UpdateGet = "UpdateGet";
    export type UpdateSet = "UpdateSet";
}

export type DHTReportScope = "Local" | "SyncGet" | "SyncSet" | "UpdateGet" | "UpdateSet";

export interface DHTRecordReport {
    subkeys: ValueSubkeyRangeSet;
    local_seqs: ValueSeqNum[];
    network_seqs: ValueSeqNum[];
}

export interface VeilidAppCall {
    sender?: TypedKey;
    route_id?: string;
    message: Uint8Array;
    call_id: OperationId;
}

export interface VeilidAppMessage {
    sender?: string;
    route_id?: string;
    message: Uint8Array;
}

export interface KeyPair {
    key: PublicKey;
    secret: SecretKey;
}

export interface Nonce {
    bytes: number[];
}

export interface Signature {
    bytes: number[];
}

export type CryptoKeyDistance = CryptoKey;

export type RouteId = CryptoKey;

export type SharedSecret = CryptoKey;

export type HashDigest = CryptoKey;

export type SecretKey = CryptoKey;

export type PublicKey = CryptoKey;

export interface CryptoKey {
    bytes: number[];
}

export type ValueSeqNum = number;

export type ValueSubkey = number;

export type ValueSubkeyRangeSet = RangeSetBlaze<ValueSubkey>;

export type DHTSchema = ({ kind: "DFLT" } & DHTSchemaDFLT) | ({ kind: "SMPL" } & DHTSchemaSMPL);

export interface DHTSchemaSMPL {
    o_cnt: number;
    members: DHTSchemaSMPLMember[];
}

export interface DHTSchemaSMPLMember {
    m_key: PublicKey;
    m_cnt: number;
}

export interface DHTSchemaDFLT {
    o_cnt: number;
}

export interface DHTRecordDescriptor {
    key: TypedKey;
    owner: PublicKey;
    owner_secret?: SecretKey;
    schema: DHTSchema;
}

export type ByteCount = AlignedU64;

export type OperationId = AlignedU64;

export type TimestampDuration = AlignedU64;

export type Timestamp = AlignedU64;

export type AlignedU64 = string;

export type VeilidAPIError = { kind: "NotInitialized" } | { kind: "AlreadyInitialized" } | { kind: "Timeout" } | { kind: "TryAgain"; message: string } | { kind: "Shutdown" } | { kind: "InvalidTarget"; message: string } | { kind: "NoConnection"; message: string } | { kind: "KeyNotFound"; key: TypedKey } | { kind: "Internal"; message: string } | { kind: "Unimplemented"; message: string } | { kind: "ParseError"; message: string; value: string } | { kind: "InvalidArgument"; context: string; argument: string; value: string } | { kind: "MissingArgument"; context: string; argument: string } | { kind: "Generic"; message: string };

/**
*/
export class VeilidRoutingContext {
  free(): void;
/**
* Create a new VeilidRoutingContext, without any privacy or sequencing settings.
*/
  constructor();
/**
* Same as `new VeilidRoutingContext()` except easier to chain.
* @returns {VeilidRoutingContext}
*/
  static create(): VeilidRoutingContext;
/**
* Allocate a new private route set with default cryptography and network options.
* Returns a route id and a publishable 'blob' with the route encrypted with each crypto kind.
* Those nodes importing the blob will have their choice of which crypto kind to use.
*
* Returns a route id and 'blob' that can be published over some means (DHT or otherwise) to be imported by another Veilid node.
* @returns {Promise<VeilidRouteBlob>}
*/
  static newPrivateRoute(): Promise<VeilidRouteBlob>;
/**
* Import a private route blob as a remote private route.
*
* Returns a route id that can be used to send private messages to the node creating this route.
* @param {string} blob
* @returns {CryptoKey}
*/
  importRemotePrivateRoute(blob: string): CryptoKey;
/**
* Allocate a new private route and specify a specific cryptosystem, stability and sequencing preference.
* Returns a route id and a publishable 'blob' with the route encrypted with each crypto kind.
* Those nodes importing the blob will have their choice of which crypto kind to use.
*
* Returns a route id and 'blob' that can be published over some means (DHT or otherwise) to be imported by another Veilid node.
* @param {Stability} stability
* @param {Sequencing} sequencing
* @returns {Promise<VeilidRouteBlob>}
*/
  static newCustomPrivateRoute(stability: Stability, sequencing: Sequencing): Promise<VeilidRouteBlob>;
/**
* Release either a locally allocated or remotely imported private route.
*
* This will deactivate the route and free its resources and it can no longer be sent to or received from.
* @param {string} route_id
*/
  static releasePrivateRoute(route_id: string): void;
/**
* Respond to an AppCall received over a VeilidUpdate::AppCall.
*
* * `call_id` - specifies which call to reply to, and it comes from a VeilidUpdate::AppCall, specifically the VeilidAppCall::id() value.
* * `message` - is an answer blob to be returned by the remote node's RoutingContext::app_call() function, and may be up to 32768 bytes
* @param {string} call_id
* @param {Uint8Array} message
* @returns {Promise<void>}
*/
  static appCallReply(call_id: string, message: Uint8Array): Promise<void>;
/**
* Turn on sender privacy, enabling the use of safety routes. This is the default and
* calling this function is only necessary if you have previously disable safety or used other parameters.
* Returns a new instance of VeilidRoutingContext - does not mutate.
*
* Default values for hop count, stability and sequencing preferences are used.
*
* * Hop count default is dependent on config, but is set to 1 extra hop.
* * Stability default is to choose 'low latency' routes, preferring them over long-term reliability.
* * Sequencing default is to have no preference for ordered vs unordered message delivery
*
* To customize the safety selection in use, use [VeilidRoutingContext::withSafety].
* @returns {VeilidRoutingContext}
*/
  withDefaultSafety(): VeilidRoutingContext;
/**
* Use a custom [SafetySelection]. Can be used to disable safety via [SafetySelection::Unsafe]
* Returns a new instance of VeilidRoutingContext - does not mutate.
* @param {SafetySelection} safety_selection
* @returns {VeilidRoutingContext}
*/
  withSafety(safety_selection: SafetySelection): VeilidRoutingContext;
/**
* Use a specified `Sequencing` preference.
* Returns a new instance of VeilidRoutingContext - does not mutate.
* @param {Sequencing} sequencing
* @returns {VeilidRoutingContext}
*/
  withSequencing(sequencing: Sequencing): VeilidRoutingContext;
/**
* Get the safety selection in use on this routing context
* @returns the SafetySelection currently in use if successful.
* @returns {SafetySelection}
*/
  safety(): SafetySelection;
/**
* App-level unidirectional message that does not expect any value to be returned.
*
* Veilid apps may use this for arbitrary message passing.
*
* @param {string} target - can be either a direct node id or a private route.
* @param {string} message - an arbitrary message blob of up to `32768` bytes.
*/
  appMessage(target_string: string, message: Uint8Array): Promise<void>;
/**
* App-level bidirectional call that expects a response to be returned.
*
* Veilid apps may use this for arbitrary message passing.
*
* @param {string} target_string - can be either a direct node id or a private route.
* @param {Uint8Array} message - an arbitrary message blob of up to `32768` bytes.
* @returns {Uint8Array} an answer blob of up to `32768` bytes.
*/
  appCall(target_string: string, request: Uint8Array): Promise<Uint8Array>;
/**
* DHT Records Creates a new DHT record a specified crypto kind and schema
*
* The record is considered 'open' after the create operation succeeds.
*
* @returns the newly allocated DHT record's key if successful.
* @param {DHTSchema} schema
* @param {string} kind
* @returns {Promise<DHTRecordDescriptor>}
*/
  createDhtRecord(schema: DHTSchema, kind: string): Promise<DHTRecordDescriptor>;
/**
* Opens a DHT record at a specific key.
*
* Associates a secret if one is provided to provide writer capability. Records may only be opened or created. To re-open with a different routing context, first close the value.
*
* @returns the DHT record descriptor for the opened record if successful.
* @param {string} writer - Stringified key pair, in the form of `key:secret` where `key` and `secret` are base64Url encoded.
* @param {string} key - key of the DHT record.
*/
  openDhtRecord(key: string, writer?: string): Promise<DHTRecordDescriptor>;
/**
* Closes a DHT record at a specific key that was opened with create_dht_record or open_dht_record.
*
* Closing a record allows you to re-open it with a different routing context
* @param {string} key
* @returns {Promise<void>}
*/
  closeDhtRecord(key: string): Promise<void>;
/**
* Deletes a DHT record at a specific key
*
* If the record is opened, it must be closed before it is deleted.
* Deleting a record does not delete it from the network, but will remove the storage of the record locally,
* and will prevent its value from being refreshed on the network by this node.
* @param {string} key
* @returns {Promise<void>}
*/
  deleteDhtRecord(key: string): Promise<void>;
/**
* Gets the latest value of a subkey.
*
* May pull the latest value from the network, but by settings 'force_refresh' you can force a network data refresh.
*
* Returns `undefined` if the value subkey has not yet been set.
* Returns a Uint8Array of `data` if the value subkey has valid data.
* @param {string} key
* @param {number} subkey
* @param {boolean} forceRefresh
* @returns {Promise<ValueData | undefined>}
*/
  getDhtValue(key: string, subkey: number, forceRefresh: boolean): Promise<ValueData | undefined>;
/**
* Pushes a changed subkey value to the network
*
* Returns `undefined` if the value was successfully put.
* Returns a Uint8Array of `data` if the value put was older than the one available on the network.
* @param {string} key
* @param {number} subkey
* @param {Uint8Array} data
* @param {string | undefined} [writer]
* @returns {Promise<ValueData | undefined>}
*/
  setDhtValue(key: string, subkey: number, data: Uint8Array, writer?: string): Promise<ValueData | undefined>;
/**
* Add or update a watch to a DHT value that informs the user via an VeilidUpdate::ValueChange callback when the record has subkeys change.
* One remote node will be selected to perform the watch and it will offer an expiration time based on a suggestion, and make an attempt to
* continue to report changes via the callback. Nodes that agree to doing watches will be put on our 'ping' list to ensure they are still around
* otherwise the watch will be cancelled and will have to be re-watched.
*
* There is only one watch permitted per record. If a change to a watch is desired, the previous one will be overwritten.
* * `key` is the record key to watch. it must first be opened for reading or writing.
* * `subkeys` is the the range of subkeys to watch. The range must not exceed 512 discrete non-overlapping or adjacent subranges. If no range is specified, this is equivalent to watching the entire range of subkeys.
* * `expiration` is the desired timestamp of when to automatically terminate the watch, in microseconds. If this value is less than `network.rpc.timeout_ms` milliseconds in the future, this function will return an error immediately.
* * `count` is the number of times the watch will be sent, maximum. A zero value here is equivalent to a cancellation.
*
* Returns a timestamp of when the watch will expire. All watches are guaranteed to expire at some point in the future,
* and the returned timestamp will be no later than the requested expiration, but -may- be before the requested expiration.
* If the returned timestamp is zero it indicates that the watch creation or update has failed. In the case of a faild update, the watch is considered cancelled.
*
* DHT watches are accepted with the following conditions:
* * First-come first-served basis for arbitrary unauthenticated readers, up to network.dht.public_watch_limit per record
* * If a member (either the owner or a SMPL schema member) has opened the key for writing (even if no writing is performed) then the watch will be signed and guaranteed network.dht.member_watch_limit per writer
*
* Members can be specified via the SMPL schema and do not need to allocate writable subkeys in order to offer a member watch capability.
* @param {string} key
* @param {ValueSubkeyRangeSet | undefined} [subkeys]
* @param {string | undefined} [expiration]
* @param {number | undefined} [count]
* @returns {Promise<string>}
*/
  watchDhtValues(key: string, subkeys?: ValueSubkeyRangeSet, expiration?: string, count?: number): Promise<string>;
/**
* Cancels a watch early
*
* This is a convenience function that cancels watching all subkeys in a range. The subkeys specified here
* are subtracted from the watched subkey range. If no range is specified, this is equivalent to cancelling the entire range of subkeys.
* Only the subkey range is changed, the expiration and count remain the same.
* If no subkeys remain, the watch is entirely cancelled and will receive no more updates.
* Returns true if there is any remaining watch for this record
* Returns false if the entire watch has been cancelled
* @param {string} key
* @param {ValueSubkeyRangeSet | undefined} [subkeys]
* @returns {Promise<boolean>}
*/
  cancelDhtWatch(key: string, subkeys?: ValueSubkeyRangeSet): Promise<boolean>;
/**
* Inspects a DHT record for subkey state.
* This is useful for checking if you should push new subkeys to the network, or retrieve the current state of a record from the network
* to see what needs updating locally.
*
* * `key` is the record key to watch. it must first be opened for reading or writing.
* * `subkeys` is the the range of subkeys to inspect. The range must not exceed 512 discrete non-overlapping or adjacent subranges.
*    If no range is specified, this is equivalent to inspecting the entire range of subkeys. In total, the list of subkeys returned will be truncated at 512 elements.
* * `scope` is what kind of range the inspection has:
*
*   - DHTReportScope::Local
*     Results will be only for a locally stored record.
*     Useful for seeing what subkeys you have locally and which ones have not been retrieved
*
*   - DHTReportScope::SyncGet
*     Return the local sequence numbers and the network sequence numbers with GetValue fanout parameters
*     Provides an independent view of both the local sequence numbers and the network sequence numbers for nodes that
*     would be reached as if the local copy did not exist locally.
*     Useful for determining if the current local copy should be updated from the network.
*
*   - DHTReportScope::SyncSet
*     Return the local sequence numbers and the network sequence numbers with SetValue fanout parameters
*     Provides an independent view of both the local sequence numbers and the network sequence numbers for nodes that
*     would be reached as if the local copy did not exist locally.
*     Useful for determining if the unchanged local copy should be pushed to the network.
*
*   - DHTReportScope::UpdateGet
*     Return the local sequence numbers and the network sequence numbers with GetValue fanout parameters
*     Provides an view of both the local sequence numbers and the network sequence numbers for nodes that
*     would be reached as if a GetValue operation were being performed, including accepting newer values from the network.
*     Useful for determining which subkeys would change with a GetValue operation
*
*   - DHTReportScope::UpdateSet
*     Return the local sequence numbers and the network sequence numbers with SetValue fanout parameters
*     Provides an view of both the local sequence numbers and the network sequence numbers for nodes that
*     would be reached as if a SetValue operation were being performed, including accepting newer values from the network.
*     This simulates a SetValue with the initial sequence number incremented by 1, like a real SetValue would when updating.
*     Useful for determine which subkeys would change with an SetValue operation
*
* Returns a DHTRecordReport with the subkey ranges that were returned that overlapped the schema, and sequence numbers for each of the subkeys in the range.
* @param {string} key
* @param {ValueSubkeyRangeSet | undefined} [subkeys]
* @param {DHTReportScope | undefined} [scope]
* @returns {Promise<DHTRecordReport>}
*/
  inspectDhtRecord(key: string, subkeys?: ValueSubkeyRangeSet, scope?: DHTReportScope): Promise<DHTRecordReport>;
}
/**
*/
export class VeilidTableDB {
  free(): void;
/**
* If the column count is greater than an existing TableDB's column count,
* the database will be upgraded to add the missing columns.
* @param {string} tableName
* @param {number} columnCount
*/
  constructor(tableName: string, columnCount: number);
/**
* Get or create the TableDB database table.
* This is called automatically when performing actions on the TableDB.
* @returns {Promise<void>}
*/
  openTable(): Promise<void>;
/**
* Delete this TableDB.
* @returns {Promise<boolean>}
*/
  deleteTable(): Promise<boolean>;
/**
* Read a key from a column in the TableDB immediately.
* @param {number} columnId
* @param {Uint8Array} key
* @returns {Promise<Uint8Array | undefined>}
*/
  load(columnId: number, key: Uint8Array): Promise<Uint8Array | undefined>;
/**
* Store a key with a value in a column in the TableDB.
* Performs a single transaction immediately.
* @param {number} columnId
* @param {Uint8Array} key
* @param {Uint8Array} value
* @returns {Promise<void>}
*/
  store(columnId: number, key: Uint8Array, value: Uint8Array): Promise<void>;
/**
* Delete key with from a column in the TableDB.
* @param {number} columnId
* @param {Uint8Array} key
* @returns {Promise<Uint8Array | undefined>}
*/
  delete(columnId: number, key: Uint8Array): Promise<Uint8Array | undefined>;
/**
* Get the list of keys in a column of the TableDB.
*
* Returns an array of Uint8Array keys.
* @param {number} columnId
* @returns {Promise<Uint8Array[]>}
*/
  getKeys(columnId: number): Promise<Uint8Array[]>;
/**
* Start a TableDB write transaction.
* The transaction object must be committed or rolled back before dropping.
* @returns {Promise<VeilidTableDBTransaction>}
*/
  createTransaction(): Promise<VeilidTableDBTransaction>;
}
/**
*/
export class VeilidTableDBTransaction {
  free(): void;
/**
* Don't use this constructor directly.
* Use `.createTransaction()` on an instance of `VeilidTableDB` instead.
* @deprecated
*/
  constructor();
/**
* Commit the transaction. Performs all actions atomically.
* @returns {Promise<void>}
*/
  commit(): Promise<void>;
/**
* Rollback the transaction. Does nothing to the TableDB.
*/
  rollback(): void;
/**
* Store a key with a value in a column in the TableDB.
* Does not modify TableDB until `.commit()` is called.
* @param {number} col
* @param {Uint8Array} key
* @param {Uint8Array} value
*/
  store(col: number, key: Uint8Array, value: Uint8Array): void;
/**
* Delete key with from a column in the TableDB
* @param {number} col
* @param {Uint8Array} key
*/
  deleteKey(col: number, key: Uint8Array): void;
}
/**
*/
export class veilidClient {
  free(): void;
/**
* @param {VeilidWASMConfig} platformConfig
* @returns {Promise<void>}
*/
  static initializeCore(platformConfig: VeilidWASMConfig): Promise<void>;
/**
* Initialize a Veilid node, with the configuration in JSON format
*
* Must be called only once at the start of an application
*
* @param {UpdateVeilidFunction} update_callback_js - called when internal state of the Veilid node changes, for example, when app-level messages are received, when private routes die and need to be reallocated, or when routing table states change
* @param {string} json_config - called at startup to supply a JSON configuration object.
* @param {UpdateVeilidFunction} update_callback_js
* @param {string} json_config
* @returns {Promise<void>}
*/
  static startupCore(update_callback_js: UpdateVeilidFunction, json_config: string): Promise<void>;
/**
* @param {string} layer
* @param {VeilidConfigLogLevel} log_level
*/
  static changeLogLevel(layer: string, log_level: VeilidConfigLogLevel): void;
/**
* @param {string} layer
* @param {(string)[]} changes
*/
  static changeLogIgnore(layer: string, changes: (string)[]): void;
/**
* Shut down Veilid and terminate the API.
* @returns {Promise<void>}
*/
  static shutdownCore(): Promise<void>;
/**
* Get a full copy of the current state of Veilid.
* @returns {Promise<VeilidState>}
*/
  static getState(): Promise<VeilidState>;
/**
* Connect to the network.
* @returns {Promise<void>}
*/
  static attach(): Promise<void>;
/**
* Disconnect from the network.
* @returns {Promise<void>}
*/
  static detach(): Promise<void>;
/**
* Get the current timestamp, in string format
* @returns {string}
*/
  static now(): string;
/**
* Execute an 'internal debug command'.
* @param {string} command
* @returns {Promise<string>}
*/
  static debug(command: string): Promise<string>;
/**
* Return the cargo package version of veilid-core, in object format.
* @returns {VeilidVersion}
*/
  static version(): VeilidVersion;
/**
* Return the cargo package version of veilid-core, in string format.
* @returns {string}
*/
  static versionString(): string;
/**
* Return the default veilid configuration, in string format
* @returns {string}
*/
  static defaultConfig(): string;
}
/**
*/
export class veilidCrypto {
  free(): void;
/**
* @returns {string[]}
*/
  static validCryptoKinds(): string[];
/**
* @returns {string}
*/
  static bestCryptoKind(): string;
/**
* @param {string} kind
* @param {string} key
* @param {string} secret
* @returns {string}
*/
  static cachedDh(kind: string, key: string, secret: string): string;
/**
* @param {string} kind
* @param {string} key
* @param {string} secret
* @returns {string}
*/
  static computeDh(kind: string, key: string, secret: string): string;
/**
* @param {string} kind
* @param {string} key
* @param {string} secret
* @param {Uint8Array} domain
* @returns {string}
*/
  static generateSharedSecret(kind: string, key: string, secret: string, domain: Uint8Array): string;
/**
* @param {string} kind
* @param {number} len
* @returns {Uint8Array}
*/
  static randomBytes(kind: string, len: number): Uint8Array;
/**
* @param {string} kind
* @returns {number}
*/
  static defaultSaltLength(kind: string): number;
/**
* @param {string} kind
* @param {Uint8Array} password
* @param {Uint8Array} salt
* @returns {string}
*/
  static hashPassword(kind: string, password: Uint8Array, salt: Uint8Array): string;
/**
* @param {string} kind
* @param {Uint8Array} password
* @param {string} password_hash
* @returns {boolean}
*/
  static verifyPassword(kind: string, password: Uint8Array, password_hash: string): boolean;
/**
* @param {string} kind
* @param {Uint8Array} password
* @param {Uint8Array} salt
* @returns {string}
*/
  static deriveSharedSecret(kind: string, password: Uint8Array, salt: Uint8Array): string;
/**
* @param {string} kind
* @returns {string}
*/
  static randomNonce(kind: string): string;
/**
* @param {string} kind
* @returns {string}
*/
  static randomSharedSecret(kind: string): string;
/**
* @param {string[]} node_ids
* @param {Uint8Array} data
* @param {string[]} signatures
* @returns {string[]}
*/
  static verifySignatures(node_ids: string[], data: Uint8Array, signatures: string[]): string[];
/**
* @param {Uint8Array} data
* @param {string[]} key_pairs
* @returns {string[]}
*/
  static generateSignatures(data: Uint8Array, key_pairs: string[]): string[];
/**
* @param {string} kind
* @returns {string}
*/
  static generateKeyPair(kind: string): string;
/**
* @param {string} kind
* @param {Uint8Array} data
* @returns {string}
*/
  static generateHash(kind: string, data: Uint8Array): string;
/**
* @param {string} kind
* @param {string} key
* @param {string} secret
* @returns {boolean}
*/
  static validateKeyPair(kind: string, key: string, secret: string): boolean;
/**
* @param {string} kind
* @param {Uint8Array} data
* @param {string} hash
* @returns {boolean}
*/
  static validateHash(kind: string, data: Uint8Array, hash: string): boolean;
/**
* @param {string} kind
* @param {string} key1
* @param {string} key2
* @returns {string}
*/
  static distance(kind: string, key1: string, key2: string): string;
/**
* @param {string} kind
* @param {string} key
* @param {string} secret
* @param {Uint8Array} data
* @returns {string}
*/
  static sign(kind: string, key: string, secret: string, data: Uint8Array): string;
/**
* @param {string} kind
* @param {string} key
* @param {Uint8Array} data
* @param {string} signature
*/
  static verify(kind: string, key: string, data: Uint8Array, signature: string): void;
/**
* @param {string} kind
* @returns {number}
*/
  static aeadOverhead(kind: string): number;
/**
* @param {string} kind
* @param {Uint8Array} body
* @param {string} nonce
* @param {string} shared_secret
* @param {Uint8Array | undefined} [associated_data]
* @returns {Uint8Array}
*/
  static decryptAead(kind: string, body: Uint8Array, nonce: string, shared_secret: string, associated_data?: Uint8Array): Uint8Array;
/**
* @param {string} kind
* @param {Uint8Array} body
* @param {string} nonce
* @param {string} shared_secret
* @param {Uint8Array | undefined} [associated_data]
* @returns {Uint8Array}
*/
  static encryptAead(kind: string, body: Uint8Array, nonce: string, shared_secret: string, associated_data?: Uint8Array): Uint8Array;
/**
* @param {string} kind
* @param {Uint8Array} body
* @param {string} nonce
* @param {string} shared_secret
* @returns {Uint8Array}
*/
  static cryptNoAuth(kind: string, body: Uint8Array, nonce: string, shared_secret: string): Uint8Array;
/**
* Length of a crypto key in bytes
*/
  static readonly CRYPTO_KEY_LENGTH: number;
/**
* Length of a crypto key in bytes after encoding to base64url
*/
  static readonly CRYPTO_KEY_LENGTH_ENCODED: number;
/**
* Length of a hash digest in bytes
*/
  static readonly HASH_DIGEST_LENGTH: number;
/**
* Length of a hash digest in bytes after encoding to base64url
*/
  static readonly HASH_DIGEST_LENGTH_ENCODED: number;
/**
* Length of a nonce in bytes
*/
  static readonly NONCE_LENGTH: number;
/**
* Length of a nonce in bytes after encoding to base64url
*/
  static readonly NONCE_LENGTH_ENCODED: number;
/**
* Length of a crypto key in bytes
*/
  static readonly PUBLIC_KEY_LENGTH: number;
/**
* Length of a crypto key in bytes after encoding to base64url
*/
  static readonly PUBLIC_KEY_LENGTH_ENCODED: number;
/**
* Length of a route id in bytes
*/
  static readonly ROUTE_ID_LENGTH: number;
/**
* Length of a route id in bytes after encoding to base64url
*/
  static readonly ROUTE_ID_LENGTH_ENCODED: number;
/**
* Length of a secret key in bytes
*/
  static readonly SECRET_KEY_LENGTH: number;
/**
* Length of a secret key in bytes after encoding to base64url
*/
  static readonly SECRET_KEY_LENGTH_ENCODED: number;
/**
* Length of a shared secret in bytes
*/
  static readonly SHARED_SECRET_LENGTH: number;
/**
* Length of a shared secret in bytes after encoding to base64url
*/
  static readonly SHARED_SECRET_LENGTH_ENCODED: number;
/**
* Length of a signature in bytes
*/
  static readonly SIGNATURE_LENGTH: number;
/**
* Length of a signature in bytes after encoding to base64url
*/
  static readonly SIGNATURE_LENGTH_ENCODED: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly initialize_veilid_wasm: () => void;
  readonly initialize_veilid_core: (a: number, b: number) => void;
  readonly change_log_level: (a: number, b: number, c: number, d: number) => void;
  readonly change_log_ignore: (a: number, b: number, c: number, d: number) => void;
  readonly startup_veilid_core: (a: number, b: number, c: number) => number;
  readonly get_veilid_state: () => number;
  readonly attach: () => number;
  readonly detach: () => number;
  readonly shutdown_veilid_core: () => number;
  readonly routing_context: () => number;
  readonly release_routing_context: (a: number) => number;
  readonly routing_context_with_default_safety: (a: number) => number;
  readonly routing_context_with_safety: (a: number, b: number, c: number) => number;
  readonly routing_context_with_sequencing: (a: number, b: number, c: number) => number;
  readonly routing_context_safety: (a: number) => number;
  readonly routing_context_app_call: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_app_message: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_create_dht_record: (a: number, b: number, c: number, d: number) => number;
  readonly routing_context_open_dht_record: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_close_dht_record: (a: number, b: number, c: number) => number;
  readonly routing_context_delete_dht_record: (a: number, b: number, c: number) => number;
  readonly routing_context_get_dht_value: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_set_dht_value: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly routing_context_watch_dht_values: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly routing_context_cancel_dht_watch: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly routing_context_inspect_dht_record: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly new_private_route: () => number;
  readonly new_custom_private_route: (a: number, b: number, c: number, d: number) => number;
  readonly import_remote_private_route: (a: number, b: number) => number;
  readonly release_private_route: (a: number, b: number) => number;
  readonly app_call_reply: (a: number, b: number, c: number, d: number) => number;
  readonly open_table_db: (a: number, b: number, c: number) => number;
  readonly release_table_db: (a: number) => number;
  readonly delete_table_db: (a: number, b: number) => number;
  readonly table_db_get_column_count: (a: number) => number;
  readonly table_db_get_keys: (a: number, b: number) => number;
  readonly table_db_transact: (a: number) => number;
  readonly release_table_db_transaction: (a: number) => number;
  readonly table_db_transaction_commit: (a: number) => number;
  readonly table_db_transaction_rollback: (a: number) => number;
  readonly table_db_transaction_store: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly table_db_transaction_delete: (a: number, b: number, c: number, d: number) => number;
  readonly table_db_store: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly table_db_load: (a: number, b: number, c: number, d: number) => number;
  readonly table_db_delete: (a: number, b: number, c: number, d: number) => number;
  readonly valid_crypto_kinds: (a: number) => void;
  readonly best_crypto_kind: () => number;
  readonly verify_signatures: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly generate_signatures: (a: number, b: number, c: number, d: number) => number;
  readonly generate_key_pair: (a: number) => number;
  readonly crypto_cached_dh: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_compute_dh: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_generate_shared_secret: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly crypto_random_bytes: (a: number, b: number) => number;
  readonly crypto_default_salt_length: (a: number) => number;
  readonly crypto_hash_password: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_verify_password: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_derive_shared_secret: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_random_nonce: (a: number) => number;
  readonly crypto_random_shared_secret: (a: number) => number;
  readonly crypto_generate_key_pair: (a: number) => number;
  readonly crypto_generate_hash: (a: number, b: number, c: number) => number;
  readonly crypto_validate_key_pair: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_validate_hash: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_distance: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly crypto_sign: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly crypto_verify: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly crypto_aead_overhead: (a: number) => number;
  readonly crypto_decrypt_aead: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly crypto_encrypt_aead: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly crypto_crypt_no_auth: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly now: (a: number) => void;
  readonly debug: (a: number, b: number) => number;
  readonly veilid_version_string: (a: number) => void;
  readonly veilid_version: () => number;
  readonly default_veilid_config: (a: number) => void;
  readonly __wbg_veilidclient_free: (a: number) => void;
  readonly veilidclient_initializeCore: (a: number) => number;
  readonly veilidclient_startupCore: (a: number, b: number, c: number) => number;
  readonly veilidclient_changeLogLevel: (a: number, b: number, c: number) => void;
  readonly veilidclient_changeLogIgnore: (a: number, b: number, c: number, d: number) => void;
  readonly veilidclient_shutdownCore: () => number;
  readonly veilidclient_getState: () => number;
  readonly veilidclient_attach: () => number;
  readonly veilidclient_detach: () => number;
  readonly veilidclient_now: (a: number) => void;
  readonly veilidclient_debug: (a: number, b: number) => number;
  readonly veilidclient_version: () => number;
  readonly veilidclient_versionString: (a: number) => void;
  readonly veilidclient_defaultConfig: (a: number) => void;
  readonly veilidcrypto_validCryptoKinds: () => number;
  readonly veilidcrypto_bestCryptoKind: (a: number) => void;
  readonly veilidcrypto_cachedDh: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_computeDh: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_generateSharedSecret: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly veilidcrypto_randomBytes: (a: number, b: number, c: number, d: number) => void;
  readonly veilidcrypto_defaultSaltLength: (a: number, b: number, c: number) => void;
  readonly veilidcrypto_hashPassword: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_verifyPassword: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_deriveSharedSecret: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_randomNonce: (a: number, b: number, c: number) => void;
  readonly veilidcrypto_randomSharedSecret: (a: number, b: number, c: number) => void;
  readonly veilidcrypto_verifySignatures: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly veilidcrypto_generateSignatures: (a: number, b: number, c: number, d: number) => void;
  readonly veilidcrypto_generateKeyPair: (a: number, b: number, c: number) => void;
  readonly veilidcrypto_generateHash: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly veilidcrypto_validateKeyPair: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_validateHash: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_distance: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidcrypto_sign: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly veilidcrypto_verify: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly veilidcrypto_aeadOverhead: (a: number, b: number, c: number) => void;
  readonly veilidcrypto_decryptAead: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
  readonly veilidcrypto_encryptAead: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
  readonly veilidcrypto_cryptNoAuth: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly veilidcrypto_CRYPTO_KEY_LENGTH: () => number;
  readonly veilidcrypto_CRYPTO_KEY_LENGTH_ENCODED: () => number;
  readonly veilidcrypto_NONCE_LENGTH: () => number;
  readonly veilidcrypto_SIGNATURE_LENGTH: () => number;
  readonly veilidcrypto_SIGNATURE_LENGTH_ENCODED: () => number;
  readonly __wbg_veilidroutingcontext_free: (a: number) => void;
  readonly veilidroutingcontext_create: (a: number) => void;
  readonly veilidroutingcontext_newPrivateRoute: () => number;
  readonly veilidroutingcontext_importRemotePrivateRoute: (a: number, b: number, c: number, d: number) => void;
  readonly veilidroutingcontext_newCustomPrivateRoute: (a: number, b: number) => number;
  readonly veilidroutingcontext_releasePrivateRoute: (a: number, b: number, c: number) => void;
  readonly veilidroutingcontext_appCallReply: (a: number, b: number, c: number, d: number) => number;
  readonly veilidroutingcontext_withDefaultSafety: (a: number, b: number) => void;
  readonly veilidroutingcontext_withSafety: (a: number, b: number, c: number) => void;
  readonly veilidroutingcontext_withSequencing: (a: number, b: number, c: number) => void;
  readonly veilidroutingcontext_safety: (a: number, b: number) => void;
  readonly veilidroutingcontext_appMessage: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly veilidroutingcontext_appCall: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly veilidroutingcontext_createDhtRecord: (a: number, b: number, c: number, d: number) => number;
  readonly veilidroutingcontext_openDhtRecord: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly veilidroutingcontext_closeDhtRecord: (a: number, b: number, c: number) => number;
  readonly veilidroutingcontext_deleteDhtRecord: (a: number, b: number, c: number) => number;
  readonly veilidroutingcontext_getDhtValue: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly veilidroutingcontext_setDhtValue: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly veilidroutingcontext_watchDhtValues: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly veilidroutingcontext_cancelDhtWatch: (a: number, b: number, c: number, d: number) => number;
  readonly veilidroutingcontext_inspectDhtRecord: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_veilidtabledb_free: (a: number) => void;
  readonly veilidtabledb_new: (a: number, b: number, c: number) => number;
  readonly veilidtabledb_openTable: (a: number) => number;
  readonly veilidtabledb_deleteTable: (a: number) => number;
  readonly veilidtabledb_load: (a: number, b: number, c: number, d: number) => number;
  readonly veilidtabledb_store: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly veilidtabledb_delete: (a: number, b: number, c: number, d: number) => number;
  readonly veilidtabledb_getKeys: (a: number, b: number) => number;
  readonly veilidtabledb_createTransaction: (a: number) => number;
  readonly __wbg_veilidtabledbtransaction_free: (a: number) => void;
  readonly veilidtabledbtransaction_new: () => number;
  readonly veilidtabledbtransaction_commit: (a: number) => number;
  readonly veilidtabledbtransaction_rollback: (a: number, b: number) => void;
  readonly veilidtabledbtransaction_store: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly veilidtabledbtransaction_deleteKey: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly veilidcrypto_HASH_DIGEST_LENGTH: () => number;
  readonly veilidcrypto_HASH_DIGEST_LENGTH_ENCODED: () => number;
  readonly veilidcrypto_NONCE_LENGTH_ENCODED: () => number;
  readonly veilidcrypto_PUBLIC_KEY_LENGTH: () => number;
  readonly veilidcrypto_PUBLIC_KEY_LENGTH_ENCODED: () => number;
  readonly veilidcrypto_ROUTE_ID_LENGTH: () => number;
  readonly veilidcrypto_ROUTE_ID_LENGTH_ENCODED: () => number;
  readonly veilidcrypto_SECRET_KEY_LENGTH: () => number;
  readonly veilidcrypto_SECRET_KEY_LENGTH_ENCODED: () => number;
  readonly veilidcrypto_SHARED_SECRET_LENGTH: () => number;
  readonly veilidcrypto_SHARED_SECRET_LENGTH_ENCODED: () => number;
  readonly veilidroutingcontext_new: (a: number) => void;
  readonly __wbg_veilidcrypto_free: (a: number) => void;
  readonly main_rs: () => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly wasm_bindgen__convert__closures__invoke1_mut__hdb5b5ad0b05faa23: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke0_mut__h444e61a53337f3a3: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfc472dba2441f5ed: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he6689a8fdbc87162: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__hc8c071e01b64bda9: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h0bf2a167f13f4c03: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h01ac960159519cee: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
