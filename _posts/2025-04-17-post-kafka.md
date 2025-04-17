---
layout: post
title: Kafka In and Out
image: '/assets/images/kafka.png'
category: Kafka
---

Kafka is a distributed event streaming platform capable of handling trillions of events a day. It is used for building real-time data pipelines and streaming applications. It is horizontally scalable, fault-tolerant, and runs in production in thousands of companies.

Let's start with its main components:
- **Producer**: publishes (writes) events to a Kafka topic. 
- **Consumer**: subscribes to (reads) events from a Kafka topic.
- **Topic**: a category or feed name to which records are published. 
- **Broker**: a server that stores data and serves clients. 

Now let's see what makes Kafka horizontally scalable and fault tolerant.
- **Horizontal Scalability**: Partitions allow Kafka to scale horizontally. A topic can have multiple partitions distributed across multiple brokers. Allow multiple producers to write to different partitions in parallel, increasing throughput and allowing for more consumers to read from the topic simultaneously. Kafka uses a **round-robin approach** to distribute messages across partitions. And **messages with the same key** will be sent to the same partition. This is useful for maintaining order for messages with the same key. Because Kafka guarantees the order of messages within a partition, but not across topics.
  
- **Fault Tolerance**: Kafka allows us to create multiple replicas of each partition. The replication factor is configured at the topic level. Each partition has one leader and multiple followers. The leader handles all reads and writes, while the followers replicate the data. There are two important settings to consider:
  - **min.insync.replicas**: minimum number of replicas that must acknowledge a write for it to be considered successful. If the number of in-sync replicas falls below this threshold, the producer will receive an error `NotEnoughReplicasException`.
  - **acks**: no of acknowledgments the producer requires from the broker before considering a request complete. It can be set to 0 (no acknowledgment), 1 (leader acknowledgment), or all (all in-sync replicas acknowledgment).
- ![Replication Diagram for acks=all](/assets/images/kafka.png)

That's it for now. In next post, I'll deep dive into Producers, Consumers, Topics, Consumer Groups, Offsets, Serialization, and Deserialization.

