<template>
  <div class="column is-one-third-widescreen is-full-tabletcard">
    <div class="card bm--card-equal-height">
      <div class="column card-content ">
        <div class="columns m-b-none">
          <div class="column column is-three-fifths is-marginless">
            <v-lazy-image :src="imageURL" />
            <!-- <v-lazy-image src="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" /> -->
          </div>
          <div class="column">
            <p class="title">
              <b-icon
                pack="fas"
                icon="flag"
                size="is-small"
              />
              19 Apr
            </p>
            <p class="sub-title">
              <b-icon
                pack="fas"
                icon="flag"
                size="is-small"
              />
              12 Apr
            </p>
          </div>
        </div>
        <div class="column ">
          <div class="module-card-wrap">
            <div class="module-card">
              <div class="content">
                <p class="title is-4">
                  {{ title }}
                </p>
                <p class="subtitle is-6">
                  {{ subTitle }}
                </p>
              </div>
              <span class=" columns is-mobile p-t-none">
                <div class="column is-1 p-tb-icon">
                  <b-icon
                    pack="fas"
                    icon="map-marker-alt"
                    size="is-small"
                  />
                </div>
                <div class="column pull-left p-tb-min">
                  {{ locationName }}<br>
                  <span v-if="address1">{{ address1 }}<span v-if="address2">, {{ address2 }}</span><br></span>
                  <span v-if="city">{{ city }}, </span>{{ region }} {{ postcode }} {{ country }}
                </div>
              </span>
              <div class="columns is-mobile is-paddingless">
                <div class="column">
                  <span class=" columns is-mobile is-paddingless">
                    <div class="column is-1 p-tb-icon">
                      <b-icon
                        pack="fas"
                        icon="phone"
                        size="is-small"
                      />
                    </div>
                    <div class="column pull-left p-tb-min">
                      {{ phone }}
                    </div>
                  </span>
                </div>
                <div class="column">
                  <span class=" columns is-mobile is-paddingless">
                    <div class="column is-1 p-tb-icon">
                      <b-icon
                        pack="fas"
                        icon="envelope"
                        size="is-small"
                      />
                    </div>
                    <div class="column pull-left p-tb-min">
                      {{ email }}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    imageURL: {
      type: URL,
      required: false
    },
    locationName: {
      type: String,
      required: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
/* .p-blr-none {
  padding-bottom: 0.25em;
  padding-left: 0.25em;
  padding-right: 0.25em;
}
.p-t-none {
  padding-top: 0.25em;
}
.p-tb-min {
  padding-top: 0.15em;
  padding-bottom: 0.15em;
}
.p-tb-icon {
  padding-top: 0.45em;
  padding-bottom: 0.15em;
}
.m-b-none {
  margin-bottom: 0em;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0); */
/* } */
</style>
